declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

let initialized = false;

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function initAnalytics() {
  if (
    initialized ||
    typeof window === "undefined" ||
    !GA_MEASUREMENT_ID
  ) {
    return;
  }

  // 1️⃣ Ensure dataLayer exists FIRST
  window.dataLayer = window.dataLayer || [];

  // 2️⃣ Define gtag
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };

  // 3️⃣ Load GA script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;

  script.onload = () => {
    // 4️⃣ Initialize GA ONLY after script loads
    window.gtag!("js", new Date());

    window.gtag!("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: true, // default GA behavior
    });
  };

  document.head.appendChild(script);

  initialized = true;
}

export function trackEvent(
  name: string,
  params: Record<string, any> = {}
) {
  if (
    typeof window === "undefined" ||
    !window.gtag
  ) {
    return;
  }

  window.gtag("event", name, params);
}
