/* Navigation and shared page behavior. */
window.TemriNavigation = (() => {
  'use strict';
  function initMenu() {
    const button = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!button || !nav) return;
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      button.setAttribute('aria-expanded', String(open));
      const language = window.TemriTranslations[document.documentElement.lang] || window.TemriTranslations.en;
      button.setAttribute('aria-label', open ? language.closeMenu : language.openMenu);
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  }
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }
  function initActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a, .footer-links a').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;
      if (href.split('/').pop() === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }
  function initFooterYear() {
    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();
  }
  function init() { initMenu(); initReveal(); initActivePage(); initFooterYear(); }
  return { init };
})();
