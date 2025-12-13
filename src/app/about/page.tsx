// src/app/about/page.tsx
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <SiteHeader />

      <main>
        {/* HERO / INTRO */}
        <section className="section" style={{ paddingTop: "3.2rem" }}>
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">About Stonebranch</div>
              <h1 className="section-title">
                Built to create, support, and scale ventures the right way.
              </h1>
              <p className="section-subtitle">
                Stonebranch Capital LLC is a small, intentional parent company based in South
                Carolina. We exist to give our own brands—and select partner businesses—a stable
                operational foundation, modern customer experience, and systems that support
                sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="section section-band">
          {/* 👇 Wider, centered container ONLY for these two cards */}
          <div className="container container-wide">
            <div className="card-grid about-two-col about-mv-grid">
              {/* Mission */}
              <article className="card about-card">
                <div className="card-tag">Our mission</div>
                <h2 className="card-title">Build reliable, modern business systems.</h2>
                <p className="card-body">
                  Our mission is to build reliable, efficient, modern operating systems for
                  small businesses—whether they’re ventures we own or companies we support. We
                  focus on clean operations, clear communication, and customer experiences that
                  feel professional, respectful, and easy.
                </p>
                <p className="card-body">
                  Every venture under Stonebranch should feel organized, predictable, and
                  trustworthy—from the first inquiry to the final invoice.
                </p>
              </article>

              {/* Vision */}
              <article className="card about-card">
                <div className="card-tag">Our vision</div>
                <h2 className="card-title">A portfolio that grows together, not apart.</h2>
                <p className="card-body">
                  Our vision is to create a portfolio of service businesses and digital tools
                  that share processes, systems, and standards. New projects shouldn’t have to
                  start from zero; they should inherit what works and improve on it.
                </p>
                <p className="card-body">
                  Stonebranch is especially committed to supporting veteran-owned and early-stage
                  businesses where access to capital, time, and operational support is limited.
                  For select partnerships, we use flexible models—including revenue-share or
                  phased support—so we can align with long-term success instead of loading
                  founders with up-front cost. Any flexible arrangement is scoped, documented, 
                  and approved deliberately so it stays fair and sustainable for both sides.

                </p>
                <p className="card-body about-fine-print">
                  <strong>Important:</strong> Stonebranch Capital LLC is <em>not</em> a lender or
                  funding company. We do not offer loans, lines of credit, or financial products.
                  Our role is to help businesses improve operations, strengthen customer communication,
                  and build more consistent workflows - not to sell financing.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">What we do</div>
              <h2 className="section-title">
                A focused parent company, not a collection of random ideas.
              </h2>
              <p className="section-subtitle">
                Stonebranch is designed to hold a small number of ventures that share a common
                thread: practical services, strong systems, and a modern, respectful experience
                for customers and teams.
              </p>
            </div>

            <div className="card-grid">
              <article className="card">
                <div className="card-tag">01</div>
                <h3 className="card-title">Service-based ventures</h3>
                <p className="card-body">
                  We build and operate service businesses like Southern Elite Bin Cleaning with
                  an emphasis on recurring revenue, route efficiency, and a clean brand presence.
                </p>
                <ul className="card-list">
                  <li>Residential &amp; local services</li>
                  <li>Route-based operations and scheduling</li>
                  <li>Customer portals, reminders, and follow-up</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">02</div>
                <h3 className="card-title">Automation &amp; business systems</h3>
                <p className="card-body">
                  We help local businesses modernize how they handle lead intake, scheduling, and customer communication.
                 That includes AI-powered intake, follow-up, and internal workflows.
                </p>
                <ul className="card-list">
                  <li>Lead capture &amp; response automation</li>
                  <li>Scheduling &amp; reminder flows</li>
                  <li>Review, reputation, and retention systems</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">03</div>
                <h3 className="card-title">Tools, software &amp; future ventures</h3>
                <p className="card-body">
                  Some of the systems we build for ourselves become templates, internal tools,
                  or candidates for stand-alone software products in the future.
                </p>
                <ul className="card-list">
                  <li>Internal tools that may evolve into products</li>
                  <li>Shared processes across multiple ventures</li>
                  <li>Room to launch new ideas under one umbrella</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* OPERATING PRINCIPLES */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">How we operate</div>
              <h2 className="section-title">Principles that guide every venture.</h2>
              <p className="section-subtitle">
                Whether we’re working on our own brands or supporting someone else’s, we try to
                operate the same way: clear, disciplined, and focused on the long term — with fit, ethics, and privacy as non-negotiables.
              </p>
            </div>

            <div
              className="card-grid operate-grid">
              <article className="card">
                <h3 className="card-title">Clarity over complexity</h3>
                <p className="card-body">
                  Systems, offers, and communication should be easy to understand. Complexity
                  might look impressive, but clarity is what actually scales.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Systems first</h3>
                <p className="card-body">
                  We fix the process before we try to grow it. Good systems protect time, reduce
                  stress, and make it easier to bring new people into the work.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Long-term thinking</h3>
                <p className="card-body">
                  We would rather build something stable and boring than something flashy and
                  fragile. Stability beats hype over the long run.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Customer experience first</h3>
                <p className="card-body">
                  Clean branding and responsive communication aren’t optional. They’re part of
                  how we show respect to the people who trust us with their time and money.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Aligned incentives</h3>
                <p className="card-body">
                  We look for arrangements where everyone wins together. If a partnership doesn’t
                  support the founder, the customers, and Stonebranch, it’s not a fit.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Continuous improvement</h3>
                <p className="card-body">
                  Launch is not the finish line. We track what’s working, listen to feedback, and
                  iterate over time instead of chasing quick, one-time wins.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* LEADERSHIP / ROOTS */}
        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: "780px", margin: "0 auto" }}>
              <div className="card-tag">Roots &amp; leadership</div>
              <h2 className="card-title">Grounded in real-world service and discipline.</h2>
              <p className="card-body">
                Stonebranch Capital is led by a U.S. military veteran with experience in
                emergency services, operations, and service-based business development. That
                background shows up in how we think: clear chains of responsibility, checklists,
                training, and systems that still work on hard days—not just on paper.
              </p>
              <p className="card-body">
                The goal is simple: build and support businesses that feel solid, honest, and
                dependable—for owners, teams, and the people they serve.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "left" }}>
              <div className="section-kicker">Next step</div>
              <h2 className="section-title">Want to connect or explore a potential fit?</h2>
              <p className="section-subtitle">
                If you’re curious about how Stonebranch thinks, want to discuss a collaboration,
                or just want to see if our approach fits your business, you’re welcome to reach out.
              </p>
              <p className="card-body">
                Email{" "}
                <a href="mailto:contact@stonebranchcapital.com">
                  <strong>contact@stonebranchcapital.com</strong>
                </a>{" "}
                with a short note about who you are, what you’re working on, and what you’re
                looking for. We’ll respond with honest thoughts and, if it makes sense, a simple
                path forward.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
