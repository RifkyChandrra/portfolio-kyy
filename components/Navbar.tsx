"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        bg-white/90 backdrop-blur-sm 
        sticky top-0 z-50 
        shadow-sm 
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          h-16 
          px-6
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-xl font-bold tracking-wide
            text-gray-800
          "
        >
          RifkyChandra
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <Link href="/#home" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/#about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/#projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden 
            p-2 rounded-lg
            hover:bg-gray-100 active:bg-gray-200 
            transition
          "
        >
          {/* MENU ICON */}
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden 
          overflow-hidden 
          transition-all duration-300 
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          bg-white border-t shadow-sm
        `}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
          <Link href="/#home" onClick={() => setOpen(false)} className="hover:text-black transition">
            Home
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)} className="hover:text-black transition">
            About
          </Link>
          <Link href="/#projects" onClick={() => setOpen(false)} className="hover:text-black transition">
            Projects
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
