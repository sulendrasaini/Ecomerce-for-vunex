import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { coupons } from '../data/coupons';
import { useToast } from './ToastContext';

const CartContext = createContext(null);
const CART_KEY = 'novatrend_cart';
const COUPON_KEY = 'novatrend_applied_coupon';
const FREE_SHIPPING_THRESHOLD = 75;
const STANDARD_SHIPPING_FEE = 9.99;
const TAX_RATE = 0.08;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getStorageItem(CART_KEY, []));
  const [appliedCoupon, setAppliedCoupon] = useState(() => getStorageItem(COUPON_KEY, null));
  const { addToast } = useToast();

  useEffect(() => {
    setStorageItem(CART_KEY, cartItems);
  }, [cartItems]);

  useEffect(() => {
    setStorageItem(COUPON_KEY, appliedCoupon);
  }, [appliedCoupon]);

  const addToCart = (product, quantity = 1, color = null, size = null) => {
    if (!product) return;

    const selectedColor = color || (product.colors && product.colors[0]?.name) || 'Default';
    const selectedSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const cartItemId = `${product.id}-${selectedColor}-${selectedSize}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            productId: product.id,
            product,
            quantity,
            color: selectedColor,
            size: selectedSize,
            price: product.price,
            mrp: product.mrp || product.price
          }
        ];
      }
    });

    addToast(`Added "${product.title.slice(0, 24)}..." to your cart.`, 'success');
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
    addToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity: Math.min(newQty, 10) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (codeStr) => {
    if (!codeStr || !codeStr.trim()) {
      addToast('Please enter a coupon code.', 'error');
      return { success: false, message: 'Please enter a coupon code.' };
    }

    const cleanCode = codeStr.trim().toUpperCase();
    const found = coupons.find(c => c.code.toUpperCase() === cleanCode);

    if (!found) {
      addToast('Invalid coupon code. Try SAVE10 or WELCOME15.', 'error');
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (found.minOrder && subtotal < found.minOrder) {
      const msg = `Minimum order amount of $${found.minOrder} required for ${found.code}.`;
      addToast(msg, 'error');
      return { success: false, message: msg };
    }

    setAppliedCoupon(found);
    addToast(`Coupon "${found.code}" applied successfully!`, 'success');
    return { success: true, coupon: found };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast('Coupon removed.', 'info');
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const mrpTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.mrp || item.price) * item.quantity, 0);
  }, [cartItems]);

  const mrpSavings = useMemo(() => {
    return Math.max(0, mrpTotal - subtotal);
  }, [mrpTotal, subtotal]);

  const couponDiscount = useMemo(() => {
    if (!appliedCoupon || subtotal === 0) return 0;
    if (appliedCoupon.type === 'percentage') {
      let discountVal = (subtotal * appliedCoupon.value) / 100;
      if (appliedCoupon.maxDiscount) {
        discountVal = Math.min(discountVal, appliedCoupon.maxDiscount);
      }
      return discountVal;
    }
    if (appliedCoupon.type === 'flat') {
      return Math.min(appliedCoupon.value, subtotal);
    }
    return 0;
  }, [appliedCoupon, subtotal]);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || appliedCoupon?.type === 'shipping';
  const shipping = subtotal === 0 ? 0 : (isFreeShipping ? 0 : STANDARD_SHIPPING_FEE);
  const tax = subtotal === 0 ? 0 : (subtotal - couponDiscount) * TAX_RATE;
  const total = Math.max(0, subtotal - couponDiscount + shipping + tax);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        mrpTotal,
        mrpSavings,
        couponDiscount,
        shipping,
        tax,
        total,
        cartCount,
        isFreeShipping,
        freeShippingProgress,
        amountNeededForFreeShipping,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
