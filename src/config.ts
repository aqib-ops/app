// Site Configuration
// Aqib Ops - Automation Studio

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Aqib Ops - Automation Studio",
  siteDescription: "We build workflows that run while you sleep. Automation solutions for small businesses and e-commerce using n8n and Make.com.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "AUTOMATE",
  heroImage: "/hero-portrait.jpg",
  heroImageAlt: "Aqib Ops - Automation Expert",
  overlayText: "Built by Aqib Ops",
  brandName: "Aqib Ops",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section - Workflow Lab
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "From messy tasks",
  titleLine2: "to clean, running systems.",
  description: "We map your process, build the logic, and hand over a workflow you can monitor and evolve. No black boxes—just reliable automation that works.",
  portfolioImages: [
    { src: "/workspace-desk.jpg", alt: "Operations desk with a live workflow map on screen" },
    { src: "/impact-hands-tasks.jpg", alt: "Daily task workflow planning and execution setup" },
    { src: "/principle-map.jpg", alt: "Process mapping session before automation build" },
    { src: "/capability-cleanup.jpg", alt: "Manual records prepared for cleanup and sync automation" },
    { src: "/principle-monitor.jpg", alt: "Automation monitoring dashboard with live health metrics" },
  ],
  accentText: "n8n + Make Certified",
};

// Featured Projects Section - Selected Builds
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Selected Builds",
  titleRegular: "Recent",
  titleItalic: "Workflows",
  viewAllText: "View All Projects",
  viewAllHref: "#work",
  viewProjectText: "View Details",
  projects: [
    {
      id: 1,
      title: "Order-to-Slack Notifications",
      category: "E-commerce",
      year: "2024",
      image: "/capability-integrations.jpg",
      description: "Real-time alerts + inventory sync for a Shopify store. Orders flow instantly to Slack with customer details and fulfillment status.",
    },
    {
      id: 2,
      title: "Lead Scoring Pipeline",
      category: "CRM Automation",
      year: "2024",
      image: "/code-nodes-ui.jpg",
      description: "Capture → enrich → score → notify sales in under 60 seconds. Automated lead qualification that never misses a hot prospect.",
    },
    {
      id: 3,
      title: "Content Calendar Automation",
      category: "Marketing",
      year: "2024",
      image: "/capability-scheduling.jpg",
      description: "Draft generation, approvals, and publishing hooks. Your content pipeline running on autopilot across all channels.",
    },
  ],
};

// Services Section - Capabilities
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Integrations, alerts,",
  titleLine2Italic: "scheduling, data cleanup.",
  description: "End-to-end automation solutions for e-commerce, CRM, support, and marketing operations. Built with n8n and Make.com.",
  services: [
    {
      iconName: "Workflow",
      title: "Workflow Design",
      description: "Map your processes and build automated workflows that eliminate repetitive tasks.",
    },
    {
      iconName: "Plug",
      title: "App Integrations",
      description: "Connect Shopify, Slack, Notion, Airtable, Google Sheets, and 500+ other tools.",
    },
    {
      iconName: "Bell",
      title: "Smart Alerts",
      description: "Get notified where you work—Slack, email, SMS—when things need attention.",
    },
    {
      iconName: "Sparkles",
      title: "Data Cleanup",
      description: "Automated data formatting, validation, and synchronization across platforms.",
    },
  ],
};

// Why Choose Me Section - Process & Stats
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Our Process",
  titleRegular: "A clear path",
  titleItalic: "from chaos to calm.",
  statsLabel: "By The Numbers",
  stats: [
    { value: 50, suffix: "+", label: "Workflows Built" },
    { value: 10, suffix: "k+", label: "Hours Saved" },
    { value: 99, suffix: "%", label: "Uptime" },
    { value: 24, suffix: "h", label: "Avg Response" },
  ],
  featureCards: [
    {
      image: "/principle-map.jpg",
      imageAlt: "Workflow discovery and process mapping",
      title: "Discover",
      description: "Map the repetitive work. We audit your processes and identify automation opportunities.",
    },
    {
      image: "/principle-build.jpg",
      imageAlt: "Workflow design and logic setup",
      title: "Design",
      description: "Build the logic + fail-safes. Robust workflows that handle edge cases gracefully.",
    },
  ],
  wideImage: "/impact-hands-tasks.jpg",
  wideImageAlt: "Automation operations desk with active workflows",
  wideTitle: "Launch & Evolve",
  wideDescription: "Deploy with monitoring. Iterate as you grow. Your automation scales with your business.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What They",
  titleItalic: "Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Ops Lead, D2C Brand",
      image: "/testimonial-portrait.jpg",
      quote: "Aqib turned our daily 2-hour data routine into a 5-minute check. Reliable, documented, and easy to tweak.",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Founder, TechStart",
      image: "/hero-portrait.jpg",
      quote: "The best investment we made this year. Our team finally has time to focus on growth instead of manual tasks.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      image: "/principle-build.jpg",
      quote: "From order processing to inventory alerts—everything runs smoothly. Aqib Ops delivered beyond expectations.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Still doing it",
  titleItalic: "manually?",
  ctaText: "Have a unique workflow challenge?",
  ctaButtonText: "Start a project",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "What tools do you use for automation?",
      answer: "We primarily use n8n and Make.com (formerly Integromat) depending on your needs. Both are powerful, visual workflow builders that connect 500+ apps. We also work with Zapier, Airtable Automations, and custom scripts when needed.",
    },
    {
      id: "2",
      question: "How long does a typical project take?",
      answer: "Simple workflows (1-2 integrations) can be delivered in 3-5 days. Complex multi-step automations typically take 1-2 weeks. We'll give you a clear timeline during our discovery call.",
    },
    {
      id: "3",
      question: "Do I need technical knowledge to use the workflows?",
      answer: "Not at all. We design workflows that are easy to monitor and maintain. You'll get documentation and a handoff session. If something breaks, we're here to help.",
    },
    {
      id: "4",
      question: "What does the workflow audit include?",
      answer: "Our free audit identifies 3-5 automation opportunities in your current processes. You'll get a prioritized list with estimated time savings and implementation roadmap.",
    },
    {
      id: "5",
      question: "How much does automation cost?",
      answer: "Pricing depends on complexity. Simple workflows start at $500. We offer packages for ongoing maintenance and support. Book a call for a custom quote.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "AQIB OPS",
  contactLabel: "Get in Touch",
  email: "AqibOpscontact@gmail.com",
  locationText: "Remote-first\nServing clients worldwide",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Twitter", href: "https://x.com/AqibOps", label: "Twitter" },
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/aqibops", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:AqibOpscontact@gmail.com", label: "Email" },
  ],
  tagline: "Built with n8n, Make,\nand too much coffee.",
  copyright: "(c) 2026 Aqib Ops Studio. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

