# Warmline Swansea — Navigation Update QA

## Passed static checks

- `script.js` passes `node --check` JavaScript syntax validation.
- All three pages contain exactly four top-level navigation choices: Main Service, Other Services, Areas We Cover, Contact.
- All three pages contain both dropdown menus, unique `aria-controls` targets, Uplands as the only location, a service list in the footer, and the Areas We Cover footer link.
- All four temporary service anchor links resolve to existing homepage service card IDs, rather than pointing to nonexistent HTML files.
- Local HTML link targets for the three existing pages resolve.
- All H1, H2, title elements, and main content text are identical to the supplied reconciled source files.
- No reviews were added or fabricated.

## Required in-browser checks before deployment

Browser execution was restricted by the current environment, so interactive mobile/desktop behavior is **not certified**. In VS Code Live Server, check at narrow/mobile and desktop widths:

1. Main Service links to `index.html`.
2. Other Services opens and lists removal, boarding, draught proofing, and top-ups; clicking one scrolls to its homepage card.
3. Areas We Cover opens and Uplands goes to `uplands.html`.
4. Only one dropdown stays open at a time; clicking outside and pressing Escape close an open dropdown.
5. Both dropdowns work inside the mobile hamburger menu.
6. Contact goes to `contact.html`; click-to-call still works.
7. The footer service links and Areas We Cover link work on homepage, Uplands, and contact.
8. Verify no text overlaps at 360px, 390px, 768px, 1024px, and desktop width.

## Integration caution

The files were prepared from the most recent reconciled Swansea files supplied in this conversation, **not from a fresh authenticated fetch of GitHub**. Check the latest `origin/main` and `warmline-development` before copying; reconcile any later changes by Aaron and do not overwrite new copy/metadata.
