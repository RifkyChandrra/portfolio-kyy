"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="p-3 border rounded" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="p-3 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <textarea className="w-full mt-4 p-3 border rounded" rows={6} placeholder="Pesan" value={message} onChange={(e) => setMessage(e.target.value)} required />

      <div className="flex items-center gap-4 mt-4">
        <button type="submit" className="btn-primary">
          {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
        </button>

        {status === "sent" && <span className="text-green-600">Pesan terkirim ✔</span>}
        {status === "error" && <span className="text-red-600">Gagal mengirim ✖</span>}
      </div>
    </form>
  );
}
