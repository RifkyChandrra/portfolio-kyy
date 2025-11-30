"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";

export default function ProjectsSection() {
  const staggerRef = useStagger();

  return (
    <div ref={staggerRef} className="section-inner container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="flex-1">
        <h2 className="stagger-child text-4xl font-bold">My Projects</h2>

        <p className="stagger-child text-gray-600 mt-4 max-w-md leading-relaxed">Beberapa project teknis seperti instal ulang Windows, rakit PC, dan konfigurasi Mikrotik.</p>

        <Link href="/projects">
          <button className="stagger-child btn-primary mt-6">Learn More</button>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <Image src="/images/profile3.jpg" width={550} height={450} alt="Projects" className="stagger-child rounded-3xl grayscale hover:grayscale-0 transition duration-500 object-cover shadow-lg" />
      </div>
    </div>
  );
}
