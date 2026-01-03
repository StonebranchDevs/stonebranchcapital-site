"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { events } from "@/lib/events";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Left: Company info */}
          <div className="footer-meta">
            <div>
              © <span suppressHydrationWarning>{year}</span> Stonebranch Capital LLC
            </div>
            <div className="footer-submeta">
              Charleston, SC ·{" "}
              <a href="mailto:contact@stonebranchcapital.com">
                contact@stonebranchcapital.com
              </a>
            </div>
          </div>

          {/* Right: Navigation */}
          <div className="footer-links">
            <Link href="/" onClick={() => events.nav({section: "footer", destination: "home"})}>Home</Link>
            <Link href="/about" onClick={() => events.nav({section: "footer", destination: "about"})}>About</Link>
            <Link href="/ventures" onClick={() => events.nav({section: "footer", destination: "ventures"})}>Ventures</Link>
            <Link href="/automation" onClick={() => events.nav({section: "footer", destination: "automation"})}>Business Assistance</Link>
            <Link href="/contact" onClick={() => events.nav({section: "footer", destination: "contact"})}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
