import os
from PIL import Image

temple_dir = 'assets/temples'
for f in os.listdir(temple_dir):
    if f.endswith('.jpg'):
        p = os.path.join(temple_dir, f)
        orig_size = os.path.getsize(p)
        try:
            with Image.open(p) as im:
                im = im.convert('RGB')
                w, h = im.size
                if w > 1600 or h > 1600:
                    scale = min(1600 / w, 1600 / h)
                    new_size = (int(w * scale), int(h * scale))
                    im = im.resize(new_size, Image.Resampling.LANCZOS)
                im.save(p, 'JPEG', quality=85, optimize=True)
            new_size_bytes = os.path.getsize(p)
            print(f"{f}: {orig_size//1024} KB -> {new_size_bytes//1024} KB ({im.size})")
        except Exception as e:
            print(f"Error {f}: {e}")
