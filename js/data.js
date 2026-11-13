/**
 * Prashanti Paryatana - Sacred Heritage & Pilgrimage Travel Database
 * Dedicated to Sanatana Dharma & Authentic Cultural Exploration
 */

const STORAGE_KEYS = {
  PACKAGES: 'pp_packages_v2',
  ENQUIRIES: 'pp_enquiries_v2',
  ARTISTS: 'pp_artists_v2',
  EVENTS: 'pp_events_v2',
  DESTINATIONS: 'pp_destinations_v2',
  ADMIN_SESSION: 'pp_admin_session_v2'
};

// Initial Seed Data for Packages
const INITIAL_PACKAGES = [
  // --- 1. BUS TOURS ---
  {
    id: 'bus-sringeri-udupi',
    name: 'Pancha Kshetras & Hoysala Heritage Circuit',
    category: 'bus',
    destination: 'Karnataka (Sringeri, Udupi, Belur, Halebidu, Dharmasthala)',
    duration: '6 Days / 5 Nights',
    travelMode: 'Deluxe AC Executive Coach with Air Suspension',
    startingLocation: 'Bengaluru (Majestic / Yeshwantpur pickup)',
    shortDescription: 'Traverse the Western Ghats and the fertile Malnad region to explore Hoysala architectural marvels and sacred Shakta-Shaiva-Vaishnava kshetras.',
    image: 'assets/temples/belur.jpg',
    featured: true,
    overview: 'This sacred journey connects the monumental sculpture traditions of the Hoysala Empire with the timeless spiritual sanctums of the Sahyadri ranges. Commencing from Bengaluru, travellers experience the world-renowned star-shaped temples of Belur and Halebidu before ascending the lush rainforests to Sringeri Sharada Peetham, established by Adi Shankaracharya. The journey culminates in the coastal temple town of Udupi, founded by Sri Madhvacharya.',
    historyBackground: 'Historically rooted between the 10th and 14th centuries CE, this circuit weaves together Advaita Vedanta (Sringeri), Dvaita Vedanta (Udupi), and Hoysala dynastic patronage (Belur-Halebidu). The Chennakeshava temple of Belur, commissioned by King Vishnuvardhana in 1117 CE to commemorate military victories and royal devotion, represents the pinnacle of soapstone micro-sculpture. Sringeri on the banks of Tunga river preserves the 1200-year unbroken line of Jagadgurus starting from Adi Shankara.',
    placesCovered: ['Belur', 'Halebidu', 'Sringeri', 'Horanadu', 'Kigga', 'Agumbe', 'Udupi', 'Dharmasthala', 'Kukke Subramanya'],
    templeVisits: [
      'Chennakeshava Temple, Belur (12th-century Hoysala masterpiece)',
      'Hoysaleshwara Temple, Halebidu (Twin Shiva sanctums with friezes)',
      'Sri Sharadamba Temple & Vidyashankara Zodiac Temple, Sringeri',
      'Annapoorneshwari Temple, Horanadu',
      'Sri Krishna Temple & Ashta Mathas, Udupi (Kanaka Kindi darshan)',
      'Manjunatha Swamy Temple, Dharmasthala',
      'Kukke Sri Subramanya Temple (Kumaradhara river dip)'
    ],
    educationalActivities: [
      'Guided study of Hoysala iconography, architectural geometry, and soapstone friezes with a heritage scholar.',
      'Evening lecture on Adi Shankaracharya’s stay in Sringeri and the Dakshinamnaya Peetham lineage.',
      'Understanding the Kanakadasa tradition and the Dvaita philosophy of Sri Madhvacharya in Udupi.',
      'Vedic chanting session in the serene Tunga river ghats at dawn.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bengaluru Departure – Belur Chennakeshava & Halebidu Marvels',
        description: 'Early morning luxury coach departure from Bengaluru. Arrive at Hassan for sattvic breakfast. Visit Belur Chennakeshava temple for a 2-hour guided architectural walkthrough. Post sattvic lunch, proceed to Halebidu Hoysaleshwara temple. Evening drive through the coffee hills of Chikmagalur. Overnight stay at Chikmagalur / Balehonnur.'
      },
      {
        day: 2,
        title: 'Chikmagalur to Sringeri – The Tunga River & Vidyashankara Temple',
        description: 'Ascend the Western Ghats to Sringeri. Check into Sharada Peetham guest accommodation. Holy dip at Tunga river and feeding the sacred fish. Darshan of Sri Sharadamba. Afternoon architectural study of the 14th-century Vidyashankara Temple featuring 12 zodiac pillars aligned with solar equinoxes. Evening attending Maha Pooja and Jagadguru darshan (subject to schedule).'
      },
      {
        day: 3,
        title: 'Horanadu Annapoorneshwari & Agumbe Rainforest Ridge',
        description: 'Morning excursion to Horanadu nestled in verdant mountain slopes. Receive prasadam lunch at Sri Kshetra Horanadu. Afternoon scenic drive via Agumbe ridge. Arrive at Udupi in the evening. Relaxing seaside stotra chanting at Malpe beach.'
      },
      {
        day: 4,
        title: 'Udupi Sri Krishna Darshan & The Ashta Mathas',
        description: 'Nirmalya darshan at 5:00 AM of Udupi Sri Krishna through the sacred Kanakana Kindi window. Guided heritage walk exploring the eight mathas established by Sri Madhvacharya. Visit Chandramouleshwara and Anantheshwara temples. Afternoon discussion on Dvaita philosophy. Evening temple chariot (Ratha) procession.'
      },
      {
        day: 5,
        title: 'Dharmasthala & Kukke Subramanya Pilgrimage',
        description: 'Travel to Dharmasthala for darshan of Lord Manjunatha and visit the giant Gommateshwara monolith on Ratnagiri hill. Proceed through the thick reserve forest to Kukke Subramanya at the foothills of Kumara Parvatha. Temple darshan and evening deeparadhana.'
      },
      {
        day: 6,
        title: 'Kukke Subramanya to Bengaluru Return',
        description: 'Early morning sankalpa and darshan at Kukke. Scenic return drive across Shiradi Ghat to Bengaluru with stops for traditional Malnad lunch and artisan handicrafts. Arrival in Bengaluru by evening.'
      }
    ],
    transportDetails: 'Air-conditioned 2x2 luxury coach with reclining push-back seats, air suspension for smooth ghat roads, onboard emergency medical kit, microphone-guided commentary, and mineral water.',
    accommodationDetails: '5 nights in verified sattvic ashram guest houses and premium 3-star heritage hotels ensuring pristine cleanliness and tranquil spiritual ambience.',
    meals: 'Pure sattvic vegetarian South Indian meals (breakfast, lunch, dinner) cooked without onion and garlic where required. Temple prasadam included at Sringeri, Horanadu, and Udupi.',
    included: [
      'All coach transportation and interstate permits',
      '5 nights clean accommodation on twin-sharing basis',
      'All sattvic vegetarian meals as per itinerary',
      'Dedicated Sanskrit/Heritage scholar as tour guide',
      'VIP darshan facilitation where officially permitted',
      'Daily bottled drinking water and light refreshments'
    ],
    excluded: [
      'Personal seva / archana charges paid directly to temples',
      'Personal laundry, telephone calls, and room service',
      'Any optional pooja or customized family rituals'
    ],
    safetyRequirements: 'Modest traditional dress code mandatory (Dhoti/Kurta for men, Saree/Salwar for women). Comfortable walking sandals for temple prakaras. Warm wrap for early morning mist in Sringeri.'
  },
  {
    id: 'bus-chola-navagraha',
    name: 'Great Living Chola Temples & Navagraha Circuit',
    category: 'bus',
    destination: 'Tamil Nadu (Thanjavur, Kumbakonam, Gangaikonda Cholapuram, Chidambaram)',
    duration: '5 Days / 4 Nights',
    travelMode: 'AC High-Floor Luxury Coach',
    startingLocation: 'Chennai (Central / Koyambedu pickup) or Trichy',
    shortDescription: 'Witness the zenith of Dravidian granite architecture, sacred temple tank traditions, and the astrological nine planetary kshetras of the Cauvery delta.',
    image: 'assets/temples/thanjavur.jpg',
    featured: false,
    overview: 'The Cauvery delta is the crucible of classical Tamil civilization, celebrated for the monumental bronze casting of the Chola empire, timeless carnatic rhythms, and ancient granite temples. This coach pilgrimage visits the UNESCO World Heritage "Great Living Chola Temples" alongside the sacred Navagraha shrines spread around the holy town of Kumbakonam.',
    historyBackground: 'Built primarily under Emperors Rajaraja Chola I (985–1014 CE) and Rajendra Chola I (1012–1044 CE), the Brihadeeswarar Temple of Thanjavur and its sister monument at Gangaikonda Cholapuram represent architectural engineering feats unmatched in medieval Asia. Granite was quarried and hauled dozens of kilometers to construct gopurams and monolithic vimanas standing over 200 feet high, dedicated to Shiva as Adavallan (Lord of Dance).',
    placesCovered: ['Thanjavur', 'Gangaikonda Cholapuram', 'Darasuram', 'Kumbakonam', 'Swamimalai', 'Chidambaram', 'Thirunallar'],
    templeVisits: [
      'Brihadeeswarar Temple (Big Temple), Thanjavur',
      'Brihadisvara Temple, Gangaikonda Cholapuram',
      'Airavatesvara Temple, Darasuram (Musical steps and stone carvings)',
      'Thillai Nataraja Temple, Chidambaram (Chidambara Rahasyam & Akasha Linga)',
      'Suryanar Kovil (Sun God Temple)',
      'Thingaloor (Chandra), Vaitheeswaran Kovil (Angaraka), Thirunallar (Shani)',
      'Alangudi (Guru), Kanjanoor (Sukra), Thirunageswaram (Rahu), Keezhperumpallam (Ketu)'
    ],
    educationalActivities: [
      'Architectural lecture on the 80-tonne single granite capstone atop Thanjavur vimana.',
      'Live demonstration of ancient lost-wax bronze casting by generational sthapatis in Swamimalai.',
      'Understanding the symbolism of Nataraja’s Ananda Tandava and the five cosmic elements in Chidambaram.',
      'Study of Navagraha planetary astronomy in ancient Indian calendar systems (Panchangam).'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chennai to Chidambaram – Cosmic Dance of Nataraja',
        description: 'Morning departure from Chennai along the East Coast Road. Arrive at Chidambaram. Check-in and afternoon darshan of Thillai Nataraja, experiencing the Akasha Rahasyam and the ruby Nataraja spatika linga abhishekam. Evening discourse on Chola Shaivite traditions.'
      },
      {
        day: 2,
        title: 'Gangaikonda Cholapuram & Vaitheeswaran Kovil',
        description: 'Visit the magnificent Gangaikonda Cholapuram temple, marveling at the feminine grace of its vimana. Proceed to Vaitheeswaran Kovil (Angaraka kshetra and Dhanvantari healing shrine) and Thirunallar (Lord Saturn shrine). Evening arrival in Kumbakonam.'
      },
      {
        day: 3,
        title: 'The Kumbakonam Navagraha Odyssey',
        description: 'Full day holy circuit covering Suryanar Kovil (Sun), Kanjanoor (Venus), Thirunageswaram (Rahu milk abhishekam miracle), Alangudi (Jupiter), and Keezhperumpallam (Ketu). Traditional temple tank darshans in Kumbakonam.'
      },
      {
        day: 4,
        title: 'Darasuram Stone Wonders & Grandeur of Thanjavur',
        description: 'Morning visit to Airavatesvara Temple at Darasuram, studying stone miniature carvings of 63 Nayanmars. Visit Swamimalai bronze workshops. Drive to Thanjavur. Sunset visit to the Great Big Temple (Brihadeeswarar), witnessing the golden granite glow at twilight.'
      },
      {
        day: 5,
        title: 'Thanjavur Saraswathi Mahal & Return Journey',
        description: 'Morning visit to Saraswathi Mahal Library, housing priceless palm-leaf manuscripts and ancient maps. Return journey toward Chennai with traditional Tanjore filter coffee stops and drop-off by late evening.'
      }
    ],
    transportDetails: 'Spacious AC Luxury Tourist Coach with experienced chauffeurs familiar with delta region routes, onboard audio system for stotras and historical commentary.',
    accommodationDetails: '4 nights in heritage style 3-star hotels and matha guest complexes with clean ensuite bathrooms and peaceful surroundings.',
    meals: 'Authentic Tanjore-style sattvic vegetarian meals served on banana leaves featuring traditional rasam, sambar, kootu, payasam, and temple prasadam.',
    included: [
      'All coach transit from Chennai/Trichy return',
      '4 nights accommodation on double/triple sharing',
      'All sattvic breakfast, lunch, and dinner',
      'Experienced scholar-guide throughout the journey',
      'All toll taxes, parking fees, and driver allowances'
    ],
    excluded: [
      'Special darshan tickets paid directly at temple counters',
      'Personal expenses and donations'
    ],
    safetyRequirements: 'Strict temple dress regulations: Dhoti or Kurta-Pyjama for men; Saree or Churidhar with dupatta for women. Shoes must be deposited at designated temple footwear stalls.'
  },
  {
    id: 'bus-maharashtra-jyotirlinga',
    name: 'Maharashtra Pancha Jyotirlinga & Shirdi Pilgrimage',
    category: 'bus',
    destination: 'Maharashtra (Trimbakeshwar, Bhimashankar, Grishneshwar, Aundha, Parli, Shirdi)',
    duration: '6 Days / 5 Nights',
    travelMode: 'AC Deluxe Coach',
    startingLocation: 'Pune / Mumbai pickup',
    shortDescription: 'Pay homage to five of the twelve sacred Shiva Jyotirlingas, visit ancient rock-cut caves of Ellora, and seek peace at Shirdi Sai Sansthan.',
    image: 'assets/temples/khajuraho.jpg',
    featured: false,
    overview: 'Maharashtra is blessed with five self-manifested (Swayambhu) Jyotirlingas of Lord Shiva. This comprehensive bus yatra journeys across the Deccan plateau and the Western Ghats from the sacred Godavari source at Trimbak to the forested crests of Bhimashankar, concluding with the rock-hewn marvels of Kailasa temple in Ellora and the saintly presence of Shirdi.',
    historyBackground: 'Documented in the Shiva Purana, the Jyotirlingas represent columns of infinite cosmic light (Jyoti). Trimbakeshwar is unique as the linga possesses three faces depicting Brahma, Vishnu, and Rudra, and marks the origin of the sacred Godavari river initiated by Sage Gautama. The Kailasa temple at nearby Ellora (monolithic rock excavation under Rashtrakuta King Krishna I, 8th century) stands as one of humanity’s greatest rock architectures.',
    placesCovered: ['Pune', 'Bhimashankar', 'Nashik', 'Trimbakeshwar', 'Shirdi', 'Shani Shingnapur', 'Grishneshwar', 'Ellora'],
    templeVisits: [
      'Bhimashankar Jyotirlinga (Dense Sahyadri wildlife sanctuary)',
      'Trimbakeshwar Jyotirlinga & Kushavarta holy kunda',
      'Panchavati & Kalaram Temple, Nashik',
      'Shirdi Sai Baba Samadhi Mandir & Dwarkamai',
      'Shani Shingnapur (Temple with no doors)',
      'Grishneshwar Jyotirlinga (12th and final Jyotirlinga)',
      'Kailasa Monolithic Temple, Ellora Caves'
    ],
    educationalActivities: [
      'Discourse on the cosmological significance of the 12 Jyotirlingas in Sanatana Dharma.',
      'Detailed walkthrough of the top-down rock excavation technique of Kailasa temple at Ellora.',
      'Satsang on Sant Jnaneshwar, Sant Tukaram, and the Varkari Bhakti tradition of Maharashtra.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pune to Bhimashankar Jyotirlinga – Cloud-Clad Sahyadri',
        description: 'Morning departure from Pune. Climb the Sahyadri mountains into the misty forests of Bhimashankar. Afternoon Rudrabhisheka darshan of Lord Shiva. Evening drive to Nashik.'
      },
      {
        day: 2,
        title: 'Trimbakeshwar Jyotirlinga & Sacred Godavari Source',
        description: 'Early morning holy bath at Kushavarta Kund followed by Trimbakeshwar Jyotirlinga darshan. Afternoon visit to Panchavati in Nashik: Sita Gumpha, Kalaram temple, and Kapaleeshwara temple where Nandi is absent. Evening stotra chanting by the Godavari ghats.'
      },
      {
        day: 3,
        title: 'Nashik to Shirdi – Abode of Baba',
        description: 'Scenic highway journey to Shirdi. Check-in at holy ashram premises. Afternoon VIP Kakad / Shej aarti darshan of Sai Baba. Visit Dwarkamai, Chavadi, and Gurusthan.'
      },
      {
        day: 4,
        title: 'Shani Shingnapur to Aurangabad & Grishneshwar',
        description: 'Morning departure to Shani Shingnapur for open-sky Shani Dev darshan. Travel forward to Grishneshwar, the sacred 12th Jyotirlinga restored by Queen Ahilyabai Holkar. Evening aarti at Grishneshwar.'
      },
      {
        day: 5,
        title: 'Ellora Kailasa Temple Architectural Wonder',
        description: 'Spend four dedicated hours exploring Cave 16 (Kailasa Temple), analyzing the monolithic sculpture carved from a single basalt hill. Afternoon drive towards Pune.'
      },
      {
        day: 6,
        title: 'Return to Pune / Mumbai',
        description: 'Morning visit to sacred Ganpati shrine on the route. Concluding satsang and feedback circle. Drop-off at Pune / Mumbai central junctions by afternoon.'
      }
    ],
    transportDetails: 'Executive AC Coach equipped with comfortable reclining seats, panoramic windows, experienced driver team, and first aid provisions.',
    accommodationDetails: '5 nights in neat, air-cooled/AC pilgrim guest lodges and comfortable 3-star hotels close to temple sanctums.',
    meals: 'Wholesome sattvic Maharashtrian and North Indian vegetarian meals with fresh jowar/bajra bhakri, dal, sabzi, kheer, and buttermilk.',
    included: [
      'AC Coach travel throughout the circuit',
      '5 nights verified accommodation',
      'Vegetarian breakfast and dinner',
      'Experienced Hindi/Marathi/English tour guide',
      'All toll, road tax, and permit fees'
    ],
    excluded: [
      'Special Abhishek tokens or personal pooja offerings',
      'Entry tickets to Ellora Caves monuments'
    ],
    safetyRequirements: 'Certain steps involved in Ellora caves; comfortable walking shoes recommended for archaeological sites. Modest attire required at all Jyotirlinga inner sanctums.'
  },

  // --- 2. TRAIN TOURS ---
  {
    id: 'train-divya-kashi-ayodhya',
    name: 'Divya Kashi, Prayagraj & Ayodhya Heritage Rail Circuit',
    category: 'train',
    destination: 'Uttar Pradesh (Varanasi, Prayagraj Sangam, Ayodhya Ram Mandir)',
    duration: '7 Days / 6 Nights',
    travelMode: 'Vande Bharat Express & Reserved AC 2-Tier / 3-Tier Heritage Rail',
    startingLocation: 'New Delhi / Lucknow / Varanasi',
    shortDescription: 'Embark on a sacred pilgrimage along the holy Ganga and Sarayu rivers connecting the ancient City of Light, the confluence at Triveni Sangam, and the birthplace of Sri Rama.',
    image: 'assets/temples/kashi.jpg',
    featured: true,
    overview: 'This flagship rail pilgrimage unites the spiritual heartlands of North India. Travelling aboard India’s premier modern rail network, pilgrims discover Varanasi (Kashi)—one of the oldest continually inhabited spiritual epicenters of humanity—before heading to Prayagraj for the Triveni Sangam snana, and concluding at the sacred city of Ayodhya to seek darshan at the magnificent Sri Ram Janmabhoomi Mandir.',
    historyBackground: 'Varanasi’s spiritual origins date beyond 3000 BCE in Vedic literature, sanctified by the Kashi Vishwanath Jyotirlinga and Adi Shankara’s composition of the Manisha Panchakam. Prayagraj marks the site of the ancient Prayag Mahatmya and the eternal Akshayavat tree. Ayodhya, described in the Ramayana as established by Manu, is revered as the first of the seven Moksha-dayini kshetras (Sapta Puri) of Sanatana Dharma.',
    placesCovered: ['Varanasi', 'Sarnath', 'Prayagraj', 'Ayodhya', 'Naimisharanya (optional)'],
    templeVisits: [
      'Kashi Vishwanath Jyotirlinga (New Vishwanath Corridor)',
      'Annapurna Devi Temple & Vishalakshi Shaktipeeth, Varanasi',
      'Kal Bhairav Temple (Kotwal of Kashi)',
      'Sankat Mochan Hanuman Temple & Tulsi Manas Mandir',
      'Triveni Sangam & Bade Hanuman Temple, Prayagraj',
      'Sri Ram Janmabhoomi Mandir & Kanak Bhavan, Ayodhya',
      'Hanuman Garhi, Ayodhya',
      'Dashrath Mahal & Guptar Ghat on Sarayu'
    ],
    educationalActivities: [
      'Private sunrise boat study of the 84 ancient ghats of Kashi, exploring their history from Maratha to Bundela architecture.',
      'Evening lecture on the philosophical significance of Antyeshti and Moksha in Varanasi by a resident Kashi scholar.',
      'Guided visit to Sarnath where Lord Buddha delivered his first sermon (Dharmachakrapravartana) in the Deer Park.',
      'Deep dive into Goswami Tulsidas and the composition of Ramcharitmanas.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'New Delhi to Varanasi – High-Speed Vande Bharat Journey',
        description: 'Board the premier Vande Bharat Express from New Delhi at 06:00 hrs. Scenic ride across the Indo-Gangetic plains. Arrive in Varanasi Cantt by 14:00 hrs. Traditional welcome at heritage hotel. Evening private boat ride along Dashashwamedh Ghat for the grand Ganga Aarti.'
      },
      {
        day: 2,
        title: 'Kashi Vishwanath Corridor & The Shaktipeethas',
        description: 'Early morning VIP darshan at Sri Kashi Vishwanath temple through the newly restored Ganga corridor. Darshan of Maa Annapurna and Vishalakshi Shaktipeeth. Afternoon visit to Kal Bhairav temple. Evening visit to Sankat Mochan and discourse on Tulsidas literature.'
      },
      {
        day: 3,
        title: 'Sarnath Excursion & Silk Weaving Heritage',
        description: 'Morning journey to Sarnath: Dhamek Stupa, Ashoka Pillar, and the Archaeological Museum. Afternoon exploration of the centuries-old Banarasi silk weaving looms, learning how sacred pitambaris are handwoven. Sunset boat meditation on the Ganga.'
      },
      {
        day: 4,
        title: 'Heritage Rail to Prayagraj – Triveni Sangam Holy Dip',
        description: 'Morning express train to Prayagraj. Check in at comfortable guesthouse. Proceed to Triveni Sangam by mechanized boat for holy snana where Ganga, Yamuna, and mystical Saraswati meet. Visit the reclining Bade Hanuman temple and the sacred Akshayavat tree.'
      },
      {
        day: 5,
        title: 'Prayagraj to Holy Ayodhya – City of Lord Rama',
        description: 'Morning train departure to Ayodhya Dham Junction. Check into hotel. Visit the ancient Hanuman Garhi to seek permission of Lord Hanuman before visiting the Lord. Proceed to Kanak Bhavan and the peaceful banks of the holy Sarayu river for evening Sarayu Aarti.'
      },
      {
        day: 6,
        title: 'Sri Ram Janmabhoomi Darshan & Heritage Walk',
        description: 'Devotional morning darshan at the grand Sri Ram Janmabhoomi Mandir, appreciating the traditional Nagara style pink sandstone architecture and carving. Visit Dashrath Mahal, Sita Ki Rasoi, and Guptar Ghat. Evening bhajan and philosophical reflection.'
      },
      {
        day: 7,
        title: 'Ayodhya to Lucknow / Delhi Return Rail',
        description: 'Morning prayers and packing. Board return train from Ayodhya / Lucknow back to New Delhi. Return home with sacred gangajal, kashi thread, and memories of the sacred north.'
      }
    ],
    transportDetails: 'Executive AC Chair Car / 3-Tier AC Train bookings, along with AC private tempo traveller for city transfers and dedicated private wooden bajra boats on the Ganga.',
    accommodationDetails: '6 nights in premium 3-star/4-star pilgrimage hotels and clean riverfront heritage properties with modern amenities and elevator access.',
    meals: 'Sattvic vegetarian breakfast and curated traditional meals (Banarasi thali, Awadhi vegetarian cuisine, fresh puris, and kheer). No onion/garlic options guaranteed.',
    included: [
      'All train reservation tickets (Vande Bharat / Express trains)',
      '6 nights premium hotel stays on twin-sharing',
      'All meals (Breakfast, Lunch, Dinner)',
      'Private boat rides on Ganga (Varanasi) and Sangam (Prayagraj)',
      'Dedicated pilgrimage director and scholarly guide',
      'VIP darshan assistance as per official trust rules'
    ],
    excluded: [
      'Individual dakshina / special priest rituals',
      'Railway catering outside scheduled ticket inclusions'
    ],
    safetyRequirements: 'Elderly friendly itinerary with battery-operated rickshaws booked in crowded lanes. Valid government ID proof (Aadhaar/Passport) required for rail and temple security.'
  },
  {
    id: 'train-jagannath-puri-konark',
    name: 'Jagannath Puri & Eastern Sun Temple Heritage Yatra',
    category: 'train',
    destination: 'Odisha (Bhubaneswar, Puri, Konark, Chilika Lake)',
    duration: '6 Days / 5 Nights',
    travelMode: 'Vande Bharat / Rajdhani Express & AC Transfers',
    startingLocation: 'Howrah (Kolkata) / Visakhapatnam / Bhubaneswar',
    shortDescription: 'Witness the mystical Mahaprasad traditions of Lord Jagannath, the grand chariot architecture of Konark, and the 1000-year-old temples of Ekamra Kshetra.',
    image: 'assets/temples/puri.jpg',
    featured: false,
    overview: 'Puri is one of the four cardinal Char Dhams established in Sanatana Dharma. This rail-based expedition takes travellers from the temple city of Bhubaneswar (ancient Ekamra Kshetra with over 500 historic temples) to Puri on the Bay of Bengal, where Lord Jagannath, Balabhadra, and Subhadra dwell. The journey encompasses the colossal 13th-century Konark Sun Temple and the pristine Chilika lagoon.',
    historyBackground: 'The present temple of Jagannath was initiated in the 12th century by King Anantavarman Chodaganga of the Eastern Ganga dynasty. The culinary tradition of Jagannath’s Anandabazar is recognized as the world’s largest open-air kitchen, where earthen pots are cooked over woodfires by ancient solar alignment. Konark, commissioned by King Narasimhadeva I (1250 CE), stands as a monumental chariot of Surya with 24 intricately sculpted stone wheels.',
    placesCovered: ['Bhubaneswar', 'Puri', 'Konark', 'Dhauli', 'Pipili', 'Chilika Lake (Satapada)'],
    templeVisits: [
      'Sri Jagannath Temple, Puri (Darshan of the Holy Trinity)',
      'Gundicha Temple, Puri',
      'Sun Temple, Konark (UNESCO World Heritage Site)',
      'Lingaraj Temple, Bhubaneswar (11th-century Kalinga architecture)',
      'Mukteshwar Temple (The Gem of Odishan Architecture)',
      'Rajarani Temple (Unique erotic and floral sandstone sculptures)',
      'Alarnath Temple, Brahmagiri'
    ],
    educationalActivities: [
      'Study of Kalinga architectural taxonomy: Deula (Rekha, Pidha, Khakhara) and Jagamohana.',
      'Satsang on Mahaprabhu Jagannath’s Nabakalebara ritual and the worship traditions of the Daitapati servitors.',
      'Walk through the artisan village of Raghurajpur, watching Pattachitra scroll painters and palm leaf engravers.',
      'Understanding Sri Chaitanya Mahaprabhu’s ecstatic devotion and stay in Puri Gambhira.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bhubaneswar – City of Shrines',
        description: 'Morning rail arrival at Bhubaneswar Railway Station. Check into hotel. Afternoon heritage tour of Bhubaneswar: Mukteshwar temple, Parasurameswara, and Rajarani temple. Evening visit to Lingaraj Temple and Bindu Sagar holy tank.'
      },
      {
        day: 2,
        title: 'Dhauli Peace Pagoda & Craft Villages to Puri',
        description: 'Morning drive towards Puri. Stop at Dhauli Hills, site of Emperor Ashoka’s transformation and rock edicts. Visit Pipili appliqué craft village and Raghurajpur Pattachitra heritage village. Arrive in Puri by afternoon. Golden beach sunset and evening temple orientation.'
      },
      {
        day: 3,
        title: 'Lord Jagannath Temple & Ananda Bazar Mahaprasad',
        description: 'Early morning sacred darshan of Lord Jagannath, Balabhadra, and Devi Subhadra. Witness the changing of the Patitapavana flag atop the 214-foot Neelachakra. Experience the divine 56-bhog Mahaprasad at Ananda Bazar. Afternoon visit to Gambhira and Tota Gopinath temple.'
      },
      {
        day: 4,
        title: 'Konark Sun Temple & Chandrabhaga Beach',
        description: 'Morning excursion along the Marine Drive to Konark Sun Temple. Spend 3 hours with our architectural historian examining the 24 stone wheels acting as sundials and the erotic sculptures. Relax at the sacred Chandrabhaga beach. Return to Puri for seaside discourse.'
      },
      {
        day: 5,
        title: 'Chilika Lake & Alarnath Sanctuary',
        description: 'Drive to Satapada on Chilika Lake. Scenic boat ride to view Irrawaddy dolphins and Rajhans island. On return, visit the ancient Alarnath Temple at Brahmagiri, where devotees flock when Lord Jagannath is in Anavasara seclusion.'
      },
      {
        day: 6,
        title: 'Puri to Bhubaneswar & Return Journey',
        description: 'Final morning darshan or beach stroll. Scenic Vande Bharat train departure from Puri back to Howrah / onward rail connections, filled with the divine blessings of Jagannath Mahaprabhu.'
      }
    ],
    transportDetails: 'Comfortable reserved AC Chair Car / Sleeper rail journey combined with AC Tempo Traveller for regional coastal transfers.',
    accommodationDetails: '5 nights in verified beachfront and temple-district 3-star heritage hotels with clean vegetarian dining facilities.',
    meals: 'Pure vegetarian Odia and North Indian meals, including authentic Mahaprasad experience (Abadha) prepared without chilies or non-indigenous vegetables.',
    included: [
      'All rail travel tickets in AC class',
      '5 nights quality accommodation',
      'All meals including authentic temple Mahaprasad',
      'Boat cruise on Chilika Lake',
      'Expert Kalinga architectural guide',
      'Temple entry and local vehicle transfers'
    ],
    excluded: [
      'Panda / Priest personal dakshina',
      'Camera entry fees at archaeological monuments'
    ],
    safetyRequirements: 'Non-Hindus are not permitted inside the inner sanctum of Jagannath Puri as per traditional temple administration decrees; alternative darshan arrangements provided from the Raghunandan library rooftop.'
  },
  {
    id: 'train-dakshin-divya-desam',
    name: 'Dakshin Bharat Divya Desam Express Yatra',
    category: 'train',
    destination: 'Tamil Nadu & Kerala (Srirangam, Madurai, Rameswaram, Kanyakumari, Thiruvananthapuram)',
    duration: '8 Days / 7 Nights',
    travelMode: 'AC Express Rail & Private Coach Interlinks',
    startingLocation: 'Chennai Central / Trichy',
    shortDescription: 'Travel aboard express trains across the Dravidian temple heartlands from the cosmic island of Srirangam to Rameswaram’s 22 sacred theerthams and Padmanabhaswamy’s golden vault.',
    image: 'assets/temples/rameswaram.jpg',
    featured: false,
    overview: 'An epic journey across Tamil Nadu into the verdant coastal plains of Kerala. This rail tour features Srirangam—the premier of the 108 Divya Desams and the headquarters of Sri Ramanujacharya’s reformations—the colossal Meenakshi Amman Temple at Madurai, the ocean-encircled Shiva Jyotirlinga at Rameswaram, the land’s end at Kanyakumari, and the monumental Sree Padmanabhaswamy temple at Thiruvananthapuram.',
    historyBackground: 'Srirangam’s Ranganathaswamy temple spans 156 acres with 21 grand gopurams, serving as the epicentre of Sri Vaishnava theology. Rameswaram’s Ramanathaswamy temple houses the longest cloistered stone corridor in the world (over 1200 meters of sculpted pillars). In Kerala, Padmanabhaswamy temple displays Kerala and Dravidian structural synthesis, housing the Lord resting on Anantha Shesha.',
    placesCovered: ['Trichy (Srirangam)', 'Madurai', 'Rameswaram', 'Dhanushkodi', 'Kanyakumari', 'Thiruvananthapuram'],
    templeVisits: [
      'Sri Ranganathaswamy Temple, Srirangam (108 Divya Desam Head)',
      'Rockfort Ucchi Pillayar Temple, Trichy',
      'Meenakshi Sundareswarar Temple, Madurai (Aayiram Kaal Mandapam)',
      'Ramanathaswamy Jyotirlinga & 22 Kundas Snana, Rameswaram',
      'Kothandaramaswamy Temple & Ghost Town of Dhanushkodi',
      'Bhagavathy Amman Temple & Vivekananda Rock, Kanyakumari',
      'Sree Padmanabhaswamy Temple, Thiruvananthapuram'
    ],
    educationalActivities: [
      'Study of Sri Ramanujacharya’s temple management system (Koil Olugu) and social equality reforms.',
      'Walk through Madurai’s Thousand Pillar Hall observing musical granite pillars and Nayaka period sculptures.',
      'Spiritual discourse on the 22 Wells of Rameswaram and their mineral-rich healing properties.',
      'Sunrise meditation at Kanyakumari where three oceans converge (Bay of Bengal, Indian Ocean, Arabian Sea).'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chennai to Srirangam – The Island of Sri Ranganatha',
        description: 'Morning express train journey from Chennai Central to Trichy. Check in at Srirangam. Afternoon extensive exploration of the seven prakaras of Sri Ranganathaswamy temple. Visit the sanctum of Sri Ramanuja where his embalmed sacred body (Thirumeni) has been preserved for nine centuries. Evening chanting.'
      },
      {
        day: 2,
        title: 'Rockfort & Journey to Temple City Madurai',
        description: 'Morning climb of Trichy Rockfort for a panoramic view of the Cauvery basin. Train departure to Madurai. Check in and evening darshan of Goddess Meenakshi in her gemstone-encrusted sanctum, witnessing the nightly floral palanquin procession.'
      },
      {
        day: 3,
        title: 'Madurai Architecture to Ocean Sanctum Rameswaram',
        description: 'Morning visit to Thirumalai Nayakar Mahal and the Thousand Pillar Hall. Afternoon express train across the iconic Pamban bridge onto Rameswaram island. Evening darshan of the Spatika Lingam at Ramanathaswamy temple.'
      },
      {
        day: 4,
        title: '22 Sacred Theertham Snana & Ghost City Dhanushkodi',
        description: 'At 5:00 AM, take the traditional dip in Agni Theertham sea followed by bathing under all 22 sacred freshwater wells within the temple complex. Afternoon 4x4 drive to Dhanushkodi and Ram Setu viewpoint where Lord Rama initiated the bridge to Lanka.'
      },
      {
        day: 5,
        title: 'Rameswaram to Kanyakumari – Land’s End Convergence',
        description: 'Scenic train across the southern coastal countryside to Kanyakumari. Visit the Kumari Amman Temple and take the ferry to Vivekananda Rock Memorial and Thiruvalluvar statue. Witness the confluence sunset.'
      },
      {
        day: 6,
        title: 'Kanyakumari Sunrise to Thiruvananthapuram',
        description: 'Experience the mystical sunrise over the ocean. Post breakfast, train departure to Thiruvananthapuram. Visit the ancient Padmanabhapuram wooden palace en route. Check into hotel.'
      },
      {
        day: 7,
        title: 'Sree Padmanabhaswamy Darshan & Attukal',
        description: 'Traditional morning darshan of Sree Padmanabhaswamy in traditional mundu attire through three doors (Face, Navel with Brahma on Lotus, and Sacred Feet). Visit Attukal Bhagavathy temple. Evening classical music session.'
      },
      {
        day: 8,
        title: 'Return Journey',
        description: 'Morning prasadam and packing. Return trains / flights from Thiruvananthapuram back to Chennai or onward destinations.'
      }
    ],
    transportDetails: 'Air-conditioned express train tickets (Chair Car & 3-Tier AC) with private connecting AC coaches for local sightseeing and Pamban transfers.',
    accommodationDetails: '7 nights in clean, reputable 3-star pilgrimage hotels located within walking distance or brief transfer to sanctums.',
    meals: 'Pure vegetarian South Indian satvik fare with filter coffee, idlis, sambar, curd rice, and local regional delicacies cooked with traditional oils.',
    included: [
      'All inter-city train tickets in AC class',
      '7 nights twin-share accommodation',
      'All sattvic breakfast and dinner',
      'Assistance for 22 Theertham bathing at Rameswaram',
      'Ferry tickets at Kanyakumari',
      'Scholarly tour leader throughout'
    ],
    excluded: [
      'Traditional Kerala Mundu / Dhoti purchases for Padmanabhaswamy dress code',
      'Camera tokens and direct priest offerings'
    ],
    safetyRequirements: 'Strict dress code in Kerala temples (Men must wear white dhoti and remove shirts; women must wear saree or set-mundu). Bathing in Rameswaram theerthams involves changing clothes.'
  },

  // --- 3. FLIGHT PACKAGES ---
  {
    id: 'flight-char-dham-himalaya',
    name: 'Char Dham Sacred Himalayan Yatra by Air & Helicopter',
    category: 'flight',
    destination: 'Uttarakhand (Yamunotri, Gangotri, Kedarnath, Badrinath)',
    duration: '6 Days / 5 Nights',
    travelMode: 'Direct Scheduled Flights to Dehradun + Dedicated Helicopter Shuttle',
    startingLocation: 'Dehradun (Sahastradhara Helidrome) / Delhi connectivity',
    shortDescription: 'The pinnacle of Himalayan pilgrimages: reach all four sacred shrines with VIP helicopter shuttles, avoiding grueling mountain roads while immersing in deep Vedic spirituality.',
    image: 'assets/temples/kedarnath.jpg',
    featured: true,
    overview: 'The Chota Char Dham of Uttarakhand—Yamunotri, Gangotri, Kedarnath, and Badrinath—is the ultimate dream pilgrimage for every follower of Sanatana Dharma. For elders and pilgrims seeking seamless, dignified travel without physical exhaustion, this luxury aerial pilgrimage provides helicopter shuttles between all four dhams from Dehradun, complete with pre-arranged VIP darshans and luxury alpine stays.',
    historyBackground: 'Consecrated and synthesized by Adi Shankaracharya in the 8th century CE to unify the four cardinal directions and spiritual traditions of India, these high-altitude shrines sit at the origin of the holiest rivers. Kedarnath is among the 12 Jyotirlingas, where the hump of Lord Shiva in the form of a celestial bull appeared. Badrinath, nestled between Nar and Narayana mountain ranges, is where Lord Vishnu meditated while Goddess Lakshmi protected Him as a Badri (jujube) tree.',
    placesCovered: ['Dehradun', 'Kharsali (Yamunotri)', 'Harsil (Gangotri)', 'Sersi/Guptkashi (Kedarnath)', 'Badrinath', 'Mana Village'],
    templeVisits: [
      'Yamunotri Temple & Surya Kund hot spring',
      'Gangotri Temple on the banks of Bhagirathi River',
      'Kedarnath Jyotirlinga (3,583 m altitude)',
      'Badrinath Temple & Maha Abhishek ceremony',
      'Brahma Kapal (Ancestral tarpan rituals on Alaknanda)',
      'Vyas Gufa & Ganesha Gufa in Mana (First village of India)',
      'Tapt Kund natural sulfur spring'
    ],
    educationalActivities: [
      'Discourse on the descent of Ganga (Gangavataran) and King Bhagiratha’s tapasya at Gangotri.',
      'Study of Adi Shankaracharya’s Samadhi behind the Kedarnath temple and his re-establishment of the Badrinath murti from Narad Kund.',
      'Recitation of Vishnu Sahasranama at Badrinath during early morning Maha Abhishek.',
      'Cultural visit to the Indo-Tibetan border village of Mana, exploring the Saraswati river gorge (Bhim Pul).'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dehradun – Pre-Yatra Briefing',
        description: 'Flight arrival at Dehradun Jolly Grant Airport. Private transfer to 5-star hotel in Dehradun. Evening welcome aarti, medical check-up, duffle bag distribution, and spiritual briefing by our pilgrimage director.'
      },
      {
        day: 2,
        title: 'Helicopter to Kharsali – Yamunotri Holy Darshan',
        description: 'Early morning helicopter flight from Sahastradhara Helidrome to Kharsali. Ascend to Yamunotri shrine by arranged palki / pony. Cook rice in the boiling waters of Surya Kund and seek darshan of Goddess Yamuna. Return to Kharsali for overnight stay in luxury cottages.'
      },
      {
        day: 3,
        title: 'Kharsali to Harsil – The Pristine Valley of Gangotri',
        description: 'Scenic helicopter ride to Harsil valley, surrounded by apple orchards and deodar forests. Drive 25 km to Gangotri temple. Take holy achaman of Bhagirathi water and participate in the special afternoon aarti. Overnight stay at Harsil resort.'
      },
      {
        day: 4,
        title: 'Harsil to Sersi & Kedarnath Helishuttle Darshan',
        description: 'Fly to Sersi helipad and board the connecting shuttle to Kedarnath (altitude 11,755 ft). Witness the colossal Himalayan backdrop of Kedar Dome. Priority VIP entry for Kedarnath Jyotirlinga darshan. Visit Shankaracharya Samadhi. Evening return to Sersi / stay at Kedarnath luxury camps.'
      },
      {
        day: 5,
        title: 'Kedarnath to Badrinath – Abode of Badri Vishal',
        description: 'Helicopter transfer to Badrinath. VIP darshan of Lord Badri Vishal carved from black Saligrama stone. Visit Mana Village, Vyas Gufa, and Bhim Pul. Evening attended Swarna Aarti. Overnight stay in Badrinath.'
      },
      {
        day: 6,
        title: 'Special Maha Abhishek & Flight back to Dehradun',
        description: 'At 04:30 AM, attend the auspicious Maha Abhishek ceremony inside Badrinath sanctum. Post breakfast, board helicopter back to Sahastradhara Helidrome, Dehradun. Airport transfer for onward flights home.'
      }
    ],
    transportDetails: 'Exclusive Bell 407 / Airbus H130 helicopters, ground luxury Innova Crysta for valley transfers, and provided Palki / Pony for Yamunotri ascent.',
    accommodationDetails: '5 nights in the finest premium cottages and 4-star mountain hotels available across the high altitude circuit, equipped with heated rooms and oxygen cylinders.',
    meals: 'Sattvic, wholesome, freshly prepared vegetarian hot meals tailored to high-altitude digestion, herbal immunity teas, and dry fruits.',
    included: [
      'Helicopter charter for the entire Char Dham circuit',
      'VIP priority darshan slips at all four temples',
      '5 nights luxury accommodation with room heaters',
      'All sattvic meals and high-energy refreshments',
      'Palki / Pony charges included at Yamunotri',
      'Dedicated medical attendant with oxygen concentrators',
      'Dehradun airport transfers'
    ],
    excluded: [
      'Special individual puja tickets (Maha Abhishek booked optionally)',
      'Extra weight surcharge above 75 kg / passenger (standard aviation rule)'
    ],
    safetyRequirements: 'High-altitude medical fitness declaration required. Warm thermals, down jackets, and comfortable grip footwear essential. Oxygen support provided in every helicopter and hotel.'
  },
  {
    id: 'flight-kailash-om-parvat',
    name: 'Adi Kailash & Om Parvat Sacred Aerial Pilgrimage',
    category: 'flight',
    destination: 'Uttarakhand Borders (Pithoragarh, Gunji, Om Parvat, Adi Kailash, Parvati Kund)',
    duration: '5 Days / 4 Nights',
    travelMode: 'Scheduled Flight to Pantnagar/Pithoragarh + Heli-Transfers & 4x4 Campers',
    startingLocation: 'Dehradun / Pantnagar / Pithoragarh',
    shortDescription: 'Witness the naturally formed miraculous "OM" snow symbol on Om Parvat and touch the sacred waters of Parvati Sarovar at the base of Chota Kailash without crossing international borders.',
    image: 'assets/temples/kailash.jpg',
    featured: false,
    overview: 'In the remote Vyas Valley along the Indo-Tibetan border lies one of the most sacred landscapes of Shiva worship: Adi Kailash (also known as Chota Kailash) and Om Parvat. On Om Parvat, the perennial snow pattern forms the sacred Sanskrit syllable "ॐ" with absolute geometric clarity. This specialized flight-and-heli package makes this once-grueling month-long expedition accessible to devout pilgrims in total comfort.',
    historyBackground: 'According to the Skanda Purana, Adi Kailash was the mountain abode where Lord Shiva’s wedding procession to Devi Parvati paused. The adjacent lake, Parvati Sarovar (Gauri Kund), mirrors the peak’s snowy cone. Sage Veda Vyasa is believed to have performed long penances in this valley, giving it the name Vyas Valley. Unlike Mount Kailash in Tibet, Adi Kailash is located entirely within sovereign Indian territory.',
    placesCovered: ['Pithoragarh', 'Dharchula', 'Gunji', 'Nabi', 'Om Parvat Viewpoint', 'Adi Kailash Base', 'Parvati Kund'],
    templeVisits: [
      'Adi Kailash Shiva Temple on the shores of Parvati Kund',
      'Om Parvat Sacred Darshan Viewpoint at Nabhidhang',
      'Kali Temple at Kalapani (Origin of Kali River)',
      'Vyas Cave shrine in Vyas Valley'
    ],
    educationalActivities: [
      'Discourse on the cosmological significance of the sacred syllable "OM" in the Mandukya Upanishad.',
      'Cultural interaction with the indigenous Rung community of Gunji and Nabi villages, learning their preserved Vedic-Himalayan customs.',
      'High-altitude sunrise meditation confronting the colossal Adi Kailash peak.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight to Pithoragarh – Gateway to the Border Mountains',
        description: 'Fly into Pantnagar / Dehradun and transfer via scenic mountain flight to Naini Saini Airport, Pithoragarh. Check in at heritage lodge. Acclimatization walk and evening briefing on high-altitude breathing techniques.'
      },
      {
        day: 2,
        title: 'Heli-Shuttle to Gunji (10,500 ft) – Vyas Valley',
        description: 'Morning helicopter flight landing in the high alpine valley of Gunji. Check into deluxe alpine homestays in Nabi village. Experience traditional Rung hospitality and herbal piping teas. Gentle acclimatization walk through pine meadows.'
      },
      {
        day: 3,
        title: 'Miraculous Om Parvat Darshan at Nabhidhang',
        description: 'Early morning 4x4 camper drive along the newly paved border road to Nabhidhang. Stand in awe as the morning sun illuminates the snow-carved sacred "ॐ" symbol on the dark mountain face of Om Parvat. Chanting of Om Namah Shivaya and Mahamrityunjaya mantra. Return to Nabi village.'
      },
      {
        day: 4,
        title: 'Adi Kailash & Sacred Parvati Sarovar Kunda',
        description: 'Drive to Jolingkong, the base camp of Adi Kailash (14,000 ft). Walk or take a pony to Parvati Kund. Perform holy jal-sparsh and prayers at the Shiva-Parvati temple. Witness the reflection of the majestic conical mountain in the crystal waters. Return to Gunji.'
      },
      {
        day: 5,
        title: 'Heli-Transfer to Pithoragarh & Onward Return',
        description: 'Morning helicopter flight back to Pithoragarh. Connecting scheduled flight back to Dehradun / Delhi, blessed by the supreme grace of Lord Shiva.'
      }
    ],
    transportDetails: 'Heli-shuttle operations between Pithoragarh and Gunji helipads, combined with all-wheel-drive Mahindra Scorpio / Camper vehicles for high-altitude border roads.',
    accommodationDetails: 'Heated mountain lodges in Pithoragarh and specially upgraded, insulated wooden homestays in Nabi/Gunji equipped with heavy duvets and oxygen support.',
    meals: 'Nutritious sattvic vegetarian cuisine cooked with mountain grains (kuttu, mandua, barley), hot dal, fresh rotis, and ginger-tulsi decoctions.',
    included: [
      'Inner Line Permits and SDM approvals',
      'Helicopter flights Pithoragarh – Gunji – Pithoragarh',
      '4 nights accommodation in mountain suites/homestays',
      'All sattvic vegetarian meals throughout',
      'Dedicated high-altitude mountain guide and paramedic',
      'Oxygen cylinder back-up during all travel segments'
    ],
    excluded: [
      'Personal porter or pony hire for the 1.5 km Jolingkong walk',
      'Incidental expenses due to unexpected mountain weather delays'
    ],
    safetyRequirements: 'Indian nationality mandatory for border permits. Medical clearance for altitudes up to 14,000 ft. Strict environmental guidelines (no single-use plastic permitted in the valley).'
  },
  {
    id: 'flight-nepal-muktinath',
    name: 'Varanasi, Bodh Gaya & Nepal Muktinath Flight Odyssey',
    category: 'flight',
    destination: 'India & Nepal (Varanasi, Bodh Gaya, Kathmandu, Pokhara, Jomsom, Muktinath)',
    duration: '8 Days / 7 Nights',
    travelMode: 'International & Mountain Flights + Private AC Vehicles',
    startingLocation: 'Varanasi / Delhi / Kathmandu',
    shortDescription: 'From the sacred Ganga ghats and the Mahabodhi tree to Pashupatinath and the high Himalayan Saligrama realm of Muktinath (108 Divya Desam).',
    image: 'assets/temples/pashupatinath.jpg',
    featured: false,
    overview: 'Muktinath (Chumig Gyatsa) in the trans-Himalayan Mustang district of Nepal is one of the highest pilgrimage shrines on earth (3,710 m) and the northernmost of the 108 Divya Desams revered by Sri Vaishnavas. This multi-country flight package links the holy city of Kashi and Bodh Gaya with Kathmandu’s sacred Pashupatinath and an awe-inspiring mountain flight past Annapurna and Dhaulagiri into Jomsom.',
    historyBackground: 'The Gandaki river flowing below Muktinath is the sole source on Earth of the sacred Saligrama stones, revered as the direct self-manifested form of Lord Narayana. Muktinath is also uniquely sacred to both Hindus and Buddhists, featuring 108 continuous brass waterspouts shaped like bull heads and eternal natural gas flames burning beside flowing ice water inside the Jwala Mai sanctum.',
    placesCovered: ['Varanasi', 'Bodh Gaya', 'Kathmandu', 'Pokhara', 'Jomsom', 'Muktinath Valley'],
    templeVisits: [
      'Sri Kashi Vishwanath & Ganga Aarti, Varanasi',
      'Vishnupad Temple & Mahabodhi Temple, Bodh Gaya',
      'Pashupatinath Temple & Guhyeshwari Shaktipeeth, Kathmandu',
      'Budhanilkantha (Sleeping Vishnu on water), Kathmandu',
      'Muktinath Temple & The 108 Sacred Water Spouts',
      'Jwala Mai Temple (Eternal natural flame over water)'
    ],
    educationalActivities: [
      'Study of Saligrama shila geology, iconography, and sacred preservation along the Gandaki river.',
      'Discourse on the syncretic unity between Vedic Sanatana traditions and Tibetan Buddhism in the Himalayas.',
      'Ancestral Pinda Daan rituals at the Vishnupad footprint temple in Bodh Gaya.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Varanasi to Bodh Gaya – The Sacred Footprint of Vishnu',
        description: 'Morning darshan in Varanasi and flight/drive to Bodh Gaya. Perform Pinda Daan at the ancient Vishnupad temple, where Lord Vishnu’s footprint is etched in basalt. Visit the UNESCO Mahabodhi Temple. Overnight stay in Bodh Gaya.'
      },
      {
        day: 2,
        title: 'Flight to Kathmandu – Valley of Pashupati',
        description: 'Flight to Kathmandu via Delhi / direct charter. Traditional Rudraksha welcome. Check into 5-star hotel. Evening visit to the Pashupatinath temple complex on the Bagmati river to witness the grand evening Bagmati aarti.'
      },
      {
        day: 3,
        title: 'Kathmandu Sacred Sites – Budhanilkantha',
        description: 'Morning visit to Budhanilkantha, witnessing the colossal 5-meter stone carving of Lord Vishnu floating on a bed of serpents. Visit Guhyeshwari Shaktipeeth. Afternoon flight to Pokhara, nestled beneath the Machhapuchhre (Fishtail) peak. Evening boat ride on Phewa Lake.'
      },
      {
        day: 4,
        title: 'Mountain Flight Pokhara to Jomsom & Muktinath',
        description: 'Early morning mountain flight slicing through the deepest gorge on earth between Annapurna and Dhaulagiri peaks to Jomsom. Drive up the arid Mustang valley to Muktinath. Take holy snana under the 108 sacred water spouts. Darshan of Lord Muktinarayan. Overnight in Jomsom.'
      },
      {
        day: 5,
        title: 'Gandaki River Saligrama Search & Return to Pokhara',
        description: 'Morning walk along the Gandaki river banks to search for sacred Saligrama stones. Fly back from Jomsom to Pokhara. Afternoon visit to Bindhyabasini Temple and Davis Falls. Relaxing evening in Pokhara.'
      },
      {
        day: 6,
        title: 'Pokhara to Kathmandu – Durbar Squares & Heritage',
        description: 'Scenic flight back to Kathmandu. Visit Bhaktapur Durbar Square, marveling at the 55-window palace and ancient Newari woodcarving. Cultural discourse on the Licchavi dynasty temple traditions.'
      },
      {
        day: 7,
        title: 'Final Blessings at Pashupatinath & Kathmandu Exploration',
        description: 'Morning Rudrabhisheka darshan at Pashupatinath temple. Free afternoon for procuring authentic Nepali Shaligram, Rudraksha beads, and Pashmina shawls. Farewell dinner.'
      },
      {
        day: 8,
        title: 'Departure Flight Home',
        description: 'Transfer to Tribhuvan International Airport for flight connections back to India / international destinations.'
      }
    ],
    transportDetails: 'International flights, domestic mountain flights (Pokhara-Jomsom-Pokhara), private AC tourist coach in Kathmandu and Pokhara, and 4WD mountain jeeps in Muktinath.',
    accommodationDetails: '7 nights in 4-star/5-star hotels in Kathmandu and Pokhara, and the best available heated mountain resort in Jomsom.',
    meals: 'Sattvic and pure vegetarian Indian meals served throughout, including hot South Indian and North Indian options.',
    included: [
      'All flight tickets (domestic Nepal & mountain flights)',
      'ACPP / TIMS Trekker permits for Mustang region',
      '7 nights luxury and heritage stays',
      'All vegetarian meals',
      'Assistance for 108 spouts snana in Muktinath',
      'English/Hindi speaking spiritual guide'
    ],
    excluded: [
      'Nepal entry visa fees (Free for Indian citizens with valid Voter ID/Passport)',
      'Emergency helicopter evacuation insurance'
    ],
    safetyRequirements: 'High-altitude sub-zero temperatures possible in Muktinath; windbreakers and thermals compulsory. Passport or Election Voter ID required for travel to Nepal.'
  },

  // --- 4. TREKKING EXPEDITIONS ---
  {
    id: 'trek-gaumukh-tapovan',
    name: 'Gaumukh Tapovan & Bhagirathi Glacier Sacred Trek',
    category: 'trekking',
    destination: 'Uttarakhand (Gangotri, Bhojwasa, Gaumukh, Tapovan Base of Shivling Peak)',
    duration: '8 Days / 7 Nights',
    travelMode: 'Private Hill Coach to Gangotri + Guided Alpine Trek with Mountain Porters',
    startingLocation: 'Rishikesh / Haridwar pickup',
    shortDescription: 'Trek to the physical snout of the holy Ganga at Gaumukh and ascend to the legendary high-altitude meditation meadow of Tapovan beneath Mount Shivling.',
    image: 'assets/temples/tapovan.jpg',
    featured: true,
    overview: 'This is the most spiritually charged trek in the Indian Himalayas. Moving beyond the roadhead at Gangotri temple, pilgrims follow the rushing turquoise Bhagirathi river through granite gorges and birch forests (Bhojpatra) to Gaumukh, where the Ganga emerges from the snout of the Gangotri Glacier. Stronger trekkers then scale the terminal moraine to reach Tapovan (14,200 ft)—a sacred emerald meadow where sadhus spend years in solitary tapasya directly beneath the imposing pyramid of Mount Shivling.',
    historyBackground: 'Mentioned across the Mahabharata, Puranas, and Kumarasambhava of Kalidasa, this valley is where King Bhagiratha underwent thousands of years of penance to bring the celestial Ganga down from heaven. Mount Shivling (6,543 m), towering directly above Tapovan, is revered as the physical lingam of Mahadeva, earning it the title "Matterhorn of India".',
    placesCovered: ['Rishikesh', 'Uttarkashi', 'Gangotri', 'Chirbasa', 'Bhojbasa', 'Gaumukh Snout', 'Tapovan Base', 'Meru Glacier'],
    templeVisits: [
      'Kashi Vishwanath Temple, Uttarkashi',
      'Gangotri Dham Temple (Ganga river origin)',
      'Gaumukh Holy Snout (Holy dip at the birth of Ganga)',
      'Tapovan Ashram Cave Hermitages (Mouni Baba and sadhus)'
    ],
    educationalActivities: [
      'Interactive botany walk examining ancient Bhojpatra trees (Betula utilis), whose bark was used to write the Vedas and Upanishads.',
      'Geology session on glacier retreat and the hydrological cycle of the Himalayan rivers.',
      'Meditation at dawn facing the sunlit golden face of Mount Shivling and Bhagirathi peaks I, II, III.',
      'Discourse on the yogic disciplines of Tapas (penance) and Vairagya (renunciation).'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Uttarkashi – The Northern Kashi',
        description: 'Morning pickup from Rishikesh. Drive along the scenic Bhagirathi river to Uttarkashi. Visit the ancient Kashi Vishwanath temple housing the historic Shakti spear. Evening orientation and safety checks. Overnight in Uttarkashi.'
      },
      {
        day: 2,
        title: 'Uttarkashi to Gangotri Dham (10,000 ft)',
        description: 'Drive through the picturesque Harsil valley. Arrive at Gangotri. Darshan at Gangotri temple. Attend the evening Bhagirathi Ganga Aarti. Acclimatization walk around Surya Kund and Gauri Kund waterfalls.'
      },
      {
        day: 3,
        title: 'Gangotri to Chirbasa Trek (14 km, 11,700 ft)',
        description: 'Begin the trek into Gangotri National Park. Pass through dramatic pine and cedar forests along the rushing river. Arrive at Chirbasa (the abode of pine). Camp under the starlit Himalayan sky.'
      },
      {
        day: 4,
        title: 'Chirbasa to Bhojbasa (5 km, 12,400 ft)',
        description: 'Trek through the ancient Bhojpatra (Himalayan birch) forests. First grand views of the Bhagirathi sister peaks. Arrive at Bhojbasa by noon. Afternoon visit to Lal Baba Ashram. Rest and prepare for Gaumukh crossing.'
      },
      {
        day: 5,
        title: 'Bhojbasa to Gaumukh Snout & Tapovan Climb (14,200 ft)',
        description: 'Early morning trek to Gaumukh, the holy cow-mouth snout of the Gangotri glacier. Collect sacred Gangajal directly at the source. Ascend the steep moraine ridge to Tapovan. Arrive at the sublime meadows beneath Mount Shivling. Camp in Tapovan.'
      },
      {
        day: 6,
        title: 'Tapovan Sunrise Meditation & Meru Glacier Exploration',
        description: 'Experience an unforgettable sunrise over Mount Shivling and Meru. Silent meditation and satsang with resident sadhus. Afternoon walk towards the base of Meru peak. Evening bonfire discussion on Himalayan hermits.'
      },
      {
        day: 7,
        title: 'Tapovan to Bhojbasa & Return Trek to Gangotri',
        description: 'Careful descent back across the glacier moraine down to Bhojbasa, and continue trekking downward to Gangotri. Evening warm dinner and celebratory gathering at Gangotri guesthouse.'
      },
      {
        day: 8,
        title: 'Gangotri to Rishikesh / Haridwar Return',
        description: 'Morning drive down the mountains back to Rishikesh. Evening drop-off at Haridwar / Rishikesh railway station with sacred Ganga mementos.'
      }
    ],
    transportDetails: 'Private AC/Heated Tempo Traveller for road journeys; trekking segment supported by certified mountaineering guides, mountain porters, and pack mules for baggage.',
    accommodationDetails: '3 nights in guesthouses/hotels (Uttarkashi, Gangotri) and 4 nights in all-weather dome alpine tents equipped with sub-zero sleeping bags, fleece liners, and insulated mattresses.',
    meals: 'Freshly prepared, hot, high-energy sattvic vegetarian meals cooked by our expedition chef: porridge, dal, rice, khichdi, energy bars, dry fruits, and hot ginger lemon tea.',
    included: [
      'Forest department permits and Gangotri National Park fees',
      'All accommodation in hotels and high-altitude alpine camps',
      'All meals during the trek prepared fresh',
      'Certified Wilderness First Responder trek leader',
      'High-altitude medical kit, pulse oximeter, and emergency oxygen',
      'Porters/mules to carry up to 10 kg personal baggage per trekker'
    ],
    excluded: [
      'Personal trekking gear (down jackets, trekking poles, waterproof boots)',
      'Any emergency helicopter evacuation expenses'
    ],
    safetyRequirements: 'Trekking fitness required (capability to walk 5-6 hours daily with elevation gain). Medical certificate signed by a physician required. Minimum age 14, maximum 65 (subject to physical fitness).'
  },
  {
    id: 'trek-panch-kedar-tungnath',
    name: 'Madhmaheshwar & Tungnath Panch Kedar High Himalayan Trek',
    category: 'trekking',
    destination: 'Uttarakhand (Rishikesh, Ukhimath, Ransi, Madhmaheshwar, Chopta, Tungnath, Chandrashila)',
    duration: '7 Days / 6 Nights',
    travelMode: 'Hill Transit Coach + High-Altitude Alpine Trails',
    startingLocation: 'Rishikesh / Haridwar',
    shortDescription: 'Climb to Tungnath—the highest Shiva temple on earth (12,073 ft)—and trek the emerald wilderness of Madhmaheshwar where Lord Shiva’s naval is worshipped.',
    image: 'assets/temples/tungnath.jpg',
    featured: false,
    overview: 'The Panch Kedar pilgrimage honors the five shrines where different parts of Lord Shiva’s celestial bull manifestation appeared after the Mahabharata war. This high-alpine expedition focuses on two of the most enchanting Kedar shrines: Tungnath (revered for Shiva’s arms and the highest Hindu temple in the world) leading up to Chandrashila summit (13,000 ft), and Madhmaheshwar (where the navel and stomach are worshipped) set within an amphitheatre of virgin Himalayan wilderness.',
    historyBackground: 'According to tradition, the Pandavas built these five stone shrines to atone for the fratricidal war of Kurukshetra. Tungnath’s granite architecture has weathered centuries of extreme sub-zero blizzards. From the Chandrashila summit above Tungnath, pilgrims enjoy an unbroken 360-degree panorama of over 40 Himalayan peaks including Nanda Devi (India’s second highest peak), Trishul, Chaukhamba, and Kamet.',
    placesCovered: ['Rishikesh', 'Devprayag', 'Ukhimath', 'Ransi', 'Gaundhar', 'Madhmaheshwar', 'Chopta', 'Tungnath', 'Chandrashila Peak'],
    templeVisits: [
      'Omkareshwar Temple, Ukhimath (Winter seat of Kedarnath & Madhmaheshwar)',
      'Sri Madhmaheshwar Temple (Second Kedar, 11,473 ft)',
      'Budha Madhmaheshwar Ridge (High alpine tarn with Chaukhamba reflection)',
      'Sri Tungnath Temple (Third Kedar, 12,073 ft)',
      'Chandrashila Peak summit shrine'
    ],
    educationalActivities: [
      'Discourse on the Panch Kedar legend and the Shaivite philosophical lineage of the Rawals of Kedarnath.',
      'Birdwatching and flora identification in the Kedarnath Wildlife Sanctuary (home to the Himalayan musk deer and Monal pheasant).',
      'Panoramic geography workshop identifying the sacred peaks of the Garhwal Himalaya from Chandrashila summit.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Ukhimath – The Winter Seat',
        description: 'Drive along the Alaknanda and Mandakini rivers through Devprayag and Rudraprayag. Arrive at Ukhimath. Visit the Omkareshwar temple where Lord Kedarnath resides during winter. Overnight in Ukhimath.'
      },
      {
        day: 2,
        title: 'Ukhimath to Ransi & Trek to Gaundhar (10 km)',
        description: 'Drive to Ransi village. Start trek through dense oak and rhododendron forests alongside the roaring Madhyamaheshwar Ganga. Cross wooden hanging bridges to Gaundhar village. Camp / lodge stay.'
      },
      {
        day: 3,
        title: 'Gaundhar to Madhmaheshwar Shrine (10 km, 11,473 ft)',
        description: 'Steep climb through Nanu meadows with breathtaking views of waterfalls. Arrive at the pristine meadow basin of Madhmaheshwar temple by afternoon. Attend the tranquil evening Sandhya Aarti. Overnight in mountain guesthouse.'
      },
      {
        day: 4,
        title: 'Budha Madhmaheshwar & Return Trek to Ransi',
        description: 'Dawn trek of 1.5 km up to Budha Madhmaheshwar ridge. Witness Chaukhamba peaks reflecting in mirror tarns. Return trek downhill through Gaundhar back to Ransi. Drive to the scenic alpine meadows of Chopta.'
      },
      {
        day: 5,
        title: 'Chopta to Tungnath & Chandrashila Summit (13,115 ft)',
        description: 'Early morning stone-paved trail ascending through rhododendron glades to Tungnath temple. Seek blessings at the highest Shiva shrine. Continue 1.5 km to the summit of Chandrashila for a majestic 360-degree Himalayan sunrise. Return to Chopta.'
      },
      {
        day: 6,
        title: 'Chopta to Deoria Tal High-Altitude Lake',
        description: 'Morning trek to Deoria Tal, a crystal-clear emerald lake mirroring the mighty Chaukhamba massif. Legend relates this lake to the Yaksha Prashna episodes of the Mahabharata. Camp / stay at Sari village.'
      },
      {
        day: 7,
        title: 'Sari to Rishikesh Return Journey',
        description: 'Scenic return drive down to Rishikesh. Attend the famous Parmarth Niketan Ganga Aarti in Rishikesh before departure.'
      }
    ],
    transportDetails: 'Comfortable hill tourist vehicles (Mahindra Bolero / Tempo Traveller) with experienced mountain chauffeurs and certified local Garhwali trek guides.',
    accommodationDetails: 'A combination of clean village homestays, GMVN guesthouses, and premium alpine dome tents in Chopta.',
    meals: 'Nutritious sattvic vegetarian food featuring local Garhwali specialties (gahat dal, jhangora kheer, mandua rotis) and fresh vegetables.',
    included: [
      'All road transportation from Rishikesh and return',
      '6 nights accommodation in homestays/lodges/tents',
      'All meals during the expedition',
      'Local trek guide and support staff',
      'Wildlife sanctuary entry permits and camping fees'
    ],
    excluded: [
      'Pony / Mule charges if taken for personal riding',
      'Personal trekking poles and sleeping accessories'
    ],
    safetyRequirements: 'Good physical stamina required for sustained climbs. Layered fleece and thermal clothing essential for sub-zero night temperatures at Chopta and Madhmaheshwar.'
  },
  {
    id: 'trek-kinnaur-kailash',
    name: 'Kinnaur Kailash Parikrama Sacred High Altitude Trek',
    category: 'trekking',
    destination: 'Himachal Pradesh (Shimla, Kalpa, Tangling, Mebar, Parvati Kund, Kinnaur Kailash Shivling)',
    duration: '8 Days / 7 Nights',
    travelMode: 'Mountain Cruiser Coach + Extreme High Alpine Trek',
    startingLocation: 'Shimla / Chandigarh',
    shortDescription: 'Circumambulate the colossal 79-foot natural rock monolith of Kinnaur Kailash that changes colors through the day, standing high above the Sutlej valley.',
    image: 'assets/temples/kailash.jpg',
    featured: false,
    overview: 'Kinnaur Kailash (6,050 m) in Himachal Pradesh is revered as the winter abode of Lord Shiva and Devi Parvati. The colossal 79-foot natural rock pillar jutting from the mountain ridge resembles a sacred Trishul and Shivling. This revered high-altitude pilgrimage involves crossing boulder fields and snowfields to reach Parvati Kund and touch the base of the sacred pillar.',
    historyBackground: 'Kinnaur is traditionally considered the land of the celestial musicians—the Kinnaras mentioned in the Mahabharata. Unlike other Himalayan pillars, the rock of Kinnaur Kailash changes colors as the sun moves across the sky—from crimson red at dawn to golden ochre, jade grey at noon, and deep purple at twilight.',
    placesCovered: ['Shimla', 'Sarahan', 'Kalpa', 'Tangling', 'Ashari Glades', 'Bheem Dwar', 'Parvati Kund', 'Kinnaur Kailash Pillar'],
    templeVisits: [
      'Bhimakali Temple, Sarahan (51 Shaktipeethas - Mother Goddess)',
      'Kalpa Ancient Buddhist & Hindu Wood-Carved Temples',
      'Parvati Kund (High alpine glacial tarn, 14,800 ft)',
      'Kinnaur Kailash Shivling Monolith (15,750 ft)'
    ],
    educationalActivities: [
      'Study of the unique syncretic Indo-Tibetan wooden pagoda architecture of Kinnaur.',
      'Discourse on the Kinnara lore in the Mahabharata and Kalidasa’s Meghadutam.',
      'Observation of the mineral composition causing optical color changes on the rock monolith.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shimla to Sarahan – Gateway to Kinnaur',
        description: 'Drive along the Sutlej gorge from Shimla to Sarahan. Visit the legendary 800-year-old Bhimakali temple, an architectural masterpiece of timber and stone. Overnight in Sarahan.'
      },
      {
        day: 2,
        title: 'Sarahan to Kalpa – Apple Orchards under Kailash Peak',
        description: 'Drive deeper into Kinnaur to Kalpa village. Unobstructed view of the Kinnaur Kailash range. Acclimatization walk through apple orchards. Overnight in Kalpa.'
      },
      {
        day: 3,
        title: 'Kalpa to Tangling & Trek to Ashari Glades',
        description: 'Cross the Sutlej river to Tangling village (roadhead). Begin the steep ascent through deodar forests and alpine meadows to Ashari camp. Camp overnight.'
      },
      {
        day: 4,
        title: 'Ashari to Bheem Dwar (12,800 ft)',
        description: 'Trek above the tree line across vast bugyals and glacial streams. Arrive at Bheem Dwar, a giant rock shelter where the Pandavas are said to have taken refuge. Camp under the stars.'
      },
      {
        day: 5,
        title: 'Bheem Dwar to Parvati Kund & Shivling Monolith (15,750 ft)',
        description: 'Midnight departure (02:00 AM) to negotiate the steep scree and snow slope. Reach Parvati Kund at dawn. Perform prayers and continue to the base of the sacred 79-foot Shivling monolith. Chanting of Shiva Tandava Stotram. Descend safely to Bheem Dwar.'
      },
      {
        day: 6,
        title: 'Bheem Dwar to Tangling & Return to Kalpa',
        description: 'Descend through the alpine meadows back to Tangling village. Transfer back to Kalpa for a well-earned hot bath and celebration dinner.'
      },
      {
        day: 7,
        title: 'Kalpa to Rampur Bushahr',
        description: 'Drive back along the Hindustan-Tibet highway to Rampur. Visit Padam Palace and local markets.'
      },
      {
        day: 8,
        title: 'Rampur to Shimla / Chandigarh Drop-off',
        description: 'Scenic drive to Shimla / Chandigarh for onward departure.'
      }
    ],
    transportDetails: 'Sturdy 4WD hill vehicles and Tempo Travellers combined with seasoned high-altitude Kinnauri mountain guides and porters.',
    accommodationDetails: 'Quality mountain hotels in Sarahan and Kalpa, and specialized mountaineering 4-season tents at Ashari and Bheem Dwar.',
    meals: 'Fresh high-carbohydrate vegetarian meals, dry fruit trail packs, hot soups, and restorative mountain teas.',
    included: [
      'Inner-line administrative clearances and rescue insurance',
      'All transport, accommodation, and high-camp tents',
      'All meals during the entire itinerary',
      'Certified mountaineering guides and safety ropes',
      'Oxygen cylinder, medical kits, and satellite communicator'
    ],
    excluded: [
      'Personal trekking boots, crampons, or gaiters',
      'Personal porter bags exceeding 8 kg'
    ],
    safetyRequirements: 'Demanding high-altitude trek requiring prior trekking experience above 12,000 ft and vigorous cardiovascular fitness. Medical fitness certificate strictly enforced.'
  },

  // --- 5. CULTURAL TRAVEL ---
  {
    id: 'cultural-margazhi-chennai',
    name: 'Chennai Margazhi Music & Dance Festival Cultural Odyssey',
    category: 'cultural',
    destination: 'Tamil Nadu (Chennai, Mylapore, Kalakshetra, Mahabalipuram)',
    duration: '6 Days / 5 Nights',
    travelMode: 'Executive AC Chauffeur Driven Vehicles',
    startingLocation: 'Chennai (Direct Airport / Central Railway pickup)',
    shortDescription: 'Immerse in the world’s largest classical music festival—the December Margazhi season—featuring legendary Carnatic kutcheris, Bharatanatyam, and temple dawn bhajanas.',
    image: 'assets/cultural/carnatic-kutcheri.jpg',
    featured: true,
    overview: 'Every December and January, during the sacred Tamil month of Margazhi, Chennai transforms into the global epicenter of classical Carnatic music and Bharatanatyam dance with over 2,000 live performances across historic sabhas. This curated cultural journey provides reserved premier seating at iconic venues (Music Academy, Narada Gana Sabha, Kalakshetra), guided temple walks in ancient Mylapore, and private dialogues with acclaimed musicians.',
    historyBackground: 'In the Bhagavad Gita, Bhagavan Krishna states: "Among the months, I am Margashirsha (Margazhi)". The tradition of Margazhi singing was ignited by the Alvar saint Andal and her 30 immortal verses of Thiruppavai, sung at dawn in temple streets to awaken the soul. The modern sabha festival traces its formal origins to the 1927 Madras All India Music Conference and the founding of the Madras Music Academy.',
    placesCovered: ['Mylapore', 'Kalakshetra Foundation', 'The Music Academy', 'Narada Gana Sabha', 'Kapaleeshwarar Temple', 'Mahabalipuram UNESCO Shore Temples'],
    templeVisits: [
      'Kapaleeshwarar Temple, Mylapore (7th-century Pallava/Chola Shaivite sanctum)',
      'Sri Parthasarathy Temple, Triplicane (Ancient 8th-century Divya Desam)',
      'Marundeeswarar Temple, Thiruvanmiyur (Shiva as the divine physician)',
      'Shore Temple & Pancha Rathas, Mahabalipuram'
    ],
    educationalActivities: [
      'Dawn "Mada Veedhi" bhajan walkthrough with senior vidwans around Kapaleeshwarar temple tank.',
      'Curated lecture-demonstration on the 72 Melakarta raga system by a senior musicologist.',
      'Private walkthrough of Kalakshetra Foundation, exploring Rukmini Devi Arundale’s dance revival movement.',
      'Traditional South Indian sabha canteen culinary tour tasting piping hot Mysore pak, kalyana vadai, and degree filter coffee.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Chennai – The Soul of Carnatic Heritage',
        description: 'Airport/Station pickup. Check into 5-star hotel in Alwarpet/Mylapore. Afternoon orientation on Margazhi history. Evening inaugural concert at The Music Academy followed by traditional sabha canteen dinner.'
      },
      {
        day: 2,
        title: 'Mylapore Dawn Bhajan & Morning Kutcheris',
        description: 'At 05:30 AM, join the devotional Margazhi street bhajana around the Mada streets of Mylapore. Visit Kapaleeshwarar temple. Return for breakfast. Attend morning lecture-demonstrations and afternoon vocal concert by prominent vidwans.'
      },
      {
        day: 3,
        title: 'Kalakshetra Foundation & Evening Bharatanatyam',
        description: 'Morning private visit to Kalakshetra Foundation: witness open-air classical dance classes under banyan trees, saree weaving, and Kalamkari studios. Evening Bharatanatyam performance at Narada Gana Sabha.'
      },
      {
        day: 4,
        title: 'Instruments Guild & Triplicane Parthasarathy',
        description: 'Morning visit to artisan workshops in Mylapore where mridangams, veenas, and tamburas are hand-crafted. Darshan at the historic Sri Parthasarathy Temple. Evening grand jugalbandi concert.'
      },
      {
        day: 5,
        title: 'Excursion to Mahabalipuram Stone Poetry',
        description: 'Drive along the Bay of Bengal to Mahabalipuram. Explore Arjuna’s Penance (Descent of the Ganga), Pancha Rathas, and Shore Temple. Learn how dance poses were immortalized in 7th-century rock. Return to Chennai for a final evening vocal concert.'
      },
      {
        day: 6,
        title: 'Concluding Concert & Farewell',
        description: 'Morning concert and interactive feedback session with performing artists. Drop-off at Chennai Airport / Central Station.'
      }
    ],
    transportDetails: 'Chauffeur-driven AC luxury sedans / Toyota Innova Crysta for all intra-city and Mahabalipuram excursions.',
    accommodationDetails: '5 nights in premium 4-star/5-star heritage hotels in Central Chennai close to major sabhas.',
    meals: 'Curated traditional vegetarian dining including authentic sabha canteen delicacies, Chettinad vegetarian feasts, and South Indian filter coffee.',
    included: [
      'Reserved premium tickets/passes to 6 major music and dance performances',
      '5 nights luxury hotel stay with breakfast',
      'All local AC vehicle transfers',
      'Private expert guide / musicologist accompanying all sabha visits',
      'Exclusive Kalakshetra campus permit'
    ],
    excluded: [
      'Personal shopping for classical sarees or instruments',
      'Optional private music lessons'
    ],
    safetyRequirements: 'Formal/semi-formal Indian attire recommended for evening sabha concerts. Silence must be observed during live performances.'
  },
  {
    id: 'cultural-thanjavur-natyanjali',
    name: 'Thanjavur Brihadeeswara Natyanjali & Chola Temple Arts Yatra',
    category: 'cultural',
    destination: 'Tamil Nadu (Thanjavur, Kumbakonam, Swamimalai, Gangaikonda Cholapuram)',
    duration: '5 Days / 4 Nights',
    travelMode: 'AC Tourist Coach / Private Van',
    startingLocation: 'Trichy / Chennai',
    shortDescription: 'Witness the spellbinding Maha Shivaratri Natyanjali dance festival against the towering 1,000-year-old vimana of Brihadeeswarar Temple.',
    image: 'assets/cultural/ayodhya-dance.jpg',
    featured: false,
    overview: 'The Natyanjali Dance Festival held on Maha Shivaratri at the grand Brihadeeswarar Temple in Thanjavur is the supreme offering of classical dancers to Lord Nataraja—the cosmic Lord of Dance. Dancers from across India gather under the open skies against the floodlit granite walls of the Big Temple to perform Bharatanatyam, Kuchipudi, Kathak, and Odissi. This yatra combines festival attendance with explorations of bronze casting, Thanjavur paintings, and the Saraswathi Mahal library.',
    historyBackground: 'Inscribed on the walls of the Brihadeeswarar Temple (consecrated 1010 CE) are names of 400 devadasi temple dancers endowed by Emperor Rajaraja Chola, detailing their quarters and daily allowances. The 108 Karanas (fundamental dance postures of Bharata Muni’s Natya Shastra) are sculpted in stone along the inner upper tier of the temple sanctum, proving that architecture and classical dance were viewed as one unified offering.',
    placesCovered: ['Thanjavur', 'Swamimalai', 'Darasuram', 'Kumbakonam', 'Thiruvaiyaru'],
    templeVisits: [
      'Brihadeeswarar Temple (Natyanjali Stage & 108 Karana Sculptures)',
      'Thiruvaiyaru Aiyarappar Temple (Abode of Saint Tyagaraja)',
      'Airavatesvara Temple, Darasuram',
      'Swaminatha Swamy Temple, Swamimalai'
    ],
    educationalActivities: [
      'Detailed study of the 108 dance karanas sculpted in the Brihadeeswarar upper corridors.',
      'Masterclass in Thanjavur painting technique (embossed gold foil and natural stone pigments) with a traditional artist family.',
      'Pilgrimage to Saint Tyagaraja’s Samadhi at Thiruvaiyaru on the banks of Cauvery river.',
      'Sthapati workshop visit in Swamimalai observing bronze casting using the Madhuchishtavidhana (lost-wax) method.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Trichy & Drive to Royal Thanjavur',
        description: 'Pickup from Trichy Airport/Station. Drive to Thanjavur. Check into heritage palace resort. Afternoon visit to Thanjavur Royal Palace and Saraswathi Mahal Library. Evening opening of Natyanjali festival at Big Temple.'
      },
      {
        day: 2,
        title: 'Brihadeeswara Architecture & Natyanjali Night',
        description: 'Morning architectural study with an archaeologist exploring the granitic assembly, Chola frescoes, and monolithic Nandi. Afternoon rest. Evening to midnight attendance of the Natyanjali festival recitals.'
      },
      {
        day: 3,
        title: 'Thiruvaiyaru Musical Shrine & Painting Workshops',
        description: 'Morning drive to Thiruvaiyaru, the samadhi of Carnatic trinity saint Tyagaraja. Chanting of the Pancharatna Kritis. Afternoon hands-on workshop learning Thanjavur gold-leaf painting. Evening dance performances.'
      },
      {
        day: 4,
        title: 'Swamimalai Bronze Guild & Darasuram Musical Steps',
        description: 'Excursion to Swamimalai to witness casting of bronze Nataraja idols. Proceed to Darasuram to experience the musical stone steps of Airavatesvara temple. Return to Thanjavur for the grand festival finale.'
      },
      {
        day: 5,
        title: 'Concluding Blessings & Departure to Trichy',
        description: 'Morning peaceful darshan at Big Temple. Farewell breakfast and transfer to Trichy Airport for onward travel.'
      }
    ],
    transportDetails: 'Private AC coach / Innova Crysta for all regional delta travels.',
    accommodationDetails: '4 nights in verified heritage hotels in Thanjavur with traditional courtyards and satvik dining.',
    meals: 'Traditional Cauvery delta vegetarian feasts on plantain leaves with authentic filter coffee.',
    included: [
      'Special access seating passes for Natyanjali performances',
      '4 nights heritage stay with breakfast and dinner',
      'Private expert cultural guide',
      'Hands-on painting masterclass materials',
      'All vehicle transfers'
    ],
    excluded: [
      'Personal bronze statue purchases',
      'Individual archana fees at temples'
    ],
    safetyRequirements: 'Evening festival sessions run late into the night; shawls and folding cushions recommended for sitting on the stone prakara.'
  },
  {
    id: 'cultural-khajuraho-dance',
    name: 'Khajuraho Classical Dance Festival & Chandela Temple Tour',
    category: 'cultural',
    destination: 'Madhya Pradesh (Khajuraho, Orchha, Panna National Park)',
    duration: '5 Days / 4 Nights',
    travelMode: 'Flight to Khajuraho + AC Luxury Coach',
    startingLocation: 'Delhi / Khajuraho',
    shortDescription: 'Witness India’s finest Kathak, Odissi, and Bharatanatyam maestros perform against the illuminated 10th-century Western Group of Temples in Khajuraho.',
    image: 'assets/temples/khajuraho.jpg',
    featured: false,
    overview: 'The Khajuraho Dance Festival, held annually in February, is an internationally celebrated cultural event where classical dancers perform in an open-air auditorium directly against the floodlit backdrop of the magnificent Chitragupta and Kandariya Mahadeva temples. This tour blends stellar cultural recitals with the architectural genius of the Chandela dynasty and the medieval palaces of Orchha.',
    historyBackground: 'Constructed between 950 and 1050 CE by the Chandela rulers, the Khajuraho temples represent the pinnacle of Nagara architectural style. Celebrated worldwide for their sensuous and sacred sculptures, the monuments reflect the integral vision of Sanatana Dharma where Dharma, Artha, Kama, and Moksha are harmoniously portrayed as stages of the human soul’s ascent to divinity.',
    placesCovered: ['Khajuraho (Western, Eastern & Southern Groups)', 'Raneh Falls Canyon', 'Orchha Heritage Town', 'Panna'],
    templeVisits: [
      'Kandariya Mahadeva Temple (Architectural crowning jewel)',
      'Lakshmana Temple (Pristine Vaikuntha Vishnu sanctum)',
      'Chitragupta Temple (Rare shrine dedicated to Surya Dev)',
      'Chaturbhuj Temple & Matangeshwara Temple (Living Shiva temple)',
      'Ram Raja Temple, Orchha (Where Lord Rama is worshipped as King)'
    ],
    educationalActivities: [
      'In-depth iconography walkthrough explaining the four Purusharthas carved on Khajuraho stone friezes.',
      'Evening classical dance festival viewing with priority VIP seats.',
      'Excursion to Raneh Falls to observe the unique multi-hued crystalline granite canyon on the Ken river.',
      'Symposium on the history of the Chandela dynasty and the preservation of sacred art during medieval invasions.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Khajuraho – The Temple City',
        description: 'Flight arrival at Khajuraho Airport. Check into 5-star resort. Afternoon leisure. Evening transfer to the festival grounds for the inaugural dance recitals beneath the illuminated temples.'
      },
      {
        day: 2,
        title: 'Western Group of Temples Architectural Masterclass',
        description: 'Spend 4 morning hours with an art historian deciphering the Kandariya Mahadeva, Lakshmana, and Vishwanatha temples. Afternoon visit to the Archaeological Museum. Evening classical dance recitals (Kathak and Odissi).'
      },
      {
        day: 3,
        title: 'Eastern Group, Jain Temples & Raneh Falls',
        description: 'Morning visit to the Eastern group of temples: Parsvanatha and Ghantai temples. Afternoon drive to Raneh Falls canyon. Evening attending Bharatanatyam and Kuchipudi recitals.'
      },
      {
        day: 4,
        title: 'Day Trip to Medieval Orchha & Ram Raja Temple',
        description: 'Scenic drive to Orchha on the Betwa river. Explore Jahangir Mahal, Raja Mahal, and the famous Ram Raja Temple where police offer a gun salute to Lord Rama every evening. Return to Khajuraho for the festival closing night.'
      },
      {
        day: 5,
        title: 'Matangeshwar Blessings & Departure',
        description: 'Morning prayers at the ancient living Matangeshwar temple with its colossal 8-foot Shiva lingam. Transfer to Khajuraho Airport for flight back to Delhi.'
      }
    ],
    transportDetails: 'Private AC coach / luxury SUV for all transfers and excursions.',
    accommodationDetails: '4 nights in luxury 4-star/5-star heritage resort in Khajuraho with spa and gardens.',
    meals: 'Sattvic vegetarian Bundelkhandi and North Indian delicacies.',
    included: [
      'VIP passes for all evenings of the Khajuraho Dance Festival',
      '4 nights luxury resort accommodation',
      'All buffet breakfasts and dinners',
      'Certified ASI heritage guide',
      'All monument entries and excursion permits'
    ],
    excluded: [
      'Personal camera tokens at monuments',
      'Optional jungle safari at Panna Tiger Reserve'
    ],
    safetyRequirements: 'Evenings can be chilly in February; warm shawls and jackets necessary for the open-air festival venue.'
  }
];

