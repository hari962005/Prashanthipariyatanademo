import urllib.request
import json
import re

search_terms = [
    'hindu-temple',
    'varanasi-ghats',
    'ganga-aarti',
    'kedarnath',
    'indian-temple',
    'temple-architecture',
    'shiva-statue',
    'diya-lamp',
    'himalaya-pilgrimage'
]

# We can scrape unsplash search page html to find valid image IDs
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

found_ids = []
for term in search_terms:
    url = f"https://unsplash.com/s/photos/{term}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for photo IDs: photo-1[0-9]{9}-[a-z0-9]+
            matches = re.findall(r'photo-1[0-9]{9}-[a-z0-9]+', html)
            print(f"Term '{term}': found {len(matches)} photos")
            for m in matches[:5]:
                if m not in found_ids:
                    found_ids.append(m)
    except Exception as e:
        print(f"Error for {term}: {e}")

print(f"\nTotal unique IDs found: {len(found_ids)}")
with open('scratch/found_unsplash_ids.json', 'w') as f:
    json.dump(found_ids, f, indent=2)
