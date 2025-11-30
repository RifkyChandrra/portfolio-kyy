"use client";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6">Hubungi saya untuk project, kerja sama, atau pertanyaan.</p>
      <ContactForm />
    </section>
  );
}