// Cultural Events Seed Data
const INITIAL_CULTURAL_EVENTS = [
  {
    id: 'evt-1',
    name: 'Chennai Margazhi Sangeetha Utsavam',
    genre: 'Carnatic Music',
    artist: 'Sanjay Subrahmanyan & Vidwan Lalgudi G.J.R. Krishnan',
    date: 'Dec 18 – Dec 28, 2026',
    venue: 'The Madras Music Academy, TTK Road, Chennai',
    city: 'Chennai, Tamil Nadu',
    description: 'Premier evening vocal recital featuring rare ragas, intricate neraval expositions, and soulful compositions of the Carnatic Trinity.',
    travelPackageId: 'cultural-margazhi-chennai',
    image: 'assets/cultural/carnatic-kutcheri.jpg'
  },
  {
    id: 'evt-2',
    name: 'Maha Shivaratri Brihadeeswara Natyanjali',
    genre: 'Bharatanatyam & Classical Dance',
    artist: 'Leading National Dancers & Kalakshetra Troupe',
    date: 'Feb 24 – Feb 28, 2027',
    venue: 'Brihadeeswarar Temple Prakaram, Thanjavur',
    city: 'Thanjavur, Tamil Nadu',
    description: 'An auspicious offering of classical dance to Lord Nataraja under the stars before the 1,000-year-old Chola granite vimana.',
    travelPackageId: 'cultural-thanjavur-natyanjali',
    image: 'assets/cultural/ayodhya-dance.jpg'
  },
  {
    id: 'evt-3',
    name: 'Khajuraho National Dance Festival',
    genre: 'Kathak & Kuchipudi',
    artist: 'Pt. Birju Maharaj Repertory & Dr. Raja-Radha Reddy Group',
    date: 'Feb 20 – Feb 26, 2027',
    venue: 'Western Group of Temples Auditorium, Khajuraho',
    city: 'Khajuraho, Madhya Pradesh',
    description: 'World-renowned open-air dance celebrations held against the floodlit sandstone backdrop of the Kandariya Mahadeva temple.',
    travelPackageId: 'cultural-khajuraho-dance',
    image: 'assets/cultural/kukke-subrahmanya-stage.jpg'
  },
  {
    id: 'evt-4',
    name: 'Kashi Ganga Mahotsav & Classical Baithak',
    genre: 'Hindustani Classical Vocal & Sitar',
    artist: 'Pt. Rajan-Sajan Mishra Tradition & Pt. Debashish Bhattacharya',
    date: 'Nov 22 – Nov 26, 2026',
    venue: 'Assi Ghat & Rajghat, Varanasi',
    city: 'Varanasi, Uttar Pradesh',
    description: 'Sunset and dawn musical baithaks directly overlooking the flowing sacred Ganga, echoing with Dhrupad, Khayal, and Thumri.',
    travelPackageId: 'train-divya-kashi-ayodhya',
    image: 'assets/cultural/music-dance-federation.jpg'
  },
  {
    id: 'evt-5',
    name: 'Swathi Sangeetha Utsavam',
    genre: 'Carnatic & Hindustani',
    artist: 'Renowned Classical Maestros & Princely Court Musicians',
    date: 'Jan 06 – Jan 12, 2027',
    venue: 'Kuthiramalika Palace (Horse Palace), Thiruvananthapuram',
    city: 'Thiruvananthapuram, Kerala',
    description: 'Celebration of Maharaja Swathi Thirunal’s immortal compositions in the tranquil royal courtyard overlooking Padmanabhaswamy temple.',
    travelPackageId: 'train-dakshin-divya-desam',
    image: 'assets/cultural/mridangam-vidwan.jpg'
  }
];

