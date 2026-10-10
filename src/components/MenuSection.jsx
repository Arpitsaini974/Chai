import React, { useState, useMemo } from 'react';
import { BRAND_CONFIG } from '../brandConfig';
import MenuCard from './MenuCard';
import { Coffee, Filter, Info, ShoppingBag } from 'lucide-react';

export default function MenuSection({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onOpenCart,
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return BRAND_CONFIG.menuItems;
    return BRAND_CONFIG.menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <section id="menu" className="py-20 bg-[#120C09] relative scroll-mt-16">
      {/* Background subtleties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21130D] border border-[#E99A3B]/30 text-xs font-semibold text-[#E99A3B]">
            <Coffee className="w-3.5 h-3.5" />
            <span>Pure Ingredients • Traditional Simmering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F0E5]">
            Our Signature <span className="amber-text-gradient">Chai & Nashta</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#F7F0E5]/70">
            Handcrafted with authentic spices and served piping hot. Choose your favorites to build an instant WhatsApp order.
          </p>

          {/* Discreet Demo Notice */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#21130D]/60 border border-[#E99A3B]/20 text-[11px] text-[#F7F0E5]/60 mt-1">
            <Info className="w-3.5 h-3.5 text-[#E99A3B]" />
            <span>Demo menu — sample items and prices.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {BRAND_CONFIG.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E99A3B] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C96B26] to-[#E99A3B] text-[#120C09] shadow-lg shadow-[#E99A3B]/20 scale-105'
                    : 'bg-[#21130D] text-[#F7F0E5]/80 hover:text-[#F7F0E5] border border-[#E99A3B]/20 hover:border-[#E99A3B]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const cartItem = cartItems.find((ci) => ci.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            return (
              <MenuCard
                key={item.id}
                item={item}
                cartQuantity={quantity}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            );
          })}
        </div>

        {/* Bottom Floating Bar Reminder when items are in cart */}
        {totalQuantity > 0 && (
          <div className="mt-12 p-4 rounded-2xl glass-card border border-[#E99A3B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-[#E99A3B]/20 flex items-center justify-center text-[#E99A3B]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F7F0E5]">
                  {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
                </p>
                <p className="text-xs text-[#E99A3B]">
                  Ready to preview and send via WhatsApp
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenCart}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:from-[#E99A3B] hover:to-[#C96B26] text-[#120C09] font-bold text-sm shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Review Order & Checkout →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
