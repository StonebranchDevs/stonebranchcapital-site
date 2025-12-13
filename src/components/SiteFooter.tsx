import Link from "next/link";

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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ventures">Ventures</Link>
            <Link href="/automation">Business Assistance</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
