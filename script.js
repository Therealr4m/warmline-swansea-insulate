"use strict";

// Navigation works across every static page. No third-party dependencies.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  const setMenuOpen = (open) => {
    navLinks.classList.toggle("open", open);
    if (!open) {
      const dropdownButton = navLinks.querySelector(".nav-dropdown-toggle");
      const dropdownMenu = navLinks.querySelector(".nav-dropdown-menu");
      dropdownButton?.setAttribute("aria-expanded", "false");
      dropdownMenu?.classList.remove("is-open");
    }
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

// Areas dropdown: click/tap to open, Escape or outside click to close.
const areasDropdown = document.querySelector('[data-areas-dropdown]');
const areasButton = areasDropdown?.querySelector('.nav-dropdown-toggle');
const areasMenu = areasDropdown?.querySelector('.nav-dropdown-menu');
if (areasDropdown && areasButton && areasMenu) {
  const setAreasOpen = (open) => {
    areasButton.setAttribute('aria-expanded', String(open));
    areasMenu.classList.toggle('is-open', open);
  };

  areasButton.addEventListener('click', () => {
    setAreasOpen(areasButton.getAttribute('aria-expanded') !== 'true');
  });

  areasMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setAreasOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (!areasDropdown.contains(event.target)) setAreasOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && areasButton.getAttribute('aria-expanded') === 'true') {
      setAreasOpen(false);
      areasButton.focus();
    }
  });

  window.matchMedia('(min-width: 721px)').addEventListener('change', () => setAreasOpen(false));
}
