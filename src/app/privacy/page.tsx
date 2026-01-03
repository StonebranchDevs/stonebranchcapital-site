import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
              <SiteHeader />
    <main className="page">
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h1>Privacy Policy</h1>

          <p>
            Stonebranch Capital LLC (“Stonebranch,” “we,” “our,” or “us”) operates
            this website for informational and business purposes. This Privacy
            Policy explains how we collect, use, and protect information when you
            visit our website.
          </p>

          <h2>Scope and Audience</h2>
          <p>
            This website is intended for audiences located in the United States.
            We do not knowingly target or market our services to individuals
            outside the U.S.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Analytics information:</strong> After you provide consent,
              we collect limited, aggregated information about how visitors use
              the website, such as pages viewed, navigation patterns, and general
              interaction data.
            </li>
            <li>
              <strong>Contact information:</strong> If you contact us through the
              website, we collect the information you voluntarily provide, such
              as your name, email address, and message content.
            </li>
          </ul>

          <h2>Cookies and Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our website
            and to improve our services. Analytics cookies are only enabled after
            you explicitly consent through our cookie banner.
          </p>
          <p>
            Google Analytics may use cookies or similar technologies to collect
            anonymized usage data. IP anonymization is enabled where supported.
            We do not use analytics for advertising, remarketing, or behavioral
            profiling.
          </p>

          <h2>How We Use Information</h2>
          <p>We use collected information solely to:</p>
          <ul>
            <li>Operate and improve our website</li>
            <li>Understand general usage trends</li>
            <li>Respond to inquiries and communications</li>
            <li>Evaluate potential business services and outreach efforts</li>
          </ul>

          <h2>Contact Communications</h2>
          <p>
            Messages submitted through our contact forms are delivered to our
            internal contact inbox. We do not sell or rent contact information.
            In the future, we may use customer relationship management (CRM) or
            email communication tools to manage inquiries and business outreach.
            Any such use will be consistent with this Privacy Policy.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, rent, or trade personal information. Analytics data
            may be processed by Google Analytics in accordance with Google’s
            privacy practices. No data is shared for advertising purposes.
          </p>

          <h2>Data Retention</h2>
          <p>
            Analytics data is retained only as long as necessary to evaluate
            website performance and usage trends. Contact information is retained
            only as long as reasonably necessary to respond to inquiries or
            provide requested services.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>
            You may choose to accept or decline analytics cookies at any time
            through the cookie consent banner. If you decline, analytics tracking
            will not be enabled.
          </p>
          <p>
            You may request deletion of information you have submitted by
            contacting us at the email address below. We will make reasonable
            efforts to honor such requests, subject to legal or operational
            requirements.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            This website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe a child has provided personal information through this
            website, please contact us so we can take appropriate action.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect information collected through
            this website. However, no method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy as our website, services, or
            practices evolve. Updates will be posted on this page with a revised
            effective date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, you may contact us at{" "}
            <a href="mailto:support@stonebranchcapital.com">
              support@stonebranchcapital.com
            </a>.
          </p>

          <p style={{ marginTop: 32, fontSize: 14, opacity: 0.7 }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </main>
    <SiteFooter />
    </div>
  );
}
