"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "nav-active" : "";

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link href="/" className="logo">
            <img src="/sbc-logo.png" alt="Stonebranch Capital logo" className="logo-img" />
            <div>
              <div className="logo-text-main">Stonebranch Capital LLC</div>
              <div className="logo-text-sub">Parent company &amp; ventures</div>
            </div>
          </Link>

          <nav className="nav-links">
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
        </div>
      </div>
    </header>
  );
}
