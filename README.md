# Temri Group LTD website

## Pages
- `index.html` — Home
- `about.html` — Company profile and company history/journey
- `contact.html` — Contact page
- `gallery.html` — Photo gallery

## Project structure
- `css/style.css` — consolidated styles
- `js/translations.js` — English and Greek copy
- `js/navigation.js` — responsive navigation
- `js/gallery.js` — gallery lightbox
- `js/main.js` — shared page behaviours
- `partials/header.html` and `partials/footer.html` — shared site shell
- `build.py` — inserts the shared header/footer into all four pages

## Build
Run `python build.py` from this directory.

## Before publishing
Replace `YOUR_EMAIL@example.com` in `partials/footer.html` and `contact.html` with the official Temri Group LTD email address. The company history currently contains editable draft prompts where verified dates and milestones should be added; no company dates or facts have been invented.

## Language flicker fix

The site now prevents the page from becoming visible until the saved language has been applied. The previous IP-based language lookup was removed because it could switch the page from English to Greek after the initial render. The selected language is stored in `localStorage` and is applied before the page becomes visible.
