// Highlight nav items
document.querySelectorAll('.nav__item').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.nav__item').forEach(i=>i.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('sectionTitle').textContent = btn.textContent;
  });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if(hamburger && mobileMenu){
  const toggleMenu = ()=>{
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('is-open', !open);
    mobileMenu.setAttribute('aria-hidden', String(open));
  };
  hamburger.addEventListener('click', e=>{
    e.stopPropagation(); toggleMenu();
  });
  document.addEventListener('click', e=>{
    if(mobileMenu.classList.contains('is-open') && !mobileMenu.contains(e.target) && e.target!==hamburger){
      hamburger.setAttribute('aria-expanded','false');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden','true');
    }
  });
}

// Example action handlers
document.getElementById('logoutBtn')?.addEventListener('click', ()=>alert('Logging out…'));
document.getElementById('notifyBtn')?.addEventListener('click', ()=>alert('Notifications…'));
document.getElementById('mobileLogout')?.addEventListener('click', ()=>alert('Logging out…'));
document.getElementById('mobileNotify')?.addEventListener('click', ()=>alert('Notifications…'));
