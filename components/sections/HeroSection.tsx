"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";

export default function HeroSection() {
  const staggerRef = useStagger();

  return (
    <div
      ref={staggerRef}
      className="
        section-inner container mx-auto px-6
        flex flex-col-reverse md:flex-row
        items-center justify-center gap-10
      "
    >
      {/* LEFT — Text */}
      <div className="flex-1 section-text text-center md:text-left">
        <h1 className="stagger-child uppercase tracking-[6px] text-gray-500">RIFKY CHANDRA OKTAVIAN</h1>

        <h2 className="stagger-child text-4xl md:text-5xl font-bold mt-3">IT Support Specialist</h2>

        <p className="stagger-child text-gray-600 mt-6 max-w-md mx-auto md:mx-0 leading-relaxed">Saya seorang IT Support dengan pengalaman troubleshooting PC, instalasi jaringan, Mikrotik, maintenance, dan dokumentasi teknis.</p>

        <div className="stagger-child mt-8 flex gap-4 justify-center md:justify-start">
          <a href="/images/Cv2.pdf" className="btn-secondary">
            Download CV
          </a>
          <Link href="/contact">
            <button className="btn-primary">Contact Me</button>
          </Link>
        </div>
      </div>

      {/* RIGHT — Image */}
      <div className="flex-1 flex justify-center section-image-wrap">
        <Image
          src="/images/profile2.jpg"
          width={420}
          height={350}
          alt="Profile"
          className="
            stagger-child rounded-3xl shadow-lg object-cover
            grayscale hover:grayscale-0 transition duration-500
            resp-img
          "
        />
      </div>
    </div>
  );
}
