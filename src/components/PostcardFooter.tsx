export default function PostcardFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer postcard-footer">
      <div className="container">
        <div className="footer-inner" style={{ justifyContent: "center" }}>
          <div className="footer-meta" style={{ textAlign: "center" }}>
            <div>
              © <span suppressHydrationWarning>{year}</span> Stonebranch Capital LLC
            </div>
            <div className="footer-submeta">
              Built in South Carolina · Practical systems for real operators
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
