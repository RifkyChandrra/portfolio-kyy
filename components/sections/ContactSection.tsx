"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-md mb-8">Hubungi saya jika Anda memiliki pertanyaan atau ingin bekerja sama.</p>

          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">Contact Page</button>
          </Link>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-8">
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
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/profile4.jpg" alt="Contact" fill className="object-cover grayscale hover:grayscale-0 transition duration-500" />
        </div>
      </div>
    </section>
  );
}
