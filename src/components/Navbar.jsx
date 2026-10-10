import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Coffee, Sparkles, PhoneCall } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Signature Menu", href: "#menu" },
    { name: "Brand Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location & Hours", href: "#location" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#120C09]/90 backdrop-blur-md border-b border-[#E99A3B]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E99A3B] rounded-lg p-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#21130D] via-[#C96B26] to-[#E99A3B] p-[2px] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#120C09] flex items-center justify-center">
                <Coffee className="w-6 h-6 text-[#E99A3B] transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-brand-title text-base sm:text-lg font-bold tracking-wider text-[#F7F0E5]">
                  UPW AALI
                </span>
                <span className="text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#E99A3B]/20 text-[#E99A3B] font-semibold border border-[#E99A3B]/30">
                  DEMO
                </span>
              </div>
              <span className="text-xs font-serif-display tracking-widest text-[#E99A3B] uppercase font-semibold">
                Amrittulya Chai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F7F0E5]/80 hover:text-[#E99A3B] transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-[#E99A3B] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Cart CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#21130D] hover:bg-[#C96B26]/20 border border-[#E99A3B]/40 hover:border-[#E99A3B] text-[#F7F0E5] font-medium text-sm transition-all duration-300 shadow-md hover:shadow-[#E99A3B]/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
              aria-label={`View order cart with ${cartCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#E99A3B]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C96B26] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#120C09] animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">Your Order</span>
              {cartCount > 0 && (
                <span className="hidden sm:inline text-xs text-[#E99A3B] font-bold bg-[#120C09] px-2 py-0.5 rounded-full border border-[#E99A3B]/30">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order CTA on Desktop */}
            <a
              href="#menu"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:from-[#E99A3B] hover:to-[#C96B26] text-[#120C09] font-bold text-sm tracking-wide shadow-lg hover:shadow-[#E99A3B]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Sparkles className="w-4 h-4" />
              <span>Order Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-[#F7F0E5] hover:text-[#E99A3B] hover:bg-[#21130D] border border-transparent hover:border-[#E99A3B]/30 focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120C09]/98 border-b border-[#E99A3B]/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="py-2 px-3 rounded-lg bg-[#21130D]/70 border border-[#E99A3B]/10 text-xs text-[#E99A3B]">
            {BRAND_CONFIG.marathiTagline}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#F7F0E5] hover:text-[#E99A3B] hover:bg-[#21130D] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#21130D] flex flex-col gap-2">
            <a
              href="#menu"
              onClick={handleLinkClick}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#C96B26] to-[#E99A3B] text-[#120C09] font-bold text-sm shadow-md"
            >
              Browse Full Menu & Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
