import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
js_files = [os.path.join('js', f) for f in os.listdir('js') if f.endswith('.js')]
css_files = [os.path.join('css', f) for f in os.listdir('css') if f.endswith('.css')]

all_files = html_files + js_files + css_files

print(f"Checking {len(all_files)} files...")
unsplash_hits = {}
for path in all_files:
    if os.path.isfile(path):
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
        for idx, line in enumerate(lines, 1):
            if 'unsplash.com' in line:
                unsplash_hits.setdefault(path, []).append((idx, line.strip()))

if unsplash_hits:
    print(f"FOUND {sum(len(v) for v in unsplash_hits.values())} unsplash references:")
    for path, occurrences in unsplash_hits.items():
        print(f"\nFile: {path} ({len(occurrences)} occurrences)")
        for line_num, txt in occurrences[:5]:
            print(f"  L{line_num}: {txt[:120]}")
else:
    print("Zero unsplash references found across all HTML, JS, and CSS files!")
