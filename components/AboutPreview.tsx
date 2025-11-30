import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="card p-8 flex flex-col md:flex-row items-center gap-6">
        <Image src="/images/profile.jpg" alt="Profile" width={140} height={140} className="rounded-full object-cover" />

        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-700 text-base sm:text-lg">Saya seorang IT Support dengan pengalaman troubleshooting PC, setup jaringan, dan instalasi software. Fokus pada solusi cepat dan dokumentasi rapi.</p>
        </div>

        <Link href="/about" className="btn-primary">
          View More About Me
        </Link>
      </div>
    </section>
  );
}
