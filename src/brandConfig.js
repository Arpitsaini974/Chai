/**
 * UPW Aali Amrittulya Chai — Centralized Brand & Demo Configuration
 * 
 * Re-aligned with official Instagram: @upw_aali_amrittulya_chai
 * - Udaipurwati (UPW), Rajasthan (Near Ghumchakkar)
 * - Signatures: Kesar Gud Chai, Kulhad Kadak Chai, Adrak Elaichi, Irani Chai, Masala Kadak
 * - 100% PURE CHAI ONLY: Har photo aur reel clip sirf aur sirf Chai ki hai.
 * - Added Instagram Reels & Video Showcase section.
 */

export const BRAND_CONFIG = {
  // Brand Identity
  brandName: "UPW Aali Amrittulya Chai",
  townTag: "Udaipurwati (UPW)",
  hindiTagline: "उदयपुरवाटी की मशहूर केसर गुड़ वाली अमृततुल्य चाय",
  tagline: "The Royal Taste of Udaipurwati",
  subTagline: "Famous Kesar Amrittulya Gud (Jaggery) Chai & Kadak Masala Chai, brewed with pure milk and royal spices in brass vessels, served hot in authentic clay kulhads.",
  establishedNote: "Udaipurwati's Favorite Chai Junction",

  // Business Contact & Channels
  verifiedWhatsAppNumber: "", // Explicit placeholder
  instagramHandle: "@upw_aali_amrittulya_chai",
  instagramUrl: "https://www.instagram.com/upw_aali_amrittulya_chai",
  emailContact: "upwaali.amrittulya@demo.com",

  // Location & Timings (Near Ghumchakkar, Udaipurwati)
  shopAddress: {
    line1: "Near Ghumchakkar Chowk, Main Market Road",
    area: "Udaipurwati (UPW), Jhunjhunu District",
    state: "Rajasthan - 333307, India",
    landmark: "Ghumchakkar Circle, Udaipurwati"
  },
  openingHours: {
    weekdays: "6:00 AM – 11:00 PM",
    weekends: "6:00 AM – 11:30 PM",
    statusNote: "Open daily for fresh Kesar Gud & Kadak Chai"
  },
  googleMapsUrl: "https://maps.google.com/?q=Ghumchakkar+Udaipurwati+Rajasthan",

  // Brand Story Highlights
  story: {
    title: "Aapno Udaipurwati, Aapni Amrittulya Chai",
    paragraphs: [
      "In the vibrant heart of Udaipurwati (Rajasthan), 'UPW Aali Amrittulya Chai' has become the favorite gathering point for tea lovers. We celebrate the royal Rajasthani palate with our signature Kesar Gud (Jaggery) Chai, crafted for health, sweetness, and unmatched aroma.",
      "Simmered slowly in traditional heavy brass handis over a steady flame, each batch combines unrefined organic jaggery, crushed fresh ginger, green cardamom, and fragrant royal saffron (Kesar) infused into 100% pure thick buffalo milk.",
      "Served piping hot in fresh baked earthen kulhads at Ghumchakkar Chowk, every cup carries the warmth of desi hospitality and timeless tradition."
    ],
    features: [
      {
        icon: "Flame",
        title: "Signature Kesar Gud Chai",
        desc: "Brewed with pure organic desi jaggery and real saffron strands — natural, healthy, and rich in taste."
      },
      {
        icon: "Sparkles",
        title: "Traditional Brass Handi",
        desc: "Slow-simmered on brass vessels to caramelize the jaggery and lock in the spice fragrance."
      },
      {
        icon: "ShieldCheck",
        title: "100% Pure Buffalo Milk",
        desc: "Rich, creamy unadulterated milk for that authentic thick, velvety Amrittulya texture."
      },
      {
        icon: "Coffee",
        title: "Mitti Ke Desi Kulhad",
        desc: "Fresh baked clay cups that impart an earthy mineral aroma with every hot sip."
      }
    ]
  },

  // Interactive Demo Menu Categories (100% Pure Chai)
  categories: [
    { id: "all", label: "All Chai Flavors" },
    { id: "gud-chai", label: "Kesar & Gud Special" },
    { id: "kadak-chai", label: "Specialty Kadak Chai" },
    { id: "kulhad-chai", label: "Desi Kulhad Chai" }
  ],

  // 100% Chai Items Only in 4K Ultra-HD
  menuItems: [
    {
      id: "kesar-gud-chai",
      name: "Special Kesar Gud Chai",
      hindiName: "स्पेशल केसर गुड़ की चाय (शॉपी स्पेशल)",
      category: "gud-chai",
      price: 25,
      description: "Our #1 Instagram bestseller! Organic desi jaggery boiled with saffron strands, fresh ginger, and cardamom in pure milk.",
      badge: "Shop Special ⭐",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=2560&q=95",
      isPopular: true
    },
    {
      id: "amrittulya-gud-chai",
      name: "Amrittulya Desi Gud Chai",
      hindiName: "अमृततुल्य देशी गुड़ चाय",
      category: "gud-chai",
      price: 20,
      description: "Sugar-free natural sweet goodness brewed with unrefined desi gur and crushed spicy ginger.",
      badge: "Healthy & Kadak",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2560&q=95",
      isPopular: true
    },
    {
      id: "kulhad-masala-chai",
      name: "UPW Kulhad Masala Chai",
      hindiName: "उदयपुरवाटी कुल्हड़ मसाला चाय",
      category: "kulhad-chai",
      price: 25,
      description: "Served hot in baked earthen clay kulhads infused with our secret 7-spice hand-pounded masala blend.",
      badge: "Kulhad Hit",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=2560&q=95",
      isPopular: true
    },
    {
      id: "adrak-elaichi-chai",
      name: "Adrak Elaichi Kadak Chai",
      hindiName: "अदरक इलायची कड़क चाय",
      category: "kadak-chai",
      price: 20,
      description: "Hand-crushed juicy fiery ginger and green cardamom pods boiled into thick creamy milk.",
      badge: "Morning Favorite",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=2560&q=95",
      isPopular: true
    },
    {
      id: "royal-zafrani-chai",
      name: "Royal Zafrani Chai",
      hindiName: "शाही जाफरानी चाय",
      category: "gud-chai",
      price: 30,
      description: "Infused with Kashmiri saffron threads, crushed green cardamom, and slow caramelized creamy milk.",
      badge: "Royal Blend",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=2560&q=95",
      isPopular: true
    },
    {
      id: "irani-dum-chai",
      name: "Irani Dum Chai",
      hindiName: "इरानी दम चाय (गाढ़ी मलाईदार)",
      category: "kadak-chai",
      price: 25,
      description: "Slow dum brewed tea poured with rich condensed malai on top for that velvety rich texture.",
      badge: "Malai Special",
      image: "https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95",
      isPopular: true
    },
    {
      id: "cutting-chai",
      name: "Tapri Cutting Chai",
      hindiName: "कटिंग चाय (क्लासिक)",
      category: "kadak-chai",
      price: 15,
      description: "The classic brisk half-glass kadak chai with a sweet, invigorating energy boost.",
      badge: "Daily Essential",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=2560&q=95",
      isPopular: false
    },
    {
      id: "thandai-spiced-chai",
      name: "Rajwadi Special Kulhad Chai",
      hindiName: "रजवाड़ी स्पेशल कुल्हड़ चाय",
      category: "kulhad-chai",
      price: 30,
      description: "Traditional Rajasthani rajwadi chai prepared with aromatic herbs, whole spices in clay mitti kulhad.",
      badge: "Rajwadi Hit",
      image: "https://images.pexels.com/photos/5947068/pexels-photo-5947068.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95",
      isPopular: true
    }
  ],

  // Instagram Chai Reels & Video Clips Showcase
  reels: [
    {
      id: 1,
      title: "Boiling Kesar Gud Chai in Brass Handi",
      hindiTitle: "घूमचक्कर सर्किल पर पीतल की हांडी में उबलती चाय",
      views: "18.4K",
      likes: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=95",
      tag: "#KesarGudChai",
      instagramUrl: "https://www.instagram.com/upw_aali_amrittulya_chai"
    },
    {
      id: 2,
      title: "Hot Chai Pour into Earthen Kulhad",
      hindiTitle: "मिट्टी के कुल्हड़ में गरमागरम अमृततुल्य चाय की धार",
      views: "24.9K",
      likes: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=95",
      tag: "#KulhadChai",
      instagramUrl: "https://www.instagram.com/upw_aali_amrittulya_chai"
    },
    {
      id: 3,
      title: "Fresh Hand-Crushed Adrak & Elaichi Boil",
      hindiTitle: "ताज़ा कुटी हुई अदरक और इलायची की महक",
      views: "15.7K",
      likes: "1.4K",
      thumbnail: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=95",
      tag: "#KadakChai",
      instagramUrl: "https://www.instagram.com/upw_aali_amrittulya_chai"
    },
    {
      id: 4,
      title: "Classic Tapri Cutting Chai Pour",
      hindiTitle: "उदयपुरवाटी की मशहूर कटिंग चाय की चुस्की",
      views: "31.2K",
      likes: "2.8K",
      thumbnail: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1200&q=95",
      tag: "#TapriVibes",
      instagramUrl: "https://www.instagram.com/upw_aali_amrittulya_chai"
    }
  ],

  // 4K Ultra-HD Gallery Images (100% Chai Only)
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=2560&q=95",
      caption: "Kesar & Gud Clay Kulhad Magic",
      category: "Shop Signature"
    },
    {
      url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=2560&q=95",
      caption: "Boiling Kadak Jaggery Chai in Brass Handi",
      category: "Daily Brew"
    },
    {
      url: "https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95",
      caption: "Pure Creamy Buffalo Milk Tea Pour",
      category: "Creamy Pour"
    },
    {
      url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=2560&q=95",
      caption: "Slow Simmering Over Gentle Flame",
      category: "Slow Boiled"
    },
    {
      url: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=2560&q=95",
      caption: "Ghumchakkar Tapri Cutting Chai Glasses",
      category: "Tapri Culture"
    },
    {
      url: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=2560&q=95",
      caption: "Pure Creamy Milk & Saffron Infusion",
      category: "Pure Milk"
    },
    {
      url: "https://images.pexels.com/photos/5947068/pexels-photo-5947068.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95",
      caption: "Rich Earthen Aroma & Steaming Cups",
      category: "Aromatic Brew"
    },
    {
      url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=2560&q=95",
      caption: "Morning Chai Ritual in Earthen Pots",
      category: "Morning Kadak"
    },
    {
      url: "https://images.pexels.com/photos/4051649/pexels-photo-4051649.jpeg?auto=compress&cs=tinysrgb&w=2560&q=95",
      caption: "Artisanal Pour with Rich Thick Froth",
      category: "Artisanal Pour"
    }
  ]
};
