import zipfile
import os

def zip_files(file_paths, zip_path):
    with zipfile.ZipFile(zip_path, 'w') as zipf:
        for file in file_paths:
            zipf.write(file, os.path.basename(file))
