import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rifky9635@gmail.com",
      subject: "Pesan Baru dari Contact Form",
      html: `
        <h2>Pesan Baru Dari Portfolio</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.log("ERROR:", err);
    return NextResponse.json({ ok: false, error: err }, { status: 500 });
  }
}
