"use client";

import Image from "next/image";
import Link from "next/link";
import useStagger from "@/lib/useStagger";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function ContactSection() {
  const staggerRef = useStagger();

  return (
    <section id="contact" className="w-full py-14 bg-gray-50">
      <div ref={staggerRef} className="section-inner container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* IMAGE */}
        <div className="flex-1 flex flex-col items-center section-image-wrap">
          <Image src="/images/profile4.jpg" alt="Contact Image" width={420} height={350} className="stagger-child rounded-3xl shadow-lg object-cover grayscale hover:grayscale-0 transition duration-500 resp-img" />

          {/* FLOAT HEADING */}
          <h2 className="float-heading stagger-child md:hidden">Get In Touch</h2>
        </div>

        {/* TEXT */}
        <div className="flex-1 section-text md:text-left">
          <h2 className="hidden md:block text-4xl font-bold">Get In Touch</h2>

          <p className="stagger-child text-gray-600 mt-4 max-w-md leading-relaxed mx-auto md:mx-0">Hubungi saya jika Anda memiliki pertanyaan atau ingin bekerja sama.</p>

          <Link href="/contact">
            <button className="stagger-child btn-primary my-6">Contact Page</button>
          </Link>

          <div className="stagger-child flex items-center justify-center md:justify-start gap-6">
            <Link href="https://instagram.com/rifkychandrra" target="_blank">
              <Instagram size={28} className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            </Link>

            <Link href="https://linkedin.com/in/rifkychandrra" target="_blank">
              <Linkedin size={28} className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            </Link>

            <Link href="https://github.com/rifkychandrra" target="_blank">
              <Github size={28} className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            </Link>

            <a href="mailto:rifky9635@gmail.com">
              <Mail size={28} className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
