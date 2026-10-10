import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageSquare,
  ShoppingBag,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { BRAND_CONFIG } from '../brandConfig';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [copied, setCopied] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Calculate accurate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Generate clean, readable WhatsApp message text
  const generateOrderMessage = () => {
    let message = `*Namaskar! Order Inquiry from ${BRAND_CONFIG.brandName} Website Demo:*\n\n`;
    message += `📋 *Selected Items:*\n`;

    cartItems.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}* × ${item.quantity} = ₹${lineTotal}\n`;
    });

    message += `\n💰 *Total Amount:* ₹${subtotal}\n`;
    message += `📍 *Delivery / Pickup:* Table / Parcel\n`;
    message += `\n_(This is a demo order preview created for client presentation)_`;

    return message;
  };

  const handleCopyMessage = () => {
    const text = generateOrderMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const message = generateOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    const hasVerifiedNumber =
      BRAND_CONFIG.verifiedWhatsAppNumber &&
      BRAND_CONFIG.verifiedWhatsAppNumber.trim().length > 0;

    if (hasVerifiedNumber) {
      // Direct WhatsApp Chat with prefilled text (Safe & standard click-to-chat)
      const cleanNumber = BRAND_CONFIG.verifiedWhatsAppNumber.replace(/\D/g, '');
      const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Verified number is empty placeholder -> Open interactive demo modal with preview & copy
      setShowDemoModal(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120C09] border-l border-[#E99A3B]/20 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#21130D] flex items-center justify-between bg-[#21130D]/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E99A3B]/10 border border-[#E99A3B]/30 flex items-center justify-center text-[#E99A3B]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 id="cart-title" className="font-serif-display font-bold text-lg text-[#F7F0E5]">
                  Your Chai Order
                </h2>
                <p className="text-xs text-[#E99A3B]">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearCart}
                  className="p-2 text-xs text-[#F7F0E5]/50 hover:text-red-400 transition-colors rounded-lg hover:bg-[#21130D]"
                  title="Clear entire cart"
                  aria-label="Clear cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#F7F0E5]/70 hover:text-[#F7F0E5] rounded-lg hover:bg-[#21130D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E99A3B]"
                aria-label="Close cart drawer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Discreet Notice */}
            <div className="p-3 rounded-xl bg-[#21130D]/70 border border-[#E99A3B]/20 flex items-start gap-2.5 text-xs text-[#F7F0E5]/70">
              <Info className="w-4 h-4 text-[#E99A3B] shrink-0 mt-0.5" />
              <span>
                <strong>Demo Ordering:</strong> Orders will be formatted into a WhatsApp message. No backend or payment gateway required.
              </span>
            </div>

            {/* Empty State */}
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#21130D] border border-[#E99A3B]/20 flex items-center justify-center mx-auto text-[#E99A3B]/60">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display text-lg font-bold text-[#F7F0E5]">
                    Your Cart is Empty
                  </h3>
                  <p className="text-xs text-[#F7F0E5]/60 max-w-xs mx-auto">
                    Craving a cup of piping hot Amrittulya chai or a crispy samosa? Add items from the menu to see the WhatsApp demo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#21130D] hover:bg-[#C96B26]/30 border border-[#E99A3B]/30 text-xs font-bold text-[#E99A3B] transition-all"
                >
                  Explore Menu Items
                </button>
              </div>
            ) : (
              /* Item List */
              <div className="space-y-3">
                {cartItems.map((item) => {
                  const lineTotal = item.price * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-[#21130D]/60 border border-[#E99A3B]/20 flex items-center justify-between gap-3 transition-colors hover:border-[#E99A3B]/40"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover bg-[#120C09] shrink-0 border border-[#E99A3B]/20"
                        />
                        <div className="min-w-0">
                          <h4 className="font-serif-display font-semibold text-sm text-[#F7F0E5] truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#E99A3B] font-semibold">
                            ₹{item.price} each • <span className="text-[#F7F0E5]/70">₹{lineTotal}</span>
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="inline-flex items-center bg-[#120C09] rounded-lg border border-[#E99A3B]/30 p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-[#21130D] hover:bg-[#C96B26] text-[#F7F0E5] flex items-center justify-center transition-colors text-xs"
                            aria-label={`Reduce ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#E99A3B]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-[#21130D] hover:bg-[#E99A3B] hover:text-[#120C09] text-[#F7F0E5] flex items-center justify-center transition-colors text-xs"
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-[#F7F0E5]/40 hover:text-red-400 transition-colors"
                          title="Remove item"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#21130D] bg-[#21130D]/40 space-y-4">
              {/* Calculations */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#F7F0E5]/70">
                  <span>Subtotal ({totalCount} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-[#F7F0E5]/70">
                  <span>Packaging & Parcel</span>
                  <span className="text-emerald-400 font-medium">₹0 (Complimentary)</span>
                </div>
                <div className="pt-2 border-t border-[#21130D] flex justify-between items-baseline">
                  <span className="font-serif-display font-bold text-base text-[#F7F0E5]">
                    Order Total:
                  </span>
                  <span className="text-2xl font-extrabold text-[#E99A3B]">
                    ₹{subtotal}
                  </span>
                </div>
              </div>

              {/* Order on WhatsApp CTA */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp (Demo)</span>
              </button>

              <p className="text-[11px] text-center text-[#F7F0E5]/50">
                Creates a preformatted WhatsApp order message.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Interactive WhatsApp Demo Notice Modal (Triggered when number is placeholder or client wants preview) */}
      {showDemoModal && (
        <div className="fixed inset-0 z-60 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setShowDemoModal(false)}
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-[#120C09] border border-[#E99A3B]/40 p-6 shadow-2xl text-left space-y-5 z-10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-lg text-[#F7F0E5]">
                    WhatsApp Ordering Simulation
                  </h3>
                  <p className="text-xs text-[#E99A3B]">
                    Seamless customer order generation
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="p-1 rounded-lg text-[#F7F0E5]/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Explanatory Notice */}
            <div className="p-3.5 rounded-xl bg-[#21130D] border border-amber-500/30 text-xs text-[#F7F0E5]/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Notice: Demo Environment Active</span>
              </div>
              <p>
                In this client demo, a placeholder is used for the business WhatsApp number to prevent unintended messaging to unverified contacts.
              </p>
              <p className="text-[#E99A3B]">
                Once a verified business WhatsApp number is provided in <code className="bg-[#120C09] px-1 py-0.5 rounded">brandConfig.js</code>, clicking this button immediately launches WhatsApp chat with the customer's order prefilled.
              </p>
            </div>

            {/* Generated Message Preview */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#F7F0E5]/70">
                <span className="font-semibold">Prefilled WhatsApp Message Preview:</span>
                <span className="text-[11px] text-[#E99A3B]">URL-Encoded Ready</span>
              </div>
              <div className="bg-[#21130D] p-3.5 rounded-xl border border-[#E99A3B]/20 text-xs text-[#F7F0E5]/90 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                {generateOrderMessage()}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#21130D] hover:bg-[#E99A3B] text-[#F7F0E5] hover:text-[#120C09] border border-[#E99A3B]/40 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Order Text'}</span>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  const encoded = encodeURIComponent(generateOrderMessage());
                  window.open(`https://wa.me/?text=${encoded}`, '_blank', 'noopener,noreferrer');
                }}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Test Web WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