// The Three Great Acharyas Seed Data
const ACHARYAS_DATA = [
  {
    id: 'adi-shankara',
    name: 'Adi Shankaracharya',
    philosophy: 'Advaita Vedanta (Non-Dualism)',
    timeline: 'c. 788 – 820 CE (Traditional reckoning: 509 BCE)',
    birthplace: 'Kalady, Kerala (Banks of Periyar / Poorna River)',
    mahasamadhi: 'Kedarnath, Uttarakhand',
    keyQuote: '"Brahma Satyam Jagan Mithya, Jivo Brahmaiva Naaparah"',
    translation: 'Brahman alone is real, the universe is an appearance, the individual self is not different from Brahman.',
    biography: 'Adi Shankara was born in Kalady to virtuous Nambudiri parents, Sivaguru and Aryamba. Exhibiting prodigy in the Vedas at age seven, he renounced worldly life and walked thousands of leagues barefoot across the length and breadth of India. In Varanasi, Omkareshwar, and Badarikashrama, he wrote monumental commentaries (Bhashyas) on the Prasthanatrayi (the Upanishads, the Brahma Sutras, and the Bhagavad Gita), demonstrating the non-dual truth of Vedic wisdom.',
    historicalContext: 'Distinguishing traditional accounts from documented history: Traditional digvijayas (such as Madhaviya Shankara Digvijayam) recount his debates with Mandana Mishra and Kumarila Bhatta, and his installation of the Sri Yantra at major shrines. Historically, Shankara’s philosophical consolidation unified diverse Vedic traditions under the Shanmata system (six deities: Shiva, Vishnu, Shakti, Surya, Ganesha, Kumara), eliminating harmful animistic practices and establishing the 4 cardinal Amnaya Peethams.',
    charDhamPeethams: [
      { name: 'Sringeri Sharada Peetham', direction: 'South', state: 'Karnataka', veda: 'Yajur Veda', mahavakya: 'Aham Brahmasmi' },
      { name: 'Govardhana Matha (Puri)', direction: 'East', state: 'Odisha', veda: 'Rig Veda', mahavakya: 'Prajnanam Brahma' },
      { name: 'Sharada Peetham (Dwarka)', direction: 'West', state: 'Gujarat', veda: 'Sama Veda', mahavakya: 'Tat Tvam Asi' },
      { name: 'Jyotirmath (Badrinath)', direction: 'North', state: 'Uttarakhand', veda: 'Atharva Veda', mahavakya: 'Ayam Atma Brahma' }
    ],
    sacredDestinations: [
      'Kalady (Kerala) – Janmabhoomi & Keerthi Sthambham',
      'Omkareshwar (Madhya Pradesh) – Meeting Guru Govinda Bhagavatpada',
      'Varanasi (Kashi) – Composition of Manisha Panchakam & Annapurna Stotram',
      'Sringeri (Karnataka) – Sharadamba & Vidyashankara Temple',
      'Kedarnath (Uttarakhand) – Samadhi Mandir at the Himalayan heights',
      'Kanchi (Tamil Nadu) – Kamakshi Temple & Sarvajna Peetha'
    ],
    recommendedJourneys: ['bus-sringeri-udupi', 'flight-char-dham-himalaya', 'train-divya-kashi-ayodhya']
  },
  {
    id: 'ramanujacharya',
    name: 'Sri Ramanujacharya',
    philosophy: 'Vishishtadvaita (Qualified Non-Dualism)',
    timeline: '1017 – 1137 CE (120 years of sacred life)',
    birthplace: 'Sriperumbudur, Tamil Nadu',
    mahasamadhi: 'Srirangam, Tamil Nadu (Sacred Thirumeni preserved)',
    keyQuote: '"Bhakti-Prapatti-Samashrayah"',
    translation: 'Through unreserved surrender (Prapatti) and loving devotion (Bhakti) to Lord Narayana, all souls attain eternal liberation.',
    biography: 'Sri Ramanuja was born to Asuri Kesava Somayaji and Kantimathi in Sriperumbudur. Guided by the teachings of Nammalvar and Sri Alavandar (Yamunacharya), he championed the path of divine surrender. When his Guru Thirukoshtiyur Nambi initiated him into the supreme Ashtakshari mantra with a warning of hellfire if revealed to others, Ramanuja climbed the temple tower and broadcasted the sacred mantra to all townspeople regardless of caste, stating he gladly accepted hell if thousands were saved.',
    historicalContext: 'Historically, Ramanujacharya reformed the temple administration of Srirangam (recorded in the Koil Olugu chronicle) and consecrated the Cheluvanarayana Swamy temple at Melkote (Karnataka) where he lived in exile during Chola sectarian persecution. He emphasized the spiritual equality of all devotees, welcoming oppressed communities into temples as "Thirukulathar". His embalmed bodily form (Thirumeni) remains enshrined in Srirangam to this day.',
    charDhamPeethams: [
      { name: 'Srirangam Temple', direction: 'South Head', state: 'Tamil Nadu', role: 'Headquarters of Sri Vaishnava Sampradaya' },
      { name: 'Tirumala Tirupati', direction: 'Holy Hill', state: 'Andhra Pradesh', role: 'Temple rituals systematized by Ramanuja' },
      { name: 'Thirunarayanapuram (Melkote)', direction: 'Karnataka', state: 'Karnataka', role: 'Kalyani Kunda & Cheluvanarayana Temple' },
      { name: 'Badarikashrama', direction: 'North', state: 'Uttarakhand', role: 'Pilgrimage to re-consecrate Narayana shrine' }
    ],
    sacredDestinations: [
      'Sriperumbudur (Tamil Nadu) – Birthplace & Adikesava Perumal Temple',
      'Srirangam (Tamil Nadu) – 156-acre Ranganathaswamy Temple & Samadhi',
      'Kanchipuram (Tamil Nadu) – Varadharaja Perumal Temple',
      'Melkote (Karnataka) – Cheluvanarayana Swamy & Yoga Narasimha',
      'Tirumala (Andhra Pradesh) – Lord Venkateswara Sanctum',
      'Kumbakonam (Tamil Nadu) – Sarangapani Temple'
    ],
    recommendedJourneys: ['train-dakshin-divya-desam', 'bus-chola-navagraha', 'train-divya-kashi-ayodhya']
  },
  {
    id: 'madhvacharya',
    name: 'Sri Madhvacharya (Ananda Tirtha)',
    philosophy: 'Dvaita Vedanta (Dualism / Tattvavada)',
    timeline: '1238 – 1317 CE (Vijayadashami appearance)',
    birthplace: 'Pajaka Kshetra, near Udupi, Karnataka',
    mahasamadhi: 'Badarikashrama (Disappeared into the higher Himalayas)',
    keyQuote: '"Harir-eva Paro Devas, Tattvam Veda-pratipaditam"',
    translation: 'Sri Hari (Lord Vishnu) alone is Supreme. The soul and the world are eternally distinct and real; service to Hari is liberation.',
    biography: 'Born as Vasudeva to Madhva Geetha and Vedavati in Pajaka Kshetra, he demonstrated extraordinary physical strength and intellectual genius, revered traditionally as the third avatar of Vayu (following Hanuman and Bhima). Ordained as Ananda Tirtha, he traveled across India challenging illusionist doctrines, holding that the cosmos is an objective reality created and sustained by the sovereign will of Bhagavan.',
    historicalContext: 'Historically, Madhvacharya established the world-famous Krishna Matha at Udupi. He miraculously retrieved the ancient Saligrama Krishna idol from a merchant ship trapped in a storm at Malpe beach, hidden within balls of Gopichandana. To perpetuate continuous worship without sectarian dispute, he founded the Ashta Mathas (Eight Monasteries) of Udupi, establishing the biennial Paryaya rotation system that continues uninterrupted after 700 years.',
    charDhamPeethams: [
      { name: 'Ashta Mathas of Udupi', direction: 'Coastal Karnataka', state: 'Karnataka', role: 'Paryaya system of Krishna worship' },
      { name: 'Pajaka Kshetra', direction: 'Udupi', state: 'Karnataka', role: 'Birthplace & childhood leelas' },
      { name: 'Kanva Theertha', direction: 'Karnataka', state: 'Karnataka', role: 'Writing of Brahma Sutra Bhashya' },
      { name: 'Upper Badari', direction: 'Himalayas', state: 'Uttarakhand', role: 'Audience with Maharishi Veda Vyasa' }
    ],
    sacredDestinations: [
      'Pajaka Kshetra & Durga Betta (Karnataka) – Birthplace',
      'Udupi Sri Krishna Matha & Chandramouleshwara (Karnataka)',
      'Kanva Theertha (Karnataka) – Creation of Ashta Mathas',
      'Dharmasthala (Karnataka) – Anna Dana and Manjunatha kshetra',
      'Badrinath (Uttarakhand) – Meeting Sri Veda Vyasa',
      'Talacauvery & Bhagamandala (Karnataka)'
    ],
    recommendedJourneys: ['bus-sringeri-udupi', 'flight-char-dham-himalaya']
  }
];

