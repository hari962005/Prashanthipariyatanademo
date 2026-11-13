import urllib.request
import json

# Let's search Unsplash source directly for known sacred Indian temple photos
test_queries = [
    '.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80', # Kedarnath / Snow trek
    '.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', # Temple Gopuram
    '.unsplash.com/photo-1590766940554-634a7c4170f6?auto=format&fit=crop&w=1200&q=80', # Temple Corridors
    '.unsplash.com/photo-1600100397608-f010f4438317?auto=format&fit=crop&w=1200&q=80', # Belur Hoysala
    '.unsplash.com/photo-1609137144820-21a7c73dbca6?auto=format&fit=crop&w=1200&q=80', # Sacred Ganga Aarti
]

for q in test_queries:
    try:
        req = urllib.request.Request(q, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as r:
            print(f"OK ({r.status}): {q[:65]}")
    except Exception as e:
        print(f"Fail: {q[:65]} -> {e}")
