export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface InsulationType {
  id: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  href: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
