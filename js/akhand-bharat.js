/**
 * Prashanti Paryatana - Interactive Akhand Bharat Sacred Map
 * Dedicated to the Sacred Geography of Bharatavarsha
 * Featuring Distinct Symbols for Temples (ॐ), Treks (▲), and Cultural Heritage (🏛️)
 */

const AKHAND_BHARAT_PLACES = [
  // --- Trans-Border Sacred Tirthas & Western Marches ---
  {
    id: 'asamai-kabul',
    name: 'Asamai Hindu Temple',
    nativeScript: 'آسه‌مایی / कोहे-आसमाई (काबुल)',
    sanskrit: '॥ काबुल आशामाई महामन्दिरम् ॥',
    region: 'Kabul, Afghanistan (Koh-e Asamai Hill)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'pink',
    x: 26, y: 27,
    shortSubtitle: 'Historic Hindu temple located in Kabul atop Koh-e Asamai',
    image: 'assets/temples/kashi.jpg',
    packageId: 'packages.html',
    travelMode: 'Historical Heritage Circuit',
    significance: 'Millennia-old temple of Goddess Asamai (Mother of Hope) situated in Kabul, where the eternal Akhand Diya has burned uninterrupted through centuries of geopolitical upheaval.'
  },
  {
    id: 'katas-raj',
    name: 'Katas Raj Temple',
    nativeScript: 'کتاس راج مندر / कटासराज',
    sanskrit: '॥ कटाक्ष कुण्ड तीर्थम् (पञ्जाब) ॥',
    region: 'Potohar Plateau, Chakwal, Punjab (Pakistan)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'pink',
    x: 34, y: 31,
    shortSubtitle: 'Historic complex of Hindu temples with sacred Amrit Kund pond',
    image: 'assets/temples/belur.jpg',
    packageId: 'packages.html',
    travelMode: 'Heritage Yatra Route',
    significance: 'Sacred pond formed by the teardrop of Lord Shiva weeping for Sati. Where the Pandavas spent their exile and the famous Yaksha Prashna dialogue of Dharma with Yudhishthira occurred.'
  },
  {
    id: 'hinglaj-mata',
    name: 'Hinglaj Mata Shaktipeeth',
    nativeScript: 'हिंगलाज माता / ہنگلاج ماتا',
    sanskrit: '॥ हिंगुला महापीठम् (बलूचिस्तान) ॥',
    region: 'Hingol National Park, Baluchistan',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'pink',
    x: 22, y: 43,
    shortSubtitle: 'Ancient cave Shaktipeeth in Hingol gorge',
    image: 'assets/temples/meenakshi.jpg',
    packageId: 'packages.html',
    travelMode: 'Trans-Border Pilgrimage Route',
    significance: 'Supreme cave shrine in Baluchistan where Mother Sati’s Brahmarandhra (crown of the head) fell. Revered as Kottari, visited traditionally by Lord Rama and ancient rishis.'
  },
  {
    id: 'sharada-peeth',
    name: 'Sharada Peeth',
    nativeScript: 'शारदा पीठ / شاردہ پیٹھ',
    sanskrit: '॥ श्री शारदा पीठम् (कश्मीर) ॥',
    region: 'Neelum Valley, Kashmir',
    type: 'cultural',
    symbolText: '🏛️',
    colorType: 'maroon',
    x: 36, y: 25,
    shortSubtitle: 'Ancient temple university of goddess Saraswati & Sarvajna Peetha',
    image: 'assets/temples/belur.jpg',
    packageId: 'acharyas.html#adi-shankara',
    travelMode: 'Vedic Heritage Circuit',
    significance: 'Foremost temple university where the Sharada script evolved. Adi Shankaracharya opened the Southern Door of Sarvajna Peetha after proving the Advaita philosophy.'
  },

  // --- High Himalayas & Sacred Peaks (Treks) ---
  {
    id: 'kailash-manasarovar',
    name: 'Mount Kailash & Manasarovar',
    nativeScript: '冈仁波齐峰 / कैलासः',
    sanskrit: '॥ कैलास पर्वतम् मानससरोवरम् ॥',
    region: 'Trans-Himalayan Range, Tibet (21,778 ft)',
    type: 'trek',
    symbolText: '▲',
    colorType: 'purple',
    x: 49, y: 30,
    shortSubtitle: 'Supreme sacred abode of Lord Shiva in Tibet',
    image: 'assets/temples/kailash.jpg',
    packageId: 'flight-kailash-om-parvat',
    travelMode: 'Aerial Heli-Yatra & Alpine 4WD',
    significance: 'The metaphysical cosmic axis (Mount Meru) and perennial abode of Lord Shiva and Parvati. Origin of the four great sacred rivers: Sindhu, Brahmaputra, Ganga (Sutlej), and Karnali.'
  },
  {
    id: 'kedarnath-dham',
    name: 'Kedarnath Dham',
    nativeScript: 'केदारनाथ मन्दिर',
    sanskrit: '॥ श्री केदारनाथ ज्योतिर्लिङ्गम् ॥',
    region: 'Rudraprayag, Garhwal Himalayas (11,755 ft)',
    type: 'trek',
    symbolText: '▲',
    colorType: 'purple',
    x: 42, y: 33,
    shortSubtitle: 'Highest of the 12 Jyotirlingas in snowy Mandakini bowl',
    image: 'assets/temples/kedarnath.jpg',
    packageId: 'flight-char-dham-himalaya',
    travelMode: 'Heli-Shuttle / Sacred Foot Trek',
    significance: 'Northern cardinal Jyotirlinga sanctified by the Pandavas seeking absolution from Lord Shiva. Houses the sacred Mahasamadhi shrine of Adi Shankaracharya behind the main sanctum.'
  },
  {
    id: 'gaumukh-tapovan',
    name: 'Gaumukh & Tapovan',
    nativeScript: 'गोमुख - तपोवन',
    sanskrit: '॥ गोमुखं तपोवनञ्च (गङ्गोत्री) ॥',
    region: 'Bhagirathi Glacier, Garhwal (14,200 ft)',
    type: 'trek',
    symbolText: '▲',
    colorType: 'purple',
    x: 44, y: 31,
    shortSubtitle: 'Glacial snout of Mother Ganga below Mount Shivling',
    image: 'assets/temples/tapovan.jpg',
    packageId: 'trek-gaumukh-tapovan',
    travelMode: 'Guided Alpine Pilgrimage Trek',
    significance: 'Where King Bhagiratha did severe penance to bring Ganga from heaven. High meadow of Tapovan offering direct vistas of sacred Mount Shivling (6,543 m).'
  },
  {
    id: 'amarnath-cave',
    name: 'Amarnath Cave Shrine',
    nativeScript: 'अमरनाथ गुफा',
    sanskrit: '॥ श्री अमरनाथ हिमलिङ्गम् ॥',
    region: 'Lidder Valley, Kashmir (12,756 ft)',
    type: 'trek',
    symbolText: '▲',
    colorType: 'purple',
    x: 38, y: 27,
    shortSubtitle: 'Natural Swayambhu ice Shiva Lingam in high Kashmir',
    image: 'assets/temples/amarnath.jpg',
    packageId: 'trek-amarnath-cave',
    travelMode: 'Mountain Trail & Pony Yatra',
    significance: 'Where Lord Shiva revealed the mystery of immortality (Amar Katha) to Goddess Parvati, secluded high in the glaciated mountains of Kashmir.'
  },

  // --- Nepal Himalayan Sanctuaries ---
  {
    id: 'pashupatinath',
    name: 'Pashupatinath Temple',
    nativeScript: 'पशुपतिनाथ मन्दिर',
    sanskrit: '॥ श्री पशुपतिनाथ महादेवालयः ॥',
    region: 'Kathmandu, Nepal (Bagmati River)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'green',
    x: 56, y: 41,
    shortSubtitle: 'Revered sacred Shiva temple on the holy Bagmati River',
    image: 'assets/temples/pashupatinath.jpg',
    packageId: 'flight-nepal-muktinath',
    travelMode: 'International Flight + Deluxe Coach',
    significance: 'Head of Lord Shiva corresponding to Kedarnath’s hump. Features the sacred four-faced Shiva Lingam facing the cardinal directions, consecrated according to Vedic Agamas.'
  },
  {
    id: 'muktinath-saligrama',
    name: 'Muktinath (Saligrama Kshetra)',
    nativeScript: 'मुक्तिनाथ / ཆུ་མིག་བརྒྱ་རྩ།',
    sanskrit: '॥ मुक्तिनाथः (गण्डकी क्षेत्रम्) ॥',
    region: 'Mustang Valley, Nepal (12,172 ft)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'green',
    x: 54, y: 38,
    shortSubtitle: '108 Divya Desam and source of sacred Saligrama shilas',
    image: 'assets/temples/pashupatinath.jpg',
    packageId: 'flight-nepal-muktinath',
    travelMode: 'Mountain Flight & 4WD Circuit',
    significance: 'High Himalayan sacred shrine where natural gas flames burn over flowing ice water (Jwala Mai) and sacred Saligrama stones manifest in the Gandaki river bed.'
  },

  // --- Western & Northwestern Regions ---
  {
    id: 'dwarkadhish',
    name: 'Dwarkadhish Temple',
    nativeScript: 'દ્વારકાધીશ મંદિર',
    sanskrit: '॥ द्वारकाधीश मन्दिरम् (गुजरात) ॥',
    region: 'Dwarka, Gujarat (Gomti Sangam)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 32, y: 56,
    shortSubtitle: 'Historic Char Dham pilgrimage site of Lord Krishna',
    image: 'assets/temples/belur.jpg',
    packageId: 'train-tours.html',
    travelMode: 'Western Rail & Express Coach',
    significance: 'Western cardinal Char Dham founded by Sri Krishna as the capital of his kingdom, housing the magnificent 72-pillar Jagat Mandir and Adi Shankara’s Sharada Peetham.'
  },
  {
    id: 'somnath-jyotirlinga',
    name: 'Somnath Jyotirlinga',
    nativeScript: 'સોમનાથ જ્યોતિર્લિંગ',
    sanskrit: '॥ श्री सोमनाथ ज्योतिर्लिङ्गम् ॥',
    region: 'Prabhas Patan, Saurashtra, Gujarat',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 33, y: 61,
    shortSubtitle: 'First of the twelve sacred Jyotirlingas of Bharat',
    image: 'assets/temples/belur.jpg',
    packageId: 'train-tours.html',
    travelMode: 'Heritage Rail & AC Coach',
    significance: 'The Adya Jyotirlinga built originally by the Moon God (Soma), facing an unbroken oceanic meridian reaching straight to Antarctica.'
  },

  // --- Northern Plains & Central Heartlands ---
  {
    id: 'ayodhya-mandir',
    name: 'Ayodhya (Sri Ram Mandir)',
    nativeScript: 'अयोध्या रामजन्मभूमि',
    sanskrit: '॥ अयोध्या रामजन्मभूमि तीर्थक्षेत्रम् ॥',
    region: 'Ayodhya, Uttar Pradesh (Sarayu River)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 52, y: 44,
    shortSubtitle: 'First of the Sapta Puris and birthplace of Lord Sri Rama',
    image: 'assets/cultural/ayodhya-dance.jpg',
    packageId: 'train-divya-kashi-ayodhya',
    travelMode: 'Vande Bharat Express Rail',
    significance: 'Mokshadayini city on the sacred Sarayu river, home to the magnificent newly consecrated Nagara-style Sri Rama Janmabhoomi temple, Kanak Bhavan, and Hanuman Garhi.'
  },
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath',
    nativeScript: 'काशी विश्वनाथ ज्योतिर्लिङ्ग',
    sanskrit: '॥ काशी विश्वनाथ ज्योतिर्लिङ्गम् ॥',
    region: 'Varanasi, Uttar Pradesh (Ganga River)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 53, y: 47,
    shortSubtitle: 'The eternal City of Light resting on Shiva’s trident',
    image: 'assets/temples/kashi.jpg',
    packageId: 'train-divya-kashi-ayodhya',
    travelMode: 'Vande Bharat / Heritage Rail',
    significance: 'The eternal Avimukta Kshetra along the crescent Ganga. Center of Vedic chanting, 84 stone ghats, Manikarnika, and the golden spire of Sri Kashi Vishwanath.'
  },
  {
    id: 'khajuraho-chandela',
    name: 'Khajuraho Chandela Temples',
    nativeScript: 'खजूराहो मन्दिर',
    sanskrit: '॥ खजूराहो देवालयाः (कन्दारिया महादेव) ॥',
    region: 'Chhatarpur, Madhya Pradesh',
    type: 'cultural',
    symbolText: '🏛️',
    colorType: 'maroon',
    x: 47, y: 52,
    shortSubtitle: 'Zenith of Nagara temple architecture & National Dance Festival',
    image: 'assets/temples/khajuraho.jpg',
    packageId: 'cultural-khajuraho-dance',
    travelMode: 'Flight + Heritage Coach',
    significance: 'UNESCO World Heritage group of 10th-century stone temples, featuring Kandariya Mahadeva and the world-renowned Khajuraho Classical Dance Festival.'
  },

  // --- Eastern Marches & Bengal / Assam ---
  {
    id: 'sitakund-shaktipeeth',
    name: 'Sitakund Chandranath',
    nativeScript: 'সীতাকুণ্ড চন্দ্রনাথ',
    sanskrit: '॥ चन्द्रनाथ महापीठम् (সীতাকুণ্ড) ॥',
    region: 'Chittagong, Bangladesh (Chandranath Hill)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'cyan',
    x: 69, y: 54,
    shortSubtitle: 'Prominent hilltop Shaktipeeth pilgrimage site of Mother Sati',
    image: 'assets/temples/puri.jpg',
    packageId: 'packages.html',
    travelMode: 'Eastern Heritage Circuit',
    significance: 'Ancient Shaktipeeth atop the Chandranath hills in Chittagong where the right arm of Mother Sati fell, revered for its natural burning spring and holy snana kunda.'
  },
  {
    id: 'kamakhya-peeth',
    name: 'Kamakhya Mahapeeth',
    nativeScript: 'কামাখ্যা মহাপীঠ',
    sanskrit: '॥ श्री कामाख्या महापीठम् ॥',
    region: 'Nilachal Hill, Guwahati, Assam',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'cyan',
    x: 72, y: 44,
    shortSubtitle: 'Supreme Yoni Shaktipeeth atop Nilachal hills by Brahmaputra',
    image: 'assets/temples/puri.jpg',
    packageId: 'flight-packages.html',
    travelMode: 'Flight + Private Transfer',
    significance: 'Prime Tantric Shaktipeeth where the divine creative energy resides, celebrated for the annual Ambubachi Mela along the mighty Brahmaputra river.'
  },
  {
    id: 'jagannath-puri',
    name: 'Jagannath Puri Dham',
    nativeScript: 'ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର / जगन्नाथ पुरी',
    sanskrit: '॥ श्री जगन्नाथ पुरी धाम ॥',
    region: 'Puri Coast, Odisha (Bay of Bengal)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 61, y: 61,
    shortSubtitle: 'Eastern cardinal Char Dham & ancient Ratha Yatra heritage',
    image: 'assets/temples/puri.jpg',
    packageId: 'train-jagannath-puri-konark',
    travelMode: 'Express Rail & Private Coach',
    significance: 'One of the four cardinal Char Dhams established by Adi Shankara (Govardhana Peetham), home to the wooden deities of Jagannath, Balabhadra, and Subhadra.'
  },

  // --- Southern Deccan, Western Ghats & Cauvery Basin ---
  {
    id: 'sringeri-sharada',
    name: 'Sringeri Sharada Peetham',
    nativeScript: 'ಶೃಂಗೇರಿ ಶಾರದ ಪೀಠಂ',
    sanskrit: '॥ दक्षिणाम्नाय शृङ्गेरी शारदा पीठम् ॥',
    region: 'Chikkamagaluru, Karnataka (Tunga River)',
    type: 'cultural',
    symbolText: '🏛️',
    colorType: 'maroon',
    x: 39, y: 73,
    shortSubtitle: 'First southern matha established by Adi Shankaracharya',
    image: 'assets/temples/belur.jpg',
    packageId: 'bus-sringeri-udupi',
    travelMode: 'AC Executive Coach',
    significance: 'The Dakshinamnaya Amnaya Peetham founded by Adi Shankara in the Western Ghats beside the Tunga river, famous for the Vidyashankara architectural zodiac temple.'
  },
  {
    id: 'udupi-krishna',
    name: 'Udupi Sri Krishna Matha',
    nativeScript: 'ಉಡುಪಿ ಶ್ರೀ ಕೃಷ್ಣ ಮಠ',
    sanskrit: '॥ उडुपी श्रीकृष्ण मठम् ॥',
    region: 'Udupi, Coastal Karnataka',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 38, y: 76,
    shortSubtitle: 'Consecrated by Sri Madhvacharya with 700-year Paryaya tradition',
    image: 'assets/temples/belur.jpg',
    packageId: 'bus-sringeri-udupi',
    travelMode: 'Deluxe AC Coach Circuit',
    significance: 'Consecrated by Sri Madhvacharya in the 13th century with the Krishna idol carved from sacred Gopichandana, viewed through the silver Kanakana Kindi window.'
  },
  {
    id: 'thanjavur-brihadeeswarar',
    name: 'Thanjavur Brihadeeswarar',
    nativeScript: 'தஞ்சாவூர் பிரகதீஸ்வரர்',
    sanskrit: '॥ तञ्जावूरु बृहदीश्वर मन्दिरम् ॥',
    region: 'Cauvery Delta, Tamil Nadu',
    type: 'cultural',
    symbolText: '🏛️',
    colorType: 'maroon',
    x: 45, y: 81,
    shortSubtitle: 'Living Chola granite wonder and Maha Shivaratri Natyanjali',
    image: 'assets/temples/thanjavur.jpg',
    packageId: 'cultural-thanjavur-natyanjali',
    travelMode: 'AC Coach / Chauffeur Van',
    significance: '1,000-year-old UNESCO Chola granite temple crowned with an 80-tonne monolithic cupola. Sacred venue for classical Natyanjali dance dedications.'
  },
  {
    id: 'ramanathaswamy',
    name: 'Sri Arulmigu Ramanathaswamy',
    nativeScript: 'அருள்மிகு ராமநாதசுவாமி திருக்கோயில்',
    sanskrit: '॥ रामेश्वरम् ज्योतिर्लिङ्गम् ॥',
    region: 'Rameswaram Island, Tamil Nadu',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 46, y: 86,
    shortSubtitle: 'Southernmost Char Dham pilgrimage site consecrated by Lord Rama',
    image: 'assets/temples/rameswaram.jpg',
    packageId: 'train-dakshin-divya-desam',
    travelMode: 'AC Express Train + Pamban Bridge',
    significance: 'Where Lord Rama worshipped Lord Shiva before marching across Ram Setu. World-famous 1,212 granite carved pillar corridors and 22 sacred snana wells.'
  },
  {
    id: 'kataragama-sri-lanka',
    name: 'Ruhunu Maha Kataragama Dewalaya',
    nativeScript: 'கதிர்காமம் / කතරගම දේවාලය',
    sanskrit: '॥ कात्तिकेय क्षेत्रम् (कथिरगामम्) ॥',
    region: 'Southern Province, Sri Lanka (Menik Ganga)',
    type: 'temple',
    symbolText: 'ॐ',
    colorType: 'amber',
    x: 50, y: 92,
    shortSubtitle: 'Multi-faith pilgrimage sanctuary dedicated to Lord Murugan / Skanda',
    image: 'assets/temples/rameswaram.jpg',
    packageId: 'flight-packages.html',
    travelMode: 'International Flight + Private Van',
    significance: 'Ancient pilgrimage complex dedicated to God Kathirkama (Lord Murugan/Kartikeya) on the sacred Menik Ganga in southern Sri Lanka, venerated by Shaivites for thousands of years.'
  }
];

