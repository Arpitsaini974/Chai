import React from 'react';
import { Sparkles, ArrowRight, Clock, Award, Coffee, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';
import ImageWithFallback from './ImageWithFallback';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#120C09] via-[#21130D]/60 to-[#120C09]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E99A3B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#C96B26]/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Tagline & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Marathi / Hinglish Cultural Hook */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#21130D] border border-[#E99A3B]/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E99A3B] animate-ping" />
              <span className="font-marathi-accent text-sm sm:text-base text-[#E99A3B] font-semibold tracking-wide">
                {BRAND_CONFIG.marathiTagline}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F0E5] leading-[1.15]">
                Taste the Royalty of <br />
                <span className="amber-text-gradient">
                  Authentic Amrittulya
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#E99A3B]/90 font-serif-display italic">
                “एक घोट... आणि दिवस बनतो फ्रेश!”
              </p>
            </div>

            {/* Description */}
            <p className="text-[#F7F0E5]/80 text-base sm:text-lg max-w-xl leading-relaxed">
              {BRAND_CONFIG.subTagline}
            </p>

            {/* Key Micro-highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-[#21130D]/80 border border-[#E99A3B]/20 text-center">
                <Coffee className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5]/70 font-medium">Brewed in Brass Handi</p>
              </div>
              <div className="p-3 rounded-xl bg-[#21130D]/80 border border-[#E99A3B]/20 text-center">
                <Sparkles className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5]/70 font-medium">100% Pure Milk & Spices</p>
              </div>
              <div className="p-3 rounded-xl bg-[#21130D]/80 border border-[#E99A3B]/20 text-center">
                <Award className="w-5 h-5 text-[#E99A3B] mx-auto mb-1" />
                <p className="text-xs text-[#F7F0E5]/70 font-medium">Desi Clay Kulhads</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:from-[#E99A3B] hover:to-[#C96B26] text-[#120C09] font-bold text-base shadow-xl hover:shadow-[#E99A3B]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E99A3B]/40"
              >
                <span>Order on WhatsApp Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#21130D] hover:bg-[#21130D]/80 text-[#F7F0E5] font-semibold text-base border border-[#E99A3B]/30 hover:border-[#E99A3B] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
              >
                <span>Our Heritage</span>
              </a>
            </div>

            {/* Discreet Demo Banner Notice */}
            <p className="text-xs text-[#F7F0E5]/50 flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E99A3B]" />
              Client presentation preview — Interactive ordering simulation included.
            </p>
          </div>

          {/* Right Column: Cinematic Chai Visual with Gentle Steam Effect */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative amber ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C96B26] to-[#E99A3B] rounded-3xl blur-md opacity-35 group-hover:opacity-60 transition duration-1000" />
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E99A3B]/30 bg-[#21130D] shadow-2xl">
                
                {/* Chai image container */}
                <div className="relative h-96 sm:h-[460px] w-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85"
                    alt="Authentic boiling Amrittulya Chai in traditional brass vessel"
                    className="w-full h-full"
                    fallbackText="Amrittulya Kadak Chai"
                  />

                  {/* Gentle Realistic Steam Effect (CSS animated particles) */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none w-28 h-40 flex justify-center items-end overflow-visible">
                    <div className="w-7 h-24 rounded-full bg-gradient-to-t from-white/30 via-white/15 to-transparent blur-md steam-particle-1" />
                    <div className="w-9 h-28 rounded-full bg-gradient-to-t from-white/35 via-white/20 to-transparent blur-lg steam-particle-2 -ml-3" />
                    <div className="w-6 h-20 rounded-full bg-gradient-to-t from-white/25 via-white/10 to-transparent blur-md steam-particle-3 -ml-2" />
                  </div>

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120C09] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Overlay Badge: Masala Secret */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-[#E99A3B]/30 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E99A3B]/20 border border-[#E99A3B]/40 flex items-center justify-center text-[#E99A3B]">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-display font-bold text-sm text-[#F7F0E5]">
                        Secret 7-Spice Blend
                      </h4>
                      <p className="text-xs text-[#E99A3B]">
                        Slowly boiled with love & care
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-[#F7F0E5]/60 font-semibold block">
                      Starting at
                    </span>
                    <span className="text-xl font-extrabold text-[#E99A3B]">
                      ₹15
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative side pill */}
              <div className="absolute -top-4 -right-4 bg-[#21130D] border border-[#E99A3B]/40 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs text-[#E99A3B] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#E99A3B]" />
                Pure Desi Chai
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
