import fitz
import os
from PIL import Image

def compress_pdf_to_range(input_pdf, output_pdf, min_kb, max_kb):
    min_bytes = min_kb * 1024
    max_bytes = max_kb * 1024

    doc = fitz.open(input_pdf)

    for dpi in range(200, 50, -10):
        images = []

        for page in doc:
            pix = page.get_pixmap(dpi=dpi)
            img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
            images.append(img)

        temp_pdf = f"{output_pdf}_temp.pdf"

        images[0].save(
            temp_pdf,
            save_all=True,
            append_images=images[1:],
            quality=60,
            optimize=True
        )

        size = os.path.getsize(temp_pdf)

        if min_bytes <= size <= max_bytes:
            os.replace(temp_pdf, output_pdf)
            return True

        os.remove(temp_pdf)

    return False
