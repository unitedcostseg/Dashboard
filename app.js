// ----- Utilities -----
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

function setActiveSection(label){
  // Title
  $('#sectionTitle').textContent = label;

  // Sidebar highlight (if visible)
  $$('.nav__item').forEach(i => i.classList.toggle('is-active', i.textContent.trim() === label));

  // Example content swap (simple placeholder)
  const panel = $('#contentPanel');
  panel.innerHTML = `
    <div class="empty">
      <p class="empty__title">${label}</p>
      <p class="empty__text">This is the ${label.toLowerCase()} area. Populate with cards, tables, or charts.</p>
    </div>
  `;
}

// ----- Sidebar clicks (desktop) -----
$$('.nav__item').forEach(btn => {
  btn.addEventListener('click', () => setActiveSection(btn.getAttribute('data-nav') || btn.textContent.trim()));
});

// ----- Hamburger & Mobile Menu -----
const hamburger = $('#hamburgerBtn');
const mobileMenu = $('#mobileMenu');

function openMenu(){
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
}
function closeMenu(){
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

if (hamburger && mobileMenu){
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('is-open')) return;
    if (!mobileMenu.contains(e.target) && e.target !== hamburger) closeMenu();
  });

  // escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
  });
}

// Mobile nav items
$$('.mobile-menu [data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    setActiveSection(btn.getAttribute('data-nav'));
    closeMenu();
  });
});

// Mobile actions
$('#mobileLogout')?.addEventListener('click', () => {
  closeMenu();
  alert('Logging out…'); // replace with your logout logic
});
$('#mobileNotify')?.addEventListener('click', () => {
  closeMenu();
  alert('Notifications…'); // replace with your notifications logic
});

// Init
setActiveSection('Home');
