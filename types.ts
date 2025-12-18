
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

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}
