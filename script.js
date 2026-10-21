"use strict";

// Navigation works across every static page. No third-party dependencies.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  const setMenuOpen = (open) => {
    navLinks.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton.textContent = open ? "✕" : "☰";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !navLinks.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  const desktop = window.matchMedia("(min-width: 721px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

// Date remains current on all three pages without editing HTML each year.
document.querySelectorAll(".year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

// GA4/GTM integration point: only emits events if the owner has configured gtag.
// Click events indicate contact intent; they are NOT verified enquiries.
document.querySelectorAll("a[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const eventName = link.dataset.track;
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        link_url: link.href,
        page_location: window.location.href,
      });
    }
  });
});