// Featured Sacred Destinations
const INITIAL_DESTINATIONS = [
  {
    id: 'kashi',
    name: 'Kashi (Varanasi)',
    tagline: 'The Eternal City of Light & Liberation',
    state: 'Uttar Pradesh',
    image: 'assets/temples/kashi.jpg',
    description: 'Resting on the trident of Lord Shiva on the sacred crescent of the Ganga, Kashi is the supreme pilgrimage ground where mortal life touches cosmic eternity.',
    significance: 'Home to the Sri Kashi Vishwanath Jyotirlinga, the Ganga Dashashwamedh Aarti, Manikarnika Ghat, and centuries of Vedic scholarship.'
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    tagline: 'Highest of the Twelve Jyotirlingas',
    state: 'Uttarakhand (Garhwal Himalayas)',
    image: 'assets/temples/kedarnath.jpg',
    description: 'Nestled at 11,755 ft against the snow-laden Mandakini amphitheater, Kedarnath is where Lord Shiva’s hump manifested to bless the Pandavas.',
    significance: 'Panch Kedar head, ancient stone architecture capable of withstanding avalanches, and the final resting site of Adi Shankaracharya.'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur & Chola Delta',
    tagline: 'The Zenith of Dravidian Temple Architecture',
    state: 'Tamil Nadu',
    image: 'assets/temples/thanjavur.jpg',
    description: 'The monumental Brihadeeswarar Temple of Rajaraja Chola, flanked by lost-wax bronze casting guilds, Natyanjali dance, and Saraswathi Mahal.',
    significance: 'UNESCO World Heritage Living Chola Temples with monolithic granite vimanas and 1,000-year-old dance inscriptions.'
  },
  {
    id: 'udupi-sringeri',
    name: 'Sringeri & Udupi',
    tagline: 'Sanctums of Advaita and Dvaita Vedanta',
    state: 'Karnataka (Western Ghats)',
    image: 'assets/temples/belur.jpg',
    description: 'From the peaceful banks of the Tunga where Adi Shankara founded the Sharada Peetham to the Kanakana Kindi window of Udupi Krishna.',
    significance: 'Spiritual synthesis of the Sahyadri rainforests, Hoysala soapstone artistry at Belur, and centuries of unbroken Vedic scholarship.'
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram & Dhanushkodi',
    tagline: 'The Sacred Confluence of Rama and Shiva',
    state: 'Tamil Nadu (Pamban Island)',
    image: 'assets/temples/rameswaram.jpg',
    description: 'The island where Lord Rama built the Ram Setu to Lanka and consecrated the Shiva Lingam to atone for the war.',
    significance: '22 sacred freshwater healing wells (Theerthams), world’s longest sculpted temple corridor, and Agni Theertham seaside snana.'
  },
  {
    id: 'puri',
    name: 'Jagannath Puri',
    tagline: 'The Eastern Char Dham & Eternal Mahaprasad',
    state: 'Odisha',
    image: 'assets/temples/puri.jpg',
    description: 'The grand seaside abode of Lord Jagannath, Balabhadra, and Subhadra, celebrated for the world-famous Ratha Yatra and 56-bhog.',
    significance: 'Eastern cardinal Char Dham, traditional Daitapati tribal-Vedic synthesis, and adjacent Konark Sun Temple chariot marvel.'
  }
];

