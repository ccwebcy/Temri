/* Application entry point: language selection and page initialization. */
(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById("languageSelect");
    let userHasChosenLanguage = false;

    function applyLanguage(language) {
      const lang = language === "el" ? "el" : "en";
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = window.TemriTranslations[lang][element.dataset.i18n];
        if (value !== undefined) element.innerHTML = value;
      });
      if (languageSelect) languageSelect.value = lang;
      const close = document.querySelector(".lightbox-close");
      const prev = document.querySelector(".lightbox-prev");
      const next = document.querySelector(".lightbox-next");
      if (close) close.setAttribute("aria-label", window.TemriTranslations[lang].closeGallery);
      if (prev) prev.setAttribute("aria-label", window.TemriTranslations[lang].previousImage);
      if (next) next.setAttribute("aria-label", window.TemriTranslations[lang].nextImage);
      const menuButton = document.getElementById("menuToggle");
      if (menuButton) menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? window.TemriTranslations[lang].closeMenu : window.TemriTranslations[lang].openMenu);
    }

    function storeLanguage(language) {
      userHasChosenLanguage = true;
      const lang = language === "el" ? "el" : "en";
      try { localStorage.setItem("temri-language", lang); } catch (_) {}
      applyLanguage(lang);
    }

    let savedLanguage = null;
    try { savedLanguage = localStorage.getItem("temri-language"); } catch (_) {}

    const browserLanguage = (navigator.language || "en").toLowerCase();
    const initialLanguage = savedLanguage === "el" || savedLanguage === "en"
      ? savedLanguage
      : (browserLanguage.startsWith("el") ? "el" : "en");

    applyLanguage(initialLanguage);
    userHasChosenLanguage = savedLanguage === "en" || savedLanguage === "el";
    document.documentElement.classList.remove("language-pending");

    languageSelect?.addEventListener("change", () => storeLanguage(languageSelect.value));

    window.TemriNavigation?.init();
    window.TemriGallery?.init();
  });
})();
