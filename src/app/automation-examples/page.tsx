"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type ScenarioId = "lead" | "schedule" | "reviews" | "handoff";

type Step = {
  title: string;
  ownerWhy: string;
  customerSees: string;
  systemDoes: string;
};

type Scenario = {
  id: ScenarioId;
  kicker: string;
  title: string;
  problem: string;
  outcome: string[];
  before: { headline: string; bullets: string[] };
  after: { headline: string; bullets: string[] };
  steps: Step[];
};

export default function AutomationExamplesPage() {
  const scenarios: Scenario[] = useMemo(
    () => [
      {
        id: "lead",
        kicker: "Leads & inquiries",
        title: "After-hours lead → real response → booked job",
        problem:
          "Leads come in when you’re busy (or asleep) and sit too long. Customers move on.",
        outcome: ["No missed leads", "Faster replies", "More booked estimates/jobs", "Less “sorry, just saw this”"],
        before: {
          headline: "Before: you’re the bottleneck",
          bullets: [
            "Website forms go to an inbox you don’t check constantly",
            "Customers wait hours (or days) for a response",
            "You lose leads to the first competitor who replies",
            "You reply at night and it spills into family time",
          ],
        },
        after: {
          headline: "After: the business responds even when you can’t",
          bullets: [
            "Instant confirmation goes out to the customer (text/email)",
            "Basic questions qualify the lead automatically",
            "You get a clean notification with the key details",
            "High-intent leads are routed into a simple pipeline",
          ],
        },
        steps: [
          {
            title: "Lead arrives",
            ownerWhy: "You stop wondering who you missed.",
            customerSees: "A simple form or quick message.",
            systemDoes: "Captures contact details + service type + location automatically.",
          },
          {
            title: "Instant reply",
            ownerWhy: "You look professional without being glued to your phone.",
            customerSees: "“Got it — here’s what happens next.”",
            systemDoes: "Sends a friendly confirmation with expectations + next step.",
          },
          {
            title: "Owner notification",
            ownerWhy: "You get the important info without digging through threads.",
            customerSees: "Nothing extra — they’re already taken care of.",
            systemDoes: "Notifies you (or your team) with a clean summary and priority level.",
          },
          {
            title: "Next step link",
            ownerWhy: "Bookings happen faster; fewer back-and-forth messages.",
            customerSees: "A link to schedule or request a quote.",
            systemDoes: "Offers a scheduling link (or quote intake) based on your rules.",
          },
        ],
      },
      {
        id: "schedule",
        kicker: "Scheduling & no-shows",
        title: "Fewer no-shows with confirmations + reminders",
        problem:
          "Appointments are messy: back-and-forth, missed reminders, last-minute cancellations.",
        outcome: ["Fewer no-shows", "Less reschedule chaos", "Cleaner calendar", "Happier customers"],
        before: {
          headline: "Before: you chase confirmations manually",
          bullets: [
            "You text customers to confirm (sometimes multiple times)",
            "People forget dates and times",
            "Last-minute cancellations blow up your route/day",
            "Your calendar isn’t reliably up to date",
          ],
        },
        after: {
          headline: "After: confirmations run automatically (you stay in control)",
          bullets: [
            "Instant confirmation + calendar info sent immediately",
            "48-hour + day-of reminders reduce no-shows",
            "Simple reschedule flow prevents “ghosting”",
            "Owner gets alerts if something needs attention",
          ],
        },
        steps: [
          {
            title: "Job scheduled",
            ownerWhy: "You lock in the work faster.",
            customerSees: "Clear date/time confirmation.",
            systemDoes: "Creates/updates the appointment and stores customer details.",
          },
          {
            title: "Confirmation sent",
            ownerWhy: "You reduce misunderstandings and weird follow-ups.",
            customerSees: "“You’re booked — here’s what to expect.”",
            systemDoes: "Sends confirmation with prep notes and contact options.",
          },
          {
            title: "Reminders go out",
            ownerWhy: "Fewer no-shows without extra effort.",
            customerSees: "Quick reminders at the right times.",
            systemDoes: "Sends reminders 48h and day-of (timing based on your preference).",
          },
          {
            title: "Reschedule handled",
            ownerWhy: "Less back-and-forth. Less calendar damage.",
            customerSees: "Simple “need to reschedule?” option.",
            systemDoes: "Routes reschedules to approved options or flags you if special.",
          },
        ],
      },
      {
        id: "reviews",
        kicker: "Reviews & retention",
        title: "Job completed → follow-up → steady reviews",
        problem:
          "Reviews don’t happen unless you ask… and asking is awkward, easy to forget, or inconsistent.",
        outcome: ["More reviews", "More repeat work", "Better local trust", "Less manual follow-up"],
        before: {
          headline: "Before: reviews depend on your memory",
          bullets: [
            "You forget to ask when you’re busy",
            "Customers say “sure” and then never do it",
            "One bad experience lingers because you don’t collect enough good ones",
            "You don’t have a consistent follow-up rhythm",
          ],
        },
        after: {
          headline: "After: follow-up happens automatically while it’s fresh",
          bullets: [
            "Thank-you message goes out right after service",
            "Review request follows with a direct link",
            "A gentle reminder triggers only if no review yet",
            "Repeat-service nudges can be scheduled seasonally",
          ],
        },
        steps: [
          {
            title: "Job marked complete",
            ownerWhy: "You standardize what “done” means.",
            customerSees: "Nothing yet.",
            systemDoes: "Triggers follow-up sequence once job status is ‘complete’.",
          },
          {
            title: "Thank-you message",
            ownerWhy: "You stay top-of-mind with zero effort.",
            customerSees: "A quick, respectful thank-you.",
            systemDoes: "Sends a branded thank-you text/email with simple next steps.",
          },
          {
            title: "Review request",
            ownerWhy: "You build reputation consistently.",
            customerSees: "A link that makes leaving a review easy.",
            systemDoes: "Sends review request with the correct profile link(s).",
          },
          {
            title: "Optional reminder",
            ownerWhy: "You don’t beg — you gently prompt.",
            customerSees: "A single reminder (not spam).",
            systemDoes: "Sends one follow-up only if no review is detected/recorded.",
          },
        ],
      },
      {
        id: "handoff",
        kicker: "Internal workflows",
        title: "Less “did someone handle that?” with handoffs + notifications",
        problem:
          "Even small teams drop tasks. Details get lost between calls, texts, and notes.",
        outcome: ["Fewer dropped tasks", "Cleaner handoffs", "Better visibility", "Less stress"],
        before: {
          headline: "Before: tasks disappear into the void",
          bullets: [
            "You rely on memory, texts, and sticky notes",
            "Details get lost between team members",
            "Customers follow up because you didn’t",
            "You don’t have a simple log of what happened",
          ],
        },
        after: {
          headline: "After: the right person gets the right info at the right time",
          bullets: [
            "New job triggers a task for the right person automatically",
            "Owner gets a summary + exceptions only",
            "Statuses update as work progresses",
            "A simple activity log shows what happened and when",
          ],
        },
        steps: [
          {
            title: "Trigger event",
            ownerWhy: "You stop relying on memory to start the next step.",
            customerSees: "Nothing extra — it’s internal.",
            systemDoes: "A lead, booking, payment, or completion triggers the workflow.",
          },
          {
            title: "Task created",
            ownerWhy: "You get consistency without micromanaging.",
            customerSees: "Better follow-through.",
            systemDoes: "Creates a task (checklist) and assigns it to the right person.",
          },
          {
            title: "Notification sent",
            ownerWhy: "You don’t get spammed — only the important stuff.",
            customerSees: "Faster replies and updates.",
            systemDoes: "Notifies team + owner with a clean summary (and escalates issues).",
          },
          {
            title: "Visibility & log",
            ownerWhy: "You can see what’s happening without chasing people.",
            customerSees: "More predictable service.",
            systemDoes: "Updates a simple dashboard/log so you can track handoffs.",
          },
        ],
      },
    ],
    []
  );

  const [activeScenario, setActiveScenario] = useState<ScenarioId>("lead");
  const [mode, setMode] = useState<"before" | "after">("after");
  const [stepIndex, setStepIndex] = useState(0);

  const scenario = useMemo(
    () => scenarios.find((s) => s.id === activeScenario)!,
    [scenarios, activeScenario]
  );

  useEffect(() => {
    setStepIndex(0);
  }, [activeScenario]);

  const activeStep = scenario.steps[stepIndex];
  const summary = mode === "before" ? scenario.before : scenario.after;

  return (
    <div className="page automation-examples-page">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="section reveal" style={{ paddingTop: "3.2rem" }}>
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Automation examples</div>
              <h1 className="section-title">
                What automation looks like in a real service business.
              </h1>
              <p className="section-subtitle" style={{ maxWidth: "46rem" }}>
                These are representative workflows using simulated data. The goal is to
                show you what changes in day-to-day operations: fewer missed leads, fewer
                no-shows, better follow-up, and less manual admin.
              </p>

              <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/automation" className="btn btn-outline">
                  Back to Business Assistance
                </Link>
                <Link href="/contact" className="btn btn-primary">
                  Talk to Stonebranch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SCENARIO PICKER */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Choose a scenario</div>
              <h2 className="section-title">Pick what matters most right now.</h2>
              <p className="section-subtitle">
                Click a scenario to see the before/after and walk through the steps.
              </p>
            </div>

            <div className="card-grid" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {scenarios.map((s) => {
                const selected = s.id === activeScenario;
                return (
                  <button
                    key={s.id}
                    className="card"
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                      borderColor: selected ? "rgba(191,219,254,0.95)" : undefined,
                      transform: selected ? "translateY(-3px)" : undefined,
                    }}
                    onClick={() => setActiveScenario(s.id)}
                    type="button"
                  >
                    <div className="card-tag">{s.kicker}</div>
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-body" style={{ marginBottom: 0 }}>
                      {s.problem}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER + OUTCOMES */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: 980, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <div className="card-tag">Scenario focus</div>
                  <h2 className="card-title" style={{ marginBottom: "0.35rem" }}>
                    {scenario.title}
                  </h2>
                  <p className="card-body" style={{ marginTop: 0 }}>
                    {scenario.problem}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "0.95rem", color: "#cbd5f5", opacity: 0.9 }}>View:</span>
                  <div
                    style={{
                      display: "inline-flex",
                      borderRadius: 999,
                      border: "1px solid rgba(148,163,184,0.7)",
                      background: "rgba(15,23,42,0.7)",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      className="btn"
                      style={{
                        borderRadius: 0,
                        border: "none",
                        background: mode === "before" ? "rgba(30,64,175,0.9)" : "transparent",
                        color: mode === "before" ? "#e5e7eb" : "inherit",
                      }}
                      onClick={() => setMode("before")}
                    >
                      Before
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{
                        borderRadius: 0,
                        border: "none",
                        background: mode === "after" ? "rgba(30,64,175,0.9)" : "transparent",
                        color: mode === "after" ? "#e5e7eb" : "inherit",
                      }}
                      onClick={() => setMode("after")}
                    >
                      After
                    </button>
                  </div>
                </div>
              </div>

              <div className="ae-summary-grid" style={{ display: "grid", gap: "1.4rem", marginTop: "1.1rem" }}>
                <div className="card" style={{ margin: 0 }}>
                  <div className="card-tag">{summary.headline}</div>
                  <ul className="card-list">
                    {summary.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="card" style={{ margin: 0 }}>
                  <div className="card-tag">What changes for you</div>
                  <ul className="card-list">
                    {scenario.outcome.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                  <p className="card-body" style={{ marginTop: "0.6rem" }}>
                    The point isn’t buzzwords — it’s reducing the number of things that can slip
                    through the cracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE WALKTHROUGH */}
        <section className="section reveal">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Walkthrough</div>
              <h2 className="section-title">Click through the steps.</h2>
              <p className="section-subtitle">
                This is the “how does it work, and why is it good for me?” part — in plain English.
              </p>
            </div>

            <div className="card" style={{ maxWidth: 980, margin: "0 auto" }}>
              <div className="ae-walkthrough-grid" style={{ display: "grid", gap: "1.4rem" }}>
                <div className="card" style={{ margin: 0 }}>
                  <div className="card-tag">Steps</div>

                  <ol className="step-list" style={{ margin: 0, paddingLeft: "1.25rem" }}>
                    {scenario.steps.map((st, idx) => {
                      const isActive = idx === stepIndex;
                      return (
                        <li key={idx} style={{ marginBottom: "0.65rem" }}>
                          <button
                            type="button"
                            className="btn btn-outline"
                            style={{
                              width: "100%",
                              justifyContent: "flex-start",
                              borderColor: isActive ? "rgba(191,219,254,0.95)" : undefined,
                              background: isActive ? "rgba(30,64,175,0.25)" : undefined,
                            }}
                            onClick={() => setStepIndex(idx)}
                          >
                            <span style={{ fontWeight: 700, marginRight: 6 }}>{idx + 1}.</span>
                            {st.title}
                          </button>
                        </li>
                      );
                    })}
                  </ol>

                  <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
                    <button
                      className="btn btn-outline"
                      type="button"
                      onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                      disabled={stepIndex === 0}
                      style={{ opacity: stepIndex === 0 ? 0.6 : 1 }}
                    >
                      ← Prev
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => setStepIndex((i) => Math.min(scenario.steps.length - 1, i + 1))}
                      disabled={stepIndex === scenario.steps.length - 1}
                      style={{ opacity: stepIndex === scenario.steps.length - 1 ? 0.7 : 1 }}
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="card" style={{ margin: 0 }}>
                  <div className="card-tag">
                    Step {stepIndex + 1} of {scenario.steps.length}
                  </div>
                  <h3 className="card-title" style={{ marginBottom: "0.6rem" }}>
                    {activeStep.title}
                  </h3>

                  <div className="card" style={{ margin: 0, marginBottom: "0.9rem" }}>
                    <div className="card-tag">Why this is good for you</div>
                    <p className="card-body" style={{ margin: 0 }}>
                      {activeStep.ownerWhy}
                    </p>
                  </div>

                  <div className="ae-cs-grid" style={{ display: "grid", gap: "0.9rem" }}>
                    <div className="card" style={{ margin: 0 }}>
                      <div className="card-tag">Customer sees</div>
                      <p className="card-body" style={{ margin: 0 }}>
                        {activeStep.customerSees}
                      </p>
                    </div>
                    <div className="card" style={{ margin: 0 }}>
                      <div className="card-tag">System does</div>
                      <p className="card-body" style={{ margin: 0 }}>
                        {activeStep.systemDoes}
                      </p>
                    </div>
                  </div>

                  <p className="card-body" style={{ marginTop: "0.9rem" }}>
                    Want this mapped to your exact workflow? We’ll keep it simple and build around how you already operate.
                  </p>

                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn btn-primary">
                      Talk about your workflow
                    </Link>
                    <Link href="/automation" className="btn btn-outline">
                      Back to Business Assistance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section reveal">
          <div className="container">
            <div className="card" style={{ maxWidth: 980, margin: "0 auto" }}>
              <div className="section-kicker">Next step</div>
              <h2 className="section-title">Want to see this in your business?</h2>
              <p className="section-subtitle" style={{ maxWidth: "46rem" }}>
                Send a quick note about what you do, where leads come from, and what feels
                messy or manual. We’ll reply with an honest recommendation and a simple plan.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Contact Stonebranch
                </Link>
                <a
                  href="mailto:contact@stonebranchcapital.com?subject=Stonebranch%20Automation%20Examples%20Inquiry"
                  className="btn btn-outline"
                >
                  Email directly
                </a>
              </div>

              <p className="card-body" style={{ marginTop: "0.9rem", opacity: 0.9 }}>
                <strong>Transparency:</strong> Examples shown use simulated data. We design each workflow around your real
                process, tools, and customer expectations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
