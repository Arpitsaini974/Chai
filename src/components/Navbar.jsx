import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Coffee, Sparkles, Sun, Moon } from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';

export default function Navbar({ cartCount, onOpenCart, theme = 'light', onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Signature Menu", href: "#menu" },
    { name: "Video Clips", href: "#reels" },
    { name: "Brand Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location & Hours", href: "#location" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDF9F0]/92 dark:bg-[#120C09]/92 backdrop-blur-md border-b border-[#C96B26]/20 dark:border-[#C96B26]/30 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C96B26] rounded-lg p-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9E4712] via-[#C96B26] to-[#E99A3B] p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#FDF9F0] dark:bg-[#1c100a] flex items-center justify-center transition-colors">
                <Coffee className="w-6 h-6 text-[#9E4712] dark:text-[#E99A3B] transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-brand-title text-base sm:text-lg font-black tracking-wider text-[#2A170F] dark:text-[#F7F0E5]">
                  UPW AALI
                </span>
                <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#C96B26]/15 text-[#9E4712] dark:text-[#E99A3B] font-bold border border-[#C96B26]/30">
                  Udaipurwati
                </span>
              </div>
              <span className="text-xs font-serif-display tracking-widest text-[#9E4712] dark:text-[#E99A3B] uppercase font-bold">
                Amrittulya Chai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#5C4337] dark:text-[#D4AF37]/90 hover:text-[#9E4712] dark:hover:text-[#F5B041] transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-[#C96B26] rounded"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#F9F3E5] dark:bg-[#21130D] hover:bg-[#9E4712] dark:hover:bg-[#C96B26] text-[#9E4712] dark:text-[#E99A3B] hover:text-white dark:hover:text-white border border-[#C96B26]/30 transition-all shadow-sm"
            >
              <span>{BRAND_CONFIG.instagramHandle}</span>
            </a>
          </nav>

          {/* Actions: Theme Toggle, Cart CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              onClick={onToggleTheme}
              type="button"
              className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#F9F3E5] dark:bg-[#21130D] hover:bg-[#F2E8D5] dark:hover:bg-[#2c1a12] border border-[#C96B26]/35 text-[#9E4712] dark:text-[#E99A3B] transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9E4712] flex items-center gap-1.5"
              title={isDark ? "Switch to Cream Light Theme" : "Switch to Royal Dark Theme"}
              aria-label={isDark ? "Switch to Cream Light Theme" : "Switch to Royal Dark Theme"}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-[#F5B041] animate-spin-slow" />
                  <span className="hidden sm:inline text-xs font-bold text-[#F7F0E5]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#9E4712]" />
                  <span className="hidden sm:inline text-xs font-bold text-[#2A170F]">Dark</span>
                </>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#F9F3E5] dark:bg-[#21130D] hover:bg-[#F2E8D5] dark:hover:bg-[#2c1a12] border border-[#C96B26]/40 hover:border-[#9E4712] text-[#2A170F] dark:text-[#F7F0E5] font-bold text-sm transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9E4712]"
              aria-label={`View order cart with ${cartCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#9E4712] dark:text-[#E99A3B]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#9E4712] dark:bg-[#C96B26] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FDF9F0] dark:border-[#120C09] animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold">Your Order</span>
              {cartCount > 0 && (
                <span className="hidden sm:inline text-xs text-[#9E4712] dark:text-[#E99A3B] font-black bg-[#FDF9F0] dark:bg-[#120C09] px-2 py-0.5 rounded-full border border-[#C96B26]/30">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order CTA on Desktop */}
            <a
              href="#menu"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:from-[#E99A3B] hover:to-[#C96B26] text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9E4712]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Order Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-[#2A170F] dark:text-[#F7F0E5] hover:text-[#9E4712] hover:bg-[#F9F3E5] dark:hover:bg-[#21130D] border border-transparent hover:border-[#C96B26]/30 focus:outline-none focus:ring-2 focus:ring-[#9E4712]"
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
        <div className="md:hidden bg-[#FDF9F0]/98 dark:bg-[#120C09]/98 border-b border-[#C96B26]/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#2A170F] dark:text-[#F7F0E5] hover:text-[#9E4712] dark:hover:text-[#E99A3B] hover:bg-[#F9F3E5] dark:hover:bg-[#21130D] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#F2E8D5] dark:border-[#21130D] flex flex-col gap-2">
            <a
              href="#menu"
              onClick={handleLinkClick}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#C96B26] to-[#E99A3B] text-white font-bold text-sm shadow-md"
            >
              Browse Full Menu & Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
