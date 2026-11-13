import urllib.request
import re
import os
from PIL import Image

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

imgs = re.findall(r"image:\s*['\"]([^'\"]+)['\"]", text)
os.makedirs('scratch/imgs', exist_ok=True)

unique_urls = sorted(set(imgs))
for i, u in enumerate(unique_urls):
    fname = f"scratch/imgs/img_{i+1}.jpg"
    if not os.path.exists(fname):
        try:
            req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                with open(fname, 'wb') as out:
                    out.write(resp.read())
            print(f"Downloaded {i+1}: {fname}")
        except Exception as e:
            print(f"Error {i+1}: {e}")
    else:
        print(f"Already have {i+1}")
