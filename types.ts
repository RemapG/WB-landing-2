
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  artist: string;
  track: string;
  genre: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

// Fix: Added Product interface required by Catalog.tsx to resolve member not found error
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}
