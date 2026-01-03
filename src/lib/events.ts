import { trackEvent } from "@/lib/analytics";

/**
 * Safely get the current pathname on the client
 */
function getPage() {
  if (typeof window === "undefined") return "unknown";
  return window.location.pathname || "unknown";
}

/**
 * Source attribution:
 * 1) explicit sessionStorage traffic_source (postcard/email/etc.)
 * 2) document.referrer (if any)
 * 3) direct
 */
function getSource() {
  if (typeof window === "undefined") return "direct";
  return (
    sessionStorage.getItem("traffic_source") ||
    (document.referrer ? document.referrer : "") ||
    "direct"
  );
}

/**
 * Normalize strings for clean analytics:
 * - trim
 * - lowercase
 * - spaces -> dashes
 * - remove weird duplicate dashes
 */
function normalize(value?: string) {
  if (!value) return undefined;
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type NavArgs = {
  destination: string;      // where they're going
  section?: string;         // where the link lived (hero, footer, etc.)
  label?: string;           // optional human-friendly label
};

type CTAArgs = {
  label: string;            // e.g. "see-examples", "contact-us"
  destination?: string;     // optional route they go to
  section?: string;
};

type MailtoArgs = {
  section?: string;
  label?: string;           // optional: "email-us", "card-talk"
};

export const events = {
  /**
   * Fired once on QR landing page
   */
  qrLanding() {
    trackEvent("qr_landing", {
      page: getPage(),
      source: "postcard", // explicit because this event = postcard scan
    });
  },

  /**
   * Navigation clicks (links / buttons that route)
   * You ONLY pass destination/section; page+source inferred automatically.
   */
  nav({ destination, section, label }: NavArgs) {
    trackEvent("nav_click", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      section: normalize(section),
      destination: normalize(destination),
      label: normalize(label),
    });
  },

  /**
   * Primary CTAs (important clicks that signal intent)
   */
  cta({ label, destination, section }: CTAArgs) {
    trackEvent("cta_click", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      section: normalize(section),
      destination: normalize(destination),
      label: normalize(label),
    });
  },

  /**
   * Mail links (mailto:)
   */
  mailto({ section, label }: MailtoArgs = {}) {
    trackEvent("mailto_click", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      section: normalize(section),
      label: normalize(label),
    });
  },

  /**
   * Contact form lifecycle
   */
  formOpen(form: string) {
    trackEvent("form_open", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      form: normalize(form),
    });
  },

  formSubmit(form: string) {
    trackEvent("form_submit", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      form: normalize(form),
    });
  },

  formSuccess(form: string) {
    trackEvent("form_success", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      form: normalize(form),
    });
  },

  formError(form: string, reason?: string) {
    trackEvent("form_error", {
      page: getPage(),
      source: normalize(getSource()) || "direct",
      form: normalize(form),
      reason: normalize(reason),
    });
  },
};



/* MUST USE THESE LABELS --- REQUIRED FOR STANDARDIZATION

Sections:
    - header
    - mobile-header
    - hero
    - cards
    - walkthrough
    - next-step
    - footer

Destinations:
    - home
    - about
    - automation
    - automation-examples
    - contact
    - privacy
    - terms
    - ventures

Labels: 
    - view-automation
    - view-ventures
    - learn-more-about
    - about-direct
    - explore-initiatives
    - build-ventures
    - ventures-direct
    - contact
    - automation-direct



EXAMPLE CODE SNIPPET:
    <Link 
        href="/ventures" 
        className="btn btn-outline"
        onClick={() =>
            events.cta({
            section: "hero",
            label: "view-ventures",
            })
        }
    >

*/