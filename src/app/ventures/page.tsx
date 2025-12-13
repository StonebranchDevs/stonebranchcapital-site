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
                Stonebranch Capital oversees a focused set of operating
                divisions and subsidiary ventures. Some are live and growing, others are in development or early
                exploration—but all share the same foundation: systems, clean operations,
                and long-term thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="section ventures-band">
          <div className="container">
            <div className="card-grid ventures-grid">

              {/* DIVISION I — SERVICES (Subsidiaries) */}
              <article className="card division-card">
                <div className="card-tag">Division I</div>
                <h2 className="card-title">Services Division</h2>
                <div className="division-status">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">Status: Active &amp; growing</span>
                </div>

                <p className="card-body">
                  The Services Division exists to build and operate practical, route-based service
                  businesses with clean operations, consistent communication, and a professional customer
                  experience. We prioritize reliability over hype and systems over improvisation — so the
                  business still runs well on hard days, not just ideal ones.
                </p>

                <ul className="card-list">
                  <li>
                    <strong>Southern Elite Bin Cleaning</strong> — an active subsidiary focused on
                    recurring residential bin cleaning and exterior wash services, delivered through
                    predictable routes, scheduling discipline, and a polished brand experience.
                  </li>
                  <li>
                    <strong>Operating playbooks</strong> — scheduling, reminders, customer messaging,
                    service documentation, and quality controls shared across service ventures as they come
                    online.
                  </li>
                  <li>
                    <strong>New service concepts</strong> — explored deliberately, evaluated for fit and
                    risk, and launched only when they meet Stonebranch’s standards for clarity,
                    sustainability, and customer trust.
                  </li>
                </ul>

                <Link href="/about" className="card-link">
                  How we build durable service ventures →
                </Link>
              </article>

              {/* DIVISION II — AUTOMATION (Client-facing under Stonebranch) */}
              <article className="card division-card">
                <div className="card-tag">Division II</div>
                <h2 className="card-title">Automation &amp; Systems Division</h2>
                <div className="division-status division-status-active">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">Status: Active</span>
                </div>

                <p className="card-body">
                  The Automation &amp; Systems Division helps small businesses modernize key workflows —
                  especially lead intake, follow-up, scheduling, and internal coordination. We take a
                  fit-first approach and only build what we can stand behind. Automations are designed to
                  be understandable, monitored, and maintainable — not mysterious black boxes.
                </p>

                <ul className="card-list">
                  <li>
                    <strong>AI-assisted intake &amp; follow-up</strong> — structured workflows for inquiry
                    handling, routing, and response consistency, with appropriate human oversight where
                    impact is material.
                  </li>
                  <li>
                    <strong>Systems implementation</strong> — scheduling flows, reminder sequences, review
                    &amp; reputation systems, and internal handoffs designed around clarity and real-world
                    execution.
                  </li>
                  <li>
                    <strong>Privacy-first by default</strong> — we minimize data, use it only for approved
                    purposes, and select tools deliberately. No selling data. No silent scope creep.
                  </li>
                </ul>

                <Link href="/automation" className="card-link">
                  Explore automation services →
                </Link>
              </article>

              {/* DIVISION III — VENTURE STUDIO / INTERNAL TOOLS */}
              <article className="card division-card">
                <div className="card-tag">Division III</div>
                <h2 className="card-title">Venture Studio &amp; Internal Tools</h2>
                <div className="division-status division-status-explore">
                  <span className="division-status-dot"></span>
                  <span className="division-status-text">Status: Exploration &amp; early development</span>
                </div>

                <p className="card-body">
                  The Venture Studio is where Stonebranch turns lessons from operations into reusable
                  systems — and where new concepts are explored with discipline. This division exists to
                  reduce “starting from zero” while avoiding random experimentation. Anything that moves
                  forward is documented, reviewed for risk, and aligned with Stonebranch governance before
                  it becomes real.
                </p>

                <ul className="card-list">
                  <li>
                    <strong>Internal tooling</strong> — dashboards, SOP-backed workflows, operational
                    templates, and utilities that improve execution across ventures.
                  </li>
                  <li>
                    <strong>Reusable frameworks</strong> — patterns for routing, scheduling, customer
                    communication, documentation, and reporting that can be inherited by new ventures.
                  </li>
                  <li>
                    <strong>Deliberate incubation</strong> — future products or ventures are evaluated for
                    fit, ethics, data handling, and sustainability before launch. Exploration is not a
                    promise of release.
                  </li>
                </ul>

                <Link href="/about" className="card-link">
                  Learn how we explore new initiatives →
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
                another. An automation built for internal use may later inform our service offerings
                when it's proven, documented, and a clear fit.
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
                to reach out and see if there’s a fit. We keep the first conversation simple: 
                understand the situation, confirm fit, and outline a responsible next step.
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
