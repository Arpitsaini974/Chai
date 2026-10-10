import React, { useState } from 'react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';
import { Camera, ZoomIn, X } from 'lucide-react';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-[#120C09] relative border-t border-[#E99A3B]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-xs font-semibold text-[#E99A3B]">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments of Amrittulya</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F0E5]">
            Visuals from the <span className="amber-text-gradient">Chai Counter</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#F7F0E5]/70">
            A glimpse into the daily rhythm of bubbling brass handis, aromatic spices, and warm chai glasses.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_CONFIG.gallery.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-[#E99A3B]/20 cursor-pointer h-64 sm:h-72 transition-all duration-300 hover:border-[#E99A3B]/60 hover:shadow-2xl"
            >
              <ImageWithFallback
                src={img.url}
                alt={img.caption}
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                fallbackText={img.caption}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-[#120C09]/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E99A3B] mb-1">
                  {img.category}
                </span>
                <p className="text-sm font-bold text-[#F7F0E5] font-serif-display">
                  {img.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-[#E99A3B]">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#120C09] border border-[#E99A3B]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#120C09]/80 text-[#F7F0E5] hover:text-[#E99A3B] border border-[#E99A3B]/30"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-80 sm:h-[480px] w-full">
              <ImageWithFallback
                src={activeImage.url}
                alt={activeImage.caption}
                className="w-full h-full"
                fallbackText={activeImage.caption}
              />
            </div>

            <div className="p-4 bg-[#21130D] flex items-center justify-between text-left">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E99A3B] font-semibold">
                  {activeImage.category}
                </span>
                <h4 className="text-base font-bold text-[#F7F0E5] font-serif-display">
                  {activeImage.caption}
                </h4>
              </div>
              <span className="text-xs text-[#F7F0E5]/50">
                Sample Photography
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
