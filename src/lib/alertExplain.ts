type ExplanationInput = {
  env?: string;
  region?: string;
  status?: number;
  provider?: "resend" | "turnstile" | "server";
  errorCodes?: string[];
};

export function explainAlert(input: ExplanationInput) {
  const lines: string[] = [];

  // Region explanations
  if (input.region === "iad1") {
    lines.push(
      "📍 Region: iad1 (US East – Northern Virginia)",
      "This is Vercel’s primary US East region. Latency and availability are typically very reliable."
    );
  }

  // HTTP status classes
  if (input.status) {
    if (input.status >= 500) {
      lines.push(
        "🚨 Failure class: Server error (5xx)",
        "This indicates a backend or infrastructure failure that requires attention."
      );
    } else if (input.status >= 400) {
      lines.push(
        "⚠️ Failure class: Client or validation error (4xx)",
        "This usually means the request was rejected due to invalid input or failed verification."
      );
    }
  }

  // Provider-specific explanations
  if (input.provider === "resend") {
    lines.push(
      "✉️ Provider: Resend (Email)",
      "Common causes include domain verification issues, invalid sender addresses, or API key problems."
    );
  }

  if (input.provider === "turnstile") {
    lines.push(
      "🛡️ Provider: Cloudflare Turnstile",
      "Failures usually indicate missing, expired, or invalid challenge tokens."
    );
  }

  // Turnstile error codes (if present)
  if (input.errorCodes?.length) {
    lines.push(
      "🔎 Turnstile error codes detected:",
      input.errorCodes.join(", "),
      "Refer to Cloudflare Turnstile docs for exact meanings."
    );
  }

  if (lines.length === 0) return null;

  return [
    "",
    "━━━━━━━━━━━━━━━━━━",
    "🧠 Diagnostic context",
    ...lines,
  ].join("\n");
}
