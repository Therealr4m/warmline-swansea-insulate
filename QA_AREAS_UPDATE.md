# Warmline Swansea — Areas We Cover update QA

Updated pages: `index.html`, `uplands.html`, `contact.html`.

- Added a click/tap-operated **Areas we cover** dropdown to the top navigation on each page.
- Moved Uplands from the flat navigation into the dropdown.
- Added a dedicated **Areas we cover** footer column linking to Uplands on each page.
- Menu opens and closes via JavaScript, supports Escape key and click-outside close, and nests inside the existing mobile hamburger menu.
- Preserved existing H1/H2 text and other page copy (verified against previous website ZIP).
- Static checks: all relative document links resolve; `node --check script.js` passes; each page contains one dropdown and one footer location link.

## Not yet verified
- A visual cross-browser click-through on the client's live deployment.
- Addition of locations beyond the existing Uplands page.

See `AREAS_GUIDE.md` for adding future location pages.
