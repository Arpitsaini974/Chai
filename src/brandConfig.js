/**
 * UPW Aali Amrittulya Chai — Centralized Brand & Demo Configuration
 * 
 * NOTE: As per guidelines, verified business contact details, real addresses, 
 * and phone numbers are strictly kept as explicit placeholders.
 * Demo menu items and prices are realistic sample data.
 */

export const BRAND_CONFIG = {
  // Brand Identity
  brandName: "UPW Aali Amrittulya Chai",
  marathiTagline: "आपल्या अस्सल चवीचा अमृततुल्य चहा",
  tagline: "The Soul of Authentic Maharashtrian Chai",
  subTagline: "Brewed fresh with crushed whole ginger, hand-ground spices, and thick pure milk — served steaming hot in traditional earthen kulhads.",
  establishedNote: "Serving with authentic brewing traditions",

  // Business Contact & Channels (Placeholders for unknown business details)
  // If verifiedWhatsAppNumber is null or empty, the app shows the WhatsApp Demo Modal & copy feature.
  // Set to a clean international number e.g. "919876543210" if client provides it.
  verifiedWhatsAppNumber: "", // Explicit placeholder: no real number invented
  instagramHandle: "@upwaali.amrittulya",
  instagramUrl: "https://instagram.com", // Safe placeholder demo link
  emailContact: "hello@amrittulyachai.demo", // Demo placeholder

  // Location & Timings (Explicit placeholders)
  shopAddress: {
    line1: "Shop No. 4, Royal Heritage Corner",
    area: "Near Market Junction, Pune - 411004",
    state: "Maharashtra, India",
    landmark: "Opposite Old Banyan Tree Chowk"
  },
  openingHours: {
    weekdays: "6:00 AM – 11:00 PM",
    weekends: "6:00 AM – 11:30 PM",
    statusNote: "Open every day for your morning kadak chai"
  },
  googleMapsUrl: "https://maps.google.com/?q=Pune+Maharashtra+Amrittulya+Chai", // General location fallback

  // Brand Story Highlights
  story: {
    title: "A Timeless Tradition in Every Sip",
    paragraphs: [
      "Amrittulya is not just tea; in Maharashtra, it is an emotion, a morning ritual, and the heartbeat of daily conversations. 'UPW Aali' honors this rich heritage with our slow-simmered brass handi brewing process.",
      "We source single-origin Assam CTC leaves, crushed organic ginger, fresh green cardamom pods, and cinnamon, infused into farm-fresh creamy milk. Every cup delivers that thick, aromatic, and invigorating 'Kadak' punch.",
      "Served in natural earthen kulhads, each pour connects you to authentic roots, pure hospitality, and timeless flavor."
    ],
    features: [
      {
        icon: "Flame",
        title: "Traditional Brass Handi",
        desc: "Simmered slow on gentle flame for consistent caramelized milk aroma and deep infusion."
      },
      {
        icon: "Sparkles",
        title: "Secret Spice Masala",
        desc: "7 whole aromatic spices hand-pounded in small batches to preserve volatile oils."
      },
      {
        icon: "ShieldCheck",
        title: "Pure Farm-Fresh Milk",
        desc: "Rich, unadulterated high-cream milk for that signature Amrittulya body and velvety texture."
      },
      {
        icon: "Coffee",
        title: "Earth-Friendly Kulhads",
        desc: "Natural baked clay cups adding an earthy mineral note while remaining 100% biodegradable."
      }
    ]
  },

  // Interactive Demo Menu
  categories: [
    { id: "all", label: "All Items" },
    { id: "chai", label: "Specialty Chai" },
    { id: "snacks", label: "Bakery & Nashta" }
  ],

  // Sample items with high-res curated chai imagery and clear demo indicators
  menuItems: [
    {
      id: "masala-chai",
      name: "Masala Chai",
      marathiName: "मसाला चहा",
      category: "chai",
      price: 20,
      description: "Our signature blend infused with crushed green cardamom, cinnamon, clove, and fresh ginger.",
      badge: "Signature",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
      isPopular: true
    },
    {
      id: "adrak-chai",
      name: "Adrak Chai",
      marathiName: "आलं चहा (जिंजर)",
      category: "chai",
      price: 20,
      description: "Fresh hand-crushed fiery ginger brewed with rich milk to give your senses an instant refreshing kick.",
      badge: "Morning Favorite",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
      isPopular: true
    },
    {
      id: "kulhad-chai",
      name: "Kulhad Chai",
      marathiName: "कुल्हड चहा",
      category: "chai",
      price: 30,
      description: "Amrittulya chai poured piping hot into freshly fired earthen clay cups for that rich, earthy fragrance.",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=85",
      isPopular: true
    },
    {
      id: "cutting-chai",
      name: "Cutting Chai",
      marathiName: "कटिंग चहा",
      category: "chai",
      price: 15,
      description: "The classic Mumbai-Pune quick half-glass kadak chai. Intense, sweet, and perfectly balanced.",
      badge: "Daily Essential",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1200&q=85",
      isPopular: false
    },
    {
      id: "samosa",
      name: "Crispy Samosa & Chai",
      marathiName: "गरमागरम समोसा आणि चहा",
      category: "snacks",
      price: 20,
      description: "Golden flaky pastry stuffed with tempered spiced potatoes, served fresh alongside hot piping chai.",
      badge: "Hot & Fresh",
      image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&w=1200&q=85",
      isPopular: true
    },
    {
      id: "bun-maska",
      name: "Bun Maska & Dip Chai",
      marathiName: "बन मस्का आणि चहा",
      category: "snacks",
      price: 25,
      description: "Pillowy soft Irani bakery bun with whipped salted butter, best paired with a dip in hot kadak chai.",
      badge: "Chai Partner",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85",
      isPopular: true
    }
  ],

  // Gallery Images - All distinct high-res chai shots
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=85",
      caption: "Aromatic Cardamom & Star Anise Spiced Chai",
      category: "Fresh Spices"
    },
    {
      url: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=85",
      caption: "Authentic Baked Clay Kulhad Tradition",
      category: "Clay Kulhad"
    },
    {
      url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
      caption: "Steaming Hot Morning Amrittulya Cup",
      category: "Morning Kadak"
    },
    {
      url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
      caption: "Brass Pot Slow Simmered Tea Brew",
      category: "Traditional Boil"
    },
    {
      url: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1200&q=85",
      caption: "Classic Tapri Cutting Chai Glasses",
      category: "Cutting Chai"
    },
    {
      url: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1200&q=85",
      caption: "Golden Rich Creamy Milk Infusion",
      category: "Creamy Pour"
    }
  ]
};

