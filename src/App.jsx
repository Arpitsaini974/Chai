import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReelsSection from './components/ReelsSection';
import BrandStory from './components/BrandStory';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('upw_chai_theme');
      // If user specifically picked and saved a theme before, honor it; otherwise default always to 'light'
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      return 'light';
    } catch {
      return 'light';
    }
  });

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('upw_chai_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync theme changes to document and localStorage
  useEffect(() => {
    try {
      localStorage.setItem('upw_chai_theme', theme);
    } catch (err) {
      console.warn("Could not save theme to localStorage:", err);
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
    <div className="min-h-screen royal-bg-pattern text-[#2A170F] dark:text-[#F7F0E5] flex flex-col font-sans selection:bg-[#E99A3B] selection:text-[#120C09] transition-colors duration-300">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
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
        <ReelsSection />
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

      {/* Sleek Floating Bottom Order Bar (Swiggy/Zomato style quick checkout feel) */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:w-96 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#1c0f09]/95 via-[#25140d]/95 to-[#1c0f09]/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl shadow-black/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 pl-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C96B26] to-[#E99A3B] text-[#120C09] flex items-center justify-center font-black shrink-0 shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs font-bold text-[#F7F0E5] truncate">
                  {totalCartCount} {totalCartCount === 1 ? 'Chai' : 'Chais'} Selected
                </p>
                <p className="text-xs text-[#F5B041] font-black">
                  Total: ₹{cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-[#25D366]/25 transition-transform duration-200 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <span>View & Order</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
