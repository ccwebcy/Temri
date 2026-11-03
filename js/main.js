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
    if (savedLanguage === "en" || savedLanguage === "el") {
      applyLanguage(savedLanguage);
      userHasChosenLanguage = true;
    } else {
      const browserLanguage = (navigator.language || "en").toLowerCase();
      applyLanguage(browserLanguage.startsWith("el") ? "el" : "en");
      // If browser language is not decisive, use country-level lookup as a fallback.
      fetch("https://ipapi.co/json/").then((r) => { if (!r.ok) throw new Error("lookup failed"); return r.json(); }).then((data) => {
        if (userHasChosenLanguage) return;
        const country = String(data.country_code || "").toUpperCase();
        if (country === "CY" || country === "GR") {
          try { localStorage.setItem("temri-language", "el"); } catch (_) {}
          applyLanguage("el");
        } else if (country) {
          try { localStorage.setItem("temri-language", "en"); } catch (_) {}
          applyLanguage("en");
        }
    }).catch(() => {});
    }
    languageSelect?.addEventListener("change", () => storeLanguage(languageSelect.value));

    window.TemriNavigation?.init();
    window.TemriGallery?.init();
  });
})();
