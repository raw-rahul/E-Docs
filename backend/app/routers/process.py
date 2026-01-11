from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
import tempfile, os
from typing import List

from app.db import get_db
from app.services.constraints import get_exam_by_name, get_constraints
from app.services.image_processor import process_image
from app.services.pdf_processor import compress_pdf_to_range
from app.utils.file_utils import zip_files

router = APIRouter()

@router.get("/exam/{exam_name}")
def search_exam(exam_name: str, db: Session = Depends(get_db)):
    exam = get_exam_by_name(db, exam_name)
    if not exam:
        raise HTTPException(404, "Exam not found")

    constraints = get_constraints(db, exam.id)
    result = [
        {
            "document_type": c.document_type,
            "allowed_formats": c.allowed_formats,
            "min_size_kb": c.min_size_kb,
            "max_size_kb": c.max_size_kb,
            "width_px": c.width_px,
            "height_px": c.height_px
        }
        for c in constraints
    ]
    return {
        "exam": exam.exam_name,
        "exam_code": exam.exam_code,
        "documents": result
    }


@router.get("/exams")
def get_all_exams(db: Session = Depends(get_db)):
    query = """
        SELECT e.id as exam_id,
               e.exam_code,
               e.exam_name,
               dc.document_type,
               dc.allowed_formats,
               dc.min_size_kb,
               dc.max_size_kb,
               dc.width_px,
               dc.height_px
        FROM exams e
        LEFT JOIN document_constraints dc
        ON e.id = dc.exam_id
        ORDER BY e.id, dc.id
    """
    exams = db.execute(query).fetchall()

    result = {}
    for row in exams:
        exam_id = row.exam_id
        if exam_id not in result:
            result[exam_id] = {
                "exam_id": exam_id,
                "exam_code": row.exam_code,
                "exam_name": row.exam_name,
                "documents": []
            }
        if row.document_type:
            result[exam_id]["documents"].append({
                "document_type": row.document_type,
                "allowed_formats": row.allowed_formats,
                "min_size_kb": row.min_size_kb,
                "max_size_kb": row.max_size_kb,
                "width_px": row.width_px,
                "height_px": row.height_px
            })

    return list(result.values())


@router.post("/process/{exam_name}")
async def process_documents(
    exam_name: str,
    PHOTO: UploadFile = File(None),
    SIGNATURE: UploadFile = File(None),
    MARKSHEET: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    exam = get_exam_by_name(db, exam_name)
    if not exam:
        raise HTTPException(404, "Exam not found")

    constraints = get_constraints(db, exam.id)
    constraint_map = {c.document_type.upper(): c for c in constraints}

    temp_dir = tempfile.mkdtemp()
    output_files = []

    # Map uploaded files
    uploads = {"PHOTO": PHOTO, "SIGNATURE": SIGNATURE, "MARKSHEET": MARKSHEET}

    for doc_type, upload in uploads.items():
        if upload is None:
            continue

        constraint = constraint_map.get(doc_type)
        if not constraint:
            continue

        output_path = os.path.join(temp_dir, f"{doc_type}_{upload.filename}")

        content = await upload.read()

        if "pdf" in constraint.allowed_formats.lower():
            input_pdf = output_path + "_in.pdf"
            with open(input_pdf, "wb") as f:
                f.write(content)

            compress_pdf_to_range(
                input_pdf,
                output_path,
                constraint.min_size_kb,
                constraint.max_size_kb
            )

        else:
            process_image(
                content,
                output_path,
                constraint.width_px,
                constraint.height_px,
                constraint.min_size_kb,
                constraint.max_size_kb
            )

        output_files.append(output_path)

    if not output_files:
        raise HTTPException(400, "No valid files uploaded or constraints missing")

    zip_path = os.path.join(temp_dir, "processed_docs.zip")
    zip_files(output_files, zip_path)

    return FileResponse(zip_path, filename="processed_docs.zip")
