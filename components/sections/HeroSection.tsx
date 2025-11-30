"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";

export default function HeroSection() {
  const staggerRef = useStagger();

  return (
    <div ref={staggerRef} className="section-inner container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="flex-1">
        <h1 className="stagger-child uppercase tracking-[6px] text-gray-500">Rifky Chandra Oktavian</h1>

        <h2 className="stagger-child text-5xl font-bold mt-3">IT Support Specialist</h2>

        <p className="stagger-child text-gray-600 mt-6 max-w-md leading-relaxed">Saya seorang IT Support dengan pengalaman troubleshooting PC, instalasi jaringan, Mikrotik, maintenance, dan dokumentasi teknis.</p>

        <div className="stagger-child mt-8 flex gap-4">
          <a href="/images/cv.pdf" className="btn-secondary">
            Download CV
          </a>
          <Link href="/contact">
            <button className="btn-primary">Contact Me</button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <Image src="/images/profile2.jpg" width={450} height={350} alt="Profile" className="stagger-child rounded-3xl grayscale hover:grayscale-0 transition duration-500 object-cover shadow-lg" />
      </div>
    </div>
  );
}
