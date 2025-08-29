// Minimal behavior: set active nav, update banner title, persist choice
const nav = document.querySelector('.nav');
const title = document.getElementById('sectionTitle');
const content = document.getElementById('contentArea');
const saved = localStorage.getItem('activeSection');

if (saved) activate(saved);

nav.addEventListener('click', (e) => {
  const btn = e.target.closest('.nav__item');
  if (!btn) return;
  activate(btn.dataset.section);
});

function activate(section){
  document.querySelectorAll('.nav__item').forEach(b=>{
    b.classList.toggle('is-active', b.dataset.section === section);
  });
  title.textContent = section;
  localStorage.setItem('activeSection', section);

  // swap content placeholder per section (no duplicate headers)
  content.innerHTML = `
    <div class="empty">
      <h2 class="empty__title">${section}</h2>
      <p class="empty__text">This is the ${section.toLowerCase()} area. Populate with cards, tables, or charts.</p>
    </div>`;
}

// fake logout click (replace later)
document.getElementById('logoutBtn').addEventListener('click', () => {
  alert('Wireframe: implement auth later.');
});
