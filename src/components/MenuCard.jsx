import React from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function MenuCard({
  item,
  cartQuantity = 0,
  onAddToCart,
  onUpdateQuantity,
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden menu-tile flex flex-col sm:flex-row h-full text-left transition-all duration-300">
      
      {/* Product Image Tile (Square / Horizontal Aspect) */}
      <div className="relative sm:w-44 md:w-48 h-48 sm:h-auto shrink-0 overflow-hidden bg-[#21130D]">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          fallbackText={item.name}
        />
        
        {/* Dark Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#120C09] via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
          {item.badge && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C96B26] to-[#E99A3B] text-[#120C09] shadow-md">
              {item.badge}
            </span>
          )}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif-display font-extrabold text-base sm:text-lg text-[#2A170F] group-hover:text-[#9E4712] transition-colors leading-snug">
              {item.name}
            </h3>
            
            {/* Price Pill */}
            <div className="shrink-0 px-2.5 py-1 rounded-full bg-[#FDF9F0] border border-[#C96B26]/40 shadow-sm">
              <span className="text-sm font-black text-[#9E4712]">₹{item.price}</span>
            </div>
          </div>
          
          {(item.hindiName || item.marathiName) && (
            <p className="font-serif-display text-xs text-[#9E4712] font-bold mt-0.5 mb-1.5 flex items-center gap-1">
              <span>{item.hindiName || item.marathiName}</span>
            </p>
          )}

          <p className="text-xs text-[#5C4337] line-clamp-2 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>

        {/* Interactive Cart Action Controls */}
        <div className="pt-2 border-t border-[#C96B26]/15 flex items-center justify-between">
          <div className="text-[11px] font-semibold text-[#5C4337]">
            {cartQuantity > 0 ? (
              <span className="text-[#9E4712] flex items-center gap-1 font-bold">
                <Check className="w-3.5 h-3.5" /> Added ({cartQuantity})
              </span>
            ) : (
              "Piping Hot Serve"
            )}
          </div>

          <div>
            {cartQuantity === 0 ? (
              <button
                type="button"
                onClick={() => onAddToCart(item)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#C96B26] to-[#E99A3B] hover:opacity-95 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#9E4712]"
                aria-label={`Add ${item.name} to order`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add +</span>
              </button>
            ) : (
              <div className="inline-flex items-center bg-[#FDF9F0] rounded-xl border border-[#C96B26]/50 p-1 shadow-inner">
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, cartQuantity - 1)}
                  className="w-7 h-7 rounded-lg bg-[#F9F3E5] hover:bg-[#C96B26] text-[#2A170F] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#9E4712]"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center text-xs font-black text-[#9E4712]">
                  {cartQuantity}
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, cartQuantity + 1)}
                  className="w-7 h-7 rounded-lg bg-[#C96B26] hover:bg-[#9E4712] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#9E4712]"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
