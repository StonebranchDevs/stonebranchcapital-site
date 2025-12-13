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

    // Verify Turnstile token
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
    const toEmail = process.env.CONTACT_TO_EMAIL; // where YOU receive inquiries
    const fromEmail = process.env.CONTACT_FROM_EMAIL; // e.g. "Stonebranch Capital <no-reply@stonebranchcapital.com>"
    const replyToEmail = process.env.CONTACT_REPLYTO_EMAIL || toEmail; // where customer replies go
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stonebranchcapital.com";

    if (!resendKey || !toEmail || !fromEmail || !replyToEmail) {
      return NextResponse.json(
        { ok: false, error: "Server missing email configuration (.env.local)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const business = (body.business ?? "").trim();
    const location = (body.location ?? "").trim();
    const systems = (body.systems ?? "").trim();

    // 1) INTERNAL NOTIFICATION (to you)
    const internalSubject = `New Stonebranch inquiry — ${name}${
      business ? ` (${business})` : ""
    }`;

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
      replyTo: email, // ✅ so YOU can just hit Reply
      subject: internalSubject,
      text: internalText,
    });

    // 2) CUSTOMER AUTO-REPLY (to them)
    const examplesUrl = `${siteUrl}/automation-examples`;

    const customerSubject = "We received your message — Stonebranch Capital";

    const customerText = [
      `Hi ${name},`,
      "",
      "Thanks for reaching out — I’ve received your message and will personally review it.",
      "",
      "We work with a small number of businesses at a time, so responses aren’t automated or rushed.",
      "You can expect a thoughtful reply once I’ve had time to look over what you shared.",
      "",
      "While you’re waiting, you may find this helpful:",
      `A few real examples of how we help businesses simplify operations and reduce manual work:`,
      examplesUrl,
      "",
      "No pressure to reply again unless you want to add context — your original message came through clearly.",
      "",
      "Best,",
      "Josh Doms",
      "Founder, Stonebranch Capital LLC",
      "Charleston, SC",
      "",
      "—",
      "If you didn’t intend to contact Stonebranch, you can safely ignore this email.",
    ].join("\n");

    const safeName = escapeHtml(name);

    const customerHtml = `
<div style="background:#0b1025;padding:24px 0;margin:0;">
  <div style="max-width:640px;margin:0 auto;background:#0b1220;border:1px solid rgba(30,64,175,0.35);border-radius:16px;overflow:hidden;">
    <div style="padding:22px 22px 10px 22px;">
      <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#a5b4fc;opacity:0.9;">
        Stonebranch Capital LLC
      </div>
      <h1 style="margin:10px 0 0 0;font-size:20px;line-height:1.35;color:#e5e7eb;font-weight:650;">
        We received your message
      </h1>
    </div>

    <div style="padding:18px 22px 22px 22px;color:#e5e7eb;font-size:15px;line-height:1.65;">
      <p style="margin:0 0 14px 0;">Hi ${safeName},</p>

      <p style="margin:0 0 14px 0;">
        Thanks for reaching out — I’ve received your message and will personally review it.
      </p>

      <p style="margin:0 0 14px 0;">
        We work with a small number of businesses at a time, so responses aren’t automated or rushed.
        You can expect a thoughtful reply once I’ve had time to look over what you shared.
      </p>

      <p style="margin:18px 0 10px 0;color:#d1d5db;">
        While you’re waiting, you may find this helpful:
      </p>

      <div style="margin:12px 0 18px 0;padding:14px 14px;border-radius:14px;border:1px solid rgba(148,163,184,0.25);background:rgba(15,23,42,0.55);">
        <div style="font-size:14px;color:#e5e7eb;margin:0 0 10px 0;">
          A few real examples of how we help businesses simplify operations and reduce manual work.
        </div>

        <a href="${examplesUrl}"
           style="display:inline-block;text-decoration:none;background:linear-gradient(135deg,#38bdf8,#4f46e5);color:#0b1025;font-weight:700;padding:10px 14px;border-radius:999px;font-size:14px;">
          View automation examples
        </a>
      </div>

      <p style="margin:0 0 16px 0;color:#d1d5db;">
        No pressure to reply again unless you want to add context — your original message came through clearly.
      </p>

      <p style="margin:0;">
        Best,<br />
        <strong style="color:#e5e7eb;">Josh Doms</strong><br />
        <span style="color:#9ca3af;">Founder, Stonebranch Capital LLC</span><br />
        <span style="color:#9ca3af;">Charleston, SC</span>
      </p>

      <hr style="border:none;border-top:1px solid rgba(148,163,184,0.25);margin:18px 0;" />

      <p style="margin:0;font-size:12.5px;line-height:1.5;color:#9ca3af;">
        If you didn’t intend to contact Stonebranch, you can safely ignore this email.
      </p>
    </div>
  </div>
</div>
`.trim();

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: replyToEmail, // ✅ replies go to your inbox
      subject: customerSubject,
      text: customerText, // ✅ readable even with images blocked
      html: customerHtml, // ✅ polished but still “quiet”
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error sending message." },
      { status: 500 }
    );
  }
}
