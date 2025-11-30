import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Hi, I'm Rifky Chandra </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">IT Support Specialist — hardware, software, & networking.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a href="/cv.pdf" className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image src="/images/hero-illustration.jpg" alt="IT Illustration" width={360} height={260} />
        </div>
      </div>
    </section>
  );
}
