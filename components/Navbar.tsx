"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wide">
          RifkyChandra
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm w-full px-6 py-4 flex flex-col gap-4 font-medium text-gray-700">
          <Link href="/#home" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/#projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
