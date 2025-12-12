"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Automation() {
  return (
    <div className="page automation-page">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="section hero-automation reveal">
          <div className="container">
            <div className="hero-automation-inner">
              <div className="hero-automation-copy">
                <div className="section-kicker">Business assistance &amp; automation</div>
                <h1 className="section-title">
                  AI-powered systems for local service businesses that are tired of juggling
                  everything.
                </h1>
                <p className="section-subtitle">
                  We help small and service-based businesses capture more leads, respond faster,
                  book more work, and cut repetitive admin tasks — without turning your operation
                  into something you don’t recognize.
                </p>

                <div className="hero-automation-cta-row">
                  <Link className="btn btn-primary" href="/contact">
                    Schedule a conversation
                  </Link>

                  <Link className="btn btn-outline" href="/automation-examples">
                    View real-world scenarios
                  </Link>
                </div>

                <p className="hero-automation-footnote">
                  Built for real operators — especially small and veteran-owned businesses — who
                  need practical help, not buzzwords.
                </p>
              </div>

              <aside className="hero-automation-panel">
                <div className="card hero-automation-card">
                  <div className="card-tag">What we help with</div>
                  <ul className="card-list">
                    <li>24/7 lead intake &amp; response</li>
                    <li>Appointment scheduling &amp; reminders</li>
                    <li>Follow-ups &amp; review requests</li>
                    <li>Internal task handoffs &amp; notifications</li>
                  </ul>
                  <p className="card-body">
                    Our goal isn’t to replace people — it’s to take the repetitive,
                    time-sensitive tasks off your plate so you can focus on running the
                    business.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Who this is for</div>
              <h2 className="section-title">Owners who want systems, not more chaos.</h2>
              <p className="section-subtitle">
                We’re a fit if you’re already doing good work — you just need better ways to
                capture opportunities, communicate with customers, and keep things moving
                without living in your inbox or phone.
              </p>
            </div>

            <div className="card-grid">
              <article className="card">
                <div className="card-tag">Local service companies</div>
                <h3 className="card-title">Routes, visits, and repeat customers</h3>
                <p className="card-body">
                  Bin cleaning, lawn care, pressure washing, pest control, inspections, HVAC,
                  trades, and more. If you book jobs or visits and rely on repeat customers,
                  we can probably help.
                </p>
              </article>

              <article className="card">
                <div className="card-tag">Busy owners &amp; small teams</div>
                <h3 className="card-title">Too many tasks, not enough hours</h3>
                <p className="card-body">
                  You wear multiple hats and don’t have a “systems department.” We help set up
                  the kind of automation that normally requires a full-time ops or tech person.
                </p>
              </article>

              <article className="card">
                <div className="card-tag">Veteran &amp; early-stage businesses</div>
                <h3 className="card-title">Getting off the ground the right way</h3>
                <p className="card-body">
                  We care a lot about helping veteran-owned and early-stage businesses build
                  clean systems early, so growth doesn’t immediately turn into chaos behind the
                  scenes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHAT WE AUTOMATE */}
        <section className="section automation-band reveal" id="automation-examples">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">What we automate</div>
              <h2 className="section-title">
                Practical automations that actually help you run the business.
              </h2>
              <p className="section-subtitle">
                We focus on the kinds of workflows that move the needle: more booked jobs,
                fewer no-shows, and less “sorry, I missed your message” moments.
              </p>
            </div>

            <div className="card-grid automation-grid">
              <article className="card">
                <div className="card-tag">Leads &amp; inquiries</div>
                <h3 className="card-title">24/7 lead capture &amp; response</h3>
                <p className="card-body">
                  Capture leads from your website, forms, or ads and send instant, professional
                  responses — even if you’re on a job, with family, or asleep.
                </p>
                <ul className="card-list">
                  <li>Auto-replies with basic info &amp; next steps</li>
                  <li>Simple questions to qualify leads</li>
                  <li>Route good leads into your CRM or inbox</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Scheduling &amp; reminders</div>
                <h3 className="card-title">Bookings that don’t fall through the cracks</h3>
                <p className="card-body">
                  Reduce no-shows and back-and-forth texts by automating confirmations,
                  reminders, and basic rescheduling.
                </p>
                <ul className="card-list">
                  <li>Appointment confirmations via text or email</li>
                  <li>Reminders before service day</li>
                  <li>Simple “need to reschedule?” flows</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Follow-up &amp; reviews</div>
                <h3 className="card-title">Stay in touch after the job is done</h3>
                <p className="card-body">
                  Build a steady flow of reviews and repeat work without manually chasing people
                  down.
                </p>
                <ul className="card-list">
                  <li>Automatic “thank you” messages after service</li>
                  <li>Review requests with direct links</li>
                  <li>Gentle follow-ups for maintenance or seasonal work</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Internal workflows</div>
                <h3 className="card-title">Less “Did someone handle that?”</h3>
                <p className="card-body">
                  Make sure important tasks don’t disappear into the void by connecting your
                  tools and notifications.
                </p>
                <ul className="card-list">
                  <li>New-job notifications to the right person</li>
                  <li>Task creation when certain events happen</li>
                  <li>Simple dashboards or logs so you can see what’s happening</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">How it works</div>
              <h2 className="section-title">
                Simple, collaborative, and built around your reality.
              </h2>
              <p className="section-subtitle">
                We’re not dropping a random “AI bot” into your business and hoping it works.
                Everything we build is based on how you already operate — just cleaner and more
                reliable.
              </p>
            </div>

            <div className="card" style={{ maxWidth: "880px", margin: "0 auto" }}>
              <ol className="step-list">
                <li>
                  <strong>Quick conversation.</strong> We talk through what you do, how customers
                  currently find and book you, and what’s falling through the cracks.
                </li>
                <li>
                  <strong>Map the workflows.</strong> We outline a few specific flows (like “new
                  lead comes in” or “job completed”) and define what should happen at each step.
                </li>
                <li>
                  <strong>Build &amp; test.</strong> We set up the automations, connect the tools
                  you use, and run test scenarios so you can see how everything behaves.
                </li>
                <li>
                  <strong>Launch &amp; refine.</strong> Once it’s live, we monitor, tweak wording
                  and timing, and adjust based on real customer behavior.
                </li>
              </ol>

              <p className="card-body automation-note">
                We can work project-by-project or in a phased way. The goal is to create systems
                that feel like an extension of how you already operate — not something that
                makes your day more complicated.
              </p>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: "780px", margin: "0 auto" }}>
              <div className="section-kicker">Next step</div>
              <h2 className="section-title">See if this is a fit for your business.</h2>
              <p className="section-subtitle">
                There’s no pressure to “sign up” for anything on a first call. We’ll just walk
                through where you’re at, where things feel messy, and whether automation and
                better systems would actually help.
              </p>
              <p className="card-body">
                Email{" "}
                <a href="mailto:contact@stonebranchcapital.com">
                  <strong>contact@stonebranchcapital.com</strong>
                </a>{" "}
                with a quick overview of your business, your service area, and what you’d love
                to stop doing manually. We’ll reply with a few time options and a simple way to
                meet.
              </p>

              <div className="hero-automation-cta-row" style={{ marginTop: "0.75rem" }}>
                <a
                  className="btn btn-primary"
                  href="mailto:contact@stonebranchcapital.com?subject=Stonebranch%20Automation%20Inquiry"
                >
                  Email Stonebranch about automation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
