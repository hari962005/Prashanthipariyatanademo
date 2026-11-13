/**
 * Prashanti Paryatana - Package Detail Page Controller
 * Deep Itinerary Rendering, Spiritual Background, Accordion, and Enquiry Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initPackageDetailPage();
});

function initPackageDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const packageId = urlParams.get('id');

  if (!window.PrashantiDB) return;

  let pkg = null;
  if (packageId) {
    pkg = window.PrashantiDB.getPackageById(packageId);
  }

  // Fallback to first featured package if ID is invalid or missing
  if (!pkg) {
    const all = window.PrashantiDB.getPackages();
    pkg = all[0];
  }

  renderPackageDetails(pkg);
}

function renderPackageDetails(pkg) {
  // Update document title
  document.title = `${pkg.name} | Prashanti Paryatana`;

  // Hero elements
  const heroBg = document.getElementById('detailHeroBg');
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  const detailTitle = document.getElementById('detailTitle');
  const detailMetaStrip = document.getElementById('detailMetaStrip');

  if (heroBg) heroBg.src = pkg.image;

  const categoryNames = {
    bus: 'Bus Tours',
    train: 'Train Tours',
    flight: 'Flight Packages',
    trekking: 'Trekking Expeditions',
    cultural: 'Cultural Travel'
  };

  const categoryFiles = {
    bus: 'bus-tours.html',
    train: 'train-tours.html',
    flight: 'flight-packages.html',
    trekking: 'trekking-expeditions.html',
    cultural: 'cultural.html'
  };

  const catName = categoryNames[pkg.category] || 'Packages';
  const catHref = categoryFiles[pkg.category] || `packages.html?category=${pkg.category}`;

  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = catName;
    breadcrumbCategory.href = catHref;
  }
  if (breadcrumbTitle) breadcrumbTitle.textContent = pkg.name;
  if (detailTitle) detailTitle.textContent = pkg.name;

  if (detailMetaStrip) {
    detailMetaStrip.innerHTML = `
      <div class="detail-meta-pill">
        <i class="fa-solid fa-location-dot"></i>
        <span>${pkg.destination}</span>
      </div>
      <div class="detail-meta-pill">
        <i class="fa-regular fa-clock"></i>
        <span>${pkg.duration}</span>
      </div>
      <div class="detail-meta-pill">
        <i class="fa-solid fa-route"></i>
        <span>${pkg.travelMode}</span>
      </div>
      ${pkg.startingLocation ? `
        <div class="detail-meta-pill">
          <i class="fa-solid fa-map-pin"></i>
          <span>Starts: ${pkg.startingLocation}</span>
        </div>
      ` : ''}
    `;
  }

  // Content Blocks
  const overviewEl = document.getElementById('detailOverview');
  if (overviewEl) {
    overviewEl.innerHTML = `
      <p class="detail-lead-text">${pkg.shortDescription}</p>
      <p class="detail-body-text">${pkg.overview}</p>
    `;
  }

  const historyEl = document.getElementById('detailHistory');
  if (historyEl) {
    historyEl.innerHTML = `
      <p class="detail-body-text">${pkg.historyBackground}</p>
    `;
  }

  // Itinerary Accordion
  const itineraryEl = document.getElementById('detailItinerary');
  if (itineraryEl && pkg.itinerary) {
    itineraryEl.innerHTML = `
      <div class="itinerary-timeline">
        ${pkg.itinerary.map((item, idx) => `
          <div class="itinerary-day-card ${idx === 0 ? 'active' : ''}">
            <div class="itinerary-day-header" onclick="toggleItineraryDay(this)">
              <div class="itinerary-day-title">
                <span class="day-badge">Day ${item.day}</span>
                <h4>${item.title}</h4>
              </div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="itinerary-day-body">
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Transport & Accommodation & Meals
  const logisticsEl = document.getElementById('detailLogistics');
  if (logisticsEl) {
    logisticsEl.innerHTML = `
      <div class="sacred-checklist">
        <div class="sacred-check-item">
          <i class="fa-solid fa-car-side"></i>
          <div>
            <strong>Transportation:</strong>
            <p>${pkg.transportDetails}</p>
          </div>
        </div>
        <div class="sacred-check-item">
          <i class="fa-solid fa-hotel"></i>
          <div>
            <strong>Sacred Accommodation:</strong>
            <p>${pkg.accommodationDetails}</p>
          </div>
        </div>
        <div class="sacred-check-item">
          <i class="fa-solid fa-bowl-food"></i>
          <div>
            <strong>Meals & Prasadam:</strong>
            <p>${pkg.meals}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Places Covered & Temple Visits
  const templesEl = document.getElementById('detailTemples');
  if (templesEl && pkg.templeVisits) {
    templesEl.innerHTML = `
      <div class="sacred-checklist">
        ${pkg.templeVisits.map(t => `
          <div class="sacred-check-item">
            <i class="fa-solid fa-gopuram"></i>
            <p><strong>${t}</strong></p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Educational & Spiritual Activities
  const educationalEl = document.getElementById('detailEducational');
  if (educationalEl && pkg.educationalActivities) {
    educationalEl.innerHTML = `
      <div class="sacred-checklist">
        ${pkg.educationalActivities.map(act => `
          <div class="sacred-check-item">
            <i class="fa-solid fa-book-open-reader"></i>
            <p>${act}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Inclusions & Exclusions
  const incExcEl = document.getElementById('detailIncExc');
  if (incExcEl) {
    incExcEl.innerHTML = `
      <div class="inclusions-grid">
        <div>
          <h4 style="color: var(--color-forest); margin-bottom: 1rem; font-size: 1rem;">
            <i class="fa-solid fa-circle-check"></i> What's Included
          </h4>
          <ul class="inc-list">
            ${(pkg.included || []).map(inc => `<li>${inc}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 style="color: #C0392B; margin-bottom: 1rem; font-size: 1rem;">
            <i class="fa-solid fa-circle-xmark"></i> What's Excluded
          </h4>
          <ul class="exc-list">
            ${(pkg.excluded || []).map(exc => `<li>${exc}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Safety Requirements
  const safetyEl = document.getElementById('detailSafety');
  if (safetyEl && pkg.safetyRequirements) {
    safetyEl.innerHTML = `
      <div class="artist-disclaimer-notice" style="border-left-color: var(--color-gold); margin-bottom: 0;">
        <strong><i class="fa-solid fa-shield-halved"></i> Pilgrim Etiquette & Safety Advisories</strong>
        <p>${pkg.safetyRequirements}</p>
      </div>
    `;
  }

  // Sticky Sidebar Details
  const sidebarTitle = document.getElementById('sidebarPackageTitle');
  const sidebarCategory = document.getElementById('sidebarCategory');
  const sidebarDuration = document.getElementById('sidebarDuration');
  const sidebarStarting = document.getElementById('sidebarStarting');
  const sidebarTransport = document.getElementById('sidebarTransport');
  const sidebarCtaBtn = document.getElementById('sidebarCtaBtn');

  if (sidebarTitle) sidebarTitle.textContent = pkg.name;
  if (sidebarCategory) sidebarCategory.textContent = catName;
  if (sidebarDuration) sidebarDuration.textContent = pkg.duration;
  if (sidebarStarting) sidebarStarting.textContent = pkg.startingLocation || 'Regional Hub';
  if (sidebarTransport) sidebarTransport.textContent = pkg.travelMode;

  if (sidebarCtaBtn) {
    sidebarCtaBtn.onclick = () => {
      window.openEnquiryModal(pkg.id, pkg.name, pkg.category);
    };
  }
}

function toggleItineraryDay(headerEl) {
  const card = headerEl.closest('.itinerary-day-card');
  if (card) {
    card.classList.toggle('active');
  }
}

window.toggleItineraryDay = toggleItineraryDay;
