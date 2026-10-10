import React from 'react';
import { Coffee, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ onOpenCart }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0705] border-t border-[#E99A3B]/20 pt-16 pb-12 text-[#F7F0E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C96B26] to-[#E99A3B] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#120C09] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#E99A3B]" />
                </div>
              </div>
              <div>
                <span className="font-brand-title text-base font-bold text-[#F7F0E5] block">
                  UPW AALI
                </span>
                <span className="text-xs text-[#E99A3B] font-serif-display uppercase">
                  Amrittulya Chai
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F7F0E5]/70 leading-relaxed">
              Brewing authentic Maharashtrian tea in traditional brass handis with whole pounded spices and pure milk.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-semibold text-[#E99A3B] bg-[#21130D] px-2.5 py-1 rounded-full border border-[#E99A3B]/20">
                {BRAND_CONFIG.marathiTagline}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-display font-bold text-sm text-[#F7F0E5] uppercase tracking-wider text-[#E99A3B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F0E5]/80">
              <li>
                <a href="#menu" className="hover:text-[#E99A3B] transition-colors">
                  Signature Menu & Prices
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#E99A3B] transition-colors">
                  Our Traditional Brewing
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E99A3B] transition-colors">
                  Chai Counter Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E99A3B] transition-colors">
                  Shop Address & Timings
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="hover:text-[#E99A3B] transition-colors text-left"
                >
                  View Order Drawer
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Timings & Support */}
          <div className="space-y-3">
            <h4 className="font-serif-display font-bold text-sm text-[#F7F0E5] uppercase tracking-wider text-[#E99A3B]">
              Visit Timings
            </h4>
            <div className="space-y-1.5 text-xs text-[#F7F0E5]/70">
              <p><strong>Daily:</strong> {BRAND_CONFIG.openingHours.weekdays}</p>
              <p><strong>Weekends:</strong> {BRAND_CONFIG.openingHours.weekends}</p>
              <p className="text-[#E99A3B] text-[11px] pt-1">
                Warm kulhad chai always ready on the burner.
              </p>
            </div>
          </div>

          {/* Social & Contact Channels */}
          <div className="space-y-3">
            <h4 className="font-serif-display font-bold text-sm text-[#F7F0E5] uppercase tracking-wider text-[#E99A3B]">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21130D] hover:bg-[#E99A3B] text-[#E99A3B] hover:text-[#120C09] border border-[#E99A3B]/30 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
                aria-label="Instagram profile (demo link)"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={onOpenCart}
                className="w-10 h-10 rounded-xl bg-[#21130D] hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="WhatsApp order preview"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-[#F7F0E5]/60 pt-1">
              Instagram: <span className="text-[#E99A3B]">{BRAND_CONFIG.instagramHandle}</span>
            </p>
            <p className="text-[11px] text-[#F7F0E5]/50">
              For franchise inquiries and feedback.
            </p>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 border-t border-[#21130D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E5]/50">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.</p>
            <p className="text-[11px] text-[#E99A3B]/70">
              Client Presentation Demo — Menu items, sample pricing & placeholders for presentation purposes.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#21130D] hover:bg-[#E99A3B]/20 text-[#E99A3B] border border-[#E99A3B]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
