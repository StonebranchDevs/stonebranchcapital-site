"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Ventures() {
  return (
    <div className="page ventures-page">
      <SiteHeader />

      <main>
        <section className="section hero-ventures" style={{ paddingTop: "3.2rem" }}>
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Business ventures</div>
              <h1 className="section-title">
                A small portfolio of ventures built slowly, on purpose.
              </h1>
              <p className="section-subtitle">
                Stonebranch Capital develops a focused set of ventures and operating
                divisions. Some are live and growing, others are in development or early
                exploration—but all share the same foundation: systems, clean operations,
                and long-term thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="section ventures-band">
          <div className="container">
            <div className="card-grid ventures-grid">
              <article className="card division-card">
                <div className="card-tag">Division I</div>
                <h2 className="card-title">Residential &amp; local services</h2>
                <div className="division-status">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">
                    Status: Active &amp; growing
                  </span>
                </div>
                <p className="card-body">
                  This division focuses on route-based, residential services built around
                  recurring revenue and a clean, modern customer experience.
                </p>
                <ul className="card-list">
                  <li>
                    <strong>Southern Elite Bin Cleaning</strong> — residential trash bin
                    cleaning &amp; exterior wash services with a focus on routes,
                    predictable schedules, and polished branding.
                  </li>
                  <li>
                    <strong>Southern Elite Property Inspections</strong> — a developing
                    concept for inspections and reporting designed to be clear,
                    straightforward, and easy for buyers and owners to act on.
                  </li>
                  <li>
                    Shared systems across ventures for scheduling, reminders, and customer
                    communication.
                  </li>
                </ul>
                <Link href="/about" className="card-link">
                  How we think about service ventures →
                </Link>
              </article>

              <article className="card division-card">
                <div className="card-tag">Division II</div>
                <h2 className="card-title">Automation &amp; business systems</h2>
                <div className="division-status division-status-active">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">Status: Active</span>
                </div>
                <p className="card-body">
                  This division focuses on building and implementing the systems that help
                  local businesses capture more leads, book more work, and reduce
                  repetitive admin tasks.
                </p>
                <ul className="card-list">
                  <li>
                    <strong>AI automation for local business</strong> — done-for-you
                    automations for lead intake, follow-up, scheduling, reminders, and
                    review building.
                  </li>
                  <li>
                    Infrastructure that can be used within Stonebranch-owned ventures or
                    as a service for outside businesses.
                  </li>
                  <li>
                    Emphasis on clear reporting, human oversight, and systems that owners
                    actually understand and can trust.
                  </li>
                </ul>
                <Link href="/automation" className="card-link">
                  Explore automation services →
                </Link>
              </article>

              <article className="card division-card">
                <div className="card-tag">Division III</div>
                <h2 className="card-title">Internal tools &amp; future initiatives</h2>
                <div className="division-status division-status-explore">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">
                    Status: Exploration &amp; early development
                  </span>
                </div>
                <p className="card-body">
                  Some of the systems we build for our own use become internal tools—and
                  sometimes those tools evolve into stand-alone offerings or help shape new
                  ventures.
                </p>
                <ul className="card-list">
                  <li>
                    Frameworks for operations, routing, scheduling, and customer
                    communication across multiple brands.
                  </li>
                  <li>
                    Internal dashboards or utilities that may one day be packaged as
                    software or productized services.
                  </li>
                  <li>
                    Space for future projects that fit our core focus: systems, service,
                    and sustainable growth.
                  </li>
                </ul>
                <Link href="/about" className="card-link">
                  Learn more about our approach →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: "840px", margin: "0 auto" }}>
              <div className="card-tag">How it all fits together</div>
              <h2 className="card-title">One foundation, multiple directions.</h2>
              <p className="card-body">
                Stonebranch isn’t trying to build as many brands as possible. Instead, we’re
                building a small ecosystem where ventures can share systems, standards, and
                lessons learned. A scheduling flow refined in one business can later support
                another. An automation built for internal use can become part of an
                automation service offering.
              </p>
              <p className="card-body">
                This approach keeps us disciplined: new ideas are filtered through what we
                already know works, and every venture should feel like part of a bigger
                picture—not a one-off experiment.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: "780px", margin: "0 auto" }}>
              <div className="section-kicker">Interested in a conversation?</div>
              <h2 className="section-title">Exploring partnerships or support.</h2>
              <p className="section-subtitle">
                If you’re a small or veteran-owned business interested in systems,
                automation, or long-term support—not just one-off projects—you’re welcome
                to reach out and see if there’s a fit.
              </p>
              <p className="card-body">
                Email{" "}
                <a href="mailto:contact@stonebranchcapital.com">
                  <strong>contact@stonebranchcapital.com</strong>
                </a>{" "}
                with a short overview of your business, what stage you’re in, and what
                you’re looking for. If it makes sense, we’ll respond with next steps or a
                simple way to continue the conversation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
