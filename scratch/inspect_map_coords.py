from PIL import Image

im = Image.open('assets/akhand-bharat-map.jpg')
w, h = im.size
print(f"Map size: {w}x{h}")

# In the Akhand Bharat map (saffron landmass):
# Westernmost saffron: Afghanistan (~20% from left, ~25% from top)
# Easternmost saffron: Myanmar (~82% from left, ~55% from top)
# Northernmost saffron: Pamir/Kashmir/Tibet (~35% to 55% from left, ~20% from top)
# Southernmost saffron: Sri Lanka (~50% from left, ~90% from top)
# Gujarat (Dwarka): ~33% from left, ~55% from top
# Nepal: ~55% to 62% from left, ~40% from top
# Bangladesh: ~65% to 70% from left, ~50% from top
# Tamil Nadu / Rameswaram: ~46% from left, ~82% from top
