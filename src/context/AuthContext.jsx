import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    // Restore session on startup
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setAuthLoading(false);
  }, []);

  const login = async (email, password, rememberMe = true) => {
    const res = await authService.login(email, password, rememberMe);
    if (res.success) {
      setUser(res.user);
      addToast(`Welcome back, ${res.user.fullName}!`, 'success');
      return { success: true };
    } else {
      addToast(res.error, 'error');
      return { success: false, error: res.error };
    }
  };

  const signup = async (userData) => {
    const res = await authService.signup(userData);
    if (res.success) {
      setUser(res.user);
      addToast(`Account created! Welcome, ${res.user.fullName}.`, 'success');
      return { success: true };
    } else {
      addToast(res.error, 'error');
      return { success: false, error: res.error };
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    addToast('You have been safely logged out.', 'info');
  };

  const updateProfile = (data) => {
    const updated = authService.updateProfile(data);
    if (updated) {
      setUser(updated);
      addToast('Profile updated successfully!', 'success');
    }
  };

  const saveAddress = (addr) => {
    const updated = authService.saveAddress(addr);
    setUser(updated);
    addToast('Address saved successfully!', 'success');
  };

  const deleteAddress = (addrId) => {
    const updated = authService.deleteAddress(addrId);
    setUser(updated);
    addToast('Address removed.', 'info');
  };

  const markNotificationsAsRead = () => {
    const updated = authService.markNotificationsAsRead();
    setUser(updated);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    authLoading,
    login,
    signup,
    logout,
    updateProfile,
    saveAddress,
    deleteAddress,
    markNotificationsAsRead
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
