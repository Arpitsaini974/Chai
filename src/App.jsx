import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import BrandStory from './components/BrandStory';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('upw_chai_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('upw_chai_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.warn("Could not save cart state to localStorage:", err);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add Item to cart
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Update item quantity (0 removes it)
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove single item
  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear all items
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#120C09] text-[#F7F0E5] flex flex-col font-sans selection:bg-[#E99A3B] selection:text-[#120C09]">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onExploreMenu={() => {}} />
        <MenuSection
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenCart={() => setIsCartOpen(true)}
        />
        <BrandStory />
        <Gallery />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenCart={() => setIsCartOpen(true)} />

      {/* Slide-in Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Mobile Floating Cart Indicator Button */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 right-6 z-40 sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#C96B26] to-[#E99A3B] text-[#120C09] font-bold shadow-2xl border-2 border-[#120C09] animate-bounce"
            aria-label="View current cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Order ({totalCartCount})</span>
          </button>
        </div>
      )}

    </div>
  );
}