function initAkhandBharatMap() {
  const container = document.getElementById('akhandPinsLayer');
  if (!container) return;

  renderMapPins('all');
  initMapCategoryFilters();
}

function renderMapPins(activeType = 'all') {
  const container = document.getElementById('akhandPinsLayer');
  if (!container) return;

  const filteredPlaces = AKHAND_BHARAT_PLACES.filter(place => {
    return activeType === 'all' || place.type === activeType;
  });

  container.innerHTML = filteredPlaces.map((p, idx) => `
    <div class="map-tirtha-marker type-${p.type} color-${p.colorType} ${idx === 0 ? 'active' : ''}" 
         style="left: ${p.x}%; top: ${p.y}%;" 
         data-id="${p.id}" 
         onclick="selectMapPlace('${p.id}')">
      <div class="marker-pin-badge">
        <span class="marker-symbol">${p.symbolText}</span>
        <div class="marker-needle"></div>
        <div class="marker-pulse-ring"></div>
      </div>
      <div class="marker-label-block">
        <div class="marker-title">${p.name}</div>
        <div class="marker-native">${p.nativeScript}</div>
        <div class="marker-desc">${p.shortSubtitle}</div>
      </div>
    </div>
  `).join('');

  if (filteredPlaces.length > 0) {
    displayMapPlaceDetails(filteredPlaces[0]);
  }
}

