export const coupons = [
  {
    code: 'SAVE10',
    title: '10% Off Sitewide',
    description: 'Valid on all orders above $50. Max discount $30.',
    type: 'percentage',
    value: 10,
    minOrder: 50,
    maxDiscount: 30
  },
  {
    code: 'WELCOME15',
    title: '15% Off Your First Order',
    description: 'Exclusive welcome discount for new shoppers on orders over $60.',
    type: 'percentage',
    value: 15,
    minOrder: 60,
    maxDiscount: 45
  },
  {
    code: 'FASHION20',
    title: '20% Off Fashion & Footwear',
    description: 'Applicable on fashion, apparel and footwear for orders over $80.',
    type: 'percentage',
    value: 20,
    category: 'fashion',
    minOrder: 80,
    maxDiscount: 60
  },
  {
    code: 'NOVA50',
    title: 'Flat $50 Off',
    description: 'Get $50 off instantly on premium orders above $250.',
    type: 'flat',
    value: 50,
    minOrder: 250
  },
  {
    code: 'FREESHIP',
    title: 'Free Express Shipping',
    description: 'Free standard and express delivery with no minimum threshold.',
    type: 'shipping',
    value: 0,
    minOrder: 0
  }
];
