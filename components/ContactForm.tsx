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
    <div className="w-full flex justify-center mt-8">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-xl 
          bg-white p-8 rounded-2xl shadow-lg 
          border border-gray-200
        "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Kirim Pesan</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">Hubungi saya untuk project, kerja sama, atau pertanyaan apa pun.</p>

        {/* Input Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="
              p-3 rounded-xl border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="
              p-3 rounded-xl border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none
            "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <textarea
          className="
            w-full mt-4 p-3 rounded-xl border border-gray-300 
            focus:ring-2 focus:ring-blue-400 focus:outline-none
          "
          rows={6}
          placeholder="Pesan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Submit Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            type="submit"
            className="
              px-6 py-3 rounded-xl text-white font-semibold
              bg-blue-600 hover:bg-blue-700 
              transition shadow-md w-full sm:w-auto
            "
          >
            {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "sent" && <span className="text-green-600 font-medium">✔ Pesan berhasil dikirim</span>}

          {status === "error" && <span className="text-red-600 font-medium">✖ Gagal mengirim pesan</span>}
        </div>
      </form>
    </div>
  );
}
