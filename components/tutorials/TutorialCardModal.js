'use client';

import { useState, useEffect } from 'react';

export default function EditingVideoModal({
  isOpen = false,
  videoUrl = '',
  onClose,
}) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">

      {/* MODAL */}
      <div className="w-full max-w-[980px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f111a] shadow-[0_30px_100px_rgba(0,0,0,0.7)]">

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 bg-white/5 border-b border-white/10">

          <h3 className="text-white text-[1rem] font-extrabold">
            How to edit with Photopea | PC
          </h3>

          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white text-lg font-black hover:bg-white/10 transition"
          >
            ×
          </button>
        </div>

        {/* VIDEO AREA */}
        <div className="relative aspect-video bg-[#1a1a1a] flex items-center justify-center">

          {/* {videoUrl ? (
            <iframe
              src={videoUrl}
              title="video"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : ( */}
            <div className="text-center text-white/70">
              <div className="text-4xl mb-3">⚠</div>

              <a
                href={videoUrl || "https://youtube.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline font-semibold"
              >
                Watch video on YouTube
              </a>

              <p className="mt-2 text-sm text-white/50">
                Video player configuration error
              </p>
            </div>
          {/* )} */}

          {/* optional play watermark bottom-right */}
          <a
            href={videoUrl || "https://youtube.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-white/70 text-xs hover:bg-white/20 transition"
          >
            ▶
          </a>
        </div>
      </div>
    </div>
  );
}