// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.stat, .service-card, .project-card, .project-cta, .pricing-card, .addon, .tag').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  observer.observe(el);
});

// Nav background intensifies on scroll
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? '0 8px 30px -20px rgba(56,217,245,0.25)' : 'none';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
