import React from 'react';
import { Sparkles, ArrowRight, Award, Coffee, Star, Flame, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#120C09] via-[#1c100a] to-[#120C09]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E99A3B]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-88 h-88 bg-[#C96B26]/18 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Tagline & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Royal Hindi / Regional Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#21130D] to-[#2d1911] border border-[#E99A3B]/40 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E99A3B] animate-ping" />
              <span className="font-serif-display text-xs sm:text-sm text-[#F5B041] font-bold tracking-wide">
                {BRAND_CONFIG.hindiTagline}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F0E5] leading-[1.12]">
                स्वाद उदयपुरवाटी का, <br />
                <span className="amber-text-gradient">
                  केसर गुड़ अमृततुल्य चाय
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#E99A3B]/90 font-serif-display italic flex items-center gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#E99A3B]" />
                “घूमचक्कर सर्किल... जहाँ हर घूंट में बसती है राजस्थान की शान!”
              </p>
            </div>

            {/* Description */}
            <p className="text-[#F7F0E5]/80 text-sm sm:text-base max-w-xl leading-relaxed font-light">
              {BRAND_CONFIG.subTagline}
            </p>

            {/* Micro-highlights with Royal Glow */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Flame className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5] font-semibold">शुद्ध देशी गुड़ & केसर</p>
                <p className="text-[10px] text-[#E99A3B]">No Sugar Formula</p>
              </div>
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5] font-semibold">पीतल की हांडी में उबली</p>
                <p className="text-[10px] text-[#E99A3B]">Slow Caramelized</p>
              </div>
              <div className="p-3.5 rounded-2xl royal-glass-card text-center hover:scale-105 transition-transform duration-300">
                <Coffee className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5] font-semibold">मिट्टी के कुल्हड़</p>
                <p className="text-[10px] text-[#E99A3B]">100% Desi Clay</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C96B26] via-[#E99A3B] to-[#F5B041] hover:opacity-95 text-[#120C09] font-extrabold text-sm tracking-wide shadow-2xl hover:shadow-[#E99A3B]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E99A3B]/40"
              >
                <span>Order on WhatsApp (Demo)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#21130D] hover:bg-[#E99A3B]/20 text-[#F7F0E5] font-semibold text-sm border border-[#E99A3B]/40 hover:border-[#E99A3B] transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
              >
                <span>Instagram @upw_aali</span>
              </a>
            </div>

            {/* Verified Handle Pill */}
            <p className="text-xs text-[#F7F0E5]/60 flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dukaan Instagram: </span>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#E99A3B] hover:underline font-bold"
              >
                {BRAND_CONFIG.instagramHandle}
              </a>
            </p>
          </div>

          {/* Right Column: 3D Floating Visual Frame with Realistic Steam */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Amber-Gold Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C96B26] via-[#D4AF37] to-[#E99A3B] rounded-[2.5rem] blur-xl opacity-30 animate-pulse" />
              
              {/* Main Card Frame with 3D Float Effect */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#D4AF37]/35 bg-[#21130D] shadow-2xl">
                
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
                    <div className="w-8 h-28 rounded-full bg-gradient-to-t from-white/35 via-white/18 to-transparent blur-md steam-particle-1" />
                    <div className="w-10 h-32 rounded-full bg-gradient-to-t from-white/40 via-white/20 to-transparent blur-lg steam-particle-2 -ml-3" />
                    <div className="w-7 h-24 rounded-full bg-gradient-to-t from-white/30 via-white/12 to-transparent blur-md steam-particle-3 -ml-2" />
                  </div>

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating 3D Badge 1: Bottom Saffron Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl royal-glass-card border border-[#E99A3B]/40 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C96B26] to-[#E99A3B] text-[#120C09] flex items-center justify-center font-bold shadow-md">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-display font-bold text-sm text-[#F7F0E5] flex items-center gap-1.5">
                        <span>स्पेशल केसर गुड़ चाय</span>
                        <Star className="w-3.5 h-3.5 text-[#F5B041] fill-current" />
                      </h4>
                      <p className="text-xs text-[#E99A3B]">
                        #1 Bestseller in Udaipurwati
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#F7F0E5]/60 font-semibold block">
                      Starting at
                    </span>
                    <span className="text-xl font-extrabold text-[#F5B041]">
                      ₹25
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Micro Badge Top-Right */}
              <div className="absolute -top-4 -right-3 royal-glass-card px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs text-[#F5B041] font-bold border border-[#D4AF37]/50 animate-float-subtle">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B041]" />
                100% शुद्ध देशी स्वाद
              </div>

              {/* Floating 3D Micro Badge Bottom-Left */}
              <div className="absolute -bottom-4 -left-3 royal-glass-card px-3.5 py-1.5 rounded-full shadow-2xl hidden sm:flex items-center gap-2 text-xs text-[#F7F0E5] font-bold border border-[#E99A3B]/40 animate-float-reverse">
                <Award className="w-3.5 h-3.5 text-[#E99A3B]" />
                घूमचक्कर सर्किल फेवरेट
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
