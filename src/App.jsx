import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Header } from './components/common/Header';
import { CategoryNav } from './components/common/CategoryNav';
import { Footer } from './components/common/Footer';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { ToastContainer } from './components/common/Toast';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetails } from './pages/ProductDetails';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { Account } from './pages/Account';
import { Orders } from './pages/Orders';
import { OrderDetails } from './pages/OrderDetails';
import { OrderTracking } from './pages/OrderTracking';
import { SavedAddresses } from './pages/SavedAddresses';
import { Notifications } from './pages/Notifications';
import { NotFound } from './pages/NotFound';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#161616] font-sans">
      <ScrollToTop />

      {/* Global Top Announcement */}
      {!isAuthPage && <AnnouncementBar />}

      {/* Sticky Main Header */}
      <Header />

      {/* Category Nav bar on non-auth pages */}
      {!isAuthPage && <CategoryNav />}

      {/* Dynamic Route Content */}
      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />

          {/* Checkout (Protected) */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          {/* Auth Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Account Pages */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/addresses"
            element={
              <ProtectedRoute>
                <SavedAddresses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />

          {/* Orders Tracking */}
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/order/:id/track" element={<OrderTracking />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      {!isAuthPage && <Footer />}

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}
