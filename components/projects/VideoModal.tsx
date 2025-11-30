// /components/projects/VideoModal.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  driveId: string;
  title?: string;
  onClose: () => void;
};

export default function VideoModal({ driveId, title, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Google Drive preview URL
  const src = `https://drive.google.com/file/d/${driveId}/preview`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose} aria-modal="true" role="dialog">
      <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-3 border-b">
          <h3 className="text-sm font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <a href={`https://drive.google.com/file/d/${driveId}/view`} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
              Open in Drive
            </a>

            <button onClick={onClose} className="px-3 py-1 rounded hover:bg-gray-100">
              Close
            </button>
          </div>
        </div>

        <div className="w-full bg-black">
          <iframe src={src} className="w-full aspect-video" allow="autoplay; encrypted-media; fullscreen" allowFullScreen title={title || "Video player"} />
        </div>
      </div>
    </div>
  );
}
