// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Website <onboarding@resend.dev>",
      to: process.env.EMAIL_RECEIVER!, // Gmail kamu
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Message From Portfolio Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
