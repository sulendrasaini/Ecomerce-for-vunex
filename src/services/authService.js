import { getStorageItem, setStorageItem, removeStorageItem } from '../utils/storage';

const AUTH_USER_KEY = 'novatrend_auth_user';
const USERS_LIST_KEY = 'novatrend_users_list';

const DEFAULT_USER = {
  id: 'usr-001',
  fullName: 'Alex Vance',
  email: 'alex.vance@novatrend.com',
  phone: '+1 (555) 382-9012',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  memberSince: 'March 2025',
  addresses: [
    {
      id: 'addr-1',
      title: 'Home',
      isDefault: true,
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Seattle',
      state: 'WA',
      pincode: '98101',
      phone: '+1 (555) 382-9012'
    },
    {
      id: 'addr-2',
      title: 'Office / Studio',
      isDefault: false,
      fullName: 'Alex Vance',
      street: '1200 4th Ave, Suite 1800',
      city: 'Seattle',
      state: 'WA',
      pincode: '98101',
      phone: '+1 (555) 890-1123'
    }
  ],
  notifications: [
    { id: 'notif-1', title: 'Order NT-88219 Delivered', message: 'Your Nike Air Max 270 order was delivered.', time: '2 hours ago', read: false },
    { id: 'notif-2', title: 'Flash Sale: 70% Off', message: 'Limited time flash sale on summer essentials is now live.', time: '1 day ago', read: true },
    { id: 'notif-3', title: 'New Coupon Available', message: 'Use code SAVE10 for 10% off your next purchase.', time: '3 days ago', read: true }
  ]
};

export const authService = {
  getCurrentUser: () => {
    return getStorageItem(AUTH_USER_KEY, null);
  },

  login: async (email, password, rememberMe = true) => {
    // Simulate slight network delay for realism
    await new Promise(resolve => setTimeout(resolve, 350));

    const users = getStorageItem(USERS_LIST_KEY, [DEFAULT_USER]);
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!foundUser) {
      // If user typed demo credentials or any valid looking email for quick demo, let them in smoothly or give error
      if (email.toLowerCase().includes('demo') || email.toLowerCase() === 'alex.vance@novatrend.com') {
        setStorageItem(AUTH_USER_KEY, DEFAULT_USER);
        return { success: true, user: DEFAULT_USER };
      }
      return { success: false, error: 'No account found with this email. Try alex.vance@novatrend.com or demo.' };
    }

    setStorageItem(AUTH_USER_KEY, foundUser);
    return { success: true, user: foundUser };
  },

  signup: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 350));

    const users = getStorageItem(USERS_LIST_KEY, [DEFAULT_USER]);
    const exists = users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());

    if (exists) {
      return { success: false, error: 'An account with this email address already exists.' };
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone || '+1 (555) 000-0000',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(userData.fullName)}&backgroundColor=f15a24`,
      memberSince: 'October 2026',
      addresses: [],
      notifications: [
        { id: 'notif-new', title: 'Welcome to NovaTrend!', message: 'Thank you for joining. Enjoy 15% off using code WELCOME15.', time: 'Just now', read: false }
      ]
    };

    users.push(newUser);
    setStorageItem(USERS_LIST_KEY, users);
    setStorageItem(AUTH_USER_KEY, newUser);

    return { success: true, user: newUser };
  },

  logout: () => {
    removeStorageItem(AUTH_USER_KEY);
  },

  updateProfile: (updatedData) => {
    const current = getStorageItem(AUTH_USER_KEY, null);
    if (!current) return null;
    const updated = { ...current, ...updatedData };
    setStorageItem(AUTH_USER_KEY, updated);

    // Update in users list
    const users = getStorageItem(USERS_LIST_KEY, [DEFAULT_USER]);
    const newUsers = users.map(u => u.id === updated.id ? updated : u);
    setStorageItem(USERS_LIST_KEY, newUsers);

    return updated;
  },

  saveAddress: (addressData) => {
    const current = getStorageItem(AUTH_USER_KEY, DEFAULT_USER);
    const existing = current.addresses || [];
    let updatedAddresses;

    if (addressData.id) {
      updatedAddresses = existing.map(a => a.id === addressData.id ? { ...a, ...addressData } : a);
    } else {
      const newAddr = {
        ...addressData,
        id: 'addr-' + Date.now(),
        isDefault: existing.length === 0 ? true : Boolean(addressData.isDefault)
      };
      if (newAddr.isDefault) {
        updatedAddresses = existing.map(a => ({ ...a, isDefault: false })).concat(newAddr);
      } else {
        updatedAddresses = [...existing, newAddr];
      }
    }

    const updatedUser = { ...current, addresses: updatedAddresses };
    setStorageItem(AUTH_USER_KEY, updatedUser);
    return updatedUser;
  },

  deleteAddress: (addressId) => {
    const current = getStorageItem(AUTH_USER_KEY, DEFAULT_USER);
    const updatedAddresses = (current.addresses || []).filter(a => a.id !== addressId);
    const updatedUser = { ...current, addresses: updatedAddresses };
    setStorageItem(AUTH_USER_KEY, updatedUser);
    return updatedUser;
  },

  markNotificationsAsRead: () => {
    const current = getStorageItem(AUTH_USER_KEY, DEFAULT_USER);
    const updatedNotifs = (current.notifications || []).map(n => ({ ...n, read: true }));
    const updatedUser = { ...current, notifications: updatedNotifs };
    setStorageItem(AUTH_USER_KEY, updatedUser);
    return updatedUser;
  }
};
