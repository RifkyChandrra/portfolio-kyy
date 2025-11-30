// /components/projects/VideoCard.tsx
"use client";

import Image from "next/image";

type Props = {
  title: string;
  desc?: string;
  year?: string;
  thumb?: string;
  onClick: () => void;
};

export default function VideoCard({ title, desc, year, thumb, onClick }: Props) {
  return (
    <button onClick={onClick} className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-1 focus:outline-none">
      <div className="relative w-full h-48 sm:h-44 md:h-56 bg-gray-100">
        {thumb ? <Image src={thumb} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center text-gray-400">No thumbnail</div>}

        {/* play overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-semibold text-gray-900 truncate">{title}</h4>
          {year && <span className="text-sm text-gray-500">{year}</span>}
        </div>
        {desc && <p className="mt-2 text-sm text-gray-600 line-clamp-2">{desc}</p>}
      </div>
    </button>
  );
}
