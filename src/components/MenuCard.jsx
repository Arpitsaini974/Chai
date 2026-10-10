import React from 'react';
import { Plus, Minus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function MenuCard({
  item,
  cartQuantity = 0,
  onAddToCart,
  onUpdateQuantity,
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col h-full text-left transition-all duration-300">
      
      {/* Product Image & Badges */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#21130D]">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          fallbackText={item.name}
        />
        
        {/* Dark Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#21130D] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E99A3B] text-[#120C09] shadow-md">
              {item.badge}
            </span>
          )}
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 z-10">
          <div className="bg-[#120C09]/90 backdrop-blur-md border border-[#E99A3B]/40 px-3 py-1 rounded-full shadow-lg">
            <span className="text-sm font-extrabold text-[#E99A3B]">₹{item.price}</span>
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif-display font-bold text-lg sm:text-xl text-[#F7F0E5] group-hover:text-[#E99A3B] transition-colors">
              {item.name}
            </h3>
          </div>
          
          {item.marathiName && (
            <p className="font-marathi-accent text-xs text-[#E99A3B]/80 font-medium mb-2">
              {item.marathiName}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#F7F0E5]/70 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Interactive Cart Action Controls */}
        <div className="pt-2 border-t border-[#E99A3B]/10 flex items-center justify-between">
          <div className="text-xs font-semibold text-[#F7F0E5]/50">
            {cartQuantity > 0 ? (
              <span className="text-[#E99A3B] flex items-center gap-1 font-bold">
                <Check className="w-3.5 h-3.5" /> Added ({cartQuantity})
              </span>
            ) : (
              "Sample Price: ₹" + item.price
            )}
          </div>

          <div>
            {cartQuantity === 0 ? (
              <button
                type="button"
                onClick={() => onAddToCart(item)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#21130D] hover:bg-[#E99A3B] text-[#F7F0E5] hover:text-[#120C09] border border-[#E99A3B]/40 hover:border-[#E99A3B] text-xs font-bold transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
                aria-label={`Add ${item.name} to order`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            ) : (
              <div className="inline-flex items-center bg-[#120C09] rounded-xl border border-[#E99A3B]/40 p-1 shadow-inner">
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, cartQuantity - 1)}
                  className="w-7 h-7 rounded-lg bg-[#21130D] hover:bg-[#C96B26] text-[#F7F0E5] flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#E99A3B]"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center text-xs font-bold text-[#E99A3B]">
                  {cartQuantity}
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, cartQuantity + 1)}
                  className="w-7 h-7 rounded-lg bg-[#21130D] hover:bg-[#E99A3B] hover:text-[#120C09] text-[#F7F0E5] flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#E99A3B]"
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
