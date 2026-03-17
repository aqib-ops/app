import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const caseStudies = [
  {
    slug: 'd2c-order-notifications',
    title: 'D2C Order Notifications',
    industry: 'E-commerce',
    impact: 'Reduced support response lag by 62%.',
    image: '/project-shopify.jpg',
    summary:
      'Connected Shopify orders to Slack and fulfillment boards with conditional alerting for high-value orders.',
    tags: [
      'n8n automation',
      'Shopify automation',
      'ecommerce workflow automation',
      'order notification workflow',
      'Slack integration',
    ],
  },
  {
    slug: 'ecommerce-order-tracking-bot',
    title: 'E-commerce Order Tracking Bot',
    industry: 'E-commerce',
    impact: 'Order status tickets dropped by 55%.',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737870/Order_Tracking_gdlvq8.png',
    summary:
      'Built a tracking bot that syncs fulfillment events and delivers live order updates across WhatsApp, email, and support tools.',
    tags: [
      'ecommerce order automation',
      'whatsapp automation',
      'n8n order tracking',
      'customer support automation',
      'webhooks',
    ],
  },
  {
    slug: 'lead-qualification-pipeline',
    title: 'Lead Qualification Pipeline',
    industry: 'B2B SaaS',
    impact: 'Qualified leads surfaced in under 60 seconds.',
    image: '/project-leads.jpg',
    summary:
      'Built capture, enrichment, scoring, and routing automation tied directly to CRM ownership rules.',
    tags: [
      'lead routing automation',
      'CRM workflow automation',
      'B2B SaaS automation',
      'sales pipeline automation',
      'automated lead qualification',
    ],
  },
  {
    slug: 'ai-sales-agent',
    title: 'AI Sales Agent',
    industry: 'Revenue Ops',
    impact: 'First response time cut to 2 minutes.',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737866/AI_Sales_Agent_t1mjl6.png',
    summary:
      'Deployed an AI sales agent that qualifies inbound leads, drafts outreach, and syncs CRM tasks with full context.',
    tags: [
      'ai sales agent',
      'n8n ai automation',
      'crm automation',
      'lead qualification',
      'gpt chatbot',
    ],
  },
  {
    slug: 'content-approval-engine',
    title: 'Content Approval Engine',
    industry: 'Marketing Operations',
    impact: 'Saved 35+ team hours every month.',
    image: '/project-content.jpg',
    summary:
      'Introduced approval chains, publishing checks, and channel-specific scheduling across campaigns.',
    tags: [
      'marketing automation workflow',
      'content approval automation',
      'publishing workflow automation',
      'campaign operations automation',
      'workflow automations',
    ],
  },
  {
    slug: 'whatsapp-ai-bot',
    title: 'WhatsApp AI Support Bot',
    industry: 'Customer Support',
    impact: '48% of repetitive queries resolved instantly.',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737834/WhatsApp_AI_Bot_iepyts.png',
    summary:
      'Launched a WhatsApp AI bot that answers FAQs, captures order context, and escalates to agents with full history.',
    tags: [
      'whatsapp ai bot',
      'ai chatbot automation',
      'support automation',
      'n8n workflow automation',
      'messenger bot',
    ],
  },
];

export function CaseStudiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Case Studies | Aqib Ops Automation Results',
    'See real workflow automation case studies from Aqib Ops across e-commerce, B2B SaaS, and marketing operations with measurable outcomes.',
    {
      keywords: [
        'workflow automation case studies',
        'n8n automation examples',
        'n8n automation case study',
        'whatsapp automation case study',
        'ai sales agent case study',
        'ecommerce order tracking bot',
        'sales ops automation results',
        'e-commerce automation success',
        'business process automation',
        'automation workflow examples',
        'marketing workflow automation',
        'lead management automation',
      ],
      path: '/case-studies',
      image: '/project-shopify.jpg',
    }
  );
  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">Case Studies</p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Real projects. Measurable operational wins.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/[0.72]" data-animate="fade-up" data-delay="0.08">
            Here are examples of how we turn manual, error-prone tasks into reliable systems with
            clear business impact.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="space-y-10" data-animate="stagger">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.title} className="paper-card overflow-hidden" data-animate-child>
                <div className="grid gap-0 lg:grid-cols-[0.52fr_0.48fr]">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full min-h-[260px] w-full object-cover"
                    data-animate="parallax"
                    loading="lazy"
                  />
                  <div className="p-7 md:p-9">
                    <p className="eyebrow text-black/[0.45]">{caseStudy.industry}</p>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-black">
                      {caseStudy.title}
                    </h2>
                    <p className="mt-4 text-black/70">{caseStudy.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span key={`${caseStudy.title}-${tag}`} className="chip chip-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black">
                      Outcome: {caseStudy.impact}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        to={`/case-studies/${caseStudy.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.7]"
                      >
                        View Full Case Study <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.7]"
                      >
                        Build Similar Workflow <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
