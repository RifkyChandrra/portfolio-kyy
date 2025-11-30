import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // TODO: integrasi provider email (SendGrid/Resend) di sini jika ingin kirim email nyata
    console.log("Contact form received:", data);
    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
