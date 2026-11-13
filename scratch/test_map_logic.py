import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('js/akhand-bharat.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract places
places_match = re.findall(r"id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*nativeScript:\s*'([^']+)',\s*sanskrit:\s*'([^']+)',\s*region:\s*'([^']+)',\s*type:\s*'([^']+)',\s*symbolText:\s*'([^']+)',\s*colorType:\s*'([^']+)',\s*x:\s*([0-9.]+),\s*y:\s*([0-9.]+),.*?image:\s*'([^']+)'", content, re.DOTALL)

print(f"Parsed {len(places_match)} Akhand Bharat places:")
type_counts = {}
missing_imgs = 0
for p in places_match:
    pid, name, native, sanskrit, region, ptype, sym, col, x, y, img = p
    type_counts[ptype] = type_counts.get(ptype, 0) + 1
    if not os.path.exists(img):
        print(f" [MISSING IMAGE] {pid}: {img}")
        missing_imgs += 1
    else:
        print(f" - [{sym}] {name:30s} ({ptype:8s}, col={col:6s}) at ({x}%, {y}%) -> {img}")

print(f"\nBreakdown by Category: {type_counts}")
if missing_imgs == 0:
    print("ALL PLACE IMAGES VERIFIED ON DISK!")
