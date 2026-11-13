import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
js_files = [os.path.join('js', f) for f in os.listdir('js') if f.endswith('.js')]
css_files = [os.path.join('css', f) for f in os.listdir('css') if f.endswith('.css')]

all_files = html_files + js_files + css_files

print(f"Scanning {len(all_files)} files for external or suspicious image URLs...")

for fpath in all_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    # find all http/https image URLs
    matches = re.findall(r'https?://[^\s\"\'\)\>]+\.(?:jpg|jpeg|png|webp|svg|gif)[^\s\"\'\)\>]*', content, re.IGNORECASE)
    # also unsplash without extension
    matches += re.findall(r'https?://images\.unsplash\.com/[^\s\"\'\)\>]+', content)
    
    if matches:
        print(f"\n{fpath}: {len(matches)} external image links:")
        for m in set(matches):
            print("  *", m[:120])
