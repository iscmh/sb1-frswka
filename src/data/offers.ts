import type { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: '1',
    name: 'Newsletter Affiliate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    originalPrice: 499,
    currentPrice: 499,
    payout: 249.50,
    commission: 50,
    isRecurring: false,
    featured: true,
    niche: 'info',
    guidelines: [
      'Only promote to marketing professionals and business owners',
      'No spam or misleading advertising',
      'Must use approved creative materials',
      'Minimum 30-day refund policy required',
    ],
    creatives: {
      organic: [
        {
          platform: 'Instagram',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500',
        },
        {
          platform: 'Facebook',
          type: 'video',
          url: 'https://example.com/video1.mp4',
        },
      ],
      paid: [
        {
          platform: 'Facebook Ads',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
        },
        {
          platform: 'Google Ads',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
        },
      ],
    },
  },
  {
    id: '2',
    name: 'RightReels',
    image: 'https://iili.io/2o5Vff4.png',
    originalPrice: 299,
    currentPrice: 50,
    payout: 25,
    commission: 50,
    isRecurring: true,
    featured: true,
    niche: 'saas',
    guidelines: [
      'Must have social media marketing experience',
      'No black hat techniques allowed',
      'Regular reporting required',
      'Minimum 14-day refund policy',
    ],
    creatives: {
      organic: [
        {
          platform: 'Instagram',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500',
        },
      ],
      paid: [
        {
          platform: 'Facebook Ads',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500',
        },
      ],
    },
  },
  {
    id: '3',
    name: 'Email Marketing Masterclass',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500',
    originalPrice: 399,
    currentPrice: 249,
    payout: 125,
    commission: 50,
    isRecurring: false,
    featured: false,
    niche: 'info',
    guidelines: [
      'Must be an experienced email marketer',
      'No purchased email lists',
      'Compliance with CAN-SPAM required',
      'Regular performance updates',
    ],
    creatives: {
      organic: [
        {
          platform: 'LinkedIn',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500',
        },
      ],
      paid: [
        {
          platform: 'LinkedIn Ads',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500',
        },
      ],
    },
  },
];