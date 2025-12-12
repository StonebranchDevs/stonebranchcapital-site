"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function Contact() {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "error"; msg?: string }>({
    type: "idle",
  });

  const [form, setForm] = useState({
    name: "",
    business: "",
    location: "",
    email: "",
    help: "",
    systems: "",
  });

  useEffect(() => {
    // Render Turnstile once the script is loaded and the div exists
    const tryRender = () => {
      if (!widgetRef.current) return;
      if (!window.turnstile) return;
      if (widgetIdRef.current) return;

      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!siteKey) return;

      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };

    const id = window.setInterval(tryRender, 150);
    return () => window.clearInterval(id);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus({ type: "idle" });

    if (!token) {
      setStatus({ type: "error", msg: "Please complete the spam check." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          turnstileToken: token,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus({ type: "error", msg: data?.error ?? "Something went wrong." });
        // Reset Turnstile so they can try again
        if (window.turnstile && widgetIdRef.current) window.turnstile.reset(widgetIdRef.current);
        setToken("");
        return;
      }

      setStatus({ type: "ok", msg: "Message sent. We’ll reply soon." });
      setForm({ name: "", business: "", location: "", email: "", help: "", systems: "" });
      if (window.turnstile && widgetIdRef.current) window.turnstile.reset(widgetIdRef.current);
      setToken("");
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
      if (window.turnstile && widgetIdRef.current) window.turnstile.reset(widgetIdRef.current);
      setToken("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page contact-page">
      <SiteHeader />

      {/* Turnstile script */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />

      <main>
        <section className="section hero-contact">
          <div className="container">
            <div className="hero-contact-inner">
              <div className="hero-contact-copy">
                <div className="section-kicker">Contact</div>
                <h1 className="section-title">Start a conversation with Stonebranch.</h1>
                <p className="section-subtitle">
                  Tell us what you do, what’s feeling messy, and what you’d like automation or systems to fix.
                  No sales script — just a straightforward conversation.
                </p>
                <p className="hero-contact-footnote">
                  We’re especially interested in small and veteran-owned businesses, but we’re happy to hear
                  from any owner who cares about clean operations and long-term thinking.
                </p>
              </div>

              <aside className="hero-contact-panel">
                <div className="card hero-contact-card">
                  <div className="card-tag">What to include</div>
                  <ul className="card-list">
                    <li>Your name &amp; business name</li>
                    <li>Your location / service area</li>
                    <li>What you currently offer</li>
                    <li>Where things feel messy or manual</li>
                    <li>What you’d love to stop doing yourself</li>
                  </ul>
                  <p className="card-body">
                    You don’t need a polished plan. A rough description of your reality is enough — we’ll help connect
                    the dots.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Send a message</div>
              <h2 className="section-title">We’ll get back to you with next steps.</h2>
              <p className="section-subtitle">
                This form sends directly to our inbox. You’ll get a response as soon as we can.
              </p>
            </div>

            <div className="card contact-form-card">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="business">Business name</label>
                    <input
                      id="business"
                      value={form.business}
                      onChange={(e) => setForm((f) => ({ ...f, business: e.target.value }))}
                      placeholder="Example: Southern Elite Bin Cleaning"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="location">Location / service area</label>
                    <input
                      id="location"
                      value={form.location}
                      onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                      placeholder="Summerville, SC"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Best email to reach you</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="help">What do you need help with?</label>
                  <textarea
                    id="help"
                    rows={4}
                    value={form.help}
                    onChange={(e) => setForm((f) => ({ ...f, help: e.target.value }))}
                    placeholder="Missed leads, scheduling chaos, follow-up, reviews, internal handoffs…"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="systems">
                    What are you currently using for scheduling, communication, or CRM?
                  </label>
                  <textarea
                    id="systems"
                    rows={3}
                    value={form.systems}
                    onChange={(e) => setForm((f) => ({ ...f, systems: e.target.value }))}
                    placeholder="Example: Jobber, Google Calendar, Gmail, Stripe, pen & paper…"
                  />
                </div>

                {/* Turnstile widget */}
                <div className="form-field">
                  <label>Spam protection</label>
                  <div ref={widgetRef} />
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send message"}
                  </button>

                  {status.type === "ok" && (
                    <span className="form-note" style={{ color: "#bbf7d0" }}>
                      {status.msg}
                    </span>
                  )}

                  {status.type === "error" && (
                    <span className="form-note" style={{ color: "#fecaca" }}>
                      {status.msg}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
