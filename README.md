# NovaTrend — Premium Frontend-Only E-Commerce Platform

A production-grade, commercial e-commerce frontend built with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide React**, visually inspired by the **NovaTrend** modern minimalist editorial aesthetic with high-utility marketplace features inspired by Flipkart.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run preview
```

---

## 🎨 Design System & Palette

- **Primary Orange**: `#F15A24` (Hover: `#D94A16`, Light: `#FFF4EE`)
- **Secondary / Dark**: `#111111`
- **Main Typography**: `#161616` (Secondary: `#666666`, Muted: `#8B8B8B`)
- **Backgrounds**: Main `#FFFFFF`, Soft Surface `#F7F7F7`, Alt `#F4F4F4`
- **Borders**: `#E8E8E8`
- **Semantics**: Success Green `#22A06B`, Rating Yellow `#F5B800`, Alert `#E5484D`
- **Font Families**: Inter & Manrope

---

## 📦 Key Architectural Features

1. **22-Section Merchandising Homepage**:
   - Slim Announcement Bar (shipping thresholds & alerts)
   - Sticky Header with Search, Wishlist counter, Cart counter & Profile dropdown
   - Mega-menu Category Navigation
   - NovaTrend-inspired 550px Hero Section with model showcase and 4 floating mini product cards
   - 4-Item Customer Trust Strip
   - Shop by Categories with image overlays
   - Deals of the Day with live countdown timer and stock claim bar
   - Promotional Banners (15% Welcome Offer)
   - New Arrivals 16-Product 4x4 Grid
   - Editorial Fashion Lookbook Banner
   - Best Sellers split cards with Quick Add pill buttons
   - Electronics Deals section
   - Dual Promotional Banners (Flash Sale Sneaker + Summer 2026 Collection)
   - Trending Products with dynamic category filter tabs
   - Beauty & Clean Skincare section
   - Mixed Editorial Layout with 2-column featured product card
   - Home Living & Interior accents
   - Recommended For You (16 items)
   - Popular Brand Tiles with discount highlights
   - Recently Viewed horizontal scroller
   - Customer Benefits footer strip
   - Newsletter signup with instant feedback toast
   - Dark Luxury Footer with full compliance and payment badges

2. **Advanced Catalogue & Filtering (/shop)**:
   - 4-column desktop grid with pagination (20 products/page)
   - Deep filters: Category, Price Slider ($20 - $700), Brand checkboxes, Ratings (4★+), Discount (10% - 50%+), In-Stock Only
   - Sorting: Popularity, Newest, Price Low-to-High, Price High-to-Low, Customer Rating
   - Responsive Mobile Drawer for filters

3. **Product Details Page (/product/:id)**:
   - Interactive multi-image gallery with thumbnails & zoom
   - Brand, Rating stars, Verified Reviews breakdown
   - Color picker with live swatches & Size selector with interactive Size Guide modal
   - Pincode Delivery Estimator with mock courier validation
   - Quantity selector, Add to Cart, Buy Now, Wishlist toggle
   - Tabbed Description, Specifications Table, and Customer Reviews with submission form
   - "You May Also Like" similar products carousel

4. **Cart & Dynamic Pricing (/cart)**:
   - Free shipping progress bar ($75 threshold tracker)
   - Quantity adjustment, item removal, and move-to-wishlist
   - Working coupon applicator (`SAVE10`, `WELCOME15`, `FASHION20`, `NOVA50`, `FREESHIP`)
   - Complete invoice breakdown (MRP, Savings, Subtotal, Coupon discount, Shipping, Tax, Total)

5. **Multi-Step Checkout (/checkout)**:
   - Step 1: Address selection or custom address form
   - Step 2: Delivery preference (Standard Free vs Priority Express $9.99)
   - Step 3: Payment method (Credit/Debit Card, UPI / QR, Net Banking, COD)
   - Step 4: Order review & instant mock order placement

6. **Frontend Authentication & Protected Routes**:
   - Session restoration via Context API and `localStorage`
   - Split layout Sign In & Sign Up with live password strength evaluation
   - Protected routes for `/account`, `/account/orders`, `/account/addresses`, `/account/notifications`, `/checkout`
   - **Quick 1-Click Demo Login**: Pre-populated credentials for **Alex Vance** (`alex.vance@novatrend.com`)

7. **Orders & Live Tracking**:
   - Orders list with status badges (`Delivered`, `Shipped`, `Order Confirmed`)
   - Order Details with printable receipt
   - Live Order Tracking timeline checkpoints with carrier details

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/           # ProtectedRoute, AuthInput, PasswordInput, AuthLayout
│   │   ├── common/         # Header, Footer, SearchBar, CategoryNav, MegaMenu, etc.
│   │   ├── home/           # HeroSection, DealsSection, TrendingTabs, DualBanners, etc.
│   │   ├── product/        # ProductCard, BestSellerCard, DealProductCard, Gallery, etc.
│   │   └── shop/           # FilterSidebar, SortBar
│   ├── context/            # AuthContext, CartContext, WishlistContext, ToastContext
│   ├── data/               # 52 Products, Categories, Brands, Orders, Coupons
│   ├── hooks/              # useAuth, useCart, useWishlist, useToast
│   ├── pages/              # 16 Complete Route Pages
│   ├── services/           # authService, productService, orderService
│   ├── utils/              # formatters, storage
│   ├── App.jsx             # Router and Global Layout
│   ├── index.css           # Tailwind + Design System Tokens
│   └── main.jsx            # Application Root
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎁 Deliverables

- **Complete Project Folder**: Run directly with `npm install` and `npm run dev`.
- **Zip Archive**: `premium-ecommerce-frontend.zip` (ready for deployment or client presentation).
