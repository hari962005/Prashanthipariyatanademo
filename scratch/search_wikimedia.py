import urllib.request
import json
import urllib.parse

keywords = [
    'Kedarnath temple',
    'Varanasi ghats',
    'Brihadisvara Temple',
    'Rameshwaram temple corridor',
    'Mount Kailash Tibet',
    'Tapovan Gangotri',
    'Amarnath cave'
]

headers = {'User-Agent': 'PrashantiParyatanaHeritageBot/1.0 (contact@prashantiparyatana.org)'}

found = {}
for kw in keywords:
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(kw)}&srnamespace=6&format=json"
    try:
        req = urllib.request.Request(search_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data['query']['search']
            if results:
                best_title = results[0]['title']
                print(f"Match for '{kw}': {best_title}")
                # Get URL
                info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(best_title)}&prop=imageinfo&iiprop=url&format=json"
                req2 = urllib.request.Request(info_url, headers=headers)
                with urllib.request.urlopen(req2, timeout=10) as resp2:
                    data2 = json.loads(resp2.read().decode('utf-8'))
                    pages = data2['query']['pages']
                    first_page = list(pages.values())[0]
                    if 'imageinfo' in first_page:
                        img_url = first_page['imageinfo'][0]['url']
                        found[kw] = (best_title, img_url)
                        print(f"  URL: {img_url}")
    except Exception as e:
        print(f"Error {kw}: {e}")

print("\n--- Summary ---")
for k, v in found.items():
    print(k, "->", v[1])
