import React from 'react';
import { Sparkles, ArrowRight, Award, Coffee, Star, Flame, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E99A3B]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-88 h-88 bg-[#C96B26]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Tagline & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="brown-text-stroke text-[#FF7722] dark:text-[#FFA034]">
                  स्वाद उदयपुरवाटी का,
                </span>
                <br />
                <span className="amber-text-gradient">
                  केसर गुड़ अमृततुल्य चाय
                </span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#9E4712] dark:text-[#E99A3B] font-serif-display italic flex items-center gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#C96B26]" />
                “घूमचक्कर सर्किल... जहाँ हर घूंट में बसती है राजस्थान की शान!”
              </p>
            </div>

            {/* Description */}
            <p className="text-[#5C4337] text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              {BRAND_CONFIG.subTagline}
            </p>

            {/* Micro-highlights with Royal Glow */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Flame className="w-5 h-5 text-[#C96B26] mx-auto mb-1" />
                <p className="text-xs text-[#2A170F] dark:text-[#F7F0E5] font-bold">Pure Desi Gud & Kesar</p>
                <p className="text-[10px] text-[#9E4712] dark:text-[#E99A3B] font-semibold">No Sugar Formula</p>
              </div>
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-[#C96B26] mx-auto mb-1" />
                <p className="text-xs text-[#2A170F] dark:text-[#F7F0E5] font-bold">Brass Handi Brewed</p>
                <p className="text-[10px] text-[#9E4712] dark:text-[#E99A3B] font-semibold">Slow Caramelized</p>
              </div>
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Coffee className="w-5 h-5 text-[#C96B26] mx-auto mb-1" />
                <p className="text-xs text-[#2A170F] dark:text-[#F7F0E5] font-bold">Authentic Clay Kulhad</p>
                <p className="text-[10px] text-[#9E4712] dark:text-[#E99A3B] font-semibold">100% Desi Clay</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C96B26] via-[#E99A3B] to-[#F5B041] hover:opacity-95 text-[#120C09] font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C96B26]/30"
              >
                <span>Order on WhatsApp (Demo)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#F9F3E5] hover:bg-[#F2E8D5] text-[#2A170F] font-bold text-sm border border-[#C96B26]/40 hover:border-[#9E4712] transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9E4712]"
              >
                <span>Instagram @upw_aali</span>
              </a>
            </div>

            {/* Verified Handle Pill */}
            <p className="text-xs text-[#5C4337] flex items-center gap-2 pt-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Dukaan Instagram: </span>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#9E4712] hover:underline font-bold"
              >
                {BRAND_CONFIG.instagramHandle}
              </a>
            </p>
          </div>

          {/* Right Column: 3D Floating Visual Frame with Realistic Steam */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Amber-Gold Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C96B26] via-[#D4AF37] to-[#E99A3B] rounded-[2.5rem] blur-xl opacity-25" />
              
              {/* Main Card Frame with 3D Float Effect */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#C96B26]/30 bg-[#F9F3E5] shadow-2xl">
                
                {/* 4K Chai Image Container */}
                <div className="relative h-96 sm:h-[460px] w-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2560&q=95"
                    alt="Authentic boiling Amrittulya Chai in traditional brass vessel"
                    className="w-full h-full"
                    fallbackText="Amrittulya Kadak Chai"
                  />

                  {/* Multi-layered Realistic Rising Steam / Aroma Animation */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none w-32 h-44 flex justify-center items-end overflow-visible">
                    <div className="w-8 h-28 rounded-full bg-gradient-to-t from-white/40 via-white/20 to-transparent blur-md steam-particle-1" />
                    <div className="w-10 h-32 rounded-full bg-gradient-to-t from-white/45 via-white/22 to-transparent blur-lg steam-particle-2 -ml-3" />
                    <div className="w-7 h-24 rounded-full bg-gradient-to-t from-white/35 via-white/15 to-transparent blur-md steam-particle-3 -ml-2" />
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120C09]/70 via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating 3D Badge 1: Bottom Saffron Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C96B26]/40 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C96B26] to-[#E99A3B] text-white flex items-center justify-center font-bold shadow-md">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-display font-bold text-sm text-[#2A170F] flex items-center gap-1.5">
                        <span>स्पेशल केसर गुड़ चाय</span>
                        <Star className="w-3.5 h-3.5 text-[#C96B26] fill-current" />
                      </h4>
                      <p className="text-xs text-[#9E4712] font-semibold">
                        #1 Bestseller in Udaipurwati
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#5C4337] font-bold block">
                      Starting at
                    </span>
                    <span className="text-xl font-black text-[#9E4712]">
                      ₹25
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Micro Badge Top-Right */}
              <div className="absolute -top-4 -right-3 bg-white/95 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs text-[#9E4712] font-black border border-[#C96B26]/40 animate-float-subtle">
                <Sparkles className="w-3.5 h-3.5 text-[#C96B26]" />
                100% शुद्ध देशी स्वाद
              </div>

              {/* Floating 3D Micro Badge Bottom-Left */}
              <div className="absolute -bottom-4 -left-3 bg-white/95 px-3.5 py-1.5 rounded-full shadow-xl hidden sm:flex items-center gap-2 text-xs text-[#2A170F] font-bold border border-[#C96B26]/40 animate-float-reverse">
                <Award className="w-3.5 h-3.5 text-[#C96B26]" />
                घूमचक्कर सर्किल फेवरेट
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
