import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { useToast } from './ToastContext';

const WishlistContext = createContext(null);
const WISHLIST_KEY = 'novatrend_wishlist';

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => getStorageItem(WISHLIST_KEY, []));
  const { addToast } = useToast();

  useEffect(() => {
    setStorageItem(WISHLIST_KEY, wishlistItems);
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    if (!product) return;
    if (!wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(prev => [product, ...prev]);
      addToast(`Added "${product.title.slice(0, 24)}..." to your wishlist.`, 'success');
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => {
      const item = prev.find(p => p.id === productId);
      if (item) {
        addToast(`Removed from wishlist.`, 'info');
      }
      return prev.filter(p => p.id !== productId);
    });
  };

  const toggleWishlist = (product) => {
    if (!product) return;
    const exists = wishlistItems.some(item => item.id === product.id);
    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
        wishlistCount: wishlistItems.length
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
