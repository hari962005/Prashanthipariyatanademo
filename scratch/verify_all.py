import os
import re
import urllib.request

html_files = [
    'index.html',
    'bus-tours.html',
    'train-tours.html',
    'flight-packages.html',
    'trekking-expeditions.html',
    'cultural.html',
    'packages.html',
    'package-detail.html',
    'acharyas.html',
    'about.html',
    'heritage.html',
    'contact.html',
    'admin.html'
]

print("=== 1. CHECKING LOCAL FILES AND ASSETS ===")
missing_files = []
for hf in html_files:
    if not os.path.exists(hf):
        missing_files.append(hf)
        print(f"MISSING: {hf}")
    else:
        print(f"EXISTS: {hf} ({os.path.getsize(hf)} bytes)")

cultural_imgs = [
    'assets/logo.png',
    'assets/cultural/ayodhya-dance.jpg',
    'assets/cultural/carnatic-kutcheri.jpg',
    'assets/cultural/kukke-subrahmanya-stage.jpg',
    'assets/cultural/golden-temple-artists.jpg',
    'assets/cultural/music-dance-federation.jpg',
    'assets/cultural/mridangam-vidwan.jpg'
]

for img in cultural_imgs:
    if not os.path.exists(img):
        missing_files.append(img)
        print(f"MISSING ASSET: {img}")
    else:
        print(f"ASSET OK: {img} ({os.path.getsize(img)} bytes)")

print("\n=== 2. CHECKING LINKAGE INTEGRITY IN ALL HTML FILES ===")
errors = 0
for hf in html_files:
    with open(hf, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check local script tags
    scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', content)
    for s in scripts:
        if not s.startswith('http') and not os.path.exists(s):
            print(f"[{hf}] Broken script link: {s}")
            errors += 1

    # Check local stylesheet links
    css_links = re.findall(r'<link[^>]+href=["\']([^"\']+)["\']', content)
    for c in css_links:
        if not c.startswith('http') and not os.path.exists(c):
            print(f"[{hf}] Broken css link: {c}")
            errors += 1

    # Check local img tags
    img_tags = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    for im in img_tags:
        if not im.startswith('http') and not im.startswith('data:') and not os.path.exists(im):
            print(f"[{hf}] Broken image path: {im}")
            errors += 1

    # Check internal a href links
    hrefs = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', content)
    for hr in hrefs:
        if hr.startswith('http') or hr.startswith('#') or hr.startswith('tel:') or hr.startswith('mailto:') or hr == '':
            continue
        # Split hash and query
        target_file = hr.split('#')[0].split('?')[0]
        if target_file and not os.path.exists(target_file):
            print(f"[{hf}] Broken local anchor href: {hr} (file: {target_file})")
            errors += 1

if errors == 0:
    print("ALL HTML LINKS, SCRIPTS, STYLESHEETS & IMAGES ARE 100% VALID!")
else:
    print(f"Total linkage errors found: {errors}")

print("\n=== 3. TESTING LOCAL SERVER HTTP STATUS (PORT 8080) ===")
server_ok = True
for hf in html_files:
    url = f"http://127.0.0.1:8080/{hf}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            status = resp.status
            print(f"HTTP GET {url} -> {status} OK")
    except Exception as e:
        server_ok = False
        print(f"HTTP GET {url} -> FAILED: {e}")

if server_ok:
    print("\nALL PAGES SERVING CLEANLY OVER HTTP!")
