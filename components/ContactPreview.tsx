import Link from "next/link";

export default function ContactPreview() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="card p-6 text-center">
        <h3 className="text-xl font-semibold">Butuh bantuan IT?</h3>
        <p className="text-gray-600 mt-2">Kirim pesan dan saya akan menghubungi Anda kembali.</p>
        <Link href="/contact" className="btn-primary mt-4 inline-block">
          Kirim Pesan
        </Link>
      </div>
    </section>
  );
}