// Initial Seed for Enquiries
const INITIAL_ENQUIRIES = [
  {
    id: 'PP-2026-YTR-1082',
    date: '2026-11-10T10:15:00Z',
    fullName: 'Suresh Narayanan',
    email: 'suresh.n@example.com',
    phone: '+91 98450 12345',
    startingLocation: 'Bengaluru',
    preferredPackageId: 'bus-sringeri-udupi',
    packageName: 'Pancha Kshetras & Hoysala Heritage Circuit',
    category: 'bus',
    departureDate: '2026-12-15',
    travellers: '4',
    requirements: 'Traveling with elderly parents (aged 72 & 68). Require ground-floor or elevator rooms and wheelchair assistance at Sringeri if available. Strict sattvic food.',
    status: 'In Review',
    notes: 'Called customer. Advised VIP darshan arrangements for elderly parents in Sringeri and Udupi.'
  },
  {
    id: 'PP-2026-YTR-1083',
    date: '2026-11-11T14:40:00Z',
    fullName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98101 56789',
    startingLocation: 'New Delhi',
    preferredPackageId: 'flight-char-dham-himalaya',
    packageName: 'Char Dham Sacred Himalayan Yatra by Air & Helicopter',
    category: 'flight',
    departureDate: '2027-05-10',
    travellers: '2',
    requirements: 'Interested in early booking for next summer’s May opening. We want the Maha Abhishek puja booking at Badrinath.',
    status: 'New',
    notes: 'Pre-season reservation inquiry for May 2027.'
  }
];

