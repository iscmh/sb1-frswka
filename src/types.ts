export interface Creative {
  platform: string;
  type: 'image' | 'video';
  url: string;
}

export interface Offer {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  payout: number;
  commission: number;
  isRecurring: boolean;
  guidelines: string[];
  featured: boolean;
  niche: 'info' | 'saas';
  creatives: {
    organic: Creative[];
    paid: Creative[];
  };
}