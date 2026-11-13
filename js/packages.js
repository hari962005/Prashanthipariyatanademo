/**
 * Prashanti Paryatana - Package Listing Controller
 * Dynamic Category Filtering, Search, and Grid Rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  initPackageListing();
});

function initPackageListing() {
  const container = document.getElementById('packagesGridContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';

  // Specific category page detection from body data-category or filename
  const bodyCategory = document.body.getAttribute('data-page-category');
  if (bodyCategory) {
    activeCategory = bodyCategory;
  }

  // Set active filter pill if exists
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    const pillCat = pill.getAttribute('data-category');
    if (pillCat === activeCategory) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }

    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pillCat;
      renderFilteredPackages();
    });
  });

  // Search input
  const searchInput = document.getElementById('packageSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderFilteredPackages();
    });
  }

  function renderFilteredPackages() {
    if (!window.PrashantiDB) return;
    const allPackages = window.PrashantiDB.getPackages();
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = allPackages.filter(pkg => {
      // Category match
      const matchesCategory = activeCategory === 'all' || pkg.category.toLowerCase() === activeCategory.toLowerCase();

      // Search match
      const matchesSearch = !query || 
        pkg.name.toLowerCase().includes(query) ||
        pkg.destination.toLowerCase().includes(query) ||
        pkg.shortDescription.toLowerCase().includes(query) ||
        pkg.travelMode.toLowerCase().includes(query) ||
        (pkg.startingLocation && pkg.startingLocation.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--color-gold);">
          <i class="fa-solid fa-om" style="font-size: 3rem; color: var(--color-gold); margin-bottom: 1rem;"></i>
          <h3 style="color: var(--color-maroon); margin-bottom: 0.5rem;">No Pilgrimage Packages Found</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem auto;">
            We could not find any spiritual journeys matching your specific filter. Please adjust your search criteria or contact our counselors for a customized yatra.
          </p>
          <button type="button" class="btn-plan-journey" onclick="openEnquiryModal('', 'Custom Pilgrimage Enquiry', '${activeCategory}')">
            <i class="fa-solid fa-hands-praying"></i> Request Custom Pilgrimage
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(pkg => window.createPackageCardHTML(pkg)).join('');
  }

  // Initial render
  renderFilteredPackages();
}
