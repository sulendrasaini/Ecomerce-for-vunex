import { initialOrders } from '../data/orders';
import { getStorageItem, setStorageItem } from '../utils/storage';

const ORDERS_KEY = 'novatrend_orders_history';

export const orderService = {
  getOrders: () => {
    return getStorageItem(ORDERS_KEY, initialOrders);
  },

  getOrderById: (id) => {
    const list = getStorageItem(ORDERS_KEY, initialOrders);
    return list.find(o => o.id === id) || null;
  },

  createOrder: (orderData) => {
    const list = getStorageItem(ORDERS_KEY, initialOrders);
    const orderId = 'NT-' + Math.floor(10000 + Math.random() * 90000);
    const trackingNumber = 'TRK-NV' + Math.floor(1000000 + Math.random() * 9000000);

    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      status: 'Order Confirmed',
      estimatedDelivery: 'Expected in 3-4 business days',
      trackingNumber,
      carrier: 'Nova Express Priority',
      paymentMethod: orderData.paymentMethod || 'Credit Card',
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      subtotal: orderData.subtotal,
      discount: orderData.discount || 0,
      shipping: orderData.shipping || 0,
      tax: orderData.tax || 0,
      total: orderData.total,
      shippingAddress: orderData.shippingAddress,
      items: orderData.items,
      timeline: [
        {
          status: 'Order Confirmed',
          date: 'Just now',
          description: 'Order placed successfully. Processing payment and packing.',
          completed: true
        },
        {
          status: 'Packed',
          date: 'Pending',
          description: 'Awaiting packing and verification.',
          completed: false
        },
        {
          status: 'Shipped',
          date: 'Pending',
          description: 'Courier handover in progress.',
          completed: false
        },
        {
          status: 'Out for Delivery',
          date: 'Pending',
          description: 'Local dispatch to delivery address.',
          completed: false
        },
        {
          status: 'Delivered',
          date: 'Pending',
          description: 'Delivery confirmation.',
          completed: false
        }
      ]
    };

    const updated = [newOrder, ...list];
    setStorageItem(ORDERS_KEY, updated);
    return newOrder;
  }
};
