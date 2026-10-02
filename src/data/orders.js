export const initialOrders = [
  {
    id: 'NT-88219',
    date: '2026-09-28T14:32:00Z',
    status: 'Delivered',
    estimatedDelivery: 'Delivered on Oct 01, 2026',
    trackingNumber: 'TRK-NV9824103',
    carrier: 'Nova Express Logistics',
    paymentMethod: 'Credit Card (Visa ending 4242)',
    paymentStatus: 'Paid',
    subtotal: 189.98,
    discount: 18.99,
    shipping: 0,
    tax: 15.39,
    total: 186.38,
    shippingAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Seattle',
      state: 'WA',
      pincode: '98101',
      phone: '+1 (555) 382-9012'
    },
    items: [
      {
        id: 'prod-02',
        title: 'Air Max 270 React Atmosphere Shoes',
        brand: 'Nike',
        price: 129.99,
        quantity: 1,
        color: 'Pure White & Orange',
        size: 'US 10',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'prod-01',
        title: 'Essential Heavyweight Oversized Hoodie',
        brand: 'NovaTrend Essentials',
        price: 59.99,
        quantity: 1,
        color: 'Oatmeal Beige',
        size: 'L',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    timeline: [
      { status: 'Order Confirmed', date: 'Sep 28, 2026 - 02:32 PM', description: 'Your order has been verified and sent for fulfillment.', completed: true },
      { status: 'Packed', date: 'Sep 29, 2026 - 09:15 AM', description: 'Items securely packed and labeled at our central warehouse.', completed: true },
      { status: 'Shipped', date: 'Sep 29, 2026 - 06:40 PM', description: 'Package handed over to Nova Express Logistics.', completed: true },
      { status: 'Out for Delivery', date: 'Oct 01, 2026 - 08:30 AM', description: 'Courier agent is on the route to your delivery address.', completed: true },
      { status: 'Delivered', date: 'Oct 01, 2026 - 01:15 PM', description: 'Package handed directly to customer. Signed by Alex.', completed: true }
    ]
  },
  {
    id: 'NT-77402',
    date: '2026-09-30T10:15:00Z',
    status: 'Shipped',
    estimatedDelivery: 'Expected by Oct 03, 2026',
    trackingNumber: 'TRK-NV7741098',
    carrier: 'FedEx Priority',
    paymentMethod: 'UPI / Instant Bank Transfer',
    paymentStatus: 'Paid',
    subtotal: 349.99,
    discount: 35.00,
    shipping: 0,
    tax: 28.35,
    total: 343.34,
    shippingAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Seattle',
      state: 'WA',
      pincode: '98101',
      phone: '+1 (555) 382-9012'
    },
    items: [
      {
        id: 'prod-03',
        title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
        brand: 'Sony',
        price: 349.99,
        quantity: 1,
        color: 'Midnight Black',
        size: 'Standard',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    timeline: [
      { status: 'Order Confirmed', date: 'Sep 30, 2026 - 10:15 AM', description: 'Order confirmed and payment authorized.', completed: true },
      { status: 'Packed', date: 'Sep 30, 2026 - 04:20 PM', description: 'Premium protective packaging applied.', completed: true },
      { status: 'Shipped', date: 'Oct 01, 2026 - 07:45 AM', description: 'Departed regional sorting hub in transit to destination.', completed: true },
      { status: 'Out for Delivery', date: 'Expected Oct 03, 2026', description: 'Package will be assigned to a local courier.', completed: false },
      { status: 'Delivered', date: 'Expected Oct 03, 2026', description: 'Delivery confirmation upon receipt.', completed: false }
    ]
  },
  {
    id: 'NT-61934',
    date: '2026-10-01T11:45:00Z',
    status: 'Order Confirmed',
    estimatedDelivery: 'Expected by Oct 04, 2026',
    trackingNumber: 'TRK-NV6193400',
    carrier: 'Nova Express Logistics',
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    subtotal: 104.98,
    discount: 10.50,
    shipping: 0,
    tax: 8.50,
    total: 102.98,
    shippingAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Seattle',
      state: 'WA',
      pincode: '98101',
      phone: '+1 (555) 382-9012'
    },
    items: [
      {
        id: 'prod-06',
        title: 'Classic Polarized Aviator Sunglasses',
        brand: 'Ray-Ban',
        price: 89.99,
        quantity: 1,
        color: 'Gold & Green Polarized',
        size: 'Standard (58mm)',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'prod-30',
        title: 'Niacinamide 10% + Zinc 1% Oil Control Serum',
        brand: 'The Ordinary',
        price: 14.50,
        quantity: 1,
        color: 'Dropper Bottle',
        size: '30ml',
        image: 'https://imgs.search.brave.com/lrJq5BtXg9kJI298-hPGIXEu3G3ylGwmSeN0XhmhVTM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE4YWxnSmg1QUwu/anBn'
      }
    ],
    timeline: [
      { status: 'Order Confirmed', date: 'Oct 01, 2026 - 11:45 AM', description: 'Order registered successfully in our queue.', completed: true },
      { status: 'Packed', date: 'In Progress', description: 'Warehouse picking and safety inspection.', completed: false },
      { status: 'Shipped', date: 'Pending', description: 'Awaiting courier pickup.', completed: false },
      { status: 'Out for Delivery', date: 'Pending', description: 'Awaiting local route assignment.', completed: false },
      { status: 'Delivered', date: 'Expected Oct 04, 2026', description: 'Delivery to your door.', completed: false }
    ]
  }
];
