import { products } from '../data/products';
import { getStorageItem, setStorageItem } from '../utils/storage';

const RECENTLY_VIEWED_KEY = 'novatrend_recently_viewed';

export const productService = {
  getAll: () => {
    return [...products];
  },

  getById: (id) => {
    return products.find(p => p.id === id) || null;
  },

  getByCategory: (category) => {
    if (!category || category === 'all') return [...products];
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },

  getNewArrivals: (limit = 16) => {
    return products
      .filter(p => p.badge?.toLowerCase().includes('new') || p.id.endsWith('1') || p.id.endsWith('7') || p.id.endsWith('9'))
      .slice(0, limit);
  },

  getBestsellers: (limit = 12) => {
    return products.filter(p => p.bestseller).slice(0, limit);
  },

  getDeals: (limit = 12) => {
    return products.filter(p => p.deal || p.discount >= 20).slice(0, limit);
  },

  getTrending: (category = 'all', limit = 16) => {
    let list = products.filter(p => p.trending);
    if (category && category !== 'all') {
      list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    return list.slice(0, limit);
  },

  getFeatured: (limit = 8) => {
    return products.filter(p => p.featured).slice(0, limit);
  },

  search: (query) => {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    return products.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory?.toLowerCase().includes(q)
    );
  },

  getRelated: (productId, category, limit = 4) => {
    return products
      .filter(p => p.id !== productId && p.category.toLowerCase() === category.toLowerCase())
      .slice(0, limit);
  },

  getRecentlyViewed: () => {
    const ids = getStorageItem(RECENTLY_VIEWED_KEY, []);
    return ids.map(id => products.find(p => p.id === id)).filter(Boolean);
  },

  addRecentlyViewed: (id) => {
    if (!id) return;
    const ids = getStorageItem(RECENTLY_VIEWED_KEY, []);
    const updated = [id, ...ids.filter(existingId => existingId !== id)].slice(0, 12);
    setStorageItem(RECENTLY_VIEWED_KEY, updated);
  }
};
