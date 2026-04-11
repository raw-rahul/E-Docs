from PIL import Image
import io
import os

def process_image(
    input_bytes,
    output_path,
    width,
    height,
    min_kb,
    max_kb,
    output_format="JPEG"
):
    """
    Resize and compress an image to match constraints.

    Args:
        input_bytes: raw bytes of input image
        output_path: where to save processed image
        width, height: required dimensions (pixels)
        min_kb, max_kb: size range
        output_format: final format (JPEG, PNG, etc.)
    """

    # Open input image
    img = Image.open(io.BytesIO(input_bytes))
    img = img.convert("RGB")  # ensures JPEG compatible
    img = img.resize((width, height))

    # Attempt to adjust quality to fit max_kb
    for quality in range(95, 10, -5):
        # Save to in-memory buffer first
        buffer = io.BytesIO()
        img.save(buffer, format=output_format.upper(), quality=quality, optimize=True)
        size_kb = buffer.tell() / 1024

        if min_kb <= size_kb <= max_kb:
            # Write to disk
            with open(output_path, "wb") as f:
                f.write(buffer.getvalue())
            return True

    # If still smaller than min_kb, pad minimally with white border
    buffer = io.BytesIO()
    padding_added = False
    for attempt in range(10):
        img_padded = Image.new("RGB", (width + attempt*5, height + attempt*5), (255, 255, 255))
        img_padded.paste(img, (0, 0))
        img_padded.save(buffer, format=output_format.upper(), quality=95, optimize=True)
        size_kb = buffer.tell() / 1024
        if size_kb >= min_kb:
            with open(output_path, "wb") as f:
                f.write(buffer.getvalue())
            padding_added = True
            break

    # Fallback: save final attempt even if < min_kb
    if not padding_added:
        with open(output_path, "wb") as f:
            f.write(buffer.getvalue())

    return True


# from PIL import Image
# import io
# import os
# import numpy as np
# from rembg import remove


# # ✅ Check background white
# def is_background_white(image):
#     img = np.array(image)

#     corners = [
#         img[0:30, 0:30],
#         img[0:30, -30:],
#         img[-30:, 0:30],
#         img[-30:, -30:]
#     ]

#     for corner in corners:
#         if np.mean(corner) < 240:  # not white
#             return False
#     return True


# def process_image(
#     input_bytes,
#     output_path,
#     width,
#     height,
#     min_kb,
#     max_kb,
#     output_format="JPEG"
# ):
#     #  STEP 1: Open image
#     img = Image.open(io.BytesIO(input_bytes)).convert("RGBA")

#     #  STEP 2: Background handling (NEW FEATURE)
#     if not is_background_white(img):
#         print("Removing background...")

#         img = remove(img)

#         # Add white background
#         bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
#         bg.paste(img, (0, 0), img)
#         img = bg.convert("RGB")
#     else:
#         print("Already white background")
#         img = img.convert("RGB")

#     #  STEP 3: Resize (your original logic)
#     img = img.resize((width, height))

#     #  STEP 4: Compression (UNCHANGED)
#     for quality in range(95, 10, -5):
#         buffer = io.BytesIO()
#         img.save(buffer, format=output_format.upper(), quality=quality, optimize=True)
#         size_kb = buffer.tell() / 1024

#         if min_kb <= size_kb <= max_kb:
#             with open(output_path, "wb") as f:
#                 f.write(buffer.getvalue())
#             return True

#     #  STEP 5: Padding (UNCHANGED)
#     buffer = io.BytesIO()
#     padding_added = False

#     for attempt in range(10):
#         img_padded = Image.new("RGB", (width + attempt*5, height + attempt*5), (255, 255, 255))
#         img_padded.paste(img, (0, 0))

#         buffer = io.BytesIO()
#         img_padded.save(buffer, format=output_format.upper(), quality=95, optimize=True)
#         size_kb = buffer.tell() / 1024

#         if size_kb >= min_kb:
#             with open(output_path, "wb") as f:
#                 f.write(buffer.getvalue())
#             padding_added = True
#             break

#     if not padding_added:
#         with open(output_path, "wb") as f:
#             f.write(buffer.getvalue())

#     return True