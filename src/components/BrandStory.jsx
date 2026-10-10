import React from 'react';
import { Flame, Sparkles, ShieldCheck, Coffee, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

const iconMap = {
  Flame,
  Sparkles,
  ShieldCheck,
  Coffee,
};

export default function BrandStory() {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#120C09] relative overflow-hidden border-t border-[#E99A3B]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Imagery Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Amber glow behind */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C96B26] to-[#E99A3B] rounded-3xl blur-xl opacity-20" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[#E99A3B]/30 shadow-2xl bg-[#21130D]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=85"
                  alt="Clay kulhad filled with steaming amrittulya chai"
                  className="w-full h-80 sm:h-96"
                  fallbackText="Kulhad Tradition"
                />

                <div className="p-6 bg-[#21130D]/95 border-t border-[#E99A3B]/20 text-left">
                  <div className="flex items-center gap-2 text-[#E99A3B] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>The Amrittulya Promise</span>
                  </div>
                  <h4 className="font-serif-display font-bold text-base text-[#F7F0E5]">
                    Rich aroma, natural kulhad sweetness, never compromised.
                  </h4>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl glass-card border border-[#E99A3B]/40 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E99A3B] text-[#120C09] flex items-center justify-center font-bold font-serif-display">
                  100%
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#F7F0E5]">Pure Buffalo Milk</p>
                  <p className="text-[11px] text-[#E99A3B]">No artificial thickening</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-xs font-semibold text-[#E99A3B]">
              <span>OUR HERITAGE & CRAFT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F0E5] leading-tight">
              Brewed by Passion, <br />
              <span className="amber-text-gradient">Rooted in Tradition</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#F7F0E5]/80 leading-relaxed font-light">
              {BRAND_CONFIG.story.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#21130D]">
              <div className="p-3 rounded-xl bg-[#21130D]/50 border border-[#E99A3B]/10">
                <p className="text-2xl font-black text-[#E99A3B] font-serif-display">7+</p>
                <p className="text-xs text-[#F7F0E5]/70">Pounded Whole Spices</p>
              </div>
              <div className="p-3 rounded-xl bg-[#21130D]/50 border border-[#E99A3B]/10">
                <p className="text-2xl font-black text-[#E99A3B] font-serif-display">100%</p>
                <p className="text-xs text-[#F7F0E5]/70">Earthen Kulhads</p>
              </div>
              <div className="p-3 rounded-xl bg-[#21130D]/50 border border-[#E99A3B]/10 col-span-2 sm:col-span-1">
                <p className="text-2xl font-black text-[#E99A3B] font-serif-display">Fresh</p>
                <p className="text-xs text-[#F7F0E5]/70">Continuous Simmering</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="mt-20 pt-12 border-t border-[#E99A3B]/10">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="font-serif-display font-bold text-2xl text-[#F7F0E5]">
              What Makes <span className="text-[#E99A3B]">UPW Aali</span> Unrivaled
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E5]/70">
              The four pillars behind every steaming cup we hand to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_CONFIG.story.features.map((feature, idx) => {
              const IconComp = iconMap[feature.icon] || Coffee;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card border border-[#E99A3B]/20 text-left space-y-3 hover:border-[#E99A3B]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#21130D] border border-[#E99A3B]/30 flex items-center justify-center text-[#E99A3B]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-display font-bold text-base text-[#F7F0E5]">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[#F7F0E5]/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
