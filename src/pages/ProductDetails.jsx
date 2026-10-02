import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { DeliveryChecker } from '../components/product/DeliveryChecker';
import { Rating } from '../components/common/Rating';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { QuantitySelector } from '../components/common/QuantitySelector';
import { ProductGrid } from '../components/product/ProductGrid';
import { SectionHeader } from '../components/common/SectionHeader';
import {
  ShoppingBag,
  Zap,
  Heart,
  Check,
  ShieldCheck,
  RotateCcw,
  Truck,
  ChevronRight,
  Share2,
  Ruler,
  Star,
  CheckCircle2,
  X
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  const product = productService.getById(id);

  // States
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('description'); // 'description', 'specs', 'reviews'

  // Review submission state
  const [userReview, setUserReview] = useState({ name: '', comment: '', rating: 5 });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Track recently viewed & initialize selections
  useEffect(() => {
    if (product) {
      productService.addRecentlyViewed(product.id);
      setSelectedColor(product.colors?.[0]?.name || 'Standard');
      setSelectedSize(product.sizes?.[0] || 'Standard');
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="max-w-site mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Product Not Found</h2>
        <p className="text-neutral-500 mb-6 text-sm">The product you are looking for may have been retired or moved.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-[#111111] text-white font-semibold text-xs">
          Return to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const relatedProducts = productService.getRelated(product.id, product.category, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Product link copied to clipboard!', 'info');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userReview.name || !userReview.comment) {
      addToast('Please provide your name and a review comment.', 'error');
      return;
    }
    setReviewSubmitted(true);
    addToast('Review submitted for verification. Thank you!', 'success');
  };

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in text-left">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 overflow-x-auto no-scrollbar py-1">
        <Link to="/" className="hover:text-black transition-colors whitespace-nowrap">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
        <Link to={`/category/${product.category}`} className="hover:text-black capitalize transition-colors whitespace-nowrap">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
        <span className="font-semibold text-neutral-900 truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Grid: Gallery Left & Purchase Stage Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* Left Column: Product Gallery (7 cols on lg) */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} product={product} />
        </div>

        {/* Right Column: Information & Actions (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Brand & Title */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24]">
                {product.brand}
              </span>
              <button
                onClick={handleShare}
                className="text-neutral-400 hover:text-black p-1 transition-colors"
                title="Share product"
                aria-label="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-tight">
              {product.title}
            </h1>

            {/* Rating & Reviews Count */}
            <div className="flex items-center gap-3 mt-3">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              <span className="text-neutral-300">•</span>
              <span className="text-xs text-[#22A06B] font-semibold">{product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}</span>
            </div>
          </div>

          {/* Pricing & Tax info */}
          <div className="p-4 rounded-2xl bg-[#FFF7F2] border border-[#FFE0D1]/80">
            <PriceDisplay
              price={product.price}
              mrp={product.mrp}
              discount={product.discount}
              size="lg"
            />
            <p className="text-[11px] text-neutral-500 mt-1">
              Inclusive of all taxes. Free shipping on orders over $75.
            </p>
          </div>

          {/* Color Selection Swatches */}
          {product.colors?.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2.5">
                Color: <span className="text-neutral-950 font-normal">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === color.name ? 'border-[#F15A24] scale-110 shadow-sm' : 'border-neutral-200'
                    }`}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <Check className={`w-4 h-4 ${color.hex === '#FFFFFF' || color.hex === '#FAFAFA' || color.hex === '#EDE8E1' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes?.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Size: <span className="text-neutral-950 font-normal">{selectedSize}</span>
                </label>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#F15A24] hover:underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-10 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedSize === size
                        ? 'border-[#F15A24] bg-[#FFF4EE] text-[#F15A24] shadow-xs'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-400 bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
              Quantity
            </label>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          {/* Action CTAs: Add to Cart & Buy Now */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full sm:flex-1 h-12 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="w-full sm:flex-1 h-12 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md shadow-[#F15A24]/20"
            >
              <Zap className="w-4.5 h-4.5 fill-white" />
              <span>Buy Now</span>
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                wishlisted
                  ? 'border-[#E5484D] bg-red-50 text-[#E5484D]'
                  : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlisted ? 'fill-[#E5484D]' : ''}`} />
            </button>
          </div>

          {/* Pincode Delivery Estimator */}
          <DeliveryChecker />

          {/* Commercial Trust Bullet Points */}
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#F15A24]" />
              <span>Fast Tracked Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#F15A24]" />
              <span>30-Day Hassle-Free Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
              <span>100% Genuine Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#22A06B]" />
              <span>1-Year Official Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Description, Specifications, Reviews */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <div className="flex items-center gap-8 border-b border-neutral-200 pb-3">
          <button
            onClick={() => setActiveTab('description')}
            className={`text-sm sm:text-base font-bold pb-2 transition-colors relative ${
              activeTab === 'description' ? 'text-[#F15A24]' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <span>Product Description</span>
            {activeTab === 'description' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`text-sm sm:text-base font-bold pb-2 transition-colors relative ${
              activeTab === 'specs' ? 'text-[#F15A24]' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <span>Specifications</span>
            {activeTab === 'specs' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-sm sm:text-base font-bold pb-2 transition-colors relative ${
              activeTab === 'reviews' ? 'text-[#F15A24]' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <span>Reviews ({product.reviewCount})</span>
            {activeTab === 'reviews' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24]" />
            )}
          </button>
        </div>

        {/* Tab 1: Description */}
        {activeTab === 'description' && (
          <div className="py-6 max-w-3xl space-y-4 animate-fade-in text-neutral-700 leading-relaxed text-sm">
            <p>{product.description}</p>
            <p>
              Engineered with extreme precision according to international standards. Built with durable high-grade materials to ensure long-term satisfaction and maximum reliability in daily environments.
            </p>
          </div>
        )}

        {/* Tab 2: Specifications Table */}
        {activeTab === 'specs' && (
          <div className="py-6 max-w-2xl animate-fade-in">
            <table className="w-full text-xs sm:text-sm divide-y divide-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
              <tbody className="divide-y divide-neutral-100">
                {product.specifications ? (
                  Object.entries(product.specifications).map(([key, val]) => (
                    <tr key={key} className="hover:bg-neutral-50/50">
                      <td className="py-3 px-4 font-semibold text-neutral-500 bg-neutral-50 w-1/3">
                        {key}
                      </td>
                      <td className="py-3 px-4 font-medium text-neutral-900">
                        {val}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-3 px-4 text-neutral-500">Standard specifications apply.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Ratings & Reviews */}
        {activeTab === 'reviews' && (
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            {/* Left: Overall rating summary & mock reviews */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-center pr-4 border-r border-neutral-200">
                  <span className="text-3xl sm:text-4xl font-black text-neutral-900">{product.rating}</span>
                  <div className="flex items-center justify-center text-[#F5B800] mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5B800]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 mt-1 block">Based on {product.reviewCount} reviews</span>
                </div>

                <div className="flex-1 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 font-semibold">5★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#22A06B] w-[82%]" />
                    </div>
                    <span className="text-neutral-400">82%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 font-semibold">4★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#22A06B] w-[12%]" />
                    </div>
                    <span className="text-neutral-400">12%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 font-semibold">3★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F5B800] w-[4%]" />
                    </div>
                    <span className="text-neutral-400">4%</span>
                  </div>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl border border-neutral-100 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-neutral-900">David M.</span>
                    <span className="text-[11px] text-neutral-400">2 days ago</span>
                  </div>
                  <div className="flex items-center text-[#F5B800] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F5B800]" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Exceptional build quality and finish. Arrived in just 2 days with premium packaging. Definitely recommending to friends!
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-100 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-neutral-900">Sophia K.</span>
                    <span className="text-[11px] text-neutral-400">1 week ago</span>
                  </div>
                  <div className="flex items-center text-[#F5B800] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F5B800]" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Exceeded my expectations. The material feels very luxurious and fits true to size. NovaTrend delivers real value.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Submit Review Form */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-left">
              <h4 className="text-sm font-bold text-neutral-900 mb-2">
                Write a Customer Review
              </h4>
              <p className="text-xs text-neutral-500 mb-4">
                Share your authentic experience with this product to help fellow shoppers.
              </p>

              {reviewSubmitted ? (
                <div className="flex items-center gap-2 p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Your review has been submitted for verification!</span>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Rating</label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setUserReview({ ...userReview, rating: star })}
                          className="p-1 text-neutral-300 hover:text-[#F5B800]"
                        >
                          <Star
                            className={`w-5 h-5 ${star <= userReview.rating ? 'fill-[#F5B800] text-[#F5B800]' : ''}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={userReview.name}
                      onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full h-9 px-3 text-xs bg-white border border-neutral-300 rounded-lg outline-none focus:border-[#F15A24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Detailed Review</label>
                    <textarea
                      rows={3}
                      value={userReview.comment}
                      onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                      placeholder="What did you like or dislike about this product?"
                      className="w-full p-3 text-xs bg-white border border-neutral-300 rounded-lg outline-none focus:border-[#F15A24]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Similar & Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <SectionHeader
            title="You May Also Like"
            subtitle="Frequently purchased together with this item"
            viewAllLink={`/category/${product.category}`}
            viewAllText="View More In Category"
          />
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      )}

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-scale-in text-left">
            <button
              onClick={() => setSizeGuideOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#F15A24]">
              <Ruler className="w-5 h-5" />
              <h3 className="text-lg font-bold text-neutral-900">Standard Sizing Guide</h3>
            </div>
            <p className="text-xs text-neutral-500 mb-4">
              All measurements are in inches. Fits true to size; order one size up for an oversized silhouette.
            </p>

            <table className="w-full text-xs border border-neutral-200 rounded-lg overflow-hidden">
              <thead className="bg-neutral-100 font-bold text-neutral-800">
                <tr>
                  <th className="p-2 border-b">Size</th>
                  <th className="p-2 border-b">Chest</th>
                  <th className="p-2 border-b">Waist</th>
                  <th className="p-2 border-b">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-center">
                <tr><td className="p-2 font-bold">S</td><td className="p-2">36-38"</td><td className="p-2">30-32"</td><td className="p-2">27"</td></tr>
                <tr><td className="p-2 font-bold">M</td><td className="p-2">39-41"</td><td className="p-2">33-35"</td><td className="p-2">28"</td></tr>
                <tr><td className="p-2 font-bold">L</td><td className="p-2">42-44"</td><td className="p-2">36-38"</td><td className="p-2">29"</td></tr>
                <tr><td className="p-2 font-bold">XL</td><td className="p-2">45-47"</td><td className="p-2">39-41"</td><td className="p-2">30"</td></tr>
              </tbody>
            </table>

            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full mt-5 py-2.5 rounded-full bg-[#111111] text-white font-bold text-xs"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