// Initial Seed for Artist Registrations
const INITIAL_ARTISTS = [
  {
    id: 'ART-2026-001',
    date: '2026-11-08T09:30:00Z',
    name: 'Radhika Swaminathan',
    email: 'radhika.dance@example.com',
    phone: '+91 94440 88211',
    city: 'Chennai',
    country: 'India',
    artForm: 'Bharatanatyam (Kalakshetra Bani)',
    experience: '14 years',
    preferredLocation: 'Thanjavur Brihadeeswara Natyanjali, Chidambaram, Kumbakonam',
    availability: 'Maha Shivaratri (Feb/March) & Margazhi Season',
    portfolioUrl: 'https://youtube.com/watch?v=example-radhika-varnam',
    status: 'Verified',
    notes: 'Senior disciple with Doordarshan Graded certification. Suitable for temple festival stages.'
  },
  {
    id: 'ART-2026-002',
    date: '2026-11-12T16:20:00Z',
    name: 'Vidwan K. V. Sriraman',
    email: 'kvsriraman.veena@example.com',
    phone: '+91 98801 77334',
    city: 'Bengaluru',
    country: 'India',
    artForm: 'Saraswathi Veena & Vedic Chanting',
    experience: '22 years',
    preferredLocation: 'Sringeri Sharada Peetham, Udupi Krishna Matha, Melkote',
    availability: 'Navaratri & Margazhi months',
    portfolioUrl: 'https://soundcloud.com/example-kvsriraman-veena',
    status: 'Pending Review',
    notes: 'Requested performance during Sringeri Sharada Navaratri.'
  }
];

