/* Gallery lightbox: keyboard, touch, focus restoration, and controls. */
window.TemriGallery = (() => {
  'use strict';
  function init() {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;
    const image = lightbox.querySelector('.lightbox-image');
    const close = lightbox.querySelector('.lightbox-close');
    const previous = lightbox.querySelector('.lightbox-prev');
    const next = lightbox.querySelector('.lightbox-next');
    const photos = [...document.querySelectorAll('.gallery-grid .gallery-item')];
    if (!image || !photos.length) return;
    let index = 0;
    let returnFocus = null;
    let touchX = 0;
    let touchY = 0;
    const show = (nextIndex) => {
      index = (nextIndex + photos.length) % photos.length;
      const item = photos[index];
      const photo = item.querySelector('img');
      const source = item.href || photo?.currentSrc || photo?.src;
      if (!source) return;
      image.src = source;
      image.alt = photo?.alt || '';
      if (previous) previous.hidden = photos.length < 2;
      if (next) next.hidden = photos.length < 2;
    };
    const open = (photoIndex) => {
      returnFocus = document.activeElement;
      show(photoIndex);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-active');
      close?.focus();
    };
    const dismiss = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-active');
      image.removeAttribute('src');
      returnFocus?.focus?.();
    };
    photos.forEach((item, photoIndex) => item.addEventListener('click', (event) => {
      event.preventDefault(); open(photoIndex);
    }));
    close?.addEventListener('click', dismiss);
    previous?.addEventListener('click', (event) => { event.stopPropagation(); show(index - 1); });
    next?.addEventListener('click', (event) => { event.stopPropagation(); show(index + 1); });
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) dismiss(); });
    image.addEventListener('click', (event) => event.stopPropagation());
    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'Escape') dismiss();
      if (event.key === 'ArrowLeft') show(index - 1);
      if (event.key === 'ArrowRight') show(index + 1);
    });
    lightbox.addEventListener('touchstart', (event) => {
      if (!event.touches.length) return;
      touchX = event.touches[0].clientX; touchY = event.touches[0].clientY;
    }, { passive: true });
    lightbox.addEventListener('touchend', (event) => {
      if (!lightbox.classList.contains('is-open') || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - touchX;
      const dy = event.changedTouches[0].clientY - touchY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }
  return { init };
})();
