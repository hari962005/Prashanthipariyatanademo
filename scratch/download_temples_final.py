import urllib.request
import os

os.makedirs('assets/temples', exist_ok=True)

download_list = {
    'kedarnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg',
    'kashi.jpg': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Varanasi_Munshi_Ghat3.jpg',
    'thanjavur.jpg': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg',
    'rameswaram.jpg': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Intricate_corridor%2C_Rameshwaram_temple%2C_India.jpg',
    'kailash.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Kailash-Barkha.jpg',
    'tapovan.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/69/Small_Mountain_at_Tapovan.jpg',
    'amarnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Lord_Amarnath.jpg',
    'belur.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Chennakeshava_Temple%2C_Belur.jpg',
    'puri.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/55/Jagannath_Temple%2C_Puri.jpg',
    'khajuraho.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Kandariya_Mahadeva_Temple.jpg',
    'meenakshi.jpg': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    'pashupatinath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Pashupatinath_Temple_Kathmandu.jpg',
    'tungnath.jpg': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Tungnath_temple.jpg'
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) PrashantiParyatanaDev/1.0 (dev@prashantiparyatana.org)'}

for fname, url in download_list.items():
    dest = os.path.join('assets/temples', fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=20) as resp:
            content = resp.read()
            with open(dest, 'wb') as f:
                f.write(content)
            print(f"Downloaded {fname}: {len(content)} bytes")
    except Exception as e:
        print(f"Error {fname}: {e}")
