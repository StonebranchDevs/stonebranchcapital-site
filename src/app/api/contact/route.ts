// src/app/api/contact/route.ts
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

function clean(input: unknown) {
  return String(input ?? "").trim();
}

// Basic guard against newline/header injection in emails
function noNewlines(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    // Required fields
    const name = clean(body.name);
    const email = clean(body.email);
    const help = clean(body.help);
    const turnstileToken = clean(body.turnstileToken);

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

    // Email config
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;     // your inbox / destination
    const fromEmail = process.env.CONTACT_FROM_EMAIL; // e.g. "Stonebranch Capital <no-reply@stonebranchcapital.com>"

    if (!resendKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Server missing email configuration (.env.local)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    // Optional fields
    const business = clean(body.business);
    const location = clean(body.location);
    const systems = clean(body.systems);

    // ---- 1) INTERNAL NOTIFICATION (to you) ----
    const internalSubject = noNewlines(
      `New Stonebranch inquiry — ${name}${business ? ` (${business})` : ""}`
    );

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
      replyTo: email, // so you can hit Reply and respond to the user
      subject: internalSubject,
      text: internalText,
    });

    // ---- 2) AUTO-REPLY CONFIRMATION (to the user) ----
    // If you want replies to go to your real inbox, set replyTo to your contact inbox.
    // (If you set replyTo to the user here, it makes no sense—this email is going to them.)
    const publicReplyTo = toEmail;

    const userSubject = "We received your message — Stonebranch Capital";

    const userText = [
      `Hi ${name},`,
      "",
      `Thanks for reaching out to Stonebranch Capital.`,
      `We received your message and we’ll review it shortly.`,
      "",
      `What you sent:`,
      `— Business: ${business || "N/A"}`,
      `— Location: ${location || "N/A"}`,
      `— Help needed: ${help}`,
      systems ? `— Current tools: ${systems}` : "",
      "",
      `If you need to add anything, just reply to this email.`,
      "",
      `— Stonebranch Capital LLC`,
      `contact@stonebranchcapital.com`,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: publicReplyTo,
      subject: userSubject,
      text: userText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Unexpected error sending message." },
      { status: 500 }
    );
  }
}
