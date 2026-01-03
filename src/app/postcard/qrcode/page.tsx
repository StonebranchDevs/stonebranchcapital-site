"use client";

import Link from "next/link";
import { useEffect } from "react";
import { events } from "@/lib/events";

export default function PostcardQRPage() {

  useEffect(() => {
    sessionStorage.setItem("traffic_source", "postcard");
    events.qrLanding();
  }, []);

  return (
    <div className="page postcard-qr-page">
      <main>

        {/* HERO */}
        <section className="section hero-automation reveal reveal-stagger">
          <div className="container">
            <div className="hero-automation-inner">

              <div className="hero-automation-copy">

                {/* ATTENTION STRIP */}
                <div className="attention-strip">
                  Most service businesses lose money before they ever notice.
                </div>

                <div className="section-kicker">
                  You scanned our postcard
                </div>

                <h1 className="section-title">
                  Missed leads are usually just the first thing you notice.
                </h1>

                {/* SCAN-FIRST POINTS (MOBILE RETENTION) */}
                <ul className="scan-points">
                  <li>Leads coming in after hours</li>
                  <li>Follow-ups depending on memory</li>
                  <li>Admin work bleeding into nights</li>
                </ul>

                {/* IMMEDIATE BENEFIT */}
                <p className="outcome-line">
                  Automation helps your business run smoother without you constantly chasing it.
                </p>

                <p className="hero-automation-footnote">
                  If you’re juggling jobs, schedules, customer messages, and admin
                  — and it feels like things only run smoothly when you’re “on” —
                  this will feel very familiar.
                </p>

                <div className="hero-automation-cta-row">
                  <Link
                    href="/automation-examples"
                    className="btn btn-primary"
                    onClick={() =>
                      events.nav({
                        section: "hero",
                        destination: "automation-examples",
                      })
                    }
                  >
                    See how businesses tighten their operations
                  </Link>

                  <Link
                    href="/automation"
                    className="btn btn-outline"
                    onClick={() =>
                      events.nav({
                        section: "hero",
                        destination: "automation",
                      })
                    }
                  >
                    Explore automation services
                  </Link>
                </div>
              </div>

              {/* SIDE CARD */}
              <aside className="hero-automation-panel">
                <div className="card hero-automation-card reveal reveal-float">
                  <div className="card-tag">Common pressure points</div>

                  <ul className="card-list">
                    <li>Leads coming in after hours</li>
                    <li>Slow or missed follow-ups</li>
                    <li>Scheduling chaos &amp; no-shows</li>
                    <li>Admin work spilling into nights</li>
                  </ul>

                  <p className="card-body">
                    These aren’t people problems — they’re system gaps.
                    When tools don’t talk to each other and processes live in
                    someone’s head, small cracks turn into daily stress.
                  </p>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* PATTERN SHIFT */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="section-kicker">The bigger picture</div>

              <h2 className="section-title">
                Missed leads are usually just the first visible symptom.
              </h2>

              <p className="section-subtitle">
                When we look closer, the same businesses missing leads are often
                dealing with deeper system gaps — not isolated problems.
              </p>

              <ul className="card-list">
                <li>Manual scheduling and reminders</li>
                <li>Inconsistent or forgotten follow-ups</li>
                <li>Disconnected inboxes, tools, and spreadsheets</li>
                <li>Internal handoffs that live in someone’s head</li>
                <li>Admin work spilling into nights and weekends</li>
              </ul>

              <p className="card-body">
                Automation helps tighten <strong>all</strong> of these —
                not just the first issue you happen to notice.
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: "880px", margin: "0 auto" }}>
              <div className="section-kicker">What this is</div>

              <h2 className="section-title">
                Practical automation, built around how you already operate.
              </h2>

              <p className="section-subtitle">
                Through Stonebranch Capital’s Automation &amp; Systems division,
                we help service businesses tighten operations across lead intake,
                scheduling, follow-ups, internal workflows, and admin processes —
                so the business runs smoother without constant attention.
              </p>

              <p className="card-body">
                We don’t sell software for the sake of it. We look at where
                time, attention, and energy are getting burned — then build
                simple, reliable systems that quietly handle repetitive,
                time-sensitive work for you.
              </p>
            </div>
          </div>
        </section>

        {/* DECISION */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Next step</div>

              <h2 className="section-title">
                Want to see what this looks like in practice?
              </h2>

              <p className="section-subtitle">
                You can explore real-world scenarios, learn more about how
                we work, or reach out with a quick question.
              </p>
            </div>

            <div className="card-grid">
              <article className="card">
                <div className="card-tag">Examples</div>
                <h3 className="card-title">Real automation scenarios</h3>
                <p className="card-body">
                  See how service businesses use automation across leads,
                  scheduling, follow-ups, reviews, and internal handoffs —
                  without chaos.
                </p>
                <Link
                  href="/automation-examples"
                  className="card-link"
                  onClick={() =>
                    events.nav({
                      section: "decision-cards",
                      destination: "automation-examples",
                    })
                  }
                >
                  View automation examples →
                </Link>
              </article>

              <article className="card">
                <div className="card-tag">Overview</div>
                <h3 className="card-title">Explore automation services</h3>
                <p className="card-body">
                  Learn how our automation and systems work fits into the
                  broader Stonebranch Capital structure.
                </p>
                <Link
                  href="/automation"
                  className="card-link"
                  onClick={() =>
                    events.nav({
                      section: "decision-cards",
                      destination: "automation",
                    })
                  }
                >
                  Visit automation page →
                </Link>
              </article>

              <article className="card">
                <div className="card-tag">Talk</div>
                <h3 className="card-title">Ask a quick question</h3>
                <p className="card-body">
                  No sales pressure — just a quick conversation about where things
                  feel messy and whether systems could help.
                </p>
                <div className="card-actions">
                  <Link
                    href="/contact"
                    className="card-link"
                    onClick={() =>
                      events.cta({
                        section: "decision-cards",
                        label: "contact-form",
                      })
                    }
                  >
                    Use the contact form →
                  </Link>

                  <a
                    href="mailto:contact@stonebranchcapital.com"
                    className="card-link card-link-subtle"
                    onClick={() =>
                      events.mailto({
                        section: "decision-cards",
                        label: "direct-email",
                      })
                    }
                  >
                    Or email us directly
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
