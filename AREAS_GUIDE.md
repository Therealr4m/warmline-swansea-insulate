# Adding location pages to Warmline Swansea

The **Areas we cover** menu and footer list are present as normal HTML on every page. This keeps internal links visible without JavaScript and makes them easier for search engines to follow.

## When you add a location such as Mumbles

1. Add a new HTML page, for example `mumbles.html`, in the same folder as `index.html`. Use the Uplands page as a starting layout if appropriate and provide your own approved local SEO copy.
2. Edit **each HTML page** (currently `index.html`, `uplands.html`, `contact.html`, and any new location pages). Search for `AREA LINKS START` and add `<a href="mumbles.html">Mumbles</a>` after the Uplands link.
3. In those same HTML pages search for `FOOTER AREAS START` and add the same link after the Uplands link.
4. On the new page only, set `aria-current="page"` on its matching dropdown link, and remove that attribute from the Uplands link. Optionally add `is-current` to the dropdown button class to highlight the current section.
5. Add the new page URL to `sitemap.xml`, and check the new page's canonical URL.
6. Test the links on desktop and mobile, commit to your development branch, and open a pull request.

**Do not add links to pages that do not exist yet.** The dropdown initially lists only Uplands, which is an existing page.

The menu uses `script.js` for opening/closing: click/tap to open, click outside or press Escape to close. The menu remains inside the mobile hamburger navigation.
