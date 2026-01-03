import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function TermsOfServicePage() {
  return (
    <div className="terms-page">
              <SiteHeader />
    <main className="page">
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h1>Terms of Service</h1>

          <p>
            These Terms of Service (“Terms”) govern your use of the Stonebranch
            Capital LLC website. By accessing or using this website, you agree
            to be bound by these Terms.
          </p>

          <h2>About Stonebranch Capital LLC</h2>
          <p>
            Stonebranch Capital LLC is a parent company that develops, owns, and
            supports service-based businesses and related ventures. Information
            provided on this website is for general informational purposes only
            and does not constitute professional, financial, or legal advice.
          </p>

          <h2>Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe upon the rights of others or restrict
            or inhibit their use of the site.
          </p>

          <h2>Communications</h2>
          <p>
            If you contact us through this website, you agree that we may respond
            using the contact information you provide. Submitting an inquiry
            does not create a business relationship, partnership, or contractual
            obligation.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            design elements, is the property of Stonebranch Capital LLC or its
            licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or use content from this website
            without prior written permission.
          </p>

          <h2>Company Name and Non-Affiliation</h2>
          <p>
            Stonebranch Capital LLC is an independent business entity. We are not
            affiliated with, endorsed by, or associated with any other company
            or organization that may use a similar name, including entities
            using the name “Stonebranch.”
          </p>

          <h2>Third-Party Services and Links</h2>
          <p>
            This website may reference or link to third-party services or
            websites. We are not responsible for the content, policies, or
            practices of any third-party services.
          </p>

          <h2>Disclaimer</h2>
          <p>
            This website is provided on an “as is” and “as available” basis.
            Stonebranch Capital LLC makes no warranties, express or implied,
            regarding the operation or availability of the website or the
            accuracy of information provided.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Stonebranch Capital LLC shall
            not be liable for any direct, indirect, incidental, or consequential
            damages arising out of or related to your use of this website.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be posted
            on this page and become effective upon posting.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the United States and the state in which Stonebranch Capital
            LLC is organized, without regard to conflict of law principles.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms, you may contact us at{" "}
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
