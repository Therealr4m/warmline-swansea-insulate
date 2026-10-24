# Warmline Swansea — Main / Other Services / Areas / Contact navigation

## Included changes

- Top navigation now contains exactly four items: **Main Service**, **Other Services**, **Areas We Cover**, **Contact**.
- Main Service links to `index.html`; Contact links to `contact.html`.
- Other Services is a click/tap dropdown with four items: removal, boarding, draught proofing, and top-ups.
- Areas We Cover is a click/tap dropdown with **Uplands** linking to `uplands.html`.
- Footer's former Explore column is renamed **Services** and links to the same service destinations; the existing Areas We Cover column stays intact.
- Navigation works across Homepage, Uplands, and Contact pages. Dropdown supports keyboard Escape, outside click, and mobile nav closure.
- No H1, H2, body copy, page titles, canonicals, or customer reviews were changed. IDs were added to the homepage's existing service cards for in-page navigation.

## Important: link behavior for future service pages

Aaron has not yet provided published HTML files for the individual services. Consequently, **Other Services** links currently open the relevant service cards on the homepage, rather than nonexistent pages:

- `index.html#loft-insulation-removal`
- `index.html#loft-boarding`
- `index.html#loft-draught-proofing`
- `index.html#loft-insulation-top-ups`

Once Aaron creates a service page, replace that URL in the dropdown and footer on **all three pages**, for example `loft-boarding.html`. Do **not** add file paths until the pages exist.

To add location pages, insert the new link in the `AREA LINKS START/END` and `FOOTER AREAS START/END` blocks on all three pages, using the published relative filename or root-relative URL. Keep `aria-current="page"` only on the matching active page.

## Git workflow

1. Confirm a clean working tree and compare against the latest `origin/main` changes before copying files.
2. Apply the five files from this update (`index.html`, `uplands.html`, `contact.html`, `styles.css`, `script.js`) and review `git diff`.
3. Test desktop/mobile menus, service anchors, Uplands, Contact, phone CTA, and all links.
4. Commit to `warmline-development` (or a new navigation branch if Aaron prefers); push and open/update a pull request against `main`.
5. Aaron approves and merges. Do **not** force-merge or overwrite new copy added by Aaron after this package's source snapshot.

**Base snapshot:** the reconciled versions of the Swansea homepage, Uplands page, and CSS previously prepared from the merge-review ZIP, plus the contact page and JS from the Areas update. If Aaron has edited `main` since then, merge carefully rather than copying over new site changes.
