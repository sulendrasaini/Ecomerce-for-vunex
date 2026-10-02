export const categories = [
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    tagline: 'Refined modern essentials & seasonal collections',
    itemCount: '1,420+ items',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Men', 'Women', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'T-Shirts', 'Trousers'],
    featured: true
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    tagline: 'High-fidelity audio, wearables & smart gear',
    itemCount: '890+ items',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Headphones', 'Smartwatches', 'Bluetooth Speakers', 'Earbuds', 'Accessories'],
    featured: true
  },
  {
    id: 'beauty',
    name: 'Beauty',
    slug: 'beauty',
    tagline: 'Organic skincare, botanical serums & fragrances',
    itemCount: '640+ items',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Face Serums', 'Fragrances', 'Cleansers', 'Moisturizers', 'Grooming'],
    featured: true
  },
  {
    id: 'footwear',
    name: 'Footwear',
    slug: 'footwear',
    tagline: 'Performance runners, lifestyle sneakers & slip-ons',
    itemCount: '780+ items',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Running Shoes', 'Lifestyle Sneakers', 'Formal Shoes', 'Sandals & Slides'],
    featured: true
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    slug: 'home-decor',
    tagline: 'Minimalist lighting, artisanal ceramics & furnishings',
    itemCount: '520+ items',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Table Lamps', 'Vases & Planters', 'Wall Art', 'Cushions & Throws', 'Kitchen Tech'],
    featured: true
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    tagline: 'Timepieces, luxury eyewear, leather goods & bags',
    itemCount: '950+ items',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Watches', 'Sunglasses', 'Leather Bags', 'Wallets', 'Jewelry'],
    featured: true
  },
  {
    id: 'fitness',
    name: 'Fitness',
    slug: 'fitness',
    tagline: 'Active training apparel, yoga mats & gear',
    itemCount: '410+ items',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Yoga Mats', 'Resistance Bands', 'Activewear', 'Water Bottles', 'Gym Duffels'],
    featured: true
  },
  {
    id: 'appliances',
    name: 'Appliances',
    slug: 'appliances',
    tagline: 'Smart home gadgets, espresso makers & air purifiers',
    itemCount: '320+ items',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Coffee Makers', 'Air Purifiers', 'Garment Steamers', 'Personal Care Tech'],
    featured: false
  }
];

export const megaMenuGroups = [
  {
    title: 'Fashion & Apparel',
    links: [
      { name: 'Oversized Hoodies', slug: 'fashion', query: 'Hoodies' },
      { name: 'Minimal Cotton T-Shirts', slug: 'fashion', query: 'T-Shirts' },
      { name: 'Tailored Jackets', slug: 'fashion', query: 'Jackets' },
      { name: 'Relaxed Trousers', slug: 'fashion', query: 'Trousers' },
      { name: 'Activewear Sets', slug: 'fitness', query: 'Activewear' },
    ]
  },
  {
    title: 'Audio & Tech',
    links: [
      { name: 'Over-Ear Headphones', slug: 'electronics', query: 'Headphones' },
      { name: 'Smart Fitness Watches', slug: 'electronics', query: 'Watch' },
      { name: 'True Wireless Earbuds', slug: 'electronics', query: 'Earbuds' },
      { name: 'Portable Speakers', slug: 'electronics', query: 'Speaker' },
      { name: 'Fast Wireless Chargers', slug: 'electronics', query: 'Charger' },
    ]
  },
  {
    title: 'Footwear & Bags',
    links: [
      { name: 'Air Cushion Running Shoes', slug: 'footwear', query: 'Running' },
      { name: 'Minimalist Leather Sneakers', slug: 'footwear', query: 'Sneakers' },
      { name: 'Textured Shoulder Bags', slug: 'accessories', query: 'Bag' },
      { name: 'Travel Duffel Bags', slug: 'accessories', query: 'Duffel' },
      { name: 'Cardholders & Wallets', slug: 'accessories', query: 'Wallet' },
    ]
  },
  {
    title: 'Beauty & Home',
    links: [
      { name: 'Hydrating Face Serums', slug: 'beauty', query: 'Serum' },
      { name: 'Artisan Eau de Parfum', slug: 'beauty', query: 'Parfum' },
      { name: 'Modern Table Lamps', slug: 'home-decor', query: 'Lamp' },
      { name: 'Ceramic Flower Vases', slug: 'home-decor', query: 'Vase' },
      { name: 'Insulated Flasks', slug: 'fitness', query: 'Bottle' },
    ]
  }
];
