// /components/projects/ProjectsPage.tsx
"use client";

import { useMemo, useState } from "react";
import { videos as videosData, VideoItem } from "./videosData";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

const categories: { key: string; label: string }[] = [
  { key: "hardware", label: "Hardware" },
  { key: "software", label: "Software" },
  { key: "jaringan", label: "Jaringan" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("hardware");
  const [open, setOpen] = useState<null | VideoItem>(null);

  const filtered = useMemo(() => videosData.filter((v) => v.category === (active as any)), [active]);

  return (
    <div className="max-w-7xl mx-auto px-7 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Projects — Video Gallery</h1>
        <p className="text-gray-600 mt-2">Tutorial & demo yang berkaitan dengan IT Support. Klik thumbnail untuk menonton.</p>
      </header>

      {/* Tabs */}
      <nav className="mb-6 flex gap-3 items-center">
        {categories.map((c) => (
          <button key={c.key} onClick={() => setActive(c.key)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === c.key ? "bg-blue-600 text-white shadow" : "bg-white border"}`}>
            {c.label}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <section>
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-gray-500">Belum ada video di kategori ini.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => (
              <VideoCard key={v.id} title={v.title} desc={v.desc} year={v.year} thumb={v.thumb} onClick={() => setOpen(v)} />
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {open && <VideoModal driveId={open.driveId} title={open.title} onClose={() => setOpen(null)} />}
    </div>
  );
}
