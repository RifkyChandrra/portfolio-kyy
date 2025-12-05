"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useStagger from "@/lib/useStagger";
import CertModal from "./CertModal";

export default function AboutDetail() {
  const staggerRef = useStagger();
  const [openCert, setOpenCert] = useState<{ src: string; title: string } | null>(null);

  // state untuk foto expand-on-hover
  const [hovered, setHovered] = useState<number | null>(null);

  const certifications = [
    { id: "mikrotik", title: "MTCNA Certified", year: "2025", src: "/images/mtcna.jpg" },
    { id: "bnsp", title: "BNSP Certified", year: "2024", src: "/images/bnsp.jpg" },
  ];

  const coreSkills = ["Hardware Support", "Windows OS", "Mikrotik", "TCP/IP", "Troubleshooting"];
  const tools = ["Winbox", "Remote Desktop", "Putty", "VS Code", "VNC", "Google Sheets"];

  return (
    <>
      <div className="max-w-7xl mx-auto px-7 py-10">
        <div ref={staggerRef} className="flex flex-col gap-12">
          {/* ======================== INTRO SECTION ======================== */}
          <section className="stagger-child flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* ================= PHOTO EXPAND ON HOVER ================= */}
            <div className="w-full md:w-1/2 flex gap-4">
              {["/images/foto2.webp", "/images/foto1.webp", "/images/foto3.webp"].map((src, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`
                    relative h-[340px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg cursor-pointer
                    transition-all duration-500 ease-out
                    ${hovered === null ? "flex-1" : hovered === i ? "flex-[3]" : "flex-[0.7]"}
                  `}
                >
                  <Image
                    src={src}
                    alt="photo"
                    fill
                    className={`
                      object-cover transition-all duration-500
                      ${hovered === i ? "grayscale-0 scale-105" : "grayscale"}
                    `}
                  />
                </div>
              ))}
            </div>

            {/* Intro text */}
            <div className="flex-1 md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold">Rifky Chandra</h1>
              <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
                Hai — saya <strong>Rifky Chandra</strong>, seorang <strong>IT Support Specialist </strong>
                dengan pengalaman troubleshooting PC, instalasi & konfigurasi jaringan (Mikrotik), rakit PC, serta maintenance perangkat. Saya fokus pada solusi cepat, dokumentasi rapi, dan memberikan edukasi pada user agar penggunaan
                sistem menjadi optimal.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link href="/contact">
                  <button className="btn-primary">Contact Me</button>
                </Link>

                <div className="inline-flex items-center gap-3 px-3 py-2 bg-white border rounded-full shadow-sm">
                  <span className="w-3 h-3 rounded-full bg-gray-400 animate-pulse" />
                  <span className="text-sm text-gray-700">Currently Offline</span>
                </div>
              </div>
            </div>
          </section>

          {/* ======================== MAIN CONTENT ======================== */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* ================= MODERN PROFILE CARD ================= */}
            <aside className="stagger-child w-full md:max-w-[280px] bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center self-start">
              <div className="relative w-[250px] h-[500px] rounded-xl overflow-hidden shadow-sm hover:scale-[1.03] transition-all duration-300">
                <Image src="/images/pendidikan.jpg" alt="profile" fill className="object-cover" />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">Rifky Chandra</h2>
              <p className="text-gray-500 text-sm">IT Support Specialist</p>

              <Link href="/contact" className="w-full mt-4">
                <button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow">Contact Me</button>
              </Link>

              <div className="w-full h-px bg-gray-100 my-5" />

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-gray-50 border p-3 rounded-xl text-center text-sm">
                  <div className="text-gray-500">Experience</div>
                  <div className="font-semibold">1+ Years</div>
                </div>

                <div className="bg-gray-50 border p-3 rounded-xl text-center text-sm">
                  <div className="text-gray-500">Location</div>
                  <div className="font-semibold">Jakarta</div>
                </div>
              </div>
            </aside>

            {/* ======================= RIGHT CONTENT ======================= */}
            <main className="md:w-2/3 flex flex-col gap-8">
              {/* Pendidikan */}
              <section className="stagger-child bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Riwayat Pendidikan</h3>
                <div className="space-y-4">
                  {[
                    { title: "Universitas Bina Sarana Informatika", desc: "Teknik Komputer & Jaringan (2020–2024)" },
                    { title: "SMK Dharma Karya", desc: "Akuntansi (2017–2020)" },
                    { title: "SMPN 68 Jakarta", desc: "(2014–2017)" },
                    { title: "SDN 015 Cipete Utara", desc: "(2008–2014)" },
                  ].map((edu, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-3 h-3 rounded-full bg-blue-500" />
                      <div>
                        <div className="font-semibold">{edu.title}</div>
                        <div className="text-sm text-gray-600">{edu.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sertifikasi */}
              <section className="stagger-child bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Sertifikasi</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((c) => (
                    <button key={c.id} onClick={() => setOpenCert({ src: c.src, title: c.title })} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition text-left">
                      <div className="w-20 h-14 bg-white rounded overflow-hidden flex-shrink-0">
                        <Image src={c.src} width={160} height={120} alt={c.title} className="object-cover" />
                      </div>

                      <div>
                        <div className="font-semibold">{c.title}</div>
                        <div className="text-sm text-gray-500">{c.year}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="stagger-child bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Core Skills</div>
                  <div className="flex flex-wrap gap-3">
                    {coreSkills.map((s) => (
                      <span key={s} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Tools & Utilities</div>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-50 border rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Pengalaman */}
              <section className="stagger-child bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Pengalaman</h3>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>
                    <span className="font-semibold">Web Developer</span> — Walikota Jakarta Selatan
                  </li>
                  {/* <li>
                    <span className="font-semibold">Freelance service PC</span> & instalasi jaringan (2021–sekarang)
                  </li> */}
                </ul>
              </section>

              {/* CTA */}
              <section className="stagger-child bg-white p-6 rounded-2xl text-center shadow">
                <h4 className="text-lg font-semibold">Ingin bekerja sama?</h4>
                <p className="text-gray-600 mt-2">Saya terbuka untuk freelance, contract, maupun full-time role di bidang IT Support.</p>

                <div className="mt-4 flex justify-center gap-4">
                  <Link href="/contact">
                    <button className="btn-primary">Contact Me</button>
                  </Link>

                  <a href="/cv.pdf" className="btn-secondary inline-block">
                    Download CV
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      {openCert && <CertModal cert={openCert} onClose={() => setOpenCert(null)} />}
    </>
  );
}
