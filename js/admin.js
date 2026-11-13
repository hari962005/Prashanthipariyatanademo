/**
 * Prashanti Paryatana - Admin Dashboard Controller
 * Full CRUD for Packages, Enquiries, Artist Registrations, and Cultural Events
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminDashboard();
});

const ADMIN_CREDENTIALS = {
  username: 'admin',
  pin: 'sanskrit108'
};

function initAdminDashboard() {
  checkAdminAuth();
  initAdminTabs();
  initAdminSearch();
  initPackageForm();
  initCulturalEventForm();
}

/**
 * Authentication Management
 */
function checkAdminAuth() {
  const isAuth = sessionStorage.getItem('pp_admin_authenticated') === 'true';
  const lockScreen = document.getElementById('adminLockScreen');
  const mainContent = document.getElementById('adminMainDashboard');

  if (isAuth) {
    if (lockScreen) lockScreen.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    refreshAllAdminData();
  } else {
    if (lockScreen) lockScreen.style.display = 'flex';
    if (mainContent) mainContent.style.display = 'none';
  }

  // Login form handler
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = loginForm.adminUsername.value.trim();
      const pin = loginForm.adminPin.value.trim();

      if (user === ADMIN_CREDENTIALS.username && pin === ADMIN_CREDENTIALS.pin) {
        sessionStorage.setItem('pp_admin_authenticated', 'true');
        if (lockScreen) lockScreen.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
        window.showToast('Namaskaram! Welcome to Prashanti Paryatana Admin Console.', 'success');
        refreshAllAdminData();
      } else {
        window.showToast('Invalid administrator credentials. Access restricted.', 'error');
      }
    });
  }
}

function adminLogout() {
  sessionStorage.removeItem('pp_admin_authenticated');
  window.location.reload();
}

/**
 * Tab Navigation in Admin
 */
