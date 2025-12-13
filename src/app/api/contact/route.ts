import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  business?: string;
  location?: string;
  email: string;
  help: string;
  systems?: string;
  turnstileToken: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const help = (body.help ?? "").trim();
    const turnstileToken = (body.turnstileToken ?? "").trim();

    if (!name || !email || !help) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Please complete the spam check." },
        { status: 400 }
      );
    }

    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { ok: false, error: "Server missing TURNSTILE_SECRET_KEY." },
        { status: 500 }
      );
    }

    // Verify Turnstile
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", turnstileToken);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: formData }
    );

    const verifyData = (await verifyRes.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verifyData.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Spam check failed. Please try again.",
          codes: verifyData["error-codes"] ?? [],
        },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;     // where YOU receive inquiries
    const fromEmail = process.env.CONTACT_FROM_EMAIL; // e.g. "Stonebranch Capital <no-reply@stonebranchcapital.com>"
    const siteUrl = (process.env.SITE_URL || "https://stonebranchcapital.com").replace(/\/$/, "");

    if (!resendKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Server missing email configuration (.env.local / Vercel env)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const business = (body.business ?? "").trim();
    const location = (body.location ?? "").trim();
    const systems = (body.systems ?? "").trim();

    // ---------------------------
    // 1) INTERNAL EMAIL (to you)
    // ---------------------------
    const internalSubject = `New Stonebranch inquiry — ${name}${business ? ` (${business})` : ""}`;

    const internalText = [
      `Name: ${name}`,
      `Email: ${email}`,
      business ? `Business: ${business}` : "",
      location ? `Location: ${location}` : "",
      "",
      `Needs help with:`,
      help,
      "",
      systems ? `Current tools: ${systems}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email, // so you can hit reply and it goes to the customer
      subject: internalSubject,
      text: internalText,
    });

    // -----------------------------------------
    // 2) CUSTOMER AUTO-REPLY (to the customer)
    // -----------------------------------------
    const customerSubject = `Got your message — Stonebranch Capital`;

    const safeName = escapeHtml(name.split(" ")[0] || name);
    const logoUrl = `${siteUrl}/sbc-logo.png`; // from your /public folder

    const customerText = [
      `Hey ${name},`,
      "",
      `Got your message — thanks for reaching out.`,
      `I’ll take a look and get back to you soon.`,
      "",
      `If you want, you can reply to this email with anything helpful like:`,
      `• your service area`,
      `• what you’re trying to improve (leads, scheduling, follow-up, etc.)`,
      `• what tools you’re currently using`,
      "",
      `— Josh`,
      `Founder, Stonebranch Capital`,
      `${siteUrl}`,
    ].join("\n");

    const customerHtml = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; color:#0f172a; line-height:1.45;">
        <div style="max-width:640px; margin:0 auto; padding:24px;">
          
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
            <img src="${logoUrl}" width="44" height="44" alt="Stonebranch Capital" style="border-radius:999px; display:block;" />
            <div>
              <div style="font-weight:700; font-size:14px; letter-spacing:0.2px;">Stonebranch Capital</div>
              <div style="font-size:12px; color:#475569;">Message received</div>
            </div>
          </div>

          <div style="font-size:16px; margin:0 0 12px 0;">
            Hey ${safeName},
          </div>

          <div style="font-size:16px; margin:0 0 12px 0;">
            Got your message — thanks for reaching out. I’ll take a look and get back to you soon.
          </div>

          <div style="font-size:14px; color:#334155; margin:16px 0 14px 0;">
            If you want to speed things up, just reply to this email with:
            <ul style="margin:8px 0 0 18px; padding:0;">
              <li>your service area</li>
              <li>what you’re trying to improve (leads, scheduling, follow-up, etc.)</li>
              <li>what tools you’re currently using (if any)</li>
            </ul>
          </div>

          <div style="margin-top:18px;">
            <a href="${siteUrl}" style="display:inline-block; background:#1e40af; color:#ffffff; text-decoration:none; padding:10px 14px; border-radius:10px; font-weight:600; font-size:14px;">
              Visit stonebranchcapital.com
            </a>
          </div>

          <div style="margin-top:18px; font-size:14px; color:#0f172a;">
            — Josh<br/>
            <span style="color:#475569;">Founder, Stonebranch Capital</span>
          </div>

          <div style="margin-top:18px; font-size:12px; color:#64748b;">
            If images are blocked, this email still works — the important info is all text.
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: toEmail, // customer hitting Reply goes to your inbox (contact@...)
      subject: customerSubject,
      text: customerText, // inbox-safe fallback
      html: customerHtml, // polished version
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error sending message." },
      { status: 500 }
    );
  }
}
