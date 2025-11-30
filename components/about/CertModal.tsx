// /components/about/CertModal.tsx
"use client";

import Image from "next/image";

type Props = {
  cert: { src: string; title: string };
  onClose: () => void;
};

export default function CertModal({ cert, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-[90%] max-h-[90%] overflow-auto p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <button onClick={onClose} className="px-3 py-1 rounded hover:bg-gray-100">
            Close
          </button>
        </div>

        <div className="w-full">
          <div className="w-full h-auto">
            <Image src={cert.src} alt={cert.title} width={1600} height={1000} className="object-contain w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
