"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#stories" },
  { label: "Films", href: "#films" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function Logo({ onClick }) {
  return (
    <a className="logo" href="#home" onClick={onClick} aria-label="Pepper Green — home">
      <span className="logo__name">
        pepper green
        <sup>®</sup>
      </span>
      <span className="logo__sub">Wedding Company</span>
    </a>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Logo onClick={closeMenu} />

        <nav className="main-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? "is-active" : ""}
              aria-current={active === item.href.slice(1) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-btn ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__head">
          <Logo onClick={closeMenu} />
          <button
            type="button"
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile">
          {NAV.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-menu__index">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <a href="mailto:hello@peppergreen.com" tabIndex={menuOpen ? 0 : -1}>
            hello@peppergreen.com
          </a>
          <span>Weddings across India &amp; beyond</span>
        </div>
      </div>
    </>
  );
}
