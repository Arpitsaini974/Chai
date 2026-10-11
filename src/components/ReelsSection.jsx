import React from 'react';
import { Play, Eye, Heart, ExternalLink, Flame } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

export default function ReelsSection() {

  return (
    <section id="reels" className="py-20 bg-[#0d0806] relative border-t border-[#E99A3B]/10 scroll-mt-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E99A3B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-xs font-semibold text-[#E99A3B]">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Official Instagram Reels & Shorts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F0E5]">
            Trending <span className="amber-text-gradient">Chai Reels</span> from Udaipurwati
          </h2>
          
          <p className="text-sm sm:text-base text-[#F7F0E5]/70">
            Dukaan par ubalti hui kadak chai aur mitti ke kulhad ke viral videos. Har sip me asli swaad!
          </p>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-amber-900/60 border border-pink-500/40 text-pink-200 hover:text-white transition-all shadow-md hover:scale-105"
          >
            <span>Follow {BRAND_CONFIG.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reels Grid (9:16 Aspect Ratio Look) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_CONFIG.reels.map((reel) => {
            return (
              <div
                key={reel.id}
                className="group relative rounded-3xl overflow-hidden glass-card border border-[#E99A3B]/25 hover:border-[#E99A3B]/70 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between aspect-[9/15] bg-[#120C09]"
              >
                {/* Visual Video Thumbnail */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackText="Chai Reel"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-black/40 to-black/30" />
                </div>

                {/* Top Badge: Reel Tag & Live Pulsing Indicator */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#E99A3B]">
                    {reel.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-600/80 text-white text-[10px] font-bold tracking-wider uppercase animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    REEL
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#E99A3B]/90 text-[#120C09] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Details & Engagement Stats */}
                <div className="relative z-10 p-5 space-y-2 text-left bg-gradient-to-t from-[#120C09] via-[#120C09]/90 to-transparent pt-8">
                  <p className="text-xs font-serif-display text-[#E99A3B] font-semibold line-clamp-1">
                    {reel.hindiTitle}
                  </p>
                  <h3 className="font-serif-display font-bold text-sm text-[#F7F0E5] line-clamp-2 leading-snug">
                    {reel.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-[#F7F0E5]/70">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#E99A3B]" /> {reel.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" /> {reel.likes}
                      </span>
                    </div>

                    <a
                      href={reel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#21130D] hover:bg-[#E99A3B] hover:text-[#120C09] text-[#E99A3B] border border-[#E99A3B]/30 transition-colors"
                      title="Watch Reel on Instagram"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Clickable Card Link to Instagram */}
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                  aria-label={`Watch ${reel.title} on Instagram`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#F7F0E5]/60 flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-[#E99A3B]" />
            <span>Daily fresh brewing videos shared directly on Instagram: <strong>{BRAND_CONFIG.instagramHandle}</strong></span>
          </p>
        </div>

      </div>
    </section>
  );
}
