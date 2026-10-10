import React from 'react';
import { MapPin, Clock, ExternalLink, Navigation, Phone, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#120C09] relative border-t border-[#E99A3B]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-xs font-semibold text-[#E99A3B]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit the Chai Outlet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F0E5]">
            Shop Location & <span className="amber-text-gradient">Timings</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#F7F0E5]/70">
            Drop by for your morning kadak chai or evening chai-samosa break.
          </p>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Address and Timings */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl glass-card border border-[#E99A3B]/30 space-y-8 text-left shadow-xl">
            
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E99A3B]/10 border border-[#E99A3B]/30 flex items-center justify-center text-[#E99A3B] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display font-bold text-lg text-[#F7F0E5]">
                    {BRAND_CONFIG.brandName}
                  </h3>
                  <p className="text-sm text-[#F7F0E5]/80">
                    {BRAND_CONFIG.shopAddress.line1}
                  </p>
                  <p className="text-sm text-[#F7F0E5]/80">
                    {BRAND_CONFIG.shopAddress.area}
                  </p>
                  <p className="text-xs text-[#E99A3B] font-medium">
                    Landmark: {BRAND_CONFIG.shopAddress.landmark}
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#21130D]">
                <div className="w-12 h-12 rounded-2xl bg-[#E99A3B]/10 border border-[#E99A3B]/30 flex items-center justify-center text-[#E99A3B] shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display font-bold text-lg text-[#F7F0E5]">
                    Serving Hours
                  </h3>
                  <div className="text-sm text-[#F7F0E5]/80 space-y-0.5">
                    <p><strong>Mon – Fri:</strong> {BRAND_CONFIG.openingHours.weekdays}</p>
                    <p><strong>Sat – Sun:</strong> {BRAND_CONFIG.openingHours.weekends}</p>
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold pt-1">
                    ● {BRAND_CONFIG.openingHours.statusNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps External Action Button */}
            <div>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:from-[#E99A3B] hover:to-[#C96B26] text-[#120C09] font-bold text-sm shadow-lg transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>

              <p className="text-[11px] text-center text-[#F7F0E5]/50 mt-3 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#E99A3B]" />
                Demo location placeholder. Replace with actual outlet address in config.
              </p>
            </div>

          </div>

          {/* Card 2: Interactive Map Simulation Frame */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden glass-card border border-[#E99A3B]/30 relative flex flex-col justify-between shadow-xl min-h-[380px]">
            {/* Styled Map Background */}
            <div className="relative w-full h-full min-h-[300px] bg-[#1a110c] p-6 flex flex-col items-center justify-center text-center">
              
              {/* Pattern lines imitating map grid */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#E99A3B_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Animated Map Marker */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#E99A3B]/20 border border-[#E99A3B]/50 flex items-center justify-center animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-[#C96B26] text-white flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 max-w-sm space-y-2">
                <h4 className="font-serif-display font-bold text-lg text-[#F7F0E5]">
                  Pune Heritage Chai Junction
                </h4>
                <p className="text-xs text-[#F7F0E5]/70">
                  Ready to welcome you with the freshest aromatic cardamom chai.
                </p>
                <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-[#E99A3B]">
                  Interactive Google Maps Integration Ready
                </span>
              </div>
            </div>

            {/* Footer notice inside the frame */}
            <div className="p-4 bg-[#21130D]/90 border-t border-[#E99A3B]/20 flex items-center justify-between text-xs text-[#F7F0E5]/70">
              <span>GPS Coordinates: Demo Placeholder</span>
              <span className="text-[#E99A3B] font-semibold">Maharashtra, India</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
