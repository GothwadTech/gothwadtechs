export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'Schools & Education'
    | 'Restaurants & Food'
    | 'Retail & Local Shops'
    | 'Business & Enterprise'
    | 'Custom Development'
    | 'Sovereign Tech'
    | 'Web Development'
    | 'Mobile Apps'
    | 'AI & Automation'
    | 'Cloud & Security'
    | 'UI/UX Design';
  icon: string;
  description: string;
  features: string[];
  deliverables: string[];
  estimatedTimeline: string;
  startingPriceInr: string;
  popular?: boolean;
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category:
    | 'Schools & Education'
    | 'Restaurants & Hospitality'
    | 'Retail & Local Shops'
    | 'Business & Enterprise'
    | 'Sovereign Tech'
    | 'Flagship Products'
    | 'Mobile Apps'
    | 'Web Platforms'
    | 'Fintech & Cloud'
    | 'Sovereign Systems';
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  titleBadge: string;
  tier: 'Executive Leadership' | 'Core Engineering & Deep Tech';
  bio: string;
  experience: string;
  focusArea: string;
  keySkills: string[];
  initials: string;
  accentGradient: string;
  avatarUrl?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  projectType: string;
  quote: string;
  date: string;
  verified: boolean;
  avatarText: string;
}

export interface BrowserBenchmark {
  metric: string;
  unit: string;
  gothwad: number | string;
  chrome: number | string;
  firefox: number | string;
  edge: number | string;
  description: string;
  winner: 'gothwad';
  advantageText: string;
}

export interface ClientInquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  featuresSelected: string[];
  budgetTier: string;
  timeline: string;
  description: string;
  preferredContact: 'WhatsApp' | 'Email' | 'Phone Call';
  calculatedEstimate: {
    minInr: number;
    maxInr: number;
    timelineWeeks: number;
  };
  submittedAt: string;
  status: 'Received' | 'Under Review' | 'Consultation Scheduled';
}
