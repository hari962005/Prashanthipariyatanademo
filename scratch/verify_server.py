import urllib.request
import os

pages = [
    'index.html',
    'about.html',
    'heritage.html',
    'acharyas.html',
    'cultural.html',
    'bus-tours.html',
    'train-tours.html',
    'flight-packages.html',
    'trekking-expeditions.html',
    'packages.html',
    'package-detail.html',
    'contact.html',
    'admin.html'
]

print("Verifying server on http://127.0.0.1:8080...")
errors = 0
for p in pages:
    url = f"http://127.0.0.1:8080/{p}"
    try:
        req = urllib.request.urlopen(url, timeout=5)
        code = req.getcode()
        size = len(req.read())
        print(f" [OK] {p:25s} -> HTTP {code} ({size:,} bytes)")
    except Exception as e:
        print(f" [FAIL] {p:25s} -> {e}")
        errors += 1

# Check key image assets
assets = [
    'assets/logo.png',
    'assets/akhand-bharat-map.jpg',
    'assets/akhand-map-reference.png',
    'assets/temples/kedarnath.jpg',
    'assets/temples/kashi.jpg',
    'assets/temples/thanjavur.jpg',
    'assets/temples/rameswaram.jpg',
    'assets/temples/kailash.jpg',
    'assets/temples/tapovan.jpg',
    'assets/temples/amarnath.jpg',
    'assets/temples/belur.jpg',
    'assets/temples/puri.jpg',
    'assets/temples/khajuraho.jpg',
    'assets/temples/meenakshi.jpg',
    'assets/temples/pashupatinath.jpg',
    'assets/temples/tungnath.jpg',
    'assets/cultural/ayodhya-dance.jpg',
    'assets/cultural/carnatic-kutcheri.jpg',
    'assets/cultural/kukke-subrahmanya-stage.jpg',
    'assets/cultural/golden-temple-artists.jpg',
    'assets/cultural/music-dance-federation.jpg',
    'assets/cultural/mridangam-vidwan.jpg'
]

print("\nVerifying assets on disk and via HTTP server...")
for a in assets:
    if not os.path.exists(a):
        print(f" [MISSING DISK] {a}")
        errors += 1
    else:
        url = f"http://127.0.0.1:8080/{a}"
        try:
            req = urllib.request.urlopen(url, timeout=5)
            if req.getcode() != 200:
                print(f" [FAIL HTTP] {a} -> HTTP {req.getcode()}")
                errors += 1
        except Exception as e:
            print(f" [FAIL HTTP] {a} -> {e}")
            errors += 1

if errors == 0:
    print(f"\nALL 13 HTML PAGES AND ALL {len(assets)} ASSETS SERVING AT HTTP 200 OK WITH ZERO ERRORS!")
else:
    print(f"\nCompleted with {errors} errors.")
