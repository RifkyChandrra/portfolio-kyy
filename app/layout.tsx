import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import BodyClassController from "@/components/BodyClassController";

export const metadata = {
  title: "IT Support Portfolio",
  description: "Portofolio IT Support — troubleshooting, networking, hardware",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      {/* Controller ini berjalan di client untuk memberi class pada body */}
      <BodyClassController />

      <body className="bg-gray-50 text-gray-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
