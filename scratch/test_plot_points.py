from PIL import Image, ImageDraw, ImageFont

im = Image.open('assets/akhand-bharat-map.jpg').convert('RGBA')
draw = ImageDraw.Draw(im)
w, h = im.size

test_points = {
    'Kabul (Asamai)': (26, 27),
    'Katas Raj': (34, 31),
    'Sharada Peeth': (36, 25),
    'Hinglaj Mata': (22, 43),
    'Mount Kailash': (49, 30),
    'Kedarnath': (42, 33),
    'Pashupatinath': (56, 41),
    'Dwarkadhish': (32, 56),
    'Kashi': (52, 47),
    'Khajuraho': (47, 52),
    'Sitakund': (69, 54),
    'Kamakhya': (72, 44),
    'Puri': (61, 61),
    'Sringeri': (40, 74),
    'Ramanathaswamy': (47, 86),
    'Kataragama (Sri Lanka)': (51, 92)
}

for name, (px, py) in test_points.items():
    x = int(px * w / 100)
    y = int(py * h / 100)
    draw.ellipse([x-4, y-4, x+4, y+4], fill=(255, 0, 0, 255), outline=(255, 255, 255, 255))
    draw.text((x+6, y-5), name, fill=(255, 255, 255, 255))

im.save('scratch/test_map_points.png')
print("Saved test plot to scratch/test_map_points.png")
