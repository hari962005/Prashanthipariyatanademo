import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')] + [os.path.join('js', f) for f in os.listdir('js') if f.endswith('.js')]

print("Checking cultural link references...")
for f in html_files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        txt = fp.read()
    c_trav = len(re.findall(r'cultural-travel\.html', txt))
    c_norm = len(re.findall(r'cultural\.html', txt))
    if c_trav > 0 or c_norm > 0:
        print(f" {f}: cultural-travel.html={c_trav}, cultural.html={c_norm}")
