# Prashanti Paryatana (प्रशान्ति पर्यटन)

> **Spiritual, Heritage, Pilgrimage and Cultural Travel Organization**  
> *Dedicated to Sanatana Dharma and the Preservation of Indian Cultural Heritage*

---

## 🚩 Overview

**Prashanti Paryatana** is a specialized spiritual and cultural pilgrimage web platform designed to prioritize simplicity, clarity, and unhurried spiritual devotion. It is built strictly using clean, modern **HTML5, CSS3, and Vanilla JavaScript**, requiring **zero build steps or dependencies**, making it 100% ready for instant deployment to **GitHub Pages**.

---

## 🌟 Key Features & Architectural Highlights

### 1. Central 5-Category Navigation
Visitors discover spiritual journeys based on their preferred mode of travel or cultural interest:
1. **Bus Tours (`bus-tours.html`)**: Deluxe AC executive coach pilgrimages traversing regional temple clusters (Hoysala, Chola, Jyotirlingas, Western Ghats).
2. **Train Tours (`train-tours.html`)**: Sacred rail circuits aboard Vande Bharat and reserved express trains (Divya Kashi, Ayodhya, Jagannath Puri, Dakshin Divya Desam).
3. **Flight Packages (`flight-packages.html`)**: Char Dham aerial pilgrimages, VIP helicopter shuttles, Om Parvat & Adi Kailash aerial circuits, and Nepal Muktinath.
4. **Trekking Expeditions (`trekking-expeditions.html`)**: Guided high-altitude alpine trails to Gaumukh-Tapovan, Tungnath-Chandrashila (highest Shiva temple), and Kinnaur Kailash with certified mountaineering support.
5. **Cultural Travel (`cultural.html`)**: Dedicated portal for attending classical concerts (Carnatic, Hindustani, Bharatanatyam, Natyanjali) and a Classical Artist Temple Program Registration engine.

### 2. Secondary Navigation & Knowledge Hub
- **Home (`index.html`)**: 10-section structured journey adhering strictly to client requirements.
- **About Us (`about.html`)**: Our sacred vows, dedication to Sanatana Dharma, and why we reject commercialized tourism.
- **Our Heritage (`heritage.html`)**: Architectural taxonomy (Dravida, Nagara, Vesara, Hoysala, Kalinga) and the Vedic science of *Tirtha Yatra*.
- **The Three Great Acharyas (`acharyas.html`)**: Comprehensive philosophical introductions, biographies, sacred routes, and historically documented records vs. traditional accounts for:
  - *Adi Shankaracharya* – Advaita Vedanta (Non-Dualism) & the 4 Amnaya Peethams
  - *Sri Ramanujacharya* – Vishishtadvaita (Qualified Non-Dualism), social equality, and Srirangam temple reforms (*Koil Olugu*)
  - *Sri Madhvacharya* – Dvaita Vedanta / Tattvavada (Dualism) & the 700-year Udupi *Ashta Mathas* Paryaya system
- **Contact & Helpdesk (`contact.html`)**: Direct helpdesk, elder care requests, and FAQs on dress codes and sattvic food.

### 3. Detailed Package Pages (`package-detail.html?id=...`)
Dynamic detail pages for every package featuring:
- Historical and spiritual background (*Sthala Purana*)
- Interactive day-by-day itinerary accordion
- Specific temple visits & sanctums
- Educational & philosophical discourses
- Transport, accommodation, and sattvic meal specifics
- What's included and excluded
- Safety requirements and pilgrim etiquette
- Sticky enquiry card with pre-filled enquiry modal launcher

### 4. Travel Enquiry System
- Accessible from every package card, detail page, and the homepage.
- Captures: Full name, Email, Mobile number, Starting location, Preferred package, Travel category, Departure date, Number of travellers, Additional requirements.
- Client-side validation with real-time feedback.
- Generates a unique reference ID (e.g., `PP-2026-YTR-8491`).
- Saves directly to the local database (`localStorage`) so enquiries immediately show up in the Admin Dashboard.
- Confirmation screen with reference copy and one-click WhatsApp chat pre-fill.

### 5. Protected Admin Dashboard (`admin.html`)
- **Authentication**: Secure PIN login screen.
  - **Username**: `admin`
  - **PIN / Password**: `sanskrit108`
- **Packages Manager**: Full CRUD (Add, Edit, Delete) with interactive Day-Wise Itinerary Builder, photograph URLs, descriptions, and inclusions.
- **Enquiry Manager**: View all customer enquiries, filter by status, update statuses (*New*, *In Review*, *Confirmed*, *Archived*), and append counselor notes.
- **Cultural & Artist Portal**: Manage cultural performance events and verify classical artist registrations.

---

## 🎨 Sacred Brand Aesthetics

The design uses an authentic traditional color palette:
- **Deep Saffron** (`#D35400` / `#B33D00`)
- **Antique Gold** (`#C5A059` / `#D4AF37`)
- **Temple Maroon** (`#6B1D2F` / `#4A0F1D`)
- **Sandalwood Cream** (`#FAF4EB` / `#FFFDF9`)
- **Forest Green** (`#1B4332` / `#2D6A4F`)

**Typography**:
- Headings: `Cinzel` (Google Fonts)
- Serifs: `Cormorant Garamond` (Google Fonts)
- Clean UI Body: `Plus Jakarta Sans` (Google Fonts)

---

## 🚀 How to Deploy on GitHub Pages (In 3 Steps)

Because this project is written in pure HTML, CSS, and JavaScript with relative paths, deploying to GitHub Pages takes under two minutes:

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Prashanti Paryatana web portal"
```

### Step 2: Push to Your GitHub Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** ➔ **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root directory `/ (root)`.
4. Click **Save**.
5. Your website will be live in 60 seconds at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!

---

## 📂 File Structure

```
d:\BBH\TASN\
├── index.html                   # Homepage (10 mandatory sections)
├── bus-tours.html               # Category 1: Bus Tours listing
├── train-tours.html             # Category 2: Train Tours listing
├── flight-packages.html         # Category 3: Flight Packages listing
├── trekking-expeditions.html    # Category 4: Trekking Expeditions listing
├── cultural.html                # Category 5: Cultural Travel Portal
├── packages.html                # Complete package directory & search
├── package-detail.html          # Dynamic package detail page
├── acharyas.html                # Three Great Acharyas philosophical guide
├── about.html                   # Mission & sacred vows
├── heritage.html                # Temple architecture & Yatra science
├── contact.html                 # Helpdesk, FAQ & direct contact
├── admin.html                   # Protected admin management console
├── css/
│   ├── style.css                # Brand system, typography, header, footer
│   ├── components.css           # Cards, modals, itinerary accordion, tabs
│   └── admin.css                # Admin console layout, tables, editors
├── js/
│   ├── data.js                  # Database store, seed data, and localStorage CRUD
│   ├── app.js                   # Common navigation, enquiry modal, toasts
│   ├── packages.js              # Category filtering & live search
│   ├── package-detail.js        # Deep itinerary & detail view renderer
│   ├── cultural.js              # Performance events & artist registration
│   └── admin.js                 # Admin authentication, CRUD & backup
└── README.md                    # Documentation & deployment guide
```

---

## 🕉️ Dharma & Integrity
All historical references distinguish documented history from traditional hagiographies, honoring the agamas, traditional acharyas, and sacred kshetras of Bharatavarsha.
