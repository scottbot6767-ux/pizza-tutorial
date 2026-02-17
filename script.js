// === SCROLL ANIMATIONS ===
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// === DOUGH TABS ===
const doughTabs = document.querySelectorAll('.dough-tab');
const doughContents = document.querySelectorAll('.dough-content');

doughTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    doughTabs.forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    tab.classList.add('active');
    
    // Hide all content
    doughContents.forEach(c => c.classList.add('hidden'));
    // Show selected content
    const target = document.getElementById(tab.dataset.tab);
    if (target) target.classList.remove('hidden');
  });
});

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === OVEN CARD SELECTION ===
const ovenCards = document.querySelectorAll('.oven-card');
ovenCards.forEach(card => {
  card.addEventListener('click', () => {
    ovenCards.forEach(c => c.style.borderColor = 'rgba(255,255,255,0.06)');
    card.style.borderColor = '#e85d04';
  });
});

// === PARALLAX HERO EFFECT ===
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-content');
  const scrolled = window.pageYOffset;
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - (scrolled / window.innerHeight);
  }
});
