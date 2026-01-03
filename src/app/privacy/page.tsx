export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h1>Privacy Policy</h1>

          <p>
            Stonebranch Capital LLC respects your privacy. This website uses
            analytics tools to understand how visitors use the site and to
            improve our services.
          </p>

          <h2>Analytics</h2>
          <p>
            We use Google Analytics to collect limited, aggregated information
            about website usage, such as page views and interactions. Analytics
            data is only collected after you provide consent through the cookie
            banner.
          </p>

          <p>
            Google Analytics may use cookies and similar technologies to collect
            usage data. IP addresses are anonymized where possible, and we do
            not use analytics data for advertising or remarketing purposes.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may accept or decline analytics cookies at any time using the
            cookie consent banner. If you decline, analytics tracking will not
            be enabled.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you may contact us
            at{" "}
            <a href="mailto:contact@stonebranchcapital.com">
              contact@stonebranchcapital.com
            </a>.
          </p>

          <p style={{ marginTop: 32, fontSize: 14, opacity: 0.7 }}>
            This policy may be updated as our website and services evolve.
          </p>
        </div>
      </section>
    </main>
  );
}
