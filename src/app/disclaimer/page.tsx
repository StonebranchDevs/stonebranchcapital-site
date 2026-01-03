import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function DisclaimerPage() {
  return (
    <div className="disclaimer-page">
          <SiteHeader />

    <main className="page">
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h1>Disclaimer</h1>

          <p>
            The information provided on this website by Stonebranch Capital LLC
            is for general informational purposes only.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            Content on this website does not constitute legal, financial,
            business, or professional advice. You should not rely on any
            information on this website as a substitute for professional advice
            tailored to your specific situation.
          </p>

          <h2>No Guarantees</h2>
          <p>
            Any examples, descriptions, or discussions of systems, processes, or
            potential outcomes are provided for illustrative purposes only.
            Stonebranch Capital LLC makes no guarantees regarding results,
            performance, or outcomes.
          </p>

          <h2>Use at Your Own Risk</h2>
          <p>
            Your use of this website and any information contained within it is
            at your own risk. Stonebranch Capital LLC is not responsible for any
            losses, damages, or decisions made based on information found on
            this website.
          </p>

          <h2>External Links</h2>
          <p>
            This website may reference or link to third-party websites or
            services. Stonebranch Capital LLC does not control and is not
            responsible for the content, accuracy, or practices of any
            third-party websites.
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
