"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PostcardQRPage() {

useEffect(() => {
  sessionStorage.setItem("traffic_source", "postcard");
}, []);


  return (
    <div className="page postcard-qr-page">
      <main>

        {/* HERO */}
        <section className="section hero-automation reveal reveal-stagger">
          <div className="container">
            <div className="hero-automation-inner">

              <div className="hero-automation-copy">
                <div className="section-kicker">
                  You scanned our postcard
                </div>

                <h1 className="section-title">
                  Most service businesses don’t miss leads because of bad service.
                </h1>

                <p className="section-subtitle">
                  They miss them because calls, forms, and follow-ups happen when
                  no one is available — or when everything depends on memory.
                </p>

                <p className="hero-automation-footnote">
                  If you’re busy running jobs, managing schedules, or wearing too
                  many hats, this probably feels familiar.
                </p>

                <div className="hero-automation-cta-row">
                  <Link href="/automation-examples" className="btn btn-primary">
                    See how businesses fix this
                  </Link>

                  <Link href="/automation" className="btn btn-outline">
                    Explore automation services
                  </Link>
                </div>
              </div>

              {/* SIDE CARD */}
              <aside className="hero-automation-panel">
                <div className="card hero-automation-card reveal reveal-float">
                  <div className="card-tag">What usually breaks first</div>

                  <ul className="card-list">
                    <li>Leads coming in after hours</li>
                    <li>Slow or missed follow-ups</li>
                    <li>Scheduling chaos &amp; no-shows</li>
                    <li>Admin work spilling into nights</li>
                  </ul>

                  <p className="card-body">
                    These aren’t people problems — they’re system gaps.
                    The good news is they’re usually fixable without hiring
                    or rebuilding your business.
                  </p>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* QUICK CLARIFIER */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: "880px", margin: "0 auto" }}>
              <div className="section-kicker">What this is</div>
              <h2 className="section-title">
                Practical automation, built around how you already operate.
              </h2>
              <p className="section-subtitle">
                Through Stonebranch Capital’s Automation &amp; Systems division,
                we help service businesses respond faster, follow up consistently,
                and keep things moving — without turning your operation into
                something unrecognizable.
              </p>

              <p className="card-body">
                We don’t sell software for the sake of it. We look at where
                leads are slipping, where time is getting burned, and where
                simple systems can quietly take work off your plate.
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
                  See how service businesses handle leads, scheduling,
                  follow-ups, and internal handoffs without chaos.
                </p>
                <Link href="/automation-examples" className="card-link">
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
                <Link href="/automation" className="card-link">
                  Visit automation page →
                </Link>
              </article>

              <article className="card">
                <div className="card-tag">Talk</div>
                <h3 className="card-title">Ask a quick question</h3>
                <p className="card-body">
                  No sales pressure — just a conversation about where things
                  feel messy and whether systems could help.
                </p>
                <a
                  href="mailto:contact@stonebranchcapital.com"
                  className="card-link"
                >
                  Email Stonebranch →
                </a>
              </article>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
