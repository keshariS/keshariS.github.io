// Footer year
document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

// Dynamic industry years (professional start 2022; increments by 1 each year)
const industryStartYear = 2022;
document.querySelectorAll('.js-industry-years').forEach(el => {
  el.textContent = (new Date().getFullYear() - industryStartYear) + '+';
});

// Mobile nav hamburger
const nav = document.querySelector('nav');
const navToggle = document.getElementById('navToggle');

navToggle?.addEventListener('click', () => nav.classList.toggle('nav-open'));

document.addEventListener('click', e => {
  if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
    nav.classList.remove('nav-open');
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('nav-open'));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') nav.classList.remove('nav-open');
});

// Collapsible timeline cards
function toggleTimeline(summaryEl) {
  summaryEl.closest('.timeline-card').classList.toggle('open');
}
