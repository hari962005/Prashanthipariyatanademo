/**
 * Prashanti Paryatana - Main Application Core Script
 * Shared Header, Navigation, Modals, Enquiries, Toasts, and Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initBackgroundThemeAnimation();
  initNavigation();
  initEnquirySystem();
  initGlobalComponents();
});

/**
 * Website Loading Animation (Preloader from Logo)
 */
function initPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;

  // Ensure minimum graceful presentation of 1.1s
  const minDisplayTime = 1100;
  const startTime = Date.now();

  const hidePreloader = () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800);
    }, remaining);
  };

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
    // Safety fallback
    setTimeout(hidePreloader, 3500);
  }
}

/**
 * Background Logo Watermark & Sacred Theme Animation
 */
function initBackgroundThemeAnimation() {
  if (document.querySelector('.theme-floating-bg')) return;

  const bgContainer = document.createElement('div');
  bgContainer.className = 'theme-floating-bg';
  bgContainer.innerHTML = `
    <div class="floating-logo-watermark top-right"></div>
    <div class="floating-logo-watermark bottom-left"></div>
    <div class="floating-diya-glow" style="top: 15%; left: 8%; animation-delay: 0s;"></div>
    <div class="floating-diya-glow" style="top: 45%; right: 12%; animation-delay: 2.5s;"></div>
    <div class="floating-diya-glow" style="top: 75%; left: 20%; animation-delay: 4.8s;"></div>
  `;
  document.body.prepend(bgContainer);
}

/**
 * Navigation & Header Interactions
 */
function initNavigation() {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerCloseBtn = document.querySelector('.mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeDrawer();
      }
    });
  }

  // Header scroll appearance
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Active state detection
  highlightActiveNavigation();
}

function highlightActiveNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('category');

  // Category links
  document.querySelectorAll('.category-link, .mobile-nav-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (currentCategory && href.includes(`category=${currentCategory}`)) {
      link.classList.add('active');
    } else if (!currentCategory && href === currentPath && currentPath !== 'index.html') {
      link.classList.add('active');
    }
  });

  // Secondary links
  document.querySelectorAll('.secondary-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
}

/**
 * Package Card HTML Generator
 */
