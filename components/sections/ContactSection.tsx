"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function ContactSection() {
  const staggerRef = useStagger();
  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div ref={staggerRef} className="section-inner container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="stagger-child text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="stagger-child text-gray-600 max-w-md mb-8">Hubungi saya jika Anda memiliki pertanyaan atau ingin bekerja sama.</p>

          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <button className="stagger-child px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">Contact Page</button>
          </Link>

          {/* SOCIAL ICONS */}
          <div className="stagger-child flex items-center gap-6 mt-8">
            <Link href="https://instagram.com/rifkychandrra" target="_blank" className="group">
              <Instagram size={28} className="text-gray-600 group-hover:text-pink-500 transition" />
            </Link>

            <Link href="https://linkedin.com/in/rifkychandrra" target="_blank" className="group">
              <Linkedin size={28} className="text-gray-600 group-hover:text-blue-600 transition" />
            </Link>

            <Link href="https://github.com/rifkychandrra" target="_blank" className="group">
              <Github size={28} className="text-gray-600 group-hover:text-black transition" />
            </Link>

            <Link href="mailto:rifky9635@gmail.com" className="group">
              <Mail size={28} className="text-gray-600 group-hover:text-red-500 transition" />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image src="/images/profile4.jpg" width={550} height={450} alt="Projects" className="stagger-child rounded-3xl grayscale hover:grayscale-0 transition duration-500 object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}
