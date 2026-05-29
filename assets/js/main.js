
const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
function updateHeader(){
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    header && header.classList.toggle('nav-open', nav.classList.contains('open'));
  });
}
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const filter = btn.dataset.filter;
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  cards.forEach(card => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.style.display = show ? '' : 'none';
  });
}));