function createPackageCardHTML(pkg) {
  const categoryNames = {
    bus: 'Bus Tour',
    train: 'Train Tour',
    flight: 'Flight Package',
    trekking: 'Trekking Expedition',
    cultural: 'Cultural Travel'
  };

  const categoryIcons = {
    bus: 'fa-bus-simple',
    train: 'fa-train-subway',
    flight: 'fa-plane-departure',
    trekking: 'fa-person-hiking',
    cultural: 'fa-om'
  };

  const catName = categoryNames[pkg.category] || 'Spiritual Yatra';
  const catIcon = categoryIcons[pkg.category] || 'fa-dharmachakra';

  return `
    <article class="package-card" data-category="${pkg.category}" data-id="${pkg.id}">
      <div class="package-card-media">
        <img class="package-card-img" src="${pkg.image}" alt="${pkg.name}" loading="lazy" />
        <span class="package-card-badge cat-${pkg.category}">
          <i class="fa-solid ${catIcon}"></i> ${catName}
        </span>
        <span class="package-duration-tag">
          <i class="fa-regular fa-clock"></i> ${pkg.duration}
        </span>
      </div>
      <div class="package-card-body">
        <div class="package-destination">
          <i class="fa-solid fa-location-dot"></i> ${pkg.destination}
        </div>
        <h3 class="package-title">${pkg.name}</h3>
        <div class="package-card-meta">
          <div class="package-meta-item">
            <i class="fa-solid fa-route"></i>
            <span><strong>Mode:</strong> ${pkg.travelMode}</span>
          </div>
          ${pkg.startingLocation ? `
            <div class="package-meta-item">
              <i class="fa-solid fa-map-pin"></i>
              <span><strong>Starting from:</strong> ${pkg.startingLocation}</span>
            </div>
          ` : ''}
        </div>
        <p class="package-description">${pkg.shortDescription}</p>
        <div class="package-card-footer">
          <a href="package-detail.html?id=${pkg.id}" class="btn-explore">
            <span>Explore Package</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <button type="button" class="btn-quick-enquire" onclick="openEnquiryModal('${pkg.id}', '${escapeQuotes(pkg.name)}', '${pkg.category}')" title="Quick Enquiry">
            <i class="fa-solid fa-hands-praying"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/**
 * Enquiry System & Modal
 */
function initEnquirySystem() {
  // Listen for plan journey triggers
  document.querySelectorAll('.btn-plan-journey, [data-open-enquiry]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgId = btn.getAttribute('data-package-id') || '';
      const pkgName = btn.getAttribute('data-package-name') || '';
      const pkgCat = btn.getAttribute('data-category') || '';
      openEnquiryModal(pkgId, pkgName, pkgCat);
    });
  });

  // Modal close handlers
  const modal = document.getElementById('enquiryModal');
  if (modal) {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeEnquiryModal);
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeEnquiryModal();
      }
    });
  }

  // Form submission handler
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', handleEnquirySubmit);
  }
}

function openEnquiryModal(packageId = '', packageName = '', category = '') {
  const modal = document.getElementById('enquiryModal');
  if (!modal) return;

  const pkgSelect = document.getElementById('enqPackageSelect');
  const catSelect = document.getElementById('enqCategorySelect');
  const formSection = document.getElementById('enquiryFormContainer');
  const confirmSection = document.getElementById('enquiryConfirmationContainer');

  // Populate packages dropdown dynamically if needed
  if (pkgSelect && window.PrashantiDB) {
    const packages = window.PrashantiDB.getPackages();
    pkgSelect.innerHTML = '<option value="">-- Choose a Specific Sacred Package (Optional) --</option>';
    packages.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.name} (${p.duration})`;
      pkgSelect.appendChild(opt);
    });

    if (packageId) {
      pkgSelect.value = packageId;
    }
  }

  if (catSelect && category) {
    catSelect.value = category;
  }

  // Reset view to form
  if (formSection) formSection.style.display = 'block';
  if (confirmSection) confirmSection.style.display = 'none';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = e.target;

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const startingLocation = form.startingLocation.value.trim();
  const packageSelect = form.preferredPackage;
  const preferredPackageId = packageSelect ? packageSelect.value : '';
  const packageName = packageSelect && packageSelect.selectedIndex > 0 ? packageSelect.options[packageSelect.selectedIndex].text : 'Custom Pilgrimage Enquiry';
  const category = form.category ? form.category.value : 'all';
  const departureDate = form.departureDate.value;
  const travellers = form.travellers.value;
  const requirements = form.requirements.value.trim();

  // Basic Validation
  if (!fullName || !email || !phone || !departureDate || !travellers) {
    showToast('Please complete all required fields.', 'error');
    return;
  }

  // Generate Reference ID: PP-YYYY-YTR-XXXX
  const currentYear = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `PP-${currentYear}-YTR-${randomSuffix}`;

  const enquiryData = {
    id: referenceId,
    date: new Date().toISOString(),
    fullName,
    email,
    phone,
    startingLocation: startingLocation || 'Not specified',
    preferredPackageId,
    packageName,
    category,
    departureDate,
    travellers,
    requirements: requirements || 'No additional requirements noted.',
    status: 'New',
    notes: 'Submitted via website enquiry form.'
  };

  // Save to database
  if (window.PrashantiDB) {
    window.PrashantiDB.addEnquiry(enquiryData);
  }

  // Show Confirmation inside Modal
  const formSection = document.getElementById('enquiryFormContainer');
  const confirmSection = document.getElementById('enquiryConfirmationContainer');
  const refCodeDisplay = document.getElementById('confirmationRefCode');
  const refSummaryDisplay = document.getElementById('confirmationSummary');

  if (refCodeDisplay) refCodeDisplay.textContent = referenceId;
  if (refSummaryDisplay) {
    refSummaryDisplay.innerHTML = `
      <p><strong>Devotee / Pilgrim:</strong> ${fullName} (${phone})</p>
      <p><strong>Package / Journey:</strong> ${packageName}</p>
      <p><strong>Target Departure:</strong> ${departureDate} | <strong>Travellers:</strong> ${travellers}</p>
    `;
  }

  // Setup WhatsApp share button
  const whatsappBtn = document.getElementById('btnWhatsappShare');
  if (whatsappBtn) {
    const waText = encodeURIComponent(`Pranams! I have submitted a pilgrimage enquiry with Prashanti Paryatana (Ref: ${referenceId}) for ${packageName}. Devotee: ${fullName}.`);
    whatsappBtn.href = `https://wa.me/919845012345?text=${waText}`;
  }

  if (formSection) formSection.style.display = 'none';
  if (confirmSection) confirmSection.style.display = 'block';

  showToast('Enquiry received successfully! Our Acharya counselor will connect with you.', 'success');
  form.reset();
}

/**
 * Toast Notifications
 */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/**
 * Global Copy Utility
 */
function copyReferenceCode() {
  const codeEl = document.getElementById('confirmationRefCode');
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      showToast('Reference ID copied to clipboard!', 'success');
    });
  }
}

function initGlobalComponents() {
  // Expose global functions to window
  window.openEnquiryModal = openEnquiryModal;
  window.closeEnquiryModal = closeEnquiryModal;
  window.showToast = showToast;
  window.copyReferenceCode = copyReferenceCode;
  window.createPackageCardHTML = createPackageCardHTML;
}
