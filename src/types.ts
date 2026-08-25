export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  headline: string;
  metrics: {
    label: string;
    value: string;
    positive: boolean;
  }[];
  beforeConversion: string;
  afterConversion: string;
  roas: string;
  testimonial: string;
  author: string;
  role: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceDetail {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlights: string[];
  color: string;
}