// Database Management Helper
class PrashantiDatabase {
  static getPackages() {
    const data = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(INITIAL_PACKAGES));
      return INITIAL_PACKAGES;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing packages from localStorage', e);
      return INITIAL_PACKAGES;
    }
  }

  static getPackageById(id) {
    const list = this.getPackages();
    return list.find(p => p.id === id) || null;
  }

  static getPackagesByCategory(category) {
    const list = this.getPackages();
    if (!category || category === 'all') return list;
    return list.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  static savePackages(packages) {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  }

  static addPackage(pkg) {
    const list = this.getPackages();
    list.unshift(pkg);
    this.savePackages(list);
    return pkg;
  }

  static updatePackage(id, updatedPkg) {
    const list = this.getPackages();
    const index = list.findIndex(p => p.id === id);
    if (index !== -1) {
      list[index] = { ...list[index], ...updatedPkg };
      this.savePackages(list);
      return list[index];
    }
    return null;
  }

  static deletePackage(id) {
    let list = this.getPackages();
    list = list.filter(p => p.id !== id);
    this.savePackages(list);
    return true;
  }

  // Enquiries
  static getEnquiries() {
    const data = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_ENQUIRIES));
      return INITIAL_ENQUIRIES;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_ENQUIRIES;
    }
  }

  static addEnquiry(enquiry) {
    const list = this.getEnquiries();
    list.unshift(enquiry);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(list));
    return enquiry;
  }

  static updateEnquiryStatus(id, status, notes = '') {
    const list = this.getEnquiries();
    const item = list.find(e => e.id === id);
    if (item) {
      item.status = status;
      if (notes) item.notes = notes;
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(list));
      return item;
    }
    return null;
  }

  // Artists
  static getArtists() {
    const data = localStorage.getItem(STORAGE_KEYS.ARTISTS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.ARTISTS, JSON.stringify(INITIAL_ARTISTS));
      return INITIAL_ARTISTS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_ARTISTS;
    }
  }

  static addArtist(artist) {
    const list = this.getArtists();
    list.unshift(artist);
    localStorage.setItem(STORAGE_KEYS.ARTISTS, JSON.stringify(list));
    return artist;
  }

  static updateArtistStatus(id, status) {
    const list = this.getArtists();
    const item = list.find(a => a.id === id);
    if (item) {
      item.status = status;
      localStorage.setItem(STORAGE_KEYS.ARTISTS, JSON.stringify(list));
      return item;
    }
    return null;
  }

  // Cultural Events
  static getEvents() {
    const data = localStorage.getItem(STORAGE_KEYS.EVENTS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(INITIAL_CULTURAL_EVENTS));
      return INITIAL_CULTURAL_EVENTS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_CULTURAL_EVENTS;
    }
  }

  static addEvent(evt) {
    const list = this.getEvents();
    list.unshift(evt);
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(list));
    return evt;
  }

  static deleteEvent(id) {
    let list = this.getEvents();
    list = list.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(list));
    return true;
  }

  // Destinations
  static getDestinations() {
    const data = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(INITIAL_DESTINATIONS));
      return INITIAL_DESTINATIONS;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_DESTINATIONS;
    }
  }

  // Reset to original seed
  static resetAllData() {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(INITIAL_PACKAGES));
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_ENQUIRIES));
    localStorage.setItem(STORAGE_KEYS.ARTISTS, JSON.stringify(INITIAL_ARTISTS));
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(INITIAL_CULTURAL_EVENTS));
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(INITIAL_DESTINATIONS));
  }
}

// Make accessible to all pages
window.PrashantiDB = PrashantiDatabase;
window.ACHARYAS_DATA = ACHARYAS_DATA;
