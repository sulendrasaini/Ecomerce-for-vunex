export const products = [
  // 1. Fashion
  {
    id: 'prod-01',
    brand: 'NovaTrend Essentials',
    title: 'Essential Heavyweight Oversized Hoodie',
    category: 'fashion',
    subcategory: 'Hoodies & Sweatshirts',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80'
    ],
    price: 59.99,
    mrp: 89.99,
    discount: 33,
    rating: 4.9,
    reviewCount: 326,
    stock: 24,
    badge: 'New',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Oatmeal Beige', hex: '#E6DEC9' },
      { name: 'Pitch Black', hex: '#1C1C1C' },
      { name: 'Heather Gray', hex: '#A3A3A3' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Crafted from 480 GSM organic french terry cotton. Features dropped shoulders, a double-layered hood, and ribbed hems for an effortless silhouette.',
    specifications: {
      'Material': '100% Organic Cotton',
      'Weight': '480 GSM Heavyweight',
      'Fit': 'Relaxed Oversized Fit',
      'Care': 'Machine wash cold, air dry'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-02',
    brand: 'Nike',
    title: 'Air Max 270 React Atmosphere Shoes',
    category: 'footwear',
    subcategory: 'Running Shoes',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
    ],
    price: 129.99,
    mrp: 165.00,
    discount: 21,
    rating: 4.8,
    reviewCount: 512,
    stock: 18,
    badge: '-21%',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Pure White & Orange', hex: '#FFFFFF' },
      { name: 'Triple Black', hex: '#111111' },
      { name: 'Wolf Grey', hex: '#9E9E9E' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    description: 'Nike Air Max 270 brings you the largest Max Air unit yet for unrivaled all-day comfort. Woven and synthetic fabric on the upper provides a lightweight fit and airy feel.',
    specifications: {
      'Cushioning': '270 Max Air Heel Unit',
      'Sole': 'Durable Rubber Waffle Pattern',
      'Upper': 'Breathable Engineered Mesh',
      'Weight': '310 grams'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-03',
    brand: 'Sony',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    category: 'electronics',
    subcategory: 'Headphones',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80'
    ],
    price: 349.99,
    mrp: 399.99,
    discount: 12,
    rating: 4.9,
    reviewCount: 840,
    stock: 35,
    badge: 'Bestseller',
    delivery: 'Express delivery tomorrow',
    colors: [
      { name: 'Midnight Black', hex: '#121212' },
      { name: 'Silver Sand', hex: '#E5E4E2' },
      { name: 'Midnight Blue', hex: '#1C2E4A' }
    ],
    sizes: ['Standard'],
    description: 'Industry-leading noise cancellation optimized automatically based on wearing conditions and environment. Powered by two processors and eight microphones for crystal clear calling.',
    specifications: {
      'Battery Life': 'Up to 30 Hours with ANC',
      'Drivers': '30mm Precision Engineered',
      'Bluetooth': 'v5.2 with LDAC & Multipoint',
      'Fast Charge': '3 mins = 3 hours playback'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-04',
    brand: 'Apple',
    title: 'Apple Watch Series 9 GPS + Cellular 45mm',
    category: 'electronics',
    subcategory: 'Smartwatches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80'
    ],
    price: 399.00,
    mrp: 449.00,
    discount: 11,
    rating: 4.9,
    reviewCount: 620,
    stock: 15,
    badge: '-11%',
    delivery: 'Free delivery in 2 days',
    colors: [
      { name: 'Midnight Aluminum', hex: '#1B2430' },
      { name: 'Starlight', hex: '#F0ECE1' },
      { name: 'Product Red', hex: '#E50914' }
    ],
    sizes: ['41mm', '45mm'],
    description: 'Powerful S9 SiP chip with revolutionary double-tap gesture. Brighter Always-On Retina display, advanced health sensors including ECG, Blood Oxygen, and crash detection.',
    specifications: {
      'Processor': 'Apple S9 SiP 64-bit dual-core',
      'Display': '2000 nits Always-On OLED',
      'Water Resistance': '50 meters swimproof',
      'Battery': '18 hours typical, 36h low power'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-05',
    brand: 'HydroLife',
    title: 'Vacuum Insulated Stainless Steel Bottle 750ml',
    category: 'fitness',
    subcategory: 'Water Bottles',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=900&q=80'
    ],
    price: 24.99,
    mrp: 34.99,
    discount: 28,
    rating: 4.7,
    reviewCount: 198,
    stock: 50,
    badge: 'Popular',
    delivery: 'Free delivery by tomorrow',
    colors: [
      { name: 'Matte Obsidian', hex: '#232323' },
      { name: 'Alpine White', hex: '#FAFAFA' },
      { name: 'Terra Cotta', hex: '#E07A5F' }
    ],
    sizes: ['500ml', '750ml', '1000ml'],
    description: 'Double-wall vacuum insulation keeps drinks ice cold for 24 hours or piping hot for 12 hours. Made of pro-grade 18/8 stainless steel with a sweat-free powder coat.',
    specifications: {
      'Material': '18/8 Pro-Grade Stainless Steel',
      'Insulation': 'TempShield Double-Wall Vacuum',
      'Lid': 'Leakproof Flex Cap with Handle',
      'BPA Free': 'Yes'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-06',
    brand: 'Ray-Ban',
    title: 'Classic Polarized Aviator Sunglasses',
    category: 'accessories',
    subcategory: 'Sunglasses',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80'
    ],
    price: 89.99,
    mrp: 139.99,
    discount: 36,
    rating: 4.8,
    reviewCount: 412,
    stock: 22,
    badge: '-36%',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Gold & Green Polarized', hex: '#D4AF37' },
      { name: 'Gunmetal Gray', hex: '#53565A' },
      { name: 'Matte Black', hex: '#1C1C1C' }
    ],
    sizes: ['Standard (58mm)', 'Large (62mm)'],
    description: 'Timeless tear-drop shape designed for optimal clarity and UV400 eye protection. Lightweight metal frame with soft silicon nose pads for effortless wearing all day.',
    specifications: {
      'Frame Material': 'Corrosion-Resistant Monel Alloy',
      'Lens Type': 'Polarized G-15 Crystal Glass',
      'UV Protection': '100% UVA/UVB Filter',
      'Warranty': '2 Year International'
    },
    featured: true,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-07',
    brand: 'Zara',
    title: 'Minimalist Relaxed Fit Linen Blend Shirt',
    category: 'fashion',
    subcategory: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    price: 45.00,
    mrp: 65.00,
    discount: 30,
    rating: 4.6,
    reviewCount: 142,
    stock: 28,
    badge: 'Trending',
    delivery: 'Delivery in 3 days',
    colors: [
      { name: 'Natural Sand', hex: '#D8CBB5' },
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Sage Green', hex: '#8A9A86' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Breezy European linen and combed cotton blend. Perfect for smart casual layering during warm summer days with a clean camp collar.',
    specifications: {
      'Composition': '55% Linen, 45% Cotton',
      'Collar': 'Camp / Cuban Spread Collar',
      'Buttons': 'Natural Horn Look',
      'Origin': 'Sustainably Crafted'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-08',
    brand: 'AromaBotanica',
    title: 'Hydrating Botanical Hyaluronic Face Serum 50ml',
    category: 'beauty',
    subcategory: 'Face Serums',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608248597359-0a6711c2174c?auto=format&fit=crop&w=900&q=80'
    ],
    price: 38.50,
    mrp: 52.00,
    discount: 26,
    rating: 4.9,
    reviewCount: 284,
    stock: 45,
    badge: 'Staff Pick',
    delivery: 'Free shipping on eligible orders',
    colors: [
      { name: 'Clear Dropper Bottle', hex: '#F4ECE1' }
    ],
    sizes: ['30ml', '50ml'],
    description: 'Triple-weight hyaluronic acid deeply penetrates epidermal layers to lock in moisture, plump fine lines, and restore glass-skin glow.',
    specifications: {
      'Key Actives': '2% Multi-Molecular HA + Niacinamide',
      'Skin Type': 'All Skin Types & Sensitive',
      'Formulation': 'Oil-free, fragrance-free',
      'Volume': '50ml Dropper Bottle'
    },
    featured: true,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-09',
    brand: 'Lumiere Atelier',
    title: 'Nordic Sculptural Ceramic Table Lamp',
    category: 'home-decor',
    subcategory: 'Table Lamps',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
    ],
    price: 84.00,
    mrp: 120.00,
    discount: 30,
    rating: 4.8,
    reviewCount: 96,
    stock: 12,
    badge: 'Artisanal',
    delivery: 'Delivered in 4 business days',
    colors: [
      { name: 'Chalk White', hex: '#EDE8E1' },
      { name: 'Terracotta Clay', hex: '#C26D53' }
    ],
    sizes: ['Medium 14"', 'Large 18"'],
    description: 'Hand-thrown stoneware base with textured tactile glaze. Comes with an organic linen lampshade casting soft, ambient warm light.',
    specifications: {
      'Base': 'Handcrafted Ceramic Stoneware',
      'Shade': '100% Unbleached Natural Linen',
      'Bulb Socket': 'Standard E26 / LED compatible',
      'Cord': '6-foot woven fabric cord with dimmer'
    },
    featured: true,
    bestseller: false,
    trending: false,
    deal: true
  },
  {
    id: 'prod-10',
    brand: 'Maison Noir',
    title: 'Santal & Amberwood Eau De Parfum 100ml',
    category: 'beauty',
    subcategory: 'Fragrances',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80'
    ],
    price: 95.00,
    mrp: 130.00,
    discount: 27,
    rating: 4.9,
    reviewCount: 310,
    stock: 20,
    badge: 'Luxury',
    delivery: 'Free overnight delivery',
    colors: [
      { name: 'Smoked Glass', hex: '#2B2625' }
    ],
    sizes: ['50ml', '100ml'],
    description: 'An intoxicating blend of creamy Australian sandalwood, smoked cardamom, vetiver, and warm amber resin with long-lasting sillage.',
    specifications: {
      'Concentration': 'Eau de Parfum (22% fragrance oil)',
      'Top Notes': 'Cardamom, Violet Leaves, Papyrus',
      'Heart Notes': 'Iris, Cedarwood, Amber',
      'Base Notes': 'Sandalwood, Leather accord'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-11',
    brand: 'Bose',
    title: 'Bose SoundLink Flex Bluetooth Speaker',
    category: 'electronics',
    subcategory: 'Bluetooth Speakers',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80'
    ],
    price: 149.00,
    mrp: 179.00,
    discount: 17,
    rating: 4.8,
    reviewCount: 472,
    stock: 40,
    badge: 'IP67 Waterproof',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Stone Blue', hex: '#4A6984' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'White Smoke', hex: '#F0F0F0' }
    ],
    sizes: ['Compact'],
    description: 'Clear, deep audio and powerful bass wherever life takes you. PositionIQ technology automatically optimizes sound orientation.',
    specifications: {
      'Battery': 'Up to 12 hours per charge',
      'Waterproof': 'IP67 dust & waterproof, it floats',
      'Connectivity': 'Bluetooth 5.1 with SimpleSync',
      'Body': 'Rugged silicone exterior with steel grille'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-12',
    brand: 'Bellroy Atelier',
    title: 'Textured Leather Minimalist Travel Duffel',
    category: 'accessories',
    subcategory: 'Leather Bags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80'
    ],
    price: 185.00,
    mrp: 240.00,
    discount: 23,
    rating: 4.8,
    reviewCount: 165,
    stock: 14,
    badge: 'Crafted Leather',
    delivery: 'Free express shipping',
    colors: [
      { name: 'Cognac Brown', hex: '#7A3E1D' },
      { name: 'Saddle Tan', hex: '#B8860B' },
      { name: 'Charcoal Black', hex: '#262626' }
    ],
    sizes: ['38L Weekend', '48L Travel'],
    description: 'Vegetable-tanned full grain leather with water-resistant nylon lining. Dedicated padded 16-inch laptop sleeve and shoe compartment.',
    specifications: {
      'Capacity': '38 Liters',
      'Material': 'Full Grain Italian Cowhide',
      'Hardware': 'Brushed Gunmetal Solid Brass',
      'Shoulder Strap': 'Padded Detachable Ergonomic'
    },
    featured: true,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-13',
    brand: 'Nike',
    title: 'Nike Sportswear Tech Fleece Windrunner Hoodie',
    category: 'fashion',
    subcategory: 'Jackets & Coats',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80'
    ],
    price: 115.00,
    mrp: 145.00,
    discount: 20,
    rating: 4.9,
    reviewCount: 420,
    stock: 30,
    badge: '-20%',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Heather Grey & Black', hex: '#808080' },
      { name: 'All Black', hex: '#111111' },
      { name: 'Khaki Stone', hex: '#A39882' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Smooth on both sides, Tech Fleece offers lightweight warmth without extra bulk. Distinctive taped chevron design lines provide signature styling.',
    specifications: {
      'Fabric': '66% Cotton, 34% Polyester',
      'Pockets': 'Zippered Sleeve & Kangaroo Pockets',
      'Fit': 'Athletic Standard Fit',
      'Hood': '4-panel ergonomic contour hood'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-14',
    brand: 'Fossil',
    title: 'The Minimalist Slim Three-Hand Brown Leather Watch',
    category: 'accessories',
    subcategory: 'Watches',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'
    ],
    price: 79.99,
    mrp: 125.00,
    discount: 36,
    rating: 4.7,
    reviewCount: 230,
    stock: 25,
    badge: 'Top Pick',
    delivery: 'Free delivery in 2 days',
    colors: [
      { name: 'Amber Brown Leather', hex: '#633B1E' },
      { name: 'Silver Mesh', hex: '#C0C0C0' }
    ],
    sizes: ['42mm Case'],
    description: 'An understated luxury design featuring clean indices, an ultra-thin stainless steel case, and genuine supple leather strap.',
    specifications: {
      'Case Size': '42mm x 8mm Slim Profile',
      'Movement': 'Japanese Quartz Analog',
      'Water Resistance': '5 ATM / 50 Meters',
      'Band Width': '22mm Quick-Release Interchangeable'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-15',
    brand: 'Adidas',
    title: 'Ultraboost Light Performance Running Shoes',
    category: 'footwear',
    subcategory: 'Running Shoes',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80'
    ],
    price: 159.00,
    mrp: 190.00,
    discount: 16,
    rating: 4.8,
    reviewCount: 389,
    stock: 20,
    badge: 'High Energy Return',
    delivery: 'Free shipping worldwide',
    colors: [
      { name: 'Core Black / White', hex: '#1F1F1F' },
      { name: 'Cloud White', hex: '#FAFAFA' },
      { name: 'Solar Red Accent', hex: '#FF3B30' }
    ],
    sizes: ['US 7.5', 'US 8.5', 'US 9.5', 'US 10.5', 'US 11.5'],
    description: 'Experience epic energy return with Light BOOST material, 30% lighter than previous generations. PRIMEKNIT+ upper hugs feet like a glove.',
    specifications: {
      'Midsole': 'Light BOOST Foam Cushioning',
      'Drop': '10mm (Heel: 22mm / Forefoot: 12mm)',
      'Outsole': 'Continental Better Rubber',
      'Eco': 'Made partly with recycled materials'
    },
    featured: false,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-16',
    brand: 'Dyson',
    title: 'Dyson Supersonic Ionic Hair Dryer Professional',
    category: 'appliances',
    subcategory: 'Personal Care Tech',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=900&q=80'
    ],
    price: 379.99,
    mrp: 429.99,
    discount: 12,
    rating: 4.9,
    reviewCount: 680,
    stock: 10,
    badge: 'Pro Beauty',
    delivery: 'Express overnight delivery',
    colors: [
      { name: 'Iron & Copper', hex: '#A85A32' },
      { name: 'Fuchsia Pink', hex: '#D10068' }
    ],
    sizes: ['Standard Set'],
    description: 'Fast drying with no extreme heat. Engineered for different hair types with 5 magnetic styling attachments including the Flyaway finisher.',
    specifications: {
      'Motor': 'Dyson Digital V9 (110,000 RPM)',
      'Heat Control': 'Measures air temp 40 times/sec',
      'Power': '1600 Watts',
      'Attachments': '5 Magnetic Nozzles Included'
    },
    featured: true,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-17',
    brand: 'Zenith Active',
    title: 'High-Density Non-Slip Alignment Yoga Mat 6mm',
    category: 'fitness',
    subcategory: 'Yoga Mats',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
    ],
    price: 48.00,
    mrp: 68.00,
    discount: 29,
    rating: 4.8,
    reviewCount: 155,
    stock: 35,
    badge: 'Eco Friendly',
    delivery: 'Free delivery by Monday',
    colors: [
      { name: 'Forest Moss', hex: '#4F6352' },
      { name: 'Dusty Rose', hex: '#C79D9D' },
      { name: 'Deep Teal', hex: '#1C4952' }
    ],
    sizes: ['72" x 26" x 6mm'],
    description: 'Crafted from sustainable natural tree rubber and polyurethane top layer for warrior-like grip even during sweaty hot yoga sessions.',
    specifications: {
      'Thickness': '6mm High Cushion Cushioning',
      'Weight': '2.4 kg Stable Base',
      'Features': 'Laser Etched Body Alignment Lines',
      'Material': '100% Biodegradable Tree Rubber'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-18',
    brand: 'Artisan Living',
    title: 'Handcrafted Fluted Ceramic Floral Vase',
    category: 'home-decor',
    subcategory: 'Vases & Planters',
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=80'
    ],
    price: 36.00,
    mrp: 50.00,
    discount: 28,
    rating: 4.7,
    reviewCount: 88,
    stock: 19,
    badge: 'Handmade',
    delivery: 'Delivery in 3 business days',
    colors: [
      { name: 'Matte Cream', hex: '#F5F2EB' },
      { name: 'Unglazed Ochre', hex: '#C68B59' }
    ],
    sizes: ['Small 8"', 'Large 12"'],
    description: 'Organic curved silhouettes and ribbed surface detail make this ceramic vessel a sculptural statement piece on mantels and coffee tables.',
    specifications: {
      'Finish': 'Matte Chalk Glaze',
      'Waterproof': '100% Glazed Interior',
      'Dimensions': '10" H x 6" W',
      'Care': 'Hand wash recommended'
    },
    featured: false,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-19',
    brand: 'Sony',
    title: 'Sony WF-1000XM5 True Wireless Noise Canceling Earbuds',
    category: 'electronics',
    subcategory: 'Earbuds',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80'
    ],
    price: 248.00,
    mrp: 299.99,
    discount: 17,
    rating: 4.9,
    reviewCount: 395,
    stock: 22,
    badge: 'Deal of Day',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Piano Black', hex: '#111111' },
      { name: 'Platinum Silver', hex: '#DCDCDC' }
    ],
    sizes: ['Includes 4 Tip Sizes (XS, S, M, L)'],
    description: 'Dynamic Driver X delivers wide frequency reproduction and rich vocals. Features bone conduction voice sensors and Qi wireless charging.',
    specifications: {
      'Battery': '8 hours (24 with case)',
      'Water Rating': 'IPX4 Splash Resistant',
      'Codecs': 'LDAC, AAC, SBC, LC3',
      'Weight': '5.9g per bud'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-20',
    brand: 'Calvin Klein',
    title: 'Modern Cotton Lounge Track Pants',
    category: 'fashion',
    subcategory: 'Trousers',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80'
    ],
    price: 49.50,
    mrp: 70.00,
    discount: 29,
    rating: 4.7,
    reviewCount: 180,
    stock: 40,
    badge: 'Soft Touch',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Heather Grey', hex: '#9E9E9E' },
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Jet Black', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Ultra-soft pima cotton knit joggers with iconic repeating jacquard waistband. Tapered legs with ribbed ankle cuffs for casual lounging.',
    specifications: {
      'Composition': '91% Pima Cotton, 9% Elastane',
      'Waistband': 'Elasticized Logo Band',
      'Pockets': 'Dual side slip pockets',
      'Wash': 'Machine washable'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-21',
    brand: 'Chanel',
    title: 'Hydra Beauty Micro Crème Fortifying Hydrator',
    category: 'beauty',
    subcategory: 'Moisturizers',
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'
    ],
    price: 110.00,
    mrp: 135.00,
    discount: 18,
    rating: 4.9,
    reviewCount: 220,
    stock: 14,
    badge: 'Iconic',
    delivery: 'Complimentary luxury gift box',
    colors: [
      { name: 'Signature Jar', hex: '#0B2046' }
    ],
    sizes: ['50g / 1.7 oz'],
    description: 'Infused with Camellia micro-droplets that burst upon skin contact, providing continuous 24-hour hydration and protective antioxidant barrier.',
    specifications: {
      'Formula': 'Camellia Alba OFA micro-droplets',
      'Texture': 'Velvety cream transforms into water',
      'Skin Concern': 'Dryness, loss of radiance',
      'Made In': 'France'
    },
    featured: false,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-22',
    brand: 'Nike',
    title: 'Nike Air Force 1 07 Triple White Edition',
    category: 'footwear',
    subcategory: 'Lifestyle Sneakers',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80'
    ],
    price: 115.00,
    mrp: 130.00,
    discount: 12,
    rating: 4.9,
    reviewCount: 1250,
    stock: 45,
    badge: 'Timeless Classic',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Triple White', hex: '#FFFFFF' },
      { name: 'Black on Black', hex: '#111111' }
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    description: 'The radiance lives on with crisp pristine stitched overlays, pristine leather finish, and encapsulated Air-Sole cushioning in the chunky rubber cupsole.',
    specifications: {
      'Upper': '100% Genuine Crisp Leather',
      'Midsole': 'Encapsulated Air-Sole Unit',
      'Perforations': 'Toe box airflow vents',
      'Collar': 'Padded low-cut comfort lining'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-23',
    brand: 'Marshall',
    title: 'Marshall Stanmore III Bluetooth Home Speaker',
    category: 'electronics',
    subcategory: 'Bluetooth Speakers',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80'
    ],
    price: 329.99,
    mrp: 379.99,
    discount: 13,
    rating: 4.9,
    reviewCount: 340,
    stock: 16,
    badge: 'Rock Heritage',
    delivery: 'Free express shipping',
    colors: [
      { name: 'Vintage Black & Brass', hex: '#2B2B2B' },
      { name: 'Cream White', hex: '#ECE7DD' },
      { name: 'Brown Leatherette', hex: '#5E3B24' }
    ],
    sizes: ['Stanmore III 80W'],
    description: 'Delivers expansive room-filling Marshall signature sound re-engineered for immersive stereo imaging. Features vintage brass control knobs on brushed metal.',
    specifications: {
      'Amplification': '50W Class D Woofer + two 15W Tweeters',
      'Inputs': 'Bluetooth 5.2, 3.5mm AUX, RCA',
      'App Control': 'Marshall Bluetooth EQ custom tuning',
      'Eco Design': '70% Recycled Plastic Construction'
    },
    featured: true,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-24',
    brand: 'Zara',
    title: 'Tailored Double-Breasted Wool Blend Blazer',
    category: 'fashion',
    subcategory: 'Jackets & Coats',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    price: 139.00,
    mrp: 189.00,
    discount: 26,
    rating: 4.7,
    reviewCount: 110,
    stock: 15,
    badge: 'Editorial',
    delivery: 'Delivery in 3 days',
    colors: [
      { name: 'Charcoal Herringbone', hex: '#3B3B3B' },
      { name: 'Camel Tan', hex: '#C19A6B' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    description: 'Structured silhouette tailored with peak lapels, flap pockets, tortoiseshell buttons, and silky cupro interior lining.',
    specifications: {
      'Outer Fabric': '60% Wool, 38% Viscose, 2% Elastane',
      'Lining': '100% Cupro Breathable Twill',
      'Buttons': 'Functional sleeve horn buttons',
      'Vents': 'Dual rear comfort vents'
    },
    featured: true,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-25',
    brand: 'Nespresso',
    title: 'VertuoPlus Coffee and Espresso Machine',
    category: 'appliances',
    subcategory: 'Coffee Makers',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80'
    ],
    price: 169.00,
    mrp: 209.00,
    discount: 19,
    rating: 4.8,
    reviewCount: 540,
    stock: 25,
    badge: 'Barista Quality',
    delivery: 'Includes welcome coffee sampler',
    colors: [
      { name: 'Matte Titan Grey', hex: '#666666' },
      { name: 'Gloss Red', hex: '#B22222' }
    ],
    sizes: ['Single Cup to Alto 14oz'],
    description: 'Centrifusion extraction technology spins capsules at 7,000 rotations per minute to brew silky crema-rich barista coffee with one single button.',
    specifications: {
      'Extraction': 'Centrifusion barcode recognition',
      'Heat Up Time': '20-25 seconds fast start',
      'Water Tank': '60 oz multi-positional reservoir',
      'Auto-Off': 'Energy saving shutoff after 9 mins'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-26',
    brand: 'Ray-Ban',
    title: 'Wayfarer Classic Polarized Black Sunglasses',
    category: 'accessories',
    subcategory: 'Sunglasses',
    images: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80'
    ],
    price: 99.00,
    mrp: 145.00,
    discount: 31,
    rating: 4.9,
    reviewCount: 890,
    stock: 30,
    badge: '-31%',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Gloss Black', hex: '#000000' },
      { name: 'Havana Tortoise', hex: '#583D28' }
    ],
    sizes: ['50mm Standard', '54mm Large'],
    description: 'Since its design in 1952, the Wayfarer gained popularity among celebrities, musicians, and artists, symbolizing youth rebellion and eternal style.',
    specifications: {
      'Frame': 'Handcrafted Italian Acetate',
      'Lens': 'Polarized Mineral Green',
      'Protection': '100% UV Protection Category 3',
      'Case': 'Leather carry case with microfibre cloth'
    },
    featured: false,
    bestseller: true,
    trending: false,
    deal: true
  },
  {
    id: 'prod-27',
    brand: 'NovaTrend Atelier',
    title: 'Heavyweight Ribbed Cotton Crewneck Sweater',
    category: 'fashion',
    subcategory: 'Hoodies & Sweatshirts',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80'
    ],
    price: 64.00,
    mrp: 90.00,
    discount: 28,
    rating: 4.8,
    reviewCount: 190,
    stock: 22,
    badge: 'New Arrival',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Off-White Ivory', hex: '#FDFBF7' },
      { name: 'Navy Dusk', hex: '#202636' },
      { name: 'Olive Drab', hex: '#4A5320' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Chunky English rib knit woven from pure combed cotton yarns. Offers cozy breathability without the scratchiness of raw wool.',
    specifications: {
      'Material': '100% Combed Cotton',
      'Knit Gauge': '5GG Chunky Fisherman Stitch',
      'Collar': 'Reinforced ribbed mock crewneck',
      'Fit': 'Contemporary Boxy Cut'
    },
    featured: true,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-28',
    brand: 'Nike',
    title: 'Dunk Low Retro White & Black Panda',
    category: 'footwear',
    subcategory: 'Lifestyle Sneakers',
    images: [
      'https://imgs.search.brave.com/wQmntPc6bHetuJlYfbIJ7AvWUMPV6Q3x2U2vYzNZ-58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1Vmb0FB/T1N3Zld0bXAtd1Ev/cy1sMTYwMC5qcGc',
      'https://imgs.search.brave.com/wQmntPc6bHetuJlYfbIJ7AvWUMPV6Q3x2U2vYzNZ-58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1Vmb0FB/T1N3Zld0bXAtd1Ev/cy1sMTYwMC5qcGc',
    ],
    price: 110.00,
    mrp: 125.00,
    discount: 12,
    rating: 4.8,
    reviewCount: 1420,
    stock: 12,
    badge: 'Trending Now',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Black & White Panda', hex: '#1C1C1C' }
    ],
    sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
    description: 'Created for the hardwood but taken to the streets, the 80s icon returns with crisp leather overlays and original college color blocking.',
    specifications: {
      'Upper': 'Premium Smooth Leather',
      'Tread': 'Pivot circle basketball tread',
      'Foam': 'Lightweight responsive midsole',
      'Tongue': 'Breathable nylon mesh tongue'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-29',
    brand: 'Apple',
    title: 'AirPods Pro 2nd Gen with USB-C Charging Case',
    category: 'electronics',
    subcategory: 'Earbuds',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=900&q=80'
    ],
    price: 199.99,
    mrp: 249.00,
    discount: 20,
    rating: 4.9,
    reviewCount: 940,
    stock: 32,
    badge: '-20%',
    delivery: 'Free overnight delivery',
    colors: [
      { name: 'Gloss White', hex: '#FFFFFF' }
    ],
    sizes: ['4 Ear Tip Pairs Included'],
    description: 'Up to 2x more Active Noise Cancellation than previous generation. Adaptive Audio, Transparency mode, and Personalized Spatial Audio with dynamic head tracking.',
    specifications: {
      'Chip': 'Apple H2 Headphone Chip',
      'Charging': 'USB-C, MagSafe, Apple Watch charger',
      'Battery': 'Up to 6 hours listening (30 hrs with case)',
      'Resistance': 'IP54 dust, sweat, and water resistant'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-30',
    brand: 'The Ordinary',
    title: 'Niacinamide 10% + Zinc 1% Oil Control Serum',
    category: 'beauty',
    subcategory: 'Face Serums',
    images: [
      'https://m.media-amazon.com/images/I/31fybPreDKL._SX342_SY445_QL70_FMwebp_.jpg',
      'https://m.media-amazon.com/images/I/31fybPreDKL._SX342_SY445_QL70_FMwebp_.jpg'
    ],
    price: 14.50,
    mrp: 18.00,
    discount: 19,
    rating: 4.7,
    reviewCount: 2100,
    stock: 80,
    badge: 'Cult Favorite',
    delivery: 'Free shipping on orders over $50',
    colors: [
      { name: 'Dropper Bottle', hex: '#EBEBEB' }
    ],
    sizes: ['30ml', '60ml'],
    description: 'High-strength vitamin and mineral blemish formula with 10% pure Niacinamide to diminish pore congestion and balance visible sebum activity.',
    specifications: {
      'Key Ingredients': 'Niacinamide (Vitamin B3), Zinc PCA',
      'Skin Concern': 'Oiliness, enlarged pores, texture',
      'Vegan & Cruelty-Free': 'Yes',
      'pH Level': '5.00 - 6.50'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-31',
    brand: 'Dyson',
    title: 'Dyson Purifier Hot+Cool Formaldehyde HP09',
    category: 'appliances',
    subcategory: 'Air Purifiers',
    images: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80'
    ],
    price: 649.99,
    mrp: 749.99,
    discount: 13,
    rating: 4.9,
    reviewCount: 160,
    stock: 8,
    badge: 'HEPA H13',
    delivery: 'Free white glove shipping',
    colors: [
      { name: 'White & Gold', hex: '#D4AF37' },
      { name: 'Nickel & Gold', hex: '#8E8E93' }
    ],
    sizes: ['Tower 30"'],
    description: 'Destroys formaldehyde permanently. Captures dust, allergens and viruses with 360-degree sealed HEPA filtration while circulating warm or cool purified air.',
    specifications: {
      'Filtration': 'HEPA H13 captures 99.97% at 0.3 microns',
      'Oscillation': '350 degrees room projection',
      'Smart Tech': 'MyDyson app & voice assistant ready',
      'Sensors': 'Real-time air quality LCD screen'
    },
    featured: true,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-32',
    brand: 'Bellroy',
    title: 'Apex Slim Leather RFID-Protected Bi-Fold Wallet',
    category: 'accessories',
    subcategory: 'Wallets',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
    ],
    price: 69.00,
    mrp: 95.00,
    discount: 27,
    rating: 4.8,
    reviewCount: 310,
    stock: 35,
    badge: 'Slim Carry',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Caramel Tan', hex: '#A75D27' },
      { name: 'Obsidian Black', hex: '#1C1C1C' },
      { name: 'Navy Blue', hex: '#1A2A44' }
    ],
    sizes: ['Holds 4-12 cards + flat bills'],
    description: 'Precision heat-bonded pre-molded leather eliminates bulky stitching. Magnetic coin pouch and quick-pull storage tabs for cards.',
    specifications: {
      'Material': 'Environmentally Certified Leather',
      'Security': 'Integrated RFID signal blocker',
      'Thickness': 'Ultra-slim 8mm loaded',
      'Warranty': '3-year comprehensive warranty'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-33',
    brand: 'Alo Yoga',
    title: 'Airlift High-Waist Performance Workout Leggings',
    category: 'fitness',
    subcategory: 'Activewear',
    images: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
    ],
    price: 98.00,
    mrp: 128.00,
    discount: 23,
    rating: 4.9,
    reviewCount: 450,
    stock: 25,
    badge: 'Studio Best',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Anthracite Dark Grey', hex: '#373A3C' },
      { name: 'Espresso Brown', hex: '#4B3621' },
      { name: 'Bone White', hex: '#EAE6DF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Micro-performance double-knit Airlift fabric smooths, sculpts, and lifts. Breathable 4-way stretch with a sleek second-skin sheen.',
    specifications: {
      'Fabric': 'Signature 82% Polyester, 18% Elastane',
      'Rise': 'Front-smoothing high waistband',
      'Inseam': '7/8 length 24.5"',
      'Moisture Wicking': 'Antimicrobial dry-touch'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-34',
    brand: 'Modern Living',
    title: 'Textured Bouclé Accent Throw Blanket 130x170cm',
    category: 'home-decor',
    subcategory: 'Cushions & Throws',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
    ],
    price: 42.00,
    mrp: 60.00,
    discount: 30,
    rating: 4.7,
    reviewCount: 95,
    stock: 28,
    badge: 'Cozy Season',
    delivery: 'Delivery in 3 days',
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#EDE6DB' },
      { name: 'Charcoal Grey', hex: '#3C3C3C' }
    ],
    sizes: ['130 x 170 cm'],
    description: 'Plush tactile looped bouclé yarn creates cloud-like softness and gentle insulation draped over armchairs, sofas, or bed corners.',
    specifications: {
      'Composition': '80% Recycled Acrylic, 20% Wool',
      'Fringes': 'Hand-tied tassels on both ends',
      'Weight': '850 grams plush weight',
      'Care': 'Gentle wool wash or dry clean'
    },
    featured: false,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-35',
    brand: 'Sony',
    title: 'Sony SRS-XB100 Compact Waterproof Bluetooth Speaker',
    category: 'electronics',
    subcategory: 'Bluetooth Speakers',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80'
    ],
    price: 49.99,
    mrp: 69.99,
    discount: 28,
    rating: 4.7,
    reviewCount: 290,
    stock: 45,
    badge: '-28%',
    delivery: 'Free delivery tomorrow',
    colors: [
      { name: 'Forest Green', hex: '#2F4F4F' },
      { name: 'Light Orange', hex: '#F15A24' },
      { name: 'Classic Black', hex: '#1C1C1C' }
    ],
    sizes: ['Pocket Size (274g)'],
    description: 'Compact body with big, clear bass powered by Sound Diffusion Processor and passive radiator. Includes versatile multi-way carry strap.',
    specifications: {
      'Battery': 'Up to 16 hours continuous play',
      'Durability': 'IP67 waterproof and dustproof with UV coating',
      'Hands-Free': 'Built-in mic with echo cancellation',
      'Charging': 'USB Type-C port'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-36',
    brand: 'Zara',
    title: 'Textured Knit Polo Shirt with Open Collar',
    category: 'fashion',
    subcategory: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    price: 39.90,
    mrp: 55.00,
    discount: 27,
    rating: 4.6,
    reviewCount: 140,
    stock: 24,
    badge: 'Summer Edit',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Ecru Off-White', hex: '#FDFBF7' },
      { name: 'Midnight Navy', hex: '#1B263B' },
      { name: 'Terracotta', hex: '#C2593F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Open Johnny collar polo knit in breathable open-stitch cotton. Elegant vintage European resort feel with ribbed cuffs.',
    specifications: {
      'Material': '100% Combed Slub Cotton',
      'Collar': 'Open Johnny collar without buttons',
      'Hem': 'Straight hem with side vents',
      'Fit': 'Regular relaxed fit'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-37',
    brand: 'New Balance',
    title: 'New Balance 9060 Modern Lifestyle Sneakers',
    category: 'footwear',
    subcategory: 'Lifestyle Sneakers',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80'
    ],
    price: 149.99,
    mrp: 175.00,
    discount: 14,
    rating: 4.9,
    reviewCount: 680,
    stock: 16,
    badge: 'Hype Drop',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Rain Cloud Grey', hex: '#9B9B9B' },
      { name: 'Sea Salt Off-White', hex: '#F5F5DC' }
    ],
    sizes: ['US 8', 'US 9', 'US 9.5', 'US 10', 'US 11'],
    description: 'The 9060 reinterprets familiar elements from the classic 99X series with a warped sensibility inspired by futurist Y2K tech aesthetics.',
    specifications: {
      'Cushioning': 'ABZORB and SBS dual-density midsole',
      'Upper': 'Pigskin suede with breathable spacer mesh',
      'Tongue Logo': 'Inspired by original 991 lace jewel',
      'Outsole': 'Diamond outsole pattern inspired by 860'
    },
    featured: true,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-38',
    brand: 'Estée Lauder',
    title: 'Advanced Night Repair Synchronized Multi-Recovery Serum',
    category: 'beauty',
    subcategory: 'Face Serums',
    images: [
      'https://imgs.search.brave.com/Qm8aBPdrUx8kNLC0t5KoCpB59Kyx293DBY_8julDApU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmVhdXR5dG9j/YXJlLmNvbS9jZG4t/Y2dpL2ltYWdlL3dp/ZHRoPTE2MDAsaGVp/Z2h0PTE2MDAsZj1h/dXRvL21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC8vZS9zL2VzdGVl/LWxhdWRlci1hZHZh/bmNlZC1uaWdodC1y/ZXBhaXItc3luY2hy/b25pemVkLW11bHRp/LXJlY292ZXJ5LWNv/bXBsZXgtc2VydW0t/NTBtbF8xLmpwZw',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80'
    ],
    price: 85.00,
    mrp: 115.00,
    discount: 26,
    rating: 4.9,
    reviewCount: 890,
    stock: 22,
    badge: '#1 Anti-Aging',
    delivery: 'Express delivery tomorrow',
    colors: [
      { name: 'Amber Dropper Bottle', hex: '#633B1E' }
    ],
    sizes: ['30ml', '50ml', '75ml'],
    description: 'Harness the restorative power of night. Fast visible repair, 72-hour moisture, and 8-hour antioxidant defense powered by Chronolux Power Signal.',
    specifications: {
      'Patented Tech': 'Chronolux Power Signal Technology',
      'Benefits': 'Lines look reduced, skin feels firmer',
      'Formula': 'Oil-free, non-comedogenic, dermatologist tested',
      'Bottle': 'Recyclable apothecary amber glass'
    },
    featured: true,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-39',
    brand: 'Garmin',
    title: 'Garmin Forerunner 265 GPS Running Smartwatch',
    category: 'electronics',
    subcategory: 'Smartwatches',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    ],
    price: 419.00,
    mrp: 469.00,
    discount: 11,
    rating: 4.8,
    reviewCount: 310,
    stock: 14,
    badge: 'AMOLED Display',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Black & Powder Gray', hex: '#1C1C1C' },
      { name: 'Whitestone & Tidal Blue', hex: '#EAEAEA' }
    ],
    sizes: ['42mm 265S', '46mm 265'],
    description: 'Brilliant 1.3" AMOLED touchscreen with training readiness metric, morning report, wrist-based running dynamics, and multi-band GNSS satellite tracking.',
    specifications: {
      'Battery': 'Up to 13 days in smartwatch mode',
      'Sensors': 'Elevate Gen 4 heart rate, pulse ox, barometric',
      'GPS': 'Multi-band frequency positioning',
      'Music': 'Store up to 500 songs on wrist'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: true
  },
  {
    id: 'prod-40',
    brand: 'NovaTrend Home',
    title: 'Handmade Stoneware Ceramic Dinnerware Set 16-Piece',
    category: 'home-decor',
    subcategory: 'Kitchen Tech',
    images: [
      'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80'
    ],
    price: 135.00,
    mrp: 180.00,
    discount: 25,
    rating: 4.8,
    reviewCount: 120,
    stock: 15,
    badge: 'Artisan Set',
    delivery: 'Secure fragile packaging guarantee',
    colors: [
      { name: 'Chalk White Matte', hex: '#F0ECE4' },
      { name: 'Speckled Slate', hex: '#586069' }
    ],
    sizes: ['Service for 4 (16 pcs)'],
    description: 'Each piece features an organic free-form rim and reactive matte glaze that gives subtle individual variations. Dishwasher and microwave safe.',
    specifications: {
      'Set Includes': '4 Dinner Plates, 4 Salad Plates, 4 Pasta Bowls, 4 Mugs',
      'Material': 'High-fired durable stoneware',
      'Durability': 'Scratch and chip resistant',
      'Safety': '100% Lead & Cadmium free'
    },
    featured: false,
    bestseller: false,
    trending: false,
    deal: false
  },
  {
    id: 'prod-41',
    brand: 'Bose',
    title: 'Bose QuietComfort Ultra Wireless Earbuds',
    category: 'electronics',
    subcategory: 'Earbuds',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80'
    ],
    price: 279.00,
    mrp: 319.00,
    discount: 13,
    rating: 4.8,
    reviewCount: 420,
    stock: 20,
    badge: 'Spatial Audio',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'White Smoke', hex: '#EBEBEB' }
    ],
    sizes: ['3 Fit Kit Stability Bands'],
    description: 'Breakthrough spatialized audio for more immersive listening. World-class active noise cancellation and CustomTune technology that calibrates sound to your ears.',
    specifications: {
      'Battery': '6 hours playback (24 with case)',
      'Spatial Mode': 'Immersive Audio mode creates wide soundstage',
      'Connectivity': 'Bluetooth 5.3 with Snapdragon Sound',
      'Microphones': 'Advanced noise-rejecting microphones'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-42',
    brand: 'Calvin Klein',
    title: 'Monogram Leather Reversible Dress Belt',
    category: 'accessories',
    subcategory: 'Belts & Wallets',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
    ],
    price: 42.00,
    mrp: 65.00,
    discount: 35,
    rating: 4.7,
    reviewCount: 160,
    stock: 30,
    badge: '-35%',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Black & Cognac Brown Reversible', hex: '#232323' }
    ],
    sizes: ['32', '34', '36', '38', '40'],
    description: 'Two versatile styles in one. Twist buckle mechanism allows effortless flip between sleek smooth black and rich embossed cognac brown leather.',
    specifications: {
      'Material': '100% Genuine Full Grain Cowhide',
      'Buckle': 'Brushed matte silver buckle with twist pivot',
      'Width': '32mm sleek dress belt profile',
      'Fit': 'Custom trimmable strap'
    },
    featured: false,
    bestseller: false,
    trending: false,
    deal: true
  },
  {
    id: 'prod-43',
    brand: 'Apple',
    title: 'Apple iPad Air 11-inch M2 Chip 128GB Wi-Fi',
    category: 'electronics',
    subcategory: 'Laptops & Tablets',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80'
    ],
    price: 569.00,
    mrp: 599.00,
    discount: 5,
    rating: 4.9,
    reviewCount: 780,
    stock: 18,
    badge: 'M2 Power',
    delivery: 'Free express shipping',
    colors: [
      { name: 'Space Gray', hex: '#4B4846' },
      { name: 'Starlight', hex: '#F0ECE1' },
      { name: 'Blue', hex: '#87CEEB' }
    ],
    sizes: ['128GB', '256GB', '512GB'],
    description: 'Supercharged by the blazing-fast M2 chip. Stunning Liquid Retina display, landscape front camera with Center Stage, and superfast Wi-Fi 6E.',
    specifications: {
      'Chip': 'Apple M2 with 8-core CPU and 9-core GPU',
      'Display': '11-inch Liquid Retina with True Tone & P3 wide color',
      'Camera': '12MP Ultra Wide landscape front camera',
      'Accessories': 'Supports Apple Pencil Pro and Magic Keyboard'
    },
    featured: true,
    bestseller: true,
    trending: false,
    deal: false
  },
  {
    id: 'prod-44',
    brand: 'Nike',
    title: 'Nike Dri-FIT UV Miler Long Sleeve Running Top',
    category: 'fitness',
    subcategory: 'Activewear',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
    ],
    price: 38.00,
    mrp: 50.00,
    discount: 24,
    rating: 4.8,
    reviewCount: 210,
    stock: 35,
    badge: 'Dri-FIT',
    delivery: 'Free delivery in 2 days',
    colors: [
      { name: 'Smoke Grey', hex: '#708090' },
      { name: 'Laser Orange', hex: '#F15A24' },
      { name: 'Black', hex: '#1C1C1C' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight performance fabric with built-in UVA and UVB sun protection. Ultra-breathable crinkle texture prevents cling when logging miles.',
    specifications: {
      'Technology': 'Dri-FIT moisture evaporation',
      'Sun Protection': 'UVA and UVB blocking in covered areas',
      'Details': 'Reflective Swoosh bar on chest & arms',
      'Fabric': '100% Recycled Polyester fibers'
    },
    featured: false,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-45',
    brand: 'NovaTrend Essentials',
    title: 'Heavy Cotton Relaxed Fit Graphic T-Shirt',
    category: 'fashion',
    subcategory: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80'
    ],
    price: 32.00,
    mrp: 45.00,
    discount: 29,
    rating: 4.7,
    reviewCount: 195,
    stock: 40,
    badge: 'Popular',
    delivery: 'Delivery in 3 days',
    colors: [
      { name: 'Vintage Washed Black', hex: '#2B2B2B' },
      { name: 'Chalk White', hex: '#F7F7F7' },
      { name: 'Sage Green', hex: '#7C8A79' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '280 GSM combed cotton washed with natural enzymes for a vintage handfeel. Minimalist typography graphic print on center back.',
    specifications: {
      'Weight': '280 GSM Mid-Heavyweight Cotton',
      'Collar': '1.25" Thick ribbed collar band',
      'Print': 'Soft-touch water based ink discharge',
      'Pre-shrunk': 'Pre-washed to minimize shrinkage'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-46',
    brand: 'Philips',
    title: 'Sonicare ProtectiveClean 6100 Electric Toothbrush',
    category: 'appliances',
    subcategory: 'Personal Care Tech',
    images: [
      'https://images.unsplash.com/photo-1559671089-6f977b31ee27?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=900&q=80'
    ],
    price: 119.99,
    mrp: 149.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 520,
    stock: 25,
    badge: '-20%',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Matte White & Silver', hex: '#F0F0F0' },
      { name: 'Pastel Pink', hex: '#FFD1DC' },
      { name: 'Deep Navy', hex: '#000080' }
    ],
    sizes: ['Includes Travel Case + 2 Brush Heads'],
    description: 'Removes up to 10x more plaque than a manual toothbrush. Pressure sensor alerts you when brushing too hard to protect delicate gum lines.',
    specifications: {
      'Speed': 'Up to 62,000 brush movements per minute',
      'Modes': '3 Modes (Clean, White, Gum Care) with 3 Intensities',
      'Battery': '2 Weeks battery life per full charge',
      'BrushSync': 'Tracks head wear and prompts replacement'
    },
    featured: false,
    bestseller: false,
    trending: false,
    deal: true
  },
  {
    id: 'prod-47',
    brand: 'Theragun',
    title: 'Theragun Mini Deep Tissue Percussive Massage Gun',
    category: 'fitness',
    subcategory: 'Activewear',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80'
    ],
    price: 159.00,
    mrp: 199.00,
    discount: 20,
    rating: 4.9,
    reviewCount: 380,
    stock: 18,
    badge: 'Recovery Tech',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Desert Rose', hex: '#C48A85' },
      { name: 'All Black', hex: '#1C1C1C' }
    ],
    sizes: ['Pocket Size (1.43 lbs)'],
    description: 'Pocket-sized muscle treatment with Theragun quality percussive massage. 20% smaller and 30% lighter for ultra-portable muscle relief anywhere.',
    specifications: {
      'Amplitude': '12mm deep percussive stroke',
      'Speeds': '3 calibrated speeds (1750, 2100, 2400 PPM)',
      'Battery': '150-minute battery life with USB-C fast charging',
      'Ergonomics': 'Patented Theragun triangle grip'
    },
    featured: true,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-48',
    brand: 'Fossil',
    title: 'Heritage Automatic Skeleton Stainless Steel Watch',
    category: 'accessories',
    subcategory: 'Watches',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    ],
    price: 189.00,
    mrp: 260.00,
    discount: 27,
    rating: 4.8,
    reviewCount: 145,
    stock: 15,
    badge: 'Self-Winding',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Silver & Rose Gold', hex: '#E0BFB8' },
      { name: 'All Silver Steel', hex: '#D8D8D8' }
    ],
    sizes: ['43mm Dial'],
    description: 'Self-winding mechanical automatic movement visible through the open-heart skeleton dial. Exhibition case back reveals the oscillating rotor.',
    specifications: {
      'Movement': 'Automatic 21-Jewel Movement (No battery required)',
      'Case': '316L Surgical Grade Stainless Steel',
      'Crystal': 'Scratch-resistant sapphire coated mineral',
      'Strap': 'Solid link bracelet with deployant clasp'
    },
    featured: true,
    bestseller: false,
    trending: false,
    deal: true
  },
  {
    id: 'prod-49',
    brand: 'NovaTrend Essentials',
    title: 'French Terry Relaxed Cargo Sweatpants',
    category: 'fashion',
    subcategory: 'Trousers',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80'
    ],
    price: 52.00,
    mrp: 75.00,
    discount: 31,
    rating: 4.8,
    reviewCount: 265,
    stock: 35,
    badge: 'Utility',
    delivery: 'Free delivery by Friday',
    colors: [
      { name: 'Washed Olive', hex: '#556B2F' },
      { name: 'Tar Black', hex: '#1C1C1C' },
      { name: 'Stone Grey', hex: '#A8A8A8' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Relaxed fit with pleat articulation at knees. Features clean flap cargo pockets with hidden snap buttons and toggle bungee cord cuffs.',
    specifications: {
      'Fabric': '100% Cotton 420 GSM French Terry',
      'Waist': 'Chunky drawcord with metal aglets',
      'Pockets': '6-pocket functional utility construction',
      'Cuffs': 'Adjustable shockcord hem closures'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: false
  },
  {
    id: 'prod-50',
    brand: 'Zara',
    title: 'Structured Boxy Denim Trucker Jacket',
    category: 'fashion',
    subcategory: 'Jackets & Coats',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
    ],
    price: 89.90,
    mrp: 120.00,
    discount: 25,
    rating: 4.7,
    reviewCount: 175,
    stock: 20,
    badge: '100% Rigid Denim',
    delivery: 'Delivery in 3 days',
    colors: [
      { name: 'Vintage Light Indigo Wash', hex: '#87CEEB' },
      { name: 'Washed Black Denim', hex: '#2B2B2B' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '14 oz raw non-stretch denim rinsed for soft drape. Boxy cropped silhouette with dropped shoulders, copper hardware, and dual buttoned chest pockets.',
    specifications: {
      'Denim': '14 oz Heavyweight Rigid Cotton Denim',
      'Hardware': 'Antique brass tack buttons',
      'Stitching': 'Heavy gauge contrast tobacco thread',
      'Origin': 'Sustainably sourced cotton'
    },
    featured: true,
    bestseller: false,
    trending: true,
    deal: false
  },
  {
    id: 'prod-51',
    brand: 'Anker',
    title: '737 Power Bank (PowerCore 24K) 140W Fast Charging',
    category: 'electronics',
    subcategory: 'Accessories',
    images: [
      'https://imgs.search.brave.com/QluRTkOFRnsP1-98-GoqIuMUNfMqituQMisTYreahcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF3akoyTEhva0wu/anBn',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80'
    ],
    price: 109.99,
    mrp: 149.99,
    discount: 27,
    rating: 4.9,
    reviewCount: 520,
    stock: 28,
    badge: '140W Two-Way',
    delivery: 'Free 2-day delivery',
    colors: [
      { name: 'Matte Charcoal & Silver', hex: '#282C34' }
    ],
    sizes: ['24,000mAh Ultra High Capacity'],
    description: 'Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge.',
    specifications: {
      'Capacity': '24,000mAh (Can charge MacBook Pro 16" up to 50% in 40 mins)',
      'Output Ports': '2x USB-C (140W max), 1x USB-A (18W)',
      'Display': 'Smart digital display shows power input/output & remaining time',
      'Safety': 'ActiveShield 2.0 temperature monitoring'
    },
    featured: false,
    bestseller: true,
    trending: true,
    deal: true
  },
  {
    id: 'prod-52',
    brand: 'Aesop',
    title: 'Resurrection Aromatique Hand & Body Balm 500ml',
    category: 'beauty',
    subcategory: 'Moisturizers',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=900&q=80'
    ],
    price: 97.00,
    mrp: 120.00,
    discount: 19,
    rating: 4.9,
    reviewCount: 610,
    stock: 18,
    badge: 'Botanical Luxury',
    delivery: 'Complimentary samples included',
    colors: [
      { name: 'Amber Pump Bottle', hex: '#4A2E19' }
    ],
    sizes: ['500ml with Pump Dispenser'],
    description: 'A rich concoction of sweet almond and coconut oils, shea butter, and refreshing mandarin rind to nourish hard-working skin and cuticles.',
    specifications: {
      'Aroma': 'Citrus, woody, herbaceous botanical blend',
      'Key Botanicals': 'Mandarin Rind, Rosemary Leaf, Cedar Atlas',
      'Skin Feel': 'Deeply hydrated without greasy residue',
      'Bottle': '100% Recycled PET amber vessel'
    },
    featured: true,
    bestseller: true,
    trending: false,
    deal: false
  }
];
