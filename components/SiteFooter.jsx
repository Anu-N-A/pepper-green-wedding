"use client";

/* Reference theme-4 footer: instagram glyph, social icon row,
   @username, footer navigation, copyright and a go-to-top arrow. */

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/peppergreenwedding",
    path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8v2.8h2.5V21h3z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/peppergreenwedding",
    path: "M17.5 3h3l-6.6 7.6L21.7 21h-6l-4.7-6.1L5.6 21h-3l7.1-8.1L2.3 3h6.1l4.2 5.6L17.5 3zm-1.1 16h1.7L8.7 4.9H6.9l9.5 14.1z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/peppergreenwedding",
    path: "M12 4.3c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.1-2.5 1.3-3.7 3.8-3.8 1 0 1.3-.1 3.8-.1zM12 2C9.4 2 9.1 2 8.1 2.1 4.7 2.2 2.2 4.7 2.1 8.1 2 9.1 2 9.4 2 12s0 2.9.1 3.9c.1 3.4 2.6 5.9 6 6 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.4-.1 5.9-2.6 6-6 .1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.1-3.4-2.6-5.9-6-6C14.9 2 14.6 2 12 2zm0 4.9a5.1 5.1 0 100 10.2 5.1 5.1 0 000-10.2zm0 8.4a3.3 3.3 0 110-6.6 3.3 3.3 0 010 6.6zm5.3-9.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/peppergreenwedding",
    path: "M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8-3 0-4.9 2.3-4.9 4.8 0 .9.3 1.5.7 2 .2.2.2.3.1.6l-.2.9c-.1.3-.3.4-.5.2-1.4-.6-2-2.2-2-4 0-3 2.5-6.6 7.4-6.6 4 0 6.6 2.9 6.6 6 0 4.1-2.3 7.2-5.6 7.2-1.1 0-2.2-.6-2.5-1.3l-.7 2.7c-.3 1-.9 2-1.4 2.7 1.1.3 2.2.5 3.4.5 5.5 0 10-4.5 10-10S17.5 2 12 2z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/peppergreenwedding",
    path: "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.6 1.8 1.8 1.7.4 7.8.4 7.8.4s6.1 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z",
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com/peppergreenwedding",
    path: "M22 7.4c-.1 2.1-1.6 5-4.4 8.6-2.9 3.8-5.4 5.7-7.4 5.7-1.3 0-2.3-1.2-3.2-3.5L5.3 12c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.6.9L.8 8.2c1-.9 2-1.8 3-2.7C5.1 4.3 6.1 3.7 6.8 3.6c1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.9 4.8.5 2.2 1 3.3 1.6 3.3.5 0 1.2-.7 2.1-2.2.9-1.5 1.4-2.6 1.5-3.4.1-1.3-.4-2-1.5-2-.5 0-1.1.1-1.6.4 1.1-3.5 3.1-5.2 6.1-5.1 2.2.1 3.3 1.6 3.1 4.6z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/peppergreenwedding",
    path: "M6.9 21H3.4V9h3.5v12zM5.2 7.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21 21h-3.5v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.8V9h3.3v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V21z",
  },
];

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "Outdoors", href: "/outdoors" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a
          className="site-footer__ig-logo"
          href="https://www.instagram.com/peppergreenwedding"
          target="_blank"
          rel="noreferrer"
          aria-label="Pepper Green on Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
        </a>

        <a
          className="site-footer__username"
          href="https://www.instagram.com/peppergreenwedding"
          target="_blank"
          rel="noreferrer"
        >
          @peppergreenwedding
        </a>

        <div className="site-footer__social">
          {SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="site-footer__copyright">
          All content Copyright © {new Date().getFullYear()} Pepper Green Wedding
        </p>
      </div>

      <a
        className="site-footer__top"
        href="#"
        aria-label="Go to top"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <svg viewBox="0 0 24 90" fill="none" aria-hidden="true">
          <path
            d="M12 88V4m0 0L2.5 14M12 4l9.5 10"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </a>
    </footer>
  );
}
