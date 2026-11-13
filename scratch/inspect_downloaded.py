import os
from PIL import Image

for f in sorted(os.listdir('scratch/imgs')):
    if f.endswith('.jpg'):
        p = os.path.join('scratch/imgs', f)
        im = Image.open(p)
        print(f"{f}: size={im.size}")
