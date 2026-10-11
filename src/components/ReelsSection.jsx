import React, { useState, useEffect } from 'react';
import { Play, Eye, Heart, ExternalLink, Flame, Pause } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

export default function ReelsSection() {
  // State for which reel is actively playing
  const [activeReelId, setActiveReelId] = useState(null);
  // Seconds left countdown (5, 4, 3, 2, 1)
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (activeReelId === null) return;

    // Countdown interval (1s tick for badge)
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    // Exact 5-second automatic stop timer
    const timeout = setTimeout(() => {
      setActiveReelId(null);
      setSecondsLeft(5);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeReelId]);

  const handleCardClick = (reelId) => {
    if (activeReelId === reelId) {
      // Click again while playing: pause / stop
      setActiveReelId(null);
      setSecondsLeft(5);
    } else {
      // Start 5-second preview immediately
      setSecondsLeft(5);
      setActiveReelId(reelId);
    }
  };

  return (
    <section id="reels" className="py-20 relative border-t border-[#C96B26]/15 scroll-mt-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E99A3B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F3E5] border border-[#C96B26]/30 text-xs font-bold text-[#9E4712]">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Shorts & Video Clips</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A170F] dark:text-[#F7F0E5]">
            Trending <span className="amber-text-gradient">Chai Clips</span> from Udaipurwati
          </h2>
          
          <p className="text-sm sm:text-base text-[#5C4337] dark:text-[#D4AF37]/80 font-normal">
            Tap any clip to view the 5-second simmering motion preview.
          </p>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9E4712] via-[#C96B26] to-[#E99A3B] text-white transition-all shadow-sm hover:scale-105"
          >
            <span>Follow {BRAND_CONFIG.instagramHandle} on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reels Grid (9:16 Aspect Ratio Look) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_CONFIG.reels.map((reel) => {
            const isPlaying = activeReelId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => handleCardClick(reel.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-between aspect-[9/15] bg-[#120C09] select-none ${
                  isPlaying
                    ? 'border-[#C96B26] ring-4 ring-[#C96B26]/30 shadow-2xl scale-[1.02]'
                    : 'border-[#C96B26]/25 hover:border-[#C96B26]/70 hover:shadow-xl'
                }`}
              >
                {/* Visual Video / Animated Clip Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <ImageWithFallback
                    src={reel.thumbnail}
                    alt={reel.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isPlaying
                        ? 'animate-reel-playback scale-110'
                        : 'group-hover:scale-105'
                    }`}
                    fallbackText="Chai Reel"
                  />

                  {/* Dynamic Boiling Steam, Simmer Wave & Motion Overlay during 5s Playback */}
                  {isPlaying && (
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 overflow-hidden">
                      {/* Simmering hot amber glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#C96B26]/30 via-transparent to-[#E99A3B]/20 animate-tea-simmer" />

                      {/* Rising live steam waves during play */}
                      <div className="w-full flex justify-around items-end h-36 opacity-90 relative z-10">
                        <div className="w-14 h-32 rounded-full bg-gradient-to-t from-white/45 to-transparent blur-md steam-particle-1" />
                        <div className="w-16 h-36 rounded-full bg-gradient-to-t from-white/50 to-transparent blur-lg steam-particle-2" />
                        <div className="w-12 h-28 rounded-full bg-gradient-to-t from-white/40 to-transparent blur-md steam-particle-3" />
                      </div>

                      {/* 5-Second Live Progress Bar at bottom of media */}
                      <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden relative z-10 backdrop-blur-sm shadow">
                        <div
                          className="h-full bg-gradient-to-r from-[#E99A3B] via-[#F5B041] to-[#25D366] transition-all ease-linear"
                          style={{
                            width: `${((5 - secondsLeft) / 5) * 100}%`,
                            transitionDuration: '1000ms'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-black/40 to-black/30 pointer-events-none" />
                </div>

                {/* Top Badge: Reel Tag (Clean without 'REEL' or 'PLAYING' text) */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#E99A3B]">
                    {reel.tag}
                  </span>

                  {isPlaying && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#25D366] text-xs font-bold border border-[#25D366]/40">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                      <span>{secondsLeft}s</span>
                    </div>
                  )}
                </div>

                {/* Center Action Overlay (Only show Play button when idle; when playing show subtle pause on hover) */}
                <div className="relative z-10 flex items-center justify-center transition-all duration-300">
                  {isPlaying ? (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity w-14 h-14 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/20">
                      <Pause className="w-6 h-6 fill-current" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#E99A3B]/90 text-[#120C09] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Bottom Details & Engagement Stats */}
                <div className="relative z-10 p-5 space-y-2 text-left bg-gradient-to-t from-[#120C09] via-[#120C09]/95 to-transparent pt-8">
                  <h3 className="font-serif-display font-bold text-sm text-[#F7F0E5] line-clamp-2 leading-snug">
                    {reel.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-[#F7F0E5]/75">
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
                      onClick={(e) => e.stopPropagation()} // Stop bubbling so link opens directly
                      className="p-1.5 rounded-lg bg-[#21130D] hover:bg-[#E99A3B] hover:text-[#120C09] text-[#E99A3B] border border-[#E99A3B]/30 transition-colors"
                      title="Open full Reel on Instagram"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#5C4337] dark:text-[#D4AF37]/80 flex items-center justify-center gap-1.5 font-medium">
            <Flame className="w-4 h-4 text-[#C96B26]" />
            <span>Tap any clip for a quick 5-second preview or visit our official page: <strong>{BRAND_CONFIG.instagramHandle}</strong></span>
          </p>
        </div>

      </div>
    </section>
  );
}
