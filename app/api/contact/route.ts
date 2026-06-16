import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  subject?: string;
  message?: string;
  notRobot?: boolean;
  gdprConsent?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, notRobot, gdprConsent } = body;

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

  if (!notRobot || !gdprConsent) {
    return NextResponse.json(
      {
        error:
          "Please confirm you are not a robot and accept the data consent statement.",
      },
      { status: 400 }
    );
  }

  // TODO: integrate an email provider (e.g. Resend) to forward this enquiry
  // to the BJAI team and/or store it in a database.
  console.log("BJAI contact form submission:", {
    name,
    email,
    phone: body.phone,
    address: body.address,
    subject,
    message,
  });

  return NextResponse.json({ success: true });
}
