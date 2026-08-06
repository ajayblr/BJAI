import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  subject?: string;
  message?: string;
  recaptchaToken?: string;
  gdprConsent?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Google's published always-pass test key pair, used only if no real secret
// key is configured (matches the test site key used as the client fallback).
const RECAPTCHA_SECRET_KEY =
  process.env.RECAPTCHA_SECRET_KEY ?? "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

const CONTACT_RECIPIENT = process.env.CONTACT_EMAIL_TO ?? "bjaireland@gmail.com";
const CONTACT_SENDER =
  process.env.CONTACT_EMAIL_FROM ?? "BJAI Website <onboarding@resend.dev>";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token }),
  });

  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, recaptchaToken, gdprConsent } = body;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!gdprConsent) {
    return NextResponse.json(
      { error: "Please accept the data consent statement." },
      { status: 400 }
    );
  }

  if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: CONTACT_SENDER,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `[BJAI Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        body.phone ? `Phone: ${body.phone}` : null,
        body.address ? `Address: ${body.address}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (sendError) {
      console.error("BJAI contact form: failed to send email:", sendError);
      return NextResponse.json(
        { error: "Could not send your message. Please try again shortly." },
        { status: 502 }
      );
    }
  } else {
    console.log("BJAI contact form submission:", {
      name,
      email,
      phone: body.phone,
      address: body.address,
      subject,
      message,
    });
  }

  return NextResponse.json({ success: true });
}
