document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      brandSubtitle: "AQUACULTURE & MARINE", navHome: "Home", navHistory: "History", navAbout: "About", navGallery: "Gallery",
      homeTitle: 'Growing the future of <span class="purple">aquaculture.</span>',
      homeText: "Discover our company, our approach to fish farming, and our vision for the future of aquaculture.",
      learnMore: "Discover our company →", viewGallery: "View gallery", homeLabel: "Our company",
      homeHeading: 'Inspired by the <span class="purple">sea.</span>',
      homeDescription: "Learn about Temri Group LTD, its history, its operations and its role in aquaculture.",
      historyButton: "Our history →", discoverLabel: "DISCOVER TEMRI", discoverTitle: 'Explore our <span class="purple">world.</span>',
      historyCard: "Our history", historyCardText: "Discover the journey and milestones that have shaped our company.",
      aboutCard: "About us", aboutCardText: "Learn about our company, values and approach to aquaculture.",
      galleryCard: "Gallery", galleryCardText: "Explore the marine environment through our photo collection.",
      historyKicker: "OUR JOURNEY", historyTitle: 'Our history. Our <span class="purple">future.</span>',
      historyIntro: "Discover the story behind Temri Group LTD and the journey that continues to shape our company.",
      historyStoryLabel: "The story so far", historyStoryTitle: 'A journey shaped by <span class="purple">ambition.</span>',
      historyStoryText: "Add the founding story of Temri Group LTD here, including the original vision, the people involved and the company's development in aquaculture.",
      milestone1Title: "Foundation", milestone1Text: "Add the year of establishment and the company's beginnings.",
      milestone2Title: "Growth", milestone2Text: "Describe key developments, achievements and growth over the years.",
      milestone3Title: "Looking ahead", milestone3Text: "Share the company's future goals and vision for sustainable aquaculture.",
      legacyLabel: "LOOKING FORWARD", legacyTitle: 'Building a sustainable <span class="purple">future.</span>',
      legacyText: "Our journey continues with a focus on knowledge, responsible practices and the future of aquaculture.",
      aboutButton: "Discover our company →", aboutKicker: "ABOUT TEMRI GROUP", aboutTitle: 'Our company. Our <span class="purple">purpose.</span>',
      aboutIntro: "Get to know our company, our activities and our vision for the future of aquaculture.",
      aboutStoryLabel: "Who we are", aboutStoryTitle: 'Focused on <span class="purple">aquaculture.</span>',
      aboutStoryText: "Introduce Temri Group LTD, its areas of business, its facilities, its team and the experience it brings to fish farming.",
      valuesLabel: "WHAT GUIDES US", valuesTitle: 'Our <span class="purple">values.</span>',
      value1Title: "Quality", value1Text: "We aim for high standards in our work and in the care of our operations.",
      value2Title: "Responsibility", value2Text: "We believe responsible practices are essential for the marine environment and the future of aquaculture.",
      value3Title: "Innovation", value3Text: "We value learning, new ideas and continuous improvement.",
      contactTitle: "Let's work together.", contactText: "Contact our team to learn more about Temri Group LTD and our work in aquaculture.", emailButton: "Email us →",
      galleryKicker: "OUR GALLERY", galleryTitle: 'A closer look at <span class="purple">our world.</span>',
      galleryIntro: "Explore the marine environment, fish farming and aquaculture through our gallery.", galleryLabel: "Photo collection",
      galleryHeading: 'Life around the <span class="purple">sea.</span>',
      galleryDescription: "Explore our marine environment, facilities and the world of aquaculture.",
      gallery1: "Aquaculture", gallery2: "Marine life", gallery3: "Our environment", gallery4: "The blue economy", gallery5: "Beneath the sea", gallery6: "Marine habitats",
      footerDescription: "Exploring the future of aquaculture through expertise, innovation and a long-term vision.", footerNavTitle: "Explore", footerContactTitle: "Get in touch",
      contactButton: "Contact our team", rights: "All rights reserved.", closeGallery: "Close gallery", previousImage: "Previous image", nextImage: "Next image",
      openMenu: "Open menu", closeMenu: "Close menu"
    },
    el: {
      brandSubtitle: "ΥΔΑΤΟΚΑΛΛΙΕΡΓΕΙΑ & ΘΑΛΑΣΣΑ", navHome: "Αρχική", navHistory: "Ιστορία", navAbout: "Σχετικά", navGallery: "Φωτογραφίες",
      homeTitle: 'Καλλιεργούμε το μέλλον της <span class="purple">υδατοκαλλιέργειας.</span>',
      homeText: "Γνωρίστε την εταιρεία μας, την προσέγγισή μας στην ιχθυοκαλλιέργεια και το όραμά μας για το μέλλον της υδατοκαλλιέργειας.",
      learnMore: "Γνωρίστε την εταιρεία μας →", viewGallery: "Δείτε τις φωτογραφίες", homeLabel: "Η εταιρεία μας",
      homeHeading: 'Με έμπνευση από τη <span class="purple">θάλασσα.</span>',
      homeDescription: "Μάθετε για την Temri Group LTD, την ιστορία της, τις δραστηριότητές της και τον ρόλο της στην υδατοκαλλιέργεια.",
      historyButton: "Η ιστορία μας →", discoverLabel: "ΓΝΩΡΙΣΤΕ ΤΗΝ TEMRI", discoverTitle: 'Ανακαλύψτε τον <span class="purple">κόσμο μας.</span>',
      historyCard: "Η ιστορία μας", historyCardText: "Ανακαλύψτε την πορεία και τους σημαντικούς σταθμούς της εταιρείας μας.",
      aboutCard: "Σχετικά με εμάς", aboutCardText: "Μάθετε για την εταιρεία μας, τις αξίες μας και την προσέγγισή μας στην υδατοκαλλιέργεια.",
      galleryCard: "Φωτογραφίες", galleryCardText: "Εξερευνήστε το θαλάσσιο περιβάλλον μέσα από τη συλλογή φωτογραφιών μας.",
      historyKicker: "Η ΠΟΡΕΙΑ ΜΑΣ", historyTitle: 'Η ιστορία μας. Το <span class="purple">μέλλον μας.</span>',
      historyIntro: "Ανακαλύψτε την ιστορία της Temri Group LTD και την πορεία που συνεχίζει να διαμορφώνει την εταιρεία μας.",
      historyStoryLabel: "Η ιστορία μέχρι σήμερα", historyStoryTitle: 'Μια πορεία με <span class="purple">φιλοδοξία.</span>',
      historyStoryText: "Προσθέστε εδώ την ιστορία ίδρυσης της Temri Group LTD, το αρχικό όραμα, τους ανθρώπους που συμμετείχαν και την ανάπτυξη της εταιρείας στην υδατοκαλλιέργεια.",
      milestone1Title: "Ίδρυση", milestone1Text: "Προσθέστε το έτος ίδρυσης και τις απαρχές της εταιρείας.",
      milestone2Title: "Ανάπτυξη", milestone2Text: "Περιγράψτε τις σημαντικές εξελίξεις, επιτυχίες και την ανάπτυξη της εταιρείας.",
      milestone3Title: "Το μέλλον", milestone3Text: "Παρουσιάστε τους μελλοντικούς στόχους και το όραμα της εταιρείας για βιώσιμη υδατοκαλλιέργεια.",
      legacyLabel: "ΚΟΙΤΑΖΟΝΤΑΣ ΜΠΡΟΣΤΑ", legacyTitle: 'Χτίζουμε ένα βιώσιμο <span class="purple">μέλλον.</span>',
      legacyText: "Η πορεία μας συνεχίζεται με έμφαση στη γνώση, στις υπεύθυνες πρακτικές και στο μέλλον της υδατοκαλλιέργειας.",
      aboutButton: "Γνωρίστε την εταιρεία μας →", aboutKicker: "ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ TEMRI GROUP", aboutTitle: 'Η εταιρεία μας. Ο <span class="purple">σκοπός μας.</span>',
      aboutIntro: "Γνωρίστε την εταιρεία μας, τις δραστηριότητές μας και το όραμά μας για το μέλλον της υδατοκαλλιέργειας.",
      aboutStoryLabel: "Ποιοι είμαστε", aboutStoryTitle: 'Με επίκεντρο την <span class="purple">υδατοκαλλιέργεια.</span>',
      aboutStoryText: "Παρουσιάστε την Temri Group LTD, τους τομείς δραστηριότητάς της, τις εγκαταστάσεις, την ομάδα και την εμπειρία της στην ιχθυοκαλλιέργεια.",
      valuesLabel: "ΟΙ ΑΞΙΕΣ ΜΑΣ", valuesTitle: 'Οι <span class="purple">αξίες μας.</span>',
      value1Title: "Ποιότητα", value1Text: "Στοχεύουμε σε υψηλά πρότυπα στην εργασία μας και στη φροντίδα των δραστηριοτήτων μας.",
      value2Title: "Υπευθυνότητα", value2Text: "Πιστεύουμε ότι οι υπεύθυνες πρακτικές είναι απαραίτητες για το θαλάσσιο περιβάλλον και το μέλλον της υδατοκαλλιέργειας.",
      value3Title: "Καινοτομία", value3Text: "Εκτιμούμε τη μάθηση, τις νέες ιδέες και τη συνεχή βελτίωση.",
      contactTitle: "Ας συνεργαστούμε.", contactText: "Επικοινωνήστε με την ομάδα μας για να μάθετε περισσότερα για την Temri Group LTD και τη δραστηριότητά μας στην υδατοκαλλιέργεια.", emailButton: "Στείλτε μας email →",
      galleryKicker: "Η ΓΚΑΛΕΡΙ ΜΑΣ", galleryTitle: 'Μια πιο κοντινή ματιά <span class="purple">στον κόσμο μας.</span>',
      galleryIntro: "Ανακαλύψτε το θαλάσσιο περιβάλλον, την ιχθυοκαλλιέργεια και την υδατοκαλλιέργεια μέσα από τις φωτογραφίες μας.", galleryLabel: "Συλλογή φωτογραφιών",
      galleryHeading: 'Η ζωή κοντά στη <span class="purple">θάλασσα.</span>',
      galleryDescription: "Γνωρίστε το θαλάσσιο περιβάλλον, τις εγκαταστάσεις μας και τον κόσμο της υδατοκαλλιέργειας.",
      gallery1: "Υδατοκαλλιέργεια", gallery2: "Θαλάσσια ζωή", gallery3: "Το περιβάλλον μας", gallery4: "Η γαλάζια οικονομία", gallery5: "Κάτω από τη θάλασσα", gallery6: "Θαλάσσια οικοσυστήματα",
      footerDescription: "Διαμορφώνουμε το μέλλον της υδατοκαλλιέργειας με τεχνογνωσία, καινοτομία και μακροπρόθεσμο όραμα.", footerNavTitle: "Εξερευνήστε", footerContactTitle: "Επικοινωνία",
      contactButton: "Επικοινωνήστε με την ομάδα μας", rights: "Με επιφύλαξη παντός δικαιώματος.", closeGallery: "Κλείσιμο συλλογής", previousImage: "Προηγούμενη φωτογραφία", nextImage: "Επόμενη φωτογραφία",
      openMenu: "Άνοιγμα μενού", closeMenu: "Κλείσιμο μενού"
    }
  };

  const languageSelect = document.getElementById("languageSelect");
  let userHasChosenLanguage = false;

  function applyLanguage(language) {
    const lang = language === "el" ? "el" : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[lang][element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    if (languageSelect) languageSelect.value = lang;
    const close = document.querySelector(".lightbox-close");
    const prev = document.querySelector(".lightbox-prev");
    const next = document.querySelector(".lightbox-next");
    if (close) close.setAttribute("aria-label", translations[lang].closeGallery);
    if (prev) prev.setAttribute("aria-label", translations[lang].previousImage);
    if (next) next.setAttribute("aria-label", translations[lang].nextImage);
    const menuButton = document.getElementById("menuToggle");
    if (menuButton) menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? translations[lang].closeMenu : translations[lang].openMenu);
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
      if (country === "CY" || country === "GR") applyLanguage("el");
      else if (country) applyLanguage("en");
    }).catch(() => {});
  }
  languageSelect?.addEventListener("change", () => storeLanguage(languageSelect.value));

  // Mobile navigation: class name matches the stylesheet (.nav.open).
  const menuButton = document.getElementById("menuToggle");
  const navigation = document.getElementById("mainNav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const open = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? translations[document.documentElement.lang].closeMenu : translations[document.documentElement.lang].openMenu);
      document.body.classList.toggle("menu-open", open);
    });
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", translations[document.documentElement.lang].openMenu);
      document.body.classList.remove("menu-open");
    }));
  }

  // Reveal-on-scroll effects.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); currentObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach((element) => observer.observe(element));
  } else revealItems.forEach((element) => element.classList.add("visible"));

  // Highlight the current page in the navigation.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a, .footer-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("http") && href.split("/").pop() === currentPage) {
      link.classList.add("active"); link.setAttribute("aria-current", "page");
    }
  });
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  // Accessible gallery lightbox, wired to the actual IDs/classes in gallery.html.
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = lightbox?.querySelector(".lightbox-image");
  const closeButton = lightbox?.querySelector(".lightbox-close");
  const prevButton = lightbox?.querySelector(".lightbox-prev");
  const nextButton = lightbox?.querySelector(".lightbox-next");
  const photos = Array.from(document.querySelectorAll(".gallery-grid .gallery-item"));
  let currentIndex = 0;
  let previousFocus = null;
  let touchStartX = 0;
  let touchStartY = 0;
  function showPhoto(index) {
    if (!lightbox || !lightboxImage || !photos.length) return;
    currentIndex = (index + photos.length) % photos.length;
    const item = photos[currentIndex];
    const img = item.querySelector("img");
    const src = item.href || img?.currentSrc || img?.src;
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = img?.alt || "";
    prevButton.hidden = photos.length < 2;
    nextButton.hidden = photos.length < 2;
  }
  function openLightbox(index) {
    if (!lightbox) return;
    previousFocus = document.activeElement;
    showPhoto(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
    closeButton?.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-active");
    if (lightboxImage) lightboxImage.removeAttribute("src");
    previousFocus?.focus?.();
  }
  photos.forEach((item, index) => item.addEventListener("click", (event) => { event.preventDefault(); openLightbox(index); }));
  closeButton?.addEventListener("click", closeLightbox);
  prevButton?.addEventListener("click", (event) => { event.stopPropagation(); showPhoto(currentIndex - 1); });
  nextButton?.addEventListener("click", (event) => { event.stopPropagation(); showPhoto(currentIndex + 1); });
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  lightboxImage?.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("keydown", (event) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
    else if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
  });
  lightbox?.addEventListener("touchstart", (event) => {
    if (!event.touches.length) return;
    touchStartX = event.touches[0].clientX; touchStartY = event.touches[0].clientY;
  }, { passive: true });
  lightbox?.addEventListener("touchend", (event) => {
    if (!lightbox.classList.contains("is-open") || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showPhoto(currentIndex + (dx < 0 ? 1 : -1));
  }, { passive: true });
});
