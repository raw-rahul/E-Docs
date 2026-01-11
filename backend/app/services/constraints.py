from sqlalchemy import text

def get_exam_by_name(db, exam_name: str):
    query = text("""
        SELECT * FROM exams
        WHERE LOWER(exam_name) LIKE :name
    """)
    return db.execute(query, {"name": f"%{exam_name.lower()}%"}).fetchone()

def get_constraints(db, exam_id: int):
    query = text("""
        SELECT document_type, allowed_formats,
               min_size_kb, max_size_kb,
               width_px, height_px
        FROM document_constraints
        WHERE exam_id = :exam_id
    """)
    return db.execute(query, {"exam_id": exam_id}).fetchall()
