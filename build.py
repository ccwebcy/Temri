#!/usr/bin/env python3
"""Build the static Temri pages from shared header and footer partials."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
HEADER = (ROOT / "partials/header.html").read_text(encoding="utf-8").strip()
FOOTER = (ROOT / "partials/footer.html").read_text(encoding="utf-8").strip()
PAGES = ("index.html", "about.html", "contact.html", "gallery.html")
SCRIPTS = "\n".join(
    f'  <script src="js/{name}" defer></script>'
    for name in ("translations.js", "navigation.js", "gallery.js", "main.js")
)

for page in PAGES:
    path = ROOT / page
    html = path.read_text(encoding="utf-8")
    head_match = re.search(r"<head\b.*?</head>", html, re.I | re.S)
    main_match = re.search(r"<main\b.*?</main>", html, re.I | re.S)
    if not head_match or not main_match:
        raise ValueError(f"Missing head or main element in {page}")
    lightbox_match = re.search(r'<div\s+id="galleryLightbox".*?</div>', html, re.I | re.S)
    lightbox = lightbox_match.group(0) if lightbox_match else ""
    body = f"<body>\n{HEADER}\n\n{main_match.group(0)}\n\n{FOOTER}\n{lightbox}\n\n{SCRIPTS}\n</body>\n</html>\n"
    path.write_text(head_match.group(0) + "\n" + body, encoding="utf-8")

print("Temri pages rebuilt successfully.")
