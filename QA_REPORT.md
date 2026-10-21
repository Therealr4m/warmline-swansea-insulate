# Warmline Swansea — QA report

## Automated checks passed
- Three pages contain one H1 and preserve the supplied Swansea/Uplands H1/H2 text.
- Local HTML links and fragment anchors resolve; no missing images, styles, or scripts in the package.
- Image assets have alt text, intrinsic dimensions, and usable WebP/JPEG alternatives.
- Canonicals, descriptions, Open Graph tags, and parseable JSON-LD are present on all pages.
- `robots.txt` and `sitemap.xml` exist; sitemap contains all three intended URLs.
- Tested Chromium desktop and mobile layout at 360, 390, 768 and 1440 pixels: no horizontal scrolling or JS errors.
- Mobile navigation opens and closes; Escape key closes it, and side call CTA is visible.

## Pending external validations / approvals
- **Live deployment:** no current repo write access or hosting access; changes have not been pushed, merged or published.
- **Real reviews:** verified customer feedback is still needed from Aaron. No fake reviews or review schema added.
- **Copy approval:** claims about years of experience, headings, imagery rights, phone/email, logo and meta copy require Aaron's sign-off.
- **GA4 / Search Console:** cannot verify until Aaron gives access, provides measurement/consent setup, and site is deployed.
- **Forms:** contact page currently uses phone/email links, not a backend-powered submission form.
- **Live cross-browser QA:** check on real Android/iOS and deployed HTTPS hosting after approval.
- **DNS / domain verification:** domain and production route behavior haven't been checked.

## Notes
All tests were performed on local website files. Browser testing used an inlined offline rendition due to sandbox browser navigation restrictions. It does not establish live site behavior.
