// src/app/page.tsx
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="page home-page">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="hero hero-with-glow reveal">
          <div className="container">
            <div className="hero-inner">
              <div>
                <div className="hero-kicker">Stonebranch Capital LLC</div>
                <h1 className="hero-title">
                  A home for the ideas, brands, and ventures we’re building under{" "}
                  <span>Stonebranch Capital</span>.
                </h1>

                <p className="hero-subtitle">
                  Stonebranch Capital serves as the parent company behind our
                  service-based businesses and future projects — including Southern
                  Elite Bin Cleaning and AI-powered automation services for local
                  businesses.
                </p>

                <div className="hero-cta-row">
                  <Link href="/automation" className="btn btn-primary">
                    Explore business assistance
                  </Link>
                  <Link href="/ventures" className="btn btn-outline">
                    View active ventures
                  </Link>
                </div>

                <div className="hero-footnote">
                  Built in South Carolina. Focused on practical systems, clean operations,
                  and long-term stability — only taking on work we can stand behind.
                  Privacy-first by default. We only use data for the work you approve.
                </div>
              </div>

              <aside className="hero-media">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/6886f8919846d7166ea2f254/52f74e8b-d29c-406c-9988-6091f9dbe98d/Stonebranch+Capital+HERO+Photo.png?format=1000w"
                  alt="Stonebranch Capital hero"
                />
              </aside>
            </div>
          </div>
        </section>

        {/* QUICK OVERVIEW / CARDS */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">What lives under Stonebranch</div>
              <h2 className="section-title">A small portfolio, built intentionally.</h2>
              <p className="section-subtitle">
                Stonebranch is designed to hold multiple ventures — from home services to
                software and automation — under one umbrella so we can grow without
                scattering our identity.
              </p>
            </div>

            <div className="card-grid">
              <article className="card">
                <div className="card-tag">Active venture</div>
                <h3 className="card-title">Southern Elite Bin Cleaning</h3>
                <p className="card-body">
                  Residential trash bin cleaning &amp; exterior wash services built around
                  routes, reliable schedules, and a polished customer experience.
                </p>
                <ul className="card-list">
                  <li>Recurring bin cleaning plans</li>
                  <li>Driveway &amp; sidewalk add-ons</li>
                  <li>Modern booking and reminders</li>
                </ul>
                <Link href="/ventures" className="card-link">
                  View in Business Ventures →
                </Link>
              </article>

              <article className="card">
                <div className="card-tag">New &amp; growing</div>
                <h3 className="card-title">AI Automation for Local Business</h3>
                <p className="card-body">
                  Done-for-you automations that improve speed, consistency, and follow-up
                  across lead intake, scheduling, and customer communication — when there's a clear fit.
                </p>
                <ul className="card-list">
                  <li>24/7 lead response &amp; intake</li>
                  <li>Scheduling &amp; reminder flows</li>
                  <li>Review &amp; reputation systems</li>
                </ul>
                <Link href="/automation" className="card-link">
                  Explore automation services →
                </Link>
              </article>

              <article className="card">
                <div className="card-tag">On the horizon</div>
                <h3 className="card-title">Future projects &amp; software</h3>
                <p className="card-body">
                  Stonebranch gives us a stable home base for new products, software tools,
                  and service lines as they become real.
                </p>
                <ul className="card-list">
                  <li>Internal tools that turn into products</li>
                  <li>Spin-off brands under one umbrella</li>
                  <li>Room to grow without re-starting</li>
                </ul>
                <Link href="/about" className="card-link">
                  Learn more about Stonebranch →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
