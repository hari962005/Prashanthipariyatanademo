import os
import re

files_to_update = [
    'bus-tours.html',
    'train-tours.html',
    'flight-packages.html',
    'trekking-expeditions.html',
    'packages.html',
    'package-detail.html',
    'acharyas.html',
    'about.html',
    'heritage.html',
    'contact.html'
]

preloader_html = """  <!-- ================= WEBSITE LOADING PRELOADER (FROM LOGO) ================= -->
  <div id="sitePreloader" class="site-preloader">
    <div class="preloader-content">
      <div class="preloader-logo-wrap">
        <div class="preloader-mandala-ring"></div>
        <div class="preloader-mandala-ring-outer"></div>
        <img src="assets/logo.png" alt="Prashanti Paryatana" class="preloader-logo" />
      </div>
      <div class="preloader-sanskrit font-sanskrit-style">॥ सनातन संस्कृति यात्रा ॥</div>
      <div class="preloader-title">PRASANTHI PARIYATANA</div>
      <div class="preloader-tagline">Sanatanam Nityam Nirantaram</div>
      <div class="preloader-progress-bar">
        <div class="preloader-progress-fill"></div>
      </div>
    </div>
  </div>
"""

new_header_brand = """      <a href="index.html" class="brand-identity">
        <img src="assets/logo.png" alt="Prashanti Paryatana Logo" class="brand-logo-img" />
        <div class="brand-text-wrap">
          <span class="brand-name font-sanskrit-style">PRASANTHI <span>PARIYATANA</span></span>
          <span class="brand-tagline">Sanatanam Nityam Nirantaram • Cultural Heritage</span>
        </div>
      </a>"""

new_footer_brand = """          <div class="brand-identity" style="margin-bottom: 1rem;">
            <img src="assets/logo.png" alt="Prashanti Paryatana Logo" class="brand-logo-img" style="width: 44px; height: 44px;" />
            <div class="brand-text-wrap">
              <span class="brand-name font-sanskrit-style" style="font-size: 1.15rem; color:#fff;">PRASANTHI <span>PARIYATANA</span></span>
              <span class="brand-tagline">Sanatanam Nityam Nirantaram</span>
            </div>
          </div>"""

for fname in files_to_update:
    if not os.path.exists(fname):
        print(f"File not found: {fname}")
        continue

    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add preloader right after <body ...> if not already present
    if 'id="sitePreloader"' not in content:
        content = re.sub(r'(<body[^>]*>\s*)', r'\1' + preloader_html + '\n', content, count=1)

    # 2. Update Header brand
    header_pattern = re.compile(
        r'<a href="index\.html" class="brand-identity">\s*<div class="brand-emblem">\s*<i class="fa-solid fa-om"></i>\s*</div>\s*<div class="brand-text-wrap">\s*<span class="brand-name">Prashanti <span>Paryatana</span></span>\s*<span class="brand-tagline">[^<]*</span>\s*</div>\s*</a>',
        re.DOTALL
    )
    content = header_pattern.sub(new_header_brand, content)

    # 3. Update Footer brand
    footer_pattern = re.compile(
        r'<div class="brand-identity" style="margin-bottom: 1rem;">\s*<div class="brand-emblem"[^>]*>\s*<i class="fa-solid fa-om"></i>\s*</div>\s*<span class="brand-name"[^>]*>Prashanti <span>Paryatana</span></span>\s*</div>',
        re.DOTALL
    )
    content = footer_pattern.sub(new_footer_brand, content)

    # 4. Update top-bar sanskrit styling
    content = content.replace(
        '<span>Dedicated to Sanatana Dharma & Cultural Preservation</span>',
        '<span class="font-sanskrit-style">॥ सनातन संस्कृति यात्रा • Dedicated to Sanatana Dharma ॥</span>'
    )
    content = content.replace(
        '<span>Dedicated to Sanatana Dharma & Pilgrimage Heritage</span>',
        '<span class="font-sanskrit-style">॥ सनातन संस्कृति यात्रा • Dedicated to Sanatana Dharma ॥</span>'
    )

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully updated: {fname}")

# Also update admin.html
if os.path.exists('admin.html'):
    with open('admin.html', 'r', encoding='utf-8') as f:
        admin_content = f.read()

    admin_content = re.sub(
        r'<div class="admin-auth-emblem">\s*<i class="fa-solid fa-om"></i>\s*</div>',
        r'<img src="assets/logo.png" alt="Prashanti Paryatana" style="width: 76px; height: 76px; border-radius: 50%; box-shadow: 0 4px 16px rgba(0,0,0,0.3); margin-bottom: 1rem;" />',
        admin_content
    )
    admin_content = re.sub(
        r'<div class="admin-brand">\s*<i class="fa-solid fa-om"></i>\s*<span>Prashanti Paryatana • Admin Console</span>\s*</div>',
        r'<div class="admin-brand"><img src="assets/logo.png" alt="Logo" style="width: 32px; height: 32px; border-radius: 50%; margin-right: 0.5rem;" /><span class="font-sanskrit-style" style="font-size: 1.1rem; color: #fff;">PRASANTHI PARIYATANA • Admin Console</span></div>',
        admin_content
    )
    with open('admin.html', 'w', encoding='utf-8') as f:
        f.write(admin_content)
    print("Successfully updated: admin.html")
