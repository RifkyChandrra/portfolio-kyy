import "./globals.css";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import BodyClassController from "@/components/BodyClassController";

export const metadata = {
  title: "IT Support Portfolio",
  description: "Portofolio IT Support — troubleshooting, networking, hardware",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <BodyClassController />

      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* Navbar tetap di atas */}
        <Navbar />

        {/* INI PERUBAHANNYA: snap-container langsung di dalam body */}
        <div className="snap-container">{children}</div>

        {/* Footer (aktifkan jika ingin ditampilkan di akhir halaman) */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
