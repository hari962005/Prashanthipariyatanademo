import urllib.request
import json
import os

os.makedirs('assets/temples', exist_ok=True)

# Curated direct Wikimedia Commons high-res URLs of authentic Hindu sacred kshetras
temple_sources = {
    'kedarnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kedarnath_Temple_in_monsoon.jpg/1280px-Kedarnath_Temple_in_monsoon.jpg',
    'kashi.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Varanasi_Ghats%2C_India.jpg/1280px-Varanasi_Ghats%2C_India.jpg',
    'brihadeeswarar.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Thanjavur_Temple_at_dusk.jpg/1280px-Thanjavur_Temple_at_dusk.jpg',
    'meenakshi.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Madurai_Meenakshi_Amman_Temple_Gopuram.jpg/1280px-Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    'belur.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Chennakeshava_Temple%2C_Belur.jpg/1280px-Chennakeshava_Temple%2C_Belur.jpg',
    'rameswaram.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rameshwaram_temple_corridor.jpg/1280px-Rameshwaram_temple_corridor.jpg',
    'puri.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jagannath_Temple%2C_Puri.jpg/1280px-Jagannath_Temple%2C_Puri.jpg',
    'kailash.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mount_Kailash_North_Face.jpg/1280px-Mount_Kailash_North_Face.jpg',
    'tapovan.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Shivling_from_Tapovan.jpg/1280px-Shivling_from_Tapovan.jpg',
    'amarnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Amarnath_cave_pilgrims.jpg/1280px-Amarnath_cave_pilgrims.jpg',
    'tungnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tungnath_temple.jpg/1280px-Tungnath_temple.jpg',
    'khajuraho.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kandariya_Mahadeva_Temple.jpg/1280px-Kandariya_Mahadeva_Temple.jpg',
    'pashupatinath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pashupatinath_Temple_Kathmandu.jpg/1280px-Pashupatinath_Temple_Kathmandu.jpg'
}

for fname, url in temple_sources.items():
    dest = os.path.join('assets/temples', fname)
    if not os.path.exists(dest):
        print(f"Fetching {fname}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) PrashantiParyatana/1.0'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                with open(dest, 'wb') as f:
                    f.write(resp.read())
            print(f"Successfully saved {fname} ({os.path.getsize(dest)} bytes)")
        except Exception as e:
            print(f"Failed {fname}: {e}")
    else:
        print(f"Already exists: {fname} ({os.path.getsize(dest)} bytes)")
