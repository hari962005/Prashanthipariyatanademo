import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Package image replacements:
# 1. bus-sringeri-udupi: Belur Hoysala temple
content = re.sub(
    r"(id:\s*'bus-sringeri-udupi',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/belur.jpg'",
    content
)

# 2. bus-chola-dynasty-thanjavur: Brihadeeswarar Thanjavur
content = re.sub(
    r"(id:\s*'bus-chola-dynasty-thanjavur',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/thanjavur.jpg'",
    content
)

# 3. bus-divya-desam-pandya-nadu: Madurai Meenakshi (replacing the blonde model with notebook!)
content = re.sub(
    r"(id:\s*'bus-divya-desam-pandya-nadu',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/meenakshi.jpg'",
    content
)

# 4. train-divya-kashi-ayodhya: Kashi ghats & Aarti (replacing the minivan!)
content = re.sub(
    r"(id:\s*'train-divya-kashi-ayodhya',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kashi.jpg'",
    content
)

# 5. train-dakshin-divya-desam: Rameswaram corridor
content = re.sub(
    r"(id:\s*'train-dakshin-divya-desam',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/rameswaram.jpg'",
    content
)

# 6. train-jagannath-puri-konark: Puri Jagannath temple
content = re.sub(
    r"(id:\s*'train-jagannath-puri-konark',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/puri.jpg'",
    content
)

# 7. flight-char-dham-himalaya: Kedarnath
content = re.sub(
    r"(id:\s*'flight-char-dham-himalaya',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kedarnath.jpg'",
    content
)

# 8. flight-kailash-om-parvat: Mount Kailash
content = re.sub(
    r"(id:\s*'flight-kailash-om-parvat',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kailash.jpg'",
    content
)

# 9. flight-nepal-muktinath: Pashupatinath Nepal
content = re.sub(
    r"(id:\s*'flight-nepal-muktinath',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/pashupatinath.jpg'",
    content
)

# 10. trek-gaumukh-tapovan: Mount Shivling & Tapovan
content = re.sub(
    r"(id:\s*'trek-gaumukh-tapovan',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/tapovan.jpg'",
    content
)

# 11. trek-amarnath-cave: Lord Amarnath cave route
content = re.sub(
    r"(id:\s*'trek-amarnath-cave',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/amarnath.jpg'",
    content
)

# 12. trek-panch-kedar: Tungnath temple
content = re.sub(
    r"(id:\s*'trek-panch-kedar',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/tungnath.jpg'",
    content
)

# 13. cultural-margazhi-chennai: Carnatic kutcheri
content = re.sub(
    r"(id:\s*'cultural-margazhi-chennai',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/cultural/carnatic-kutcheri.jpg'",
    content
)

# 14. cultural-thanjavur-natyanjali: Ayodhya Ram Mandir dancers
content = re.sub(
    r"(id:\s*'cultural-thanjavur-natyanjali',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/cultural/ayodhya-dance.jpg'",
    content
)

# 15. cultural-khajuraho-dance: Khajuraho Kandariya Mahadeva temple
content = re.sub(
    r"(id:\s*'cultural-khajuraho-dance',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/khajuraho.jpg'",
    content
)

# Cultural Events:
# Event 1: Chennai Margazhi
content = re.sub(
    r"(id:\s*'evt-margazhi-season-chennai',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/cultural/carnatic-kutcheri.jpg'",
    content
)

# Event 2: Natyanjali
content = re.sub(
    r"(id:\s*'evt-natyanjali-thanjavur',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/cultural/ayodhya-dance.jpg'",
    content
)

# Event 3: Khajuraho Dance
content = re.sub(
    r"(id:\s*'evt-khajuraho-dance',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/khajuraho.jpg'",
    content
)

# Event 4: Kashi Ganga Mahotsav
content = re.sub(
    r"(id:\s*'evt-kashi-ganga-mahotsav',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kashi.jpg'",
    content
)

# Event 5: Nishagandhi
content = re.sub(
    r"(id:\s*'evt-swathi-sangeethotsavam',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/cultural/kukke-subrahmanya-stage.jpg'",
    content
)

# Sacred Destinations in data.js:
# Kashi
content = re.sub(
    r"(id:\s*'kashi',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kashi.jpg'",
    content
)
# Kedarnath
content = re.sub(
    r"(id:\s*'kedarnath',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/kedarnath.jpg'",
    content
)
# Thanjavur
content = re.sub(
    r"(id:\s*'thanjavur',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/thanjavur.jpg'",
    content
)
# Sringeri
content = re.sub(
    r"(id:\s*'sringeri',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/belur.jpg'",
    content
)
# Rameswaram
content = re.sub(
    r"(id:\s*'rameswaram',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/rameswaram.jpg'",
    content
)
# Puri
content = re.sub(
    r"(id:\s*'puri',[\s\S]*?image:\s*)'[^']+'",
    r"\1'assets/temples/puri.jpg'",
    content
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated js/data.js successfully with all authentic devotional temple images!")
