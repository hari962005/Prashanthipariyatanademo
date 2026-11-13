/**
 * Prashanti Paryatana - Cultural Travel Portal Controller
 * Performances Directory, Genre Filtering, and Artist Registration Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initCulturalPortal();
});

function initCulturalPortal() {
  initCulturalTabs();
  initCulturalSlideshow();
  renderCulturalEvents('all');
  initArtistRegistrationForm();
}

/**
 * Cultural Background Slideshow Rotator
 */
function initCulturalSlideshow() {
  const slides = document.querySelectorAll('.cultural-bg-slide');
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
  }, 4500);
}

/**
 * Tab Switching between "Attend Performances" and "Artist Participation"
 */
function initCulturalTabs() {
  const tabs = document.querySelectorAll('.cultural-tab-btn');
  const sections = {
    events: document.getElementById('culturalEventsSection'),
    artist: document.getElementById('artistRegistrationSection')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-target');
      if (target === 'events') {
        if (sections.events) sections.events.style.display = 'block';
        if (sections.artist) sections.artist.style.display = 'none';
      } else if (target === 'artist') {
        if (sections.events) sections.events.style.display = 'none';
        if (sections.artist) sections.artist.style.display = 'block';
      }
    });
  });
}

/**
 * Render Cultural Performance Cards
 */
function renderCulturalEvents(selectedGenre = 'all') {
  const container = document.getElementById('culturalEventsGrid');
  if (!container || !window.PrashantiDB) return;

  const allEvents = window.PrashantiDB.getEvents();
  const filtered = allEvents.filter(evt => {
    if (selectedGenre === 'all') return true;
    return evt.genre.toLowerCase().includes(selectedGenre.toLowerCase());
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--color-gold);">
        <p style="color: var(--text-muted);">No scheduled performances found in this genre currently.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(evt => `
    <article class="event-card">
      <div class="event-card-media">
        <img src="${evt.image}" alt="${evt.name}" loading="lazy" />
        <span class="event-genre-badge">${evt.genre}</span>
      </div>
      <div class="event-card-body">
        <h3>${evt.name}</h3>
        <div class="event-artist">
          <i class="fa-solid fa-guitar"></i>
          <span>${evt.artist}</span>
        </div>
        <div class="event-details-list">
          <div class="event-detail-row">
            <i class="fa-regular fa-calendar"></i>
            <span>${evt.date}</span>
          </div>
          <div class="event-detail-row">
            <i class="fa-solid fa-landmark-dome"></i>
            <span>${evt.venue}</span>
          </div>
          <div class="event-detail-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>${evt.city}</span>
          </div>
        </div>
        <p class="event-desc">${evt.description}</p>
        <div class="event-card-footer">
          <a href="package-detail.html?id=${evt.travelPackageId}" class="btn-explore" style="font-size: 0.72rem; padding: 0.55rem 0.9rem;">
            <span>Related Heritage Yatra</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <button type="button" class="btn-quick-enquire" onclick="openEnquiryModal('${evt.travelPackageId}', 'Event Pass Enquiry: ${escapeQuotes(evt.name)}', 'cultural')" title="Enquire Event Passes">
            <i class="fa-solid fa-ticket"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Artist Registration Form Handling
 */
function initArtistRegistrationForm() {
  const form = document.getElementById('artistRegistrationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.artistName.value.trim();
    const email = form.artistEmail.value.trim();
    const phone = form.artistPhone.value.trim();
    const city = form.artistCity.value.trim();
    const country = form.artistCountry.value.trim();
    const artForm = form.artistArtForm.value.trim();
    const experience = form.artistExperience.value.trim();
    const preferredLocation = form.artistLocation.value.trim();
    const availability = form.artistAvailability.value.trim();
    const portfolioUrl = form.artistPortfolio.value.trim();

    if (!name || !email || !phone || !artForm || !experience || !portfolioUrl) {
      window.showToast('Please fill out all mandatory artist details.', 'error');
      return;
    }

    const currentYear = new Date().getFullYear();
    const regId = `ART-${currentYear}-${Math.floor(100 + Math.random() * 900)}`;

    const artistData = {
      id: regId,
      date: new Date().toISOString(),
      name,
      email,
      phone,
      city: city || 'Not specified',
      country: country || 'India',
      artForm,
      experience,
      preferredLocation: preferredLocation || 'Open to all temple circuits',
      availability: availability || 'Festivals & Utsavas',
      portfolioUrl,
      status: 'Pending Review',
      notes: 'New artist registration submitted via portal.'
    };

    if (window.PrashantiDB) {
      window.PrashantiDB.addArtist(artistData);
    }

    // Success response
    const formContainer = document.getElementById('artistFormContainer');
    const successContainer = document.getElementById('artistSuccessContainer');
    const regIdEl = document.getElementById('artistRegIdDisplay');

    if (regIdEl) regIdEl.textContent = regId;
    if (formContainer) formContainer.style.display = 'none';
    if (successContainer) successContainer.style.display = 'block';

    window.showToast('Artist registration submitted with namaskars!', 'success');
    form.reset();
  });
}

function resetArtistForm() {
  const formContainer = document.getElementById('artistFormContainer');
  const successContainer = document.getElementById('artistSuccessContainer');
  if (formContainer) formContainer.style.display = 'block';
  if (successContainer) successContainer.style.display = 'none';
}

function filterEventsByGenre(genre, btnEl) {
  document.querySelectorAll('.genre-filter-pill').forEach(p => p.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderCulturalEvents(genre);
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

window.filterEventsByGenre = filterEventsByGenre;
window.resetArtistForm = resetArtistForm;
