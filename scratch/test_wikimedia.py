import urllib.request
import json
import os

titles = [
    'File:Kedarnath_Temple_in_monsoon.jpg',
    'File:Varanasi_Ghats,_India.jpg',
    'File:Thanjavur_Temple_at_dusk.jpg',
    'File:Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    'File:Chennakeshava_Temple,_Belur.jpg',
    'File:Rameshwaram_temple_corridor.jpg',
    'File:Jagannath_Temple,_Puri.jpg',
    'File:Mount_Kailash_North_Face.jpg',
    'File:Shivling_from_Tapovan.jpg',
    'File:Amarnath_cave_pilgrims.jpg',
    'File:Tungnath_temple.jpg',
    'File:Kandariya_Mahadeva_Temple.jpg',
    'File:Pashupatinath_Temple_Kathmandu.jpg'
]

headers = {'User-Agent': 'PrashantiParyatanaHeritageBot/1.0 (contact@prashantiparyatana.org)'}

api_url = "https://commons.wikimedia.org/w/api.php?action=query&titles=" + "|".join([urllib.parse.quote(t) for t in titles]) + "&prop=imageinfo&iiprop=url&format=json"

try:
    req = urllib.request.Request(api_url, headers=headers)
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        pages = data['query']['pages']
        for pid, pinfo in pages.items():
            title = pinfo['title']
            if 'imageinfo' in pinfo:
                url = pinfo['imageinfo'][0]['url']
                print(f"FOUND: {title} -> {url}")
            else:
                print(f"NOT FOUND: {title}")
except Exception as e:
    print(f"API Error: {e}")
