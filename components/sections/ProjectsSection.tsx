"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";

export default function ProjectsSection() {
  const staggerRef = useStagger();

  return (
    <div ref={staggerRef} className="section-inner container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* IMAGE */}
      <div className="flex-1 flex flex-col items-center section-image-wrap">
        <Image src="/images/profile3.jpg" alt="Projects Image" width={420} height={350} className="stagger-child rounded-3xl shadow-lg object-cover grayscale hover:grayscale-0 transition duration-500 resp-img" />

        {/* FLOAT HEADING */}
        <h2 className="float-heading stagger-child md:hidden">My Projects</h2>
      </div>

      {/* TEXT */}
      <div className="flex-1 section-text md:text-left">
        <h2 className="hidden md:block text-4xl font-bold">My Projects</h2>

        <p className="stagger-child text-gray-600 mt-4 max-w-md leading-relaxed mx-auto md:mx-0">Beberapa project teknis seperti instal ulang Windows, rakit PC, dan konfigurasi Mikrotik.</p>

        <Link href="/projects">
          <button className="stagger-child btn-primary mt-6">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
