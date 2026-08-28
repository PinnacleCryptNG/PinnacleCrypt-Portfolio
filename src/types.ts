export interface ArticleItem {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  url: string;
  date: string;
  readTime?: string;
  category: string;
  categories: string[];
  image?: string;
  coverGradient?: string;
  coverPattern?: string;
  tags?: string[];
  platform?: 'medium' | 'x' | 'devto' | 'mirror';
  platformPublication?: string;
  claps?: string;
  metrics?: {
    views?: string;
    likes?: string;
    retweets?: string;
    bookmarks?: string;
    claps?: string;
  };
}

export interface EventItem {
  id: string;
  name: string;
  edition?: string;
  location: string;
  country: string;
  attendees: string;
  walletsCreated?: string;
  role: string;
  date: string;
  highlight: string;
  description: string;
  image?: string;
  notionUrl?: string;
  eventUrl?: string;
  stats: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  accentColor: string;
}

export interface ProductLink {
  label: 'Live' | 'Live App' | 'Prompted' | 'Dev.to' | 'DevPost' | 'GitHub' | 'Docs';
  url: string;
  type: 'live' | 'article' | 'hackathon' | 'repo';
}

export interface ShippedProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  expected: string;
  built: string;
  category: string;
  stack: string[];
  highlights: string[];
  links: ProductLink[];
  featured: boolean;
  status: string;
  year: string;
  date?: string;
  badge: string;
  color: string;
  coverGradient?: string;
  coverPattern?: string;
  liveUrl?: string;
  codeUrl?: string;
  domain?: string;
  projectType?: 'client' | 'hackathon' | 'product';
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  accomplishments: string[];
  tags: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Award' | 'Certificate' | 'Medal' | 'Grant' | 'Recognition';
  description: string;
  proofUrl?: string;
  badge?: string;
  highlight?: string;
}

export interface CoreStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export type PageView = 'home' | 'create' | 'organize' | 'ship' | 'about' | 'contact';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  interest: 'Content Creation' | 'Event Speaking & Hosting' | 'Product Collaboration' | 'Consulting' | 'Other';
}
