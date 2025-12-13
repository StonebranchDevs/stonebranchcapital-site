"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => (pathname === path ? "nav-active" : "");

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link href="/" className="logo">
            <img
              src="/sbc-logo.png"
              alt="Stonebranch Capital logo"
              className="logo-img"
            />
            <div>
              <div className="logo-text-main">Stonebranch Capital LLC</div>
              <div className="logo-text-sub">Parent company &amp; ventures</div>
            </div>
          </Link>

          {/* Desktop nav (unchanged behavior) */}
          <nav className="nav-links nav-links-desktop" aria-label="Primary">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/about" className={isActive("/about")}>About</Link>
            <Link href="/ventures" className={isActive("/ventures")}>Business Ventures</Link>
            <Link href="/automation" className={isActive("/automation")}>Business Assistance</Link>

            <Link
              href="/contact"
              className={`btn btn-outline nav-btn ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Simple icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path
                  fill="currentColor"
                  d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-nav"
          className={`nav-mobile-panel ${open ? "open" : ""}`}
        >
          <nav className="nav-links nav-links-mobile" aria-label="Mobile">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/about" className={isActive("/about")}>About</Link>
            <Link href="/ventures" className={isActive("/ventures")}>Business Ventures</Link>
            <Link href="/automation" className={isActive("/automation")}>Business Assistance</Link>
            <Link href="/contact" className={`btn btn-outline nav-btn ${isActive("/contact")}`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
