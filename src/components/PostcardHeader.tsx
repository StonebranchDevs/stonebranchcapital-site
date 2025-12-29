import Link from "next/link";

export default function PostcardHeader() {
  return (
    <header className="site-header postcard-header">
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
        </div>
      </div>
    </header>
  );
}