function selectMapPlace(id) {
  const place = AKHAND_BHARAT_PLACES.find(p => p.id === id);
  if (!place) return;

  document.querySelectorAll('.map-tirtha-marker').forEach(marker => {
    if (marker.getAttribute('data-id') === id) {
      marker.classList.add('active');
    } else {
      marker.classList.remove('active');
    }
  });

  displayMapPlaceDetails(place);
}

function displayMapPlaceDetails(place) {
  const container = document.getElementById('mapPlaceDetails');
  if (!container) return;

  const typeLabels = {
    temple: '<span style="color:#fcd34d;">ॐ</span> Sacred Temple & Jyotirlinga',
    trek: '<span style="color:#c084fc;">▲</span> High Himalayan Trek & Peak',
    cultural: '<span style="color:#fda4af;">🏛️</span> Classical Cultural & Heritage'
  };

  const isDetailLink = place.packageId.includes('-') && !place.packageId.endsWith('.html');
  const targetHref = isDetailLink ? `package-detail.html?id=${place.packageId}` : place.packageId;

  container.innerHTML = `
    <div class="map-info-img-wrap">
      <img src="${place.image}" alt="${place.name}" class="map-info-img" />
      <div class="map-info-badge">
        ${typeLabels[place.type] || 'Sacred Tirtha'}
      </div>
    </div>
    <div class="map-info-sanskrit">${place.sanskrit}</div>
    <h3 class="map-info-title">${place.name}</h3>
    <div class="map-info-native">${place.nativeScript}</div>
    <p class="map-info-desc">${place.significance}</p>

    <div class="map-info-meta-list">
      <div class="map-meta-row">
        <i class="fa-solid fa-location-dot"></i>
        <span><strong>Geographic Region:</strong> ${place.region}</span>
      </div>
      <div class="map-meta-row">
        <i class="fa-solid fa-route"></i>
        <span><strong>Pilgrimage Mode:</strong> ${place.travelMode}</span>
      </div>
    </div>

    <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.2rem;">
      <a href="${targetHref}" class="btn-explore" style="font-size: 0.8rem; padding: 0.65rem 1.25rem;">
        <span>Explore Yatra Details</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <button type="button" class="btn-quick-enquire" onclick="openEnquiryModal('${place.packageId}', '${place.name}', '${place.type}')" title="Direct Yatra Enquiry">
        <i class="fa-solid fa-hands-praying"></i> Plan Yatra
      </button>
    </div>
  `;
}

function initMapCategoryFilters() {
  const filterBtns = document.querySelectorAll('.akhand-filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedType = btn.getAttribute('data-type');
      renderMapPins(selectedType);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAkhandBharatMap();
});

window.selectMapPlace = selectMapPlace;