function initAdminTabs() {
  const tabButtons = document.querySelectorAll('.admin-tab-btn');
  const panels = document.querySelectorAll('.admin-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/**
 * Refresh All Data Tables and Metric Counters
 */
function refreshAllAdminData() {
  if (!window.PrashantiDB) return;

  const packages = window.PrashantiDB.getPackages();
  const enquiries = window.PrashantiDB.getEnquiries();
  const artists = window.PrashantiDB.getArtists();
  const events = window.PrashantiDB.getEvents();

  // Metrics
  const statPackages = document.getElementById('statTotalPackages');
  const statEnquiries = document.getElementById('statActiveEnquiries');
  const statArtists = document.getElementById('statArtistRegistrations');
  const statEvents = document.getElementById('statCulturalEvents');

  if (statPackages) statPackages.textContent = packages.length;
  if (statEnquiries) statEnquiries.textContent = enquiries.length;
  if (statArtists) statArtists.textContent = artists.length;
  if (statEvents) statEvents.textContent = events.length;

  renderPackagesTable(packages);
  renderEnquiriesTable(enquiries);
  renderArtistsTable(artists);
  renderEventsTable(events);
}

/**
 * Packages Table & CRUD
 */
function renderPackagesTable(packages) {
  const tbody = document.getElementById('adminPackagesTableBody');
  if (!tbody) return;

  if (packages.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem;">No packages found. Click "Add New Package" to create one.</td></tr>`;
    return;
  }

  tbody.innerHTML = packages.map(pkg => `
    <tr>
      <td>
        <img src="${pkg.image}" alt="${pkg.name}" style="width: 50px; height: 38px; object-fit: cover; border-radius: var(--radius-sm);" />
      </td>
      <td>
        <strong>${pkg.name}</strong><br />
        <small style="color: var(--text-muted);">${pkg.destination}</small>
      </td>
      <td>
        <span class="package-card-badge cat-${pkg.category}" style="position:static; font-size: 0.65rem; padding: 0.2rem 0.5rem;">
          ${pkg.category.toUpperCase()}
        </span>
      </td>
      <td>${pkg.duration}</td>
      <td><small>${pkg.travelMode}</small></td>
      <td>
        <div class="table-action-btns">
          <a href="package-detail.html?id=${pkg.id}" target="_blank" class="btn-table-action" title="View live page">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button type="button" class="btn-table-action" onclick="openEditPackageModal('${pkg.id}')" title="Edit Package">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn-table-action delete" onclick="confirmDeletePackage('${pkg.id}')" title="Delete Package">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function initPackageForm() {
  const form = document.getElementById('packageEditorForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEdit = form.getAttribute('data-mode') === 'edit';
    const pkgId = form.pkgId.value.trim() || `pkg-${Date.now()}`;
    const name = form.pkgName.value.trim();
    const category = form.pkgCategory.value;
    const destination = form.pkgDestination.value.trim();
    const duration = form.pkgDuration.value.trim();
    const travelMode = form.pkgTravelMode.value.trim();
    const startingLocation = form.pkgStartingLocation.value.trim();
    const image = form.pkgImage.value.trim() || 'assets/temples/kashi.jpg';
    const shortDescription = form.pkgShortDesc.value.trim();
    const overview = form.pkgOverview.value.trim();
    const historyBackground = form.pkgHistory.value.trim();
    const transportDetails = form.pkgTransport.value.trim();
    const accommodationDetails = form.pkgAccommodation.value.trim();
    const meals = form.pkgMeals.value.trim();
    const safetyRequirements = form.pkgSafety.value.trim();

    // Collect Day-wise Itinerary
    const dayBlocks = document.querySelectorAll('.itinerary-editor-block');
    const itinerary = [];
    dayBlocks.forEach((block, idx) => {
      const title = block.querySelector('.itin-day-title-input').value.trim();
      const description = block.querySelector('.itin-day-desc-input').value.trim();
      if (title || description) {
        itinerary.push({
          day: idx + 1,
          title: title || `Day ${idx + 1} - Sacred Darshan`,
          description: description || 'Spiritual activities and temple visits.'
        });
      }
    });

    // Inclusions & Exclusions
    const included = form.pkgInclusions.value.split('\n').map(s => s.trim()).filter(Boolean);
    const excluded = form.pkgExclusions.value.split('\n').map(s => s.trim()).filter(Boolean);
    const templeVisits = form.pkgTemples.value.split('\n').map(s => s.trim()).filter(Boolean);
    const educationalActivities = form.pkgEducation.value.split('\n').map(s => s.trim()).filter(Boolean);

    const packageData = {
      id: pkgId,
      name,
      category,
      destination,
      duration,
      travelMode,
      startingLocation,
      image,
      shortDescription,
      overview,
      historyBackground,
      transportDetails,
      accommodationDetails,
      meals,
      safetyRequirements,
      itinerary: itinerary.length ? itinerary : [{ day: 1, title: 'Arrival & Sacred Welcome', description: 'Orientation and temple darshan.' }],
      included: included.length ? included : ['Dedicated heritage guide', 'All transportation', 'Sattvic meals'],
      excluded: excluded.length ? excluded : ['Personal offerings'],
      templeVisits: templeVisits.length ? templeVisits : [destination],
      educationalActivities: educationalActivities.length ? educationalActivities : ['Discourse on temple architecture and history'],
      featured: true
    };

    if (isEdit) {
      window.PrashantiDB.updatePackage(pkgId, packageData);
      window.showToast('Package updated successfully!', 'success');
    } else {
      window.PrashantiDB.addPackage(packageData);
      window.showToast('New pilgrimage package created!', 'success');
    }

    closePackageModal();
    refreshAllAdminData();
  });
}

function openAddPackageModal() {
  const modal = document.getElementById('packageEditorModal');
  const form = document.getElementById('packageEditorForm');
  const title = document.getElementById('packageModalTitle');

  if (!modal || !form) return;

  form.reset();
  form.setAttribute('data-mode', 'add');
  form.pkgId.readOnly = false;
  if (title) title.textContent = 'Add New Pilgrimage Package';

  // Seed default 3 days in itinerary builder
  resetItineraryEditor([
    { day: 1, title: 'Day 1: Sacred Arrival & Temple Darshan', description: 'Arrival at destination, checking into sattvic guesthouse, evening temple aarti.' },
    { day: 2, title: 'Day 2: Historic Architectural & Spiritual Immersion', description: 'Morning guided study of temple sculptures, stotra chanting, and darshan.' },
    { day: 3, title: 'Day 3: Sacred Confluence & Farewell', description: 'Early morning holy bath, final prayers, and return journey.' }
  ]);

  modal.classList.add('open');
}

function openEditPackageModal(id) {
  const pkg = window.PrashantiDB.getPackageById(id);
  if (!pkg) return;

  const modal = document.getElementById('packageEditorModal');
  const form = document.getElementById('packageEditorForm');
  const title = document.getElementById('packageModalTitle');

  if (!modal || !form) return;

  form.reset();
  form.setAttribute('data-mode', 'edit');
  form.pkgId.value = pkg.id;
  form.pkgId.readOnly = true;
  if (title) title.textContent = `Edit Package: ${pkg.name}`;

  form.pkgName.value = pkg.name || '';
  form.pkgCategory.value = pkg.category || 'bus';
  form.pkgDestination.value = pkg.destination || '';
  form.pkgDuration.value = pkg.duration || '';
  form.pkgTravelMode.value = pkg.travelMode || '';
  form.pkgStartingLocation.value = pkg.startingLocation || '';
  form.pkgImage.value = pkg.image || '';
  form.pkgShortDesc.value = pkg.shortDescription || '';
  form.pkgOverview.value = pkg.overview || '';
  form.pkgHistory.value = pkg.historyBackground || '';
  form.pkgTransport.value = pkg.transportDetails || '';
  form.pkgAccommodation.value = pkg.accommodationDetails || '';
  form.pkgMeals.value = pkg.meals || '';
  form.pkgSafety.value = pkg.safetyRequirements || '';

  form.pkgInclusions.value = (pkg.included || []).join('\n');
  form.pkgExclusions.value = (pkg.excluded || []).join('\n');
  form.pkgTemples.value = (pkg.templeVisits || []).join('\n');
  form.pkgEducation.value = (pkg.educationalActivities || []).join('\n');

  resetItineraryEditor(pkg.itinerary || []);

  modal.classList.add('open');
}

function closePackageModal() {
  const modal = document.getElementById('packageEditorModal');
  if (modal) modal.classList.remove('open');
}

function resetItineraryEditor(itineraryList) {
  const container = document.getElementById('itineraryEditorList');
  if (!container) return;

  container.innerHTML = '';
  itineraryList.forEach((item, idx) => {
    addItineraryDayRow(item.day || idx + 1, item.title, item.description);
  });
}

function addItineraryDayRow(dayNum, title = '', description = '') {
  const container = document.getElementById('itineraryEditorList');
  if (!container) return;

  const count = container.querySelectorAll('.itinerary-editor-block').length + 1;
  const currentDay = dayNum || count;

  const block = document.createElement('div');
  block.className = 'itinerary-editor-block';
  block.innerHTML = `
    <div class="itinerary-editor-header">
      <strong>Day ${currentDay}</strong>
      <button type="button" class="btn-remove-day" onclick="this.closest('.itinerary-editor-block').remove()">
        <i class="fa-solid fa-trash"></i> Remove Day
      </button>
    </div>
    <div style="margin-bottom: 0.6rem;">
      <input type="text" class="form-control itin-day-title-input" placeholder="Day Title / Highlights" value="${title || `Day ${currentDay}: Highlights`}" />
    </div>
    <div>
      <textarea class="form-control itin-day-desc-input" placeholder="Day Itinerary Details (activities, temples, discourses)" style="min-height: 70px;">${description}</textarea>
    </div>
  `;
  container.appendChild(block);
}

function confirmDeletePackage(id) {
  if (confirm(`Are you sure you want to delete package "${id}"? This action is immediate.`)) {
    window.PrashantiDB.deletePackage(id);
    window.showToast('Package removed successfully.', 'success');
    refreshAllAdminData();
  }
}

/**
 * Enquiries Table & Status Updates
 */
function renderEnquiriesTable(enquiries) {
  const tbody = document.getElementById('adminEnquiriesTableBody');
  if (!tbody) return;

  if (enquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 2rem;">No enquiries recorded yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = enquiries.map(enq => {
    const statusClasses = {
      'New': 'new',
      'In Review': 'in-review',
      'Confirmed': 'confirmed',
      'Archived': 'archived'
    };
    const sClass = statusClasses[enq.status] || 'new';

    return `
      <tr>
        <td><strong>${enq.id}</strong></td>
        <td>
          <strong>${enq.fullName}</strong><br />
          <small style="color:var(--text-muted);">${enq.phone} | ${enq.email}</small>
        </td>
        <td>
          ${enq.packageName}<br />
          <small style="color:var(--color-saffron);">Starts: ${enq.startingLocation}</small>
        </td>
        <td>${enq.departureDate} (${enq.travellers} pax)</td>
        <td>
          <span class="status-pill ${sClass}">${enq.status}</span>
        </td>
        <td>
          <small style="display:block; max-width: 220px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${enq.requirements}">
            ${enq.requirements}
          </small>
        </td>
        <td>
          <div class="table-action-btns">
            <button type="button" class="btn-table-action" onclick="openEnquiryDetailModal('${enq.id}')" title="View & Update Status">
              <i class="fa-solid fa-envelope-open-text"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openEnquiryDetailModal(id) {
  const enquiries = window.PrashantiDB.getEnquiries();
  const enq = enquiries.find(e => e.id === id);
  if (!enq) return;

  const modal = document.getElementById('enquiryViewModal');
  const body = document.getElementById('enquiryViewModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h3 style="color: var(--color-maroon); margin-bottom: 0.3rem;">Reference: ${enq.id}</h3>
      <span style="font-size: 0.8rem; color: var(--text-muted);">Received: ${new Date(enq.date).toLocaleString()}</span>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--color-sandalwood); padding: 1.2rem; border-radius: var(--radius-md);">
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Devotee Name</label>
        <p><strong>${enq.fullName}</strong></p>
      </div>
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Contact Details</label>
        <p>${enq.phone} | ${enq.email}</p>
      </div>
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Selected Package</label>
        <p><strong>${enq.packageName}</strong></p>
      </div>
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Target Departure & Pax</label>
        <p>${enq.departureDate} (${enq.travellers} Travellers)</p>
      </div>
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Starting Origin</label>
        <p>${enq.startingLocation}</p>
      </div>
      <div>
        <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Category</label>
        <p>${enq.category.toUpperCase()}</p>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Pilgrim Requirements & Medical Notes</label>
      <p style="padding: 0.8rem; background: #fff; border: 1px solid var(--color-sandalwood-border); border-radius: var(--radius-sm); margin-top: 0.3rem;">
        ${enq.requirements}
      </p>
    </div>

    <form onsubmit="handleUpdateEnquiryStatus(event, '${enq.id}')">
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Update Enquiry Status</label>
          <select id="updateStatusSelect" class="form-control">
            <option value="New" ${enq.status === 'New' ? 'selected' : ''}>New</option>
            <option value="In Review" ${enq.status === 'In Review' ? 'selected' : ''}>In Review</option>
            <option value="Confirmed" ${enq.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Archived" ${enq.status === 'Archived' ? 'selected' : ''}>Archived</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Internal Counselor Notes</label>
          <input type="text" id="updateNotesInput" class="form-control" value="${enq.notes || ''}" placeholder="e.g. VIP darshan arranged" />
        </div>
      </div>
      <button type="submit" class="form-submit-btn" style="margin-top: 1rem;">
        <i class="fa-solid fa-floppy-disk"></i> Save Status & Notes
      </button>
    </form>
  `;

  modal.classList.add('open');
}

function handleUpdateEnquiryStatus(e, id) {
  e.preventDefault();
  const status = document.getElementById('updateStatusSelect').value;
  const notes = document.getElementById('updateNotesInput').value.trim();

  window.PrashantiDB.updateEnquiryStatus(id, status, notes);
  window.showToast(`Enquiry ${id} updated to "${status}".`, 'success');

  const modal = document.getElementById('enquiryViewModal');
  if (modal) modal.classList.remove('open');
  refreshAllAdminData();
}

/**
 * Artist Registrations Table
 */
function renderArtistsTable(artists) {
  const tbody = document.getElementById('adminArtistsTableBody');
  if (!tbody) return;

  if (artists.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 2rem;">No classical artists registered yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = artists.map(art => `
    <tr>
      <td><strong>${art.id}</strong></td>
      <td>
        <strong>${art.name}</strong><br />
        <small style="color:var(--text-muted);">${art.city}, ${art.country}</small>
      </td>
      <td><strong>${art.artForm}</strong> (${art.experience})</td>
      <td><small>${art.preferredLocation}</small></td>
      <td>
        <a href="${art.portfolioUrl}" target="_blank" style="color: var(--color-saffron); text-decoration: underline;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Portfolio
        </a>
      </td>
      <td>
        <span class="status-pill ${art.status === 'Verified' ? 'confirmed' : 'in-review'}">${art.status}</span>
      </td>
      <td>
        <button type="button" class="btn-table-action" onclick="toggleArtistStatus('${art.id}', '${art.status}')" title="Toggle Verification">
          <i class="fa-solid fa-stamp"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleArtistStatus(id, currentStatus) {
  const newStatus = currentStatus === 'Verified' ? 'Pending Review' : 'Verified';
  window.PrashantiDB.updateArtistStatus(id, newStatus);
  window.showToast(`Artist registration updated to "${newStatus}".`, 'success');
  refreshAllAdminData();
}

/**
 * Cultural Events Table & Add
 */
function renderEventsTable(events) {
  const tbody = document.getElementById('adminEventsTableBody');
  if (!tbody) return;

  if (events.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem;">No cultural events listed.</td></tr>`;
    return;
  }

  tbody.innerHTML = events.map(evt => `
    <tr>
      <td><strong>${evt.name}</strong></td>
      <td><span class="status-pill in-review">${evt.genre}</span></td>
      <td>${evt.artist}</td>
      <td>${evt.date}</td>
      <td>${evt.venue}, ${evt.city}</td>
      <td>
        <button type="button" class="btn-table-action delete" onclick="confirmDeleteEvent('${evt.id}')" title="Delete Event">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function initCulturalEventForm() {
  const form = document.getElementById('addEventForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.eventName.value.trim();
    const genre = form.eventGenre.value.trim();
    const artist = form.eventArtist.value.trim();
    const date = form.eventDate.value.trim();
    const venue = form.eventVenue.value.trim();
    const city = form.eventCity.value.trim();
    const description = form.eventDesc.value.trim();
    const travelPackageId = form.eventPackageId.value;
    const image = form.eventImage.value.trim() || 'assets/cultural/carnatic-kutcheri.jpg';

    const newEvt = {
      id: `evt-${Date.now()}`,
      name,
      genre,
      artist,
      date,
      venue,
      city,
      description,
      travelPackageId: travelPackageId || 'cultural-margazhi-chennai',
      image
    };

    window.PrashantiDB.addEvent(newEvt);
    window.showToast('Cultural performance event added!', 'success');
    form.reset();
    closeAddEventModal();
    refreshAllAdminData();
  });
}

function openAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) modal.classList.add('open');
}

function closeAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) modal.classList.remove('open');
}

function confirmDeleteEvent(id) {
  if (confirm('Delete this cultural performance event?')) {
    window.PrashantiDB.deleteEvent(id);
    window.showToast('Event removed.', 'success');
    refreshAllAdminData();
  }
}

/**
 * Backup, Export & Reset
 */
function exportDatabaseJSON() {
  const fullBackup = {
    exportedAt: new Date().toISOString(),
    packages: window.PrashantiDB.getPackages(),
    enquiries: window.PrashantiDB.getEnquiries(),
    artists: window.PrashantiDB.getArtists(),
    events: window.PrashantiDB.getEvents(),
    destinations: window.PrashantiDB.getDestinations()
  };

  const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `prashanti_paryatana_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  window.showToast('Database exported as JSON backup.', 'success');
}

function resetDatabaseToSeed() {
  if (confirm('CAUTION: This will reset all packages, enquiries, and registrations back to original seed data. Proceed?')) {
    window.PrashantiDB.resetAllData();
    window.showToast('Database reset to original seed dataset.', 'success');
    refreshAllAdminData();
  }
}

/**
 * Global Admin Exports
 */
window.adminLogout = adminLogout;
window.openAddPackageModal = openAddPackageModal;
window.openEditPackageModal = openEditPackageModal;
window.closePackageModal = closePackageModal;
window.addItineraryDayRow = addItineraryDayRow;
window.confirmDeletePackage = confirmDeletePackage;
window.openEnquiryDetailModal = openEnquiryDetailModal;
window.handleUpdateEnquiryStatus = handleUpdateEnquiryStatus;
window.toggleArtistStatus = toggleArtistStatus;
window.openAddEventModal = openAddEventModal;
window.closeAddEventModal = closeAddEventModal;
window.confirmDeleteEvent = confirmDeleteEvent;
window.exportDatabaseJSON = exportDatabaseJSON;
window.resetDatabaseToSeed = resetDatabaseToSeed;
