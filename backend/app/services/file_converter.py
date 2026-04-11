from PIL import Image
import io

def image_to_pdf(image_bytes, output_path):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img.save(output_path, "PDF")