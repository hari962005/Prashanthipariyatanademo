import re
import os

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

imgs = re.findall(r"image:\s*['\"]([^'\"]+)['\"]", text)
print(f"Total images in data.js: {len(imgs)}")
for i, u in enumerate(sorted(set(imgs))):
    print(f"{i+1}: {u}")

print("\n--- In index.html ---")
with open('index.html', 'r', encoding='utf-8') as f:
    idx_text = f.read()
idx_imgs = re.findall(r"src=['\"]([^'\"]+)['\"]", idx_text) + re.findall(r"url\(['\"]?([^'\")]+)['\"]?\)", idx_text)
for im in sorted(set(idx_imgs)):
    print("index:", im)
