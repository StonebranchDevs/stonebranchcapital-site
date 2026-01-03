// src/components/ContactForm.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import { events } from "@/lib/events"; // ✅ ADD (20260102): central events helper

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
    };
    __TURNSTILE_TOKEN__?: string;
  }
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  // ✅ ADD (20260102): track when the form is actually seen
  useEffect(() => {
    events.formOpen("contact");
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    // ✅ ADD(20260102): track submit attempt
    events.formSubmit("contact");

    if (!token) {
      setStatus("error");
      setMessage("Please complete the spam check.");

      // ✅ ADD(20260102): track validation failure
      events.formError("contact", "missing_turnstile");
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      business: String(fd.get("business") || "").trim(),
      location: String(fd.get("location") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      help: String(fd.get("help") || "").trim(),
      systems: String(fd.get("systems") || "").trim(),
      turnstileToken: token,
    };

    setStatus("submitting");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setStatus("error");
      setMessage(data?.error || "Something went wrong. Please try again.");

      // ✅ ADD: track server/API failure
      events.formError("contact", "api_error");

      setToken("");
      try {
        window.turnstile?.reset?.();
      } catch {}
      return;
    }

    setStatus("success");
    setMessage("Message sent. We’ll get back to you soon.");

    // ✅ ADD: track successful lead
    events.formSuccess("contact");

    form.reset();
    setToken("");
    try {
      window.turnstile?.reset?.();
    } catch {}
  }

  return (
    <>
      {/* Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <div className="card contact-form-card">
        <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Jane Doe" required />
            </div>

            <div className="form-field">
              <label htmlFor="business">Business name</label>
              <input
                id="business"
                name="business"
                type="text"
                placeholder="Example: Southern Elite Bin Cleaning"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="location">Location / service area</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City / region (e.g., Summerville, SC)"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Best email to reach you</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="help">What do you need help with?</label>
            <textarea
              id="help"
              name="help"
              rows={4}
              placeholder="Scheduling chaos, missed leads, follow-up, review systems, internal handoffs..."
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="systems">
              What are you currently using for scheduling, communication, or CRM?
            </label>
            <textarea
              id="systems"
              name="systems"
              rows={3}
              placeholder="Example: Google Calendar + Gmail + Stripe, Jobber, Housecall Pro, spreadsheets, etc."
            />
          </div>

          {/* Turnstile widget */}
          <div className="form-field">
            <div
              className="cf-turnstile"
              data-sitekey={siteKey}
              data-theme="dark"
              data-callback="onTurnstileSuccess"
              data-expired-callback="onTurnstileExpired"
              data-error-callback="onTurnstileError"
            />
          </div>

          {/* Turnstile callbacks */}
          <Script id="turnstile-callbacks" strategy="afterInteractive">
            {`
              window.onTurnstileSuccess = function (token) {
                window.__TURNSTILE_TOKEN__ = token;
              };
              window.onTurnstileExpired = function () {
                window.__TURNSTILE_TOKEN__ = "";
              };
              window.onTurnstileError = function () {
                window.__TURNSTILE_TOKEN__ = "";
              };
            `}
          </Script>

          {/* Sync token to React */}
          <Script id="turnstile-token-sync" strategy="afterInteractive">
            {`
              (function(){
                const interval = setInterval(() => {
                  const t = window.__TURNSTILE_TOKEN__ || "";
                  const evt = new CustomEvent("turnstile-token", { detail: t });
                  window.dispatchEvent(evt);
                }, 250);
                window.__TURNSTILE_INTERVAL__ = interval;
              })();
            `}
          </Script>

          <TokenBridge onToken={setToken} />

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
              style={{ opacity: status === "submitting" ? 0.8 : 1 }}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            <span className="form-note">
              We’ll reply by email. No spam. No pressure.
            </span>
          </div>

          {message ? (
            <p
              className="form-note"
              style={{
                marginTop: "0.75rem",
                opacity: 1,
                color: status === "error" ? "#fca5a5" : "#bbf7d0",
              }}
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </>
  );
}

function TokenBridge({ onToken }: { onToken: (t: string) => void }) {
  if (typeof window !== "undefined") {
    window.addEventListener("turnstile-token", (e: any) => {
      onToken(String(e?.detail || ""));
    });
  }
  return null;
}
