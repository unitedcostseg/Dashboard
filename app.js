// Highlight nav items
document.querySelectorAll('.nav__item').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.nav__item').forEach(i=>i.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('sectionTitle').textContent = btn.textContent;
  });
});

// Toggle hamburger menu
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu(){
  hamburger?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.remove('is-open');
  mobileMenu?.setAttribute('aria-hidden','true');
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('is-open', !open);
    mobileMenu.setAttribute('aria-hidden', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('is-open')) return;
    if (!mobileMenu.contains(e.target) && e.target !== hamburger) {
      closeMenu();
    }
  });
}

// Clicks on menu items -> activate same section as sidebar
document.querySelectorAll('.mobile-menu [data-nav]').forEach(btn=>{
  btn.addEventListener('click', () => {
    const label = btn.getAttribute('data-nav');

    // Update title
    document.getElementById('sectionTitle').textContent = label;

    // Sync highlight with sidebar (if present)
    const sideItems = Array.from(document.querySelectorAll('.nav__item'));
    sideItems.forEach(i => i.classList.toggle('is-active', i.textContent.trim() === label));

    closeMenu();
  });
});

// Optional actions
document.getElementById('mobileLogout')?.addEventListener('click', ()=>{
  closeMenu();
  alert('Logging out…'); // swap with real logic
});
document.getElementById('mobileNotify')?.addEventListener('click', ()=>{
  closeMenu();
  alert('Notifications…'); // swap with real logic
});

}

// Example action handlers
document.getElementById('logoutBtn')?.addEventListener('click', ()=>alert('Logging out…'));
document.getElementById('notifyBtn')?.addEventListener('click', ()=>alert('Notifications…'));
document.getElementById('mobileLogout')?.addEventListener('click', ()=>alert('Logging out…'));
document.getElementById('mobileNotify')?.addEventListener('click', ()=>alert('Notifications…'));
