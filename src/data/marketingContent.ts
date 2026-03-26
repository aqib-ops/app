export interface ServiceLandingContent {
  slug: string;
  title: string;
  subtitle: string;
  intent: string;
  problem: string;
  solution: string;
  ctaLabel: string;
  ctaHref: string;
  keywords: string[];
  stack: string[];
  outcomes: string[];
  relatedCaseStudySlug: string;
}

export const serviceLandingPages: ServiceLandingContent[] = [
  {
    slug: 'lead-follow-up-automation',
    title: 'Lead Capture & Follow-Up System',
    subtitle:
      'For teams that want every inbound lead captured, answered, and followed up automatically.',
    intent:
      'Businesses losing opportunities because first response and follow-up depend on manual effort.',
    problem:
      'Leads arrive from forms, ads, or chat and sit too long before anyone responds or follows up.',
    solution:
      'We connect your intake channels, CRM, and messaging tools so every lead gets captured, qualified, and followed up automatically.',
    ctaLabel: 'Build My Lead Follow-Up System',
    ctaHref: '/contact',
    keywords: [
      'lead capture automation service',
      'lead follow up automation',
      'inbound lead response automation',
      'crm follow up system',
    ],
    stack: ['Web forms', 'CRM', 'OpenAI', 'n8n', 'WhatsApp'],
    outcomes: [
      'New leads captured and routed instantly',
      'Automated first response and reminder sequences',
      'Full lead context synced before handoff to sales',
    ],
    relatedCaseStudySlug: 'ai-sales-agent',
  },
  {
    slug: 'shopify-automation',
    title: 'Shopify Automation Services',
    subtitle: 'For stores that need reliable order, inventory, and support workflows.',
    intent: 'Shopify owners looking for workflow automation and operational speed.',
    problem:
      'Most stores lose time to manual order updates, late inventory checks, and fragmented notifications.',
    solution:
      'We connect Shopify with your ops stack so every order event, stock change, and support trigger runs automatically.',
    ctaLabel: 'Automate My Shopify Ops',
    ctaHref: '/contact',
    keywords: [
      'shopify automation service',
      'shopify order workflow automation',
      'shopify operations automation',
      'shopify n8n automation',
    ],
    stack: ['Shopify', 'n8n', 'Slack', 'Airtable', 'Google Sheets'],
    outcomes: [
      'Real-time order routing to fulfillment channels',
      'Low-stock alerts before stockouts happen',
      'Automated support updates based on order status',
    ],
    relatedCaseStudySlug: 'd2c-order-notifications',
  },
  {
    slug: 'crm-automation',
    title: 'CRM Automation Services',
    subtitle: 'For teams that want faster lead response and cleaner pipeline execution.',
    intent: 'Sales teams searching for CRM workflow automation and lead routing.',
    problem:
      'Leads get lost between forms, enrichment tools, and CRMs when ownership and priority are not automated.',
    solution:
      'We design lead capture, enrichment, scoring, and assignment workflows tied to your CRM and sales rules.',
    ctaLabel: 'Fix My CRM Pipeline',
    ctaHref: '/contact',
    keywords: [
      'crm automation service',
      'lead routing automation',
      'sales pipeline automation consultant',
      'crm workflow automation agency',
    ],
    stack: ['HubSpot', 'Pipedrive', 'Salesforce', 'n8n', 'Clearbit'],
    outcomes: [
      'Leads assigned in seconds with owner logic',
      'Priority-based notifications for high-intent accounts',
      'Pipeline hygiene with duplicate prevention and sync checks',
    ],
    relatedCaseStudySlug: 'lead-qualification-pipeline',
  },
  {
    slug: 'support-automation',
    title: 'Support Automation Services',
    subtitle: 'For support teams that need SLA-safe triage and escalation workflows.',
    intent: 'Support leaders looking to automate triage, routing, and escalation.',
    problem:
      'Manual triage slows down first response times and increases SLA breaches during ticket spikes.',
    solution:
      'We automate ticket classification, routing, alerting, and follow-up loops across your support stack.',
    ctaLabel: 'Automate Support Triage',
    ctaHref: '/contact',
    keywords: [
      'support automation service',
      'ticket routing automation',
      'sla workflow automation',
      'helpdesk automation consultant',
    ],
    stack: ['Zendesk', 'Intercom', 'Slack', 'n8n', 'Notion'],
    outcomes: [
      'Faster first response and cleaner queue ownership',
      'Automated escalation for urgent and aging tickets',
      'Daily support health summaries for ops leaders',
    ],
    relatedCaseStudySlug: 'content-approval-engine',
  },
  {
    slug: 'ai-agent-ops',
    title: 'AI Agent Operations',
    subtitle: 'For teams deploying agents with production guardrails and reliability.',
    intent: 'Teams searching for safe AI agent orchestration in production workflows.',
    problem:
      'Agent projects fail when prompts are not connected to business logic, approvals, and fallback paths.',
    solution:
      'We orchestrate agent workflows with validation layers, confidence checks, and human review gates.',
    ctaLabel: 'Launch AI Agent Ops',
    ctaHref: '/contact',
    keywords: [
      'ai agent orchestration',
      'ai ops workflow automation',
      'production ai automation',
      'human in the loop ai workflows',
    ],
    stack: ['OpenAI', 'n8n', 'Make', 'Slack', 'Postgres'],
    outcomes: [
      'Production-safe agent actions with policy checks',
      'Fallback routing when confidence is low',
      'Audit-ready logs for every automated decision',
    ],
    relatedCaseStudySlug: 'lead-qualification-pipeline',
  },
];

export interface CaseStudyContent {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  stack: string[];
  workflowDiagram: string[];
  beforeMetrics: string[];
  afterMetrics: string[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
  relatedServiceSlug: string;
  image: string;
  keywords: string[];
}

export const caseStudyDetails: CaseStudyContent[] = [
  {
    slug: 'd2c-order-notifications',
    title: 'D2C Order Notifications Workflow',
    industry: 'E-commerce',
    summary:
      'Connected Shopify orders to Slack and fulfillment boards with conditional alerting for high-value orders.',
    problem:
      'Order confirmations and fulfillment handoffs were manual, causing delayed customer updates and support load.',
    stack: ['Shopify', 'n8n', 'Slack', 'Google Sheets'],
    workflowDiagram: [
      'New order event captured from Shopify',
      'Order value and fulfillment tags checked',
      'Slack channel + fulfillment board updated automatically',
      'Escalation alert sent for priority orders',
    ],
    beforeMetrics: [
      'Average support response lag: 8.5 hours',
      'Manual status updates per day: 40+',
      'Missed high-value order alerts: frequent',
    ],
    afterMetrics: [
      'Support response lag reduced by 62%',
      'Manual status updates cut by 85%',
      'High-value order alerts delivered in real time',
    ],
    testimonialQuote:
      'Our team stopped chasing order updates manually. Everything now lands where it should, instantly.',
    testimonialName: 'Sarah Chen',
    testimonialRole: 'Ops Lead, D2C Brand',
    relatedServiceSlug: 'shopify-automation',
    image: '/project-shopify.jpg',
    keywords: [
      'shopify automation case study',
      'order notification workflow',
      'ecommerce automation results',
      'n8n automation',
      'workflow automation',
      'order automation',
      'webhooks',
    ],
  },
  {
    slug: 'lead-qualification-pipeline',
    title: 'Lead Qualification Pipeline Automation',
    industry: 'B2B SaaS',
    summary:
      'Built capture, enrichment, scoring, and routing automation tied directly to CRM ownership rules.',
    problem:
      'Inbound leads were reviewed manually, causing slow follow-up and inconsistent assignment quality.',
    stack: ['Web forms', 'n8n', 'CRM', 'Clearbit', 'Slack'],
    workflowDiagram: [
      'Lead captured from form and synced to CRM',
      'Company and contact enrichment completed',
      'Score calculated from intent and fit rules',
      'Owner assigned and follow-up alert pushed',
    ],
    beforeMetrics: [
      'Lead response window: up to 1 business day',
      'Manual qualification steps: 5 per lead',
      'Routing consistency: low',
    ],
    afterMetrics: [
      'Qualified leads surfaced in under 60 seconds',
      'Manual qualification steps cut by 80%',
      'Routing consistency improved across teams',
    ],
    testimonialQuote:
      'Lead handoff now feels instant. Sales only sees qualified opportunities with context included.',
    testimonialName: 'Marcus Johnson',
    testimonialRole: 'Founder, TechStart',
    relatedServiceSlug: 'crm-automation',
    image: '/project-leads.jpg',
    keywords: [
      'lead automation case study',
      'crm pipeline automation',
      'sales workflow results',
      'n8n automation',
      'sales automation',
      'crm automation',
      'workflow automation expert',
    ],
  },
  {
    slug: 'ai-sales-agent',
    title: 'AI Sales Agent for Lead Follow-up',
    industry: 'Revenue Ops',
    summary:
      'Deployed an AI sales agent to qualify inbound leads, draft outreach, and sync CRM tasks with full context.',
    problem:
      'Leads were followed up manually, creating slow response times and inconsistent qualification across reps.',
    stack: ['OpenAI', 'n8n', 'HubSpot', 'Gmail', 'Slack'],
    workflowDiagram: [
      'New lead captured from forms and ad sources',
      'Lead enrichment and score calculation applied',
      'AI agent drafts personalized outreach with context',
      'Human review gate or auto-send based on score',
      'CRM updated with tasks, notes, and follow-up schedule',
    ],
    beforeMetrics: [
      'First response time: 1 business day',
      'Manual follow-ups per rep: 35+ per day',
      'Qualification consistency: low',
    ],
    afterMetrics: [
      'First response time cut to 2 minutes',
      'Follow-up effort reduced by 65%',
      'Qualification consistency improved across teams',
    ],
    testimonialQuote:
      'We now respond faster than the competition with consistent messaging and complete CRM context.',
    testimonialName: 'Liam Patel',
    testimonialRole: 'Revenue Operations Lead',
    relatedServiceSlug: 'ai-agent-ops',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737866/AI_Sales_Agent_t1mjl6.png',
    keywords: [
      'ai sales agent',
      'n8n ai automation',
      'ai automation workflows',
      'crm automation',
      'chatgpt automation',
      'workflow automation',
    ],
  },
  {
    slug: 'content-approval-engine',
    title: 'Content Approval Engine for Marketing Ops',
    industry: 'Marketing Operations',
    summary:
      'Introduced approval chains, publishing checks, and channel-specific scheduling across campaigns.',
    problem:
      'Content approvals were scattered across chats and docs, causing launch delays and version confusion.',
    stack: ['Notion', 'n8n', 'Slack', 'Calendar APIs'],
    workflowDiagram: [
      'Draft submitted from planning board',
      'Approver sequence triggered by campaign type',
      'Publishing checks run before final status change',
      'Calendar and channel schedule updated automatically',
    ],
    beforeMetrics: [
      'Campaign delays due to approval bottlenecks',
      'No centralized approval audit trail',
      'High manual coordination load',
    ],
    afterMetrics: [
      '35+ hours saved per month',
      'Structured audit trail for every approval',
      'Predictable publishing cadence across channels',
    ],
    testimonialQuote:
      'Approvals became predictable and transparent. Our team now ships on time without constant reminders.',
    testimonialName: 'Emily Rodriguez',
    testimonialRole: 'Marketing Operations Manager',
    relatedServiceSlug: 'support-automation',
    image: '/project-content.jpg',
    keywords: [
      'content workflow automation',
      'marketing operations case study',
      'approval engine automation',
      'workflow automation',
      'marketing automation',
      'process automation',
      'n8n automation',
    ],
  },
  {
    slug: 'ecommerce-order-tracking-bot',
    title: 'E-commerce Order Tracking Bot',
    industry: 'E-commerce',
    summary:
      'Built a tracking bot that syncs fulfillment events and delivers live order updates across WhatsApp, email, and support tools.',
    problem:
      'Order status requests flooded support queues because fulfillment updates were not shared automatically with customers.',
    stack: ['Shopify', 'n8n', 'WhatsApp Business API', 'Gmail', 'Zendesk'],
    workflowDiagram: [
      'Fulfillment updates captured from Shopify webhooks',
      'Order status mapped to customer messaging templates',
      'WhatsApp + email updates sent automatically',
      'Support tickets enriched with live tracking context',
      'Fallback alerts triggered for delayed shipments',
    ],
    beforeMetrics: [
      'Order status tickets per week: 220+',
      'Average response time: 6 hours',
      'Manual tracking lookups: 45 per day',
    ],
    afterMetrics: [
      'Order status tickets reduced by 55%',
      'Average response time down to 45 minutes',
      'Automated tracking updates for 90% of orders',
    ],
    testimonialQuote:
      'Customers finally get updates without us chasing carriers. Support load dropped fast.',
    testimonialName: 'Hannah Lee',
    testimonialRole: 'Head of CX',
    relatedServiceSlug: 'shopify-automation',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737870/Order_Tracking_gdlvq8.png',
    keywords: [
      'ecommerce order tracking bot',
      'whatsapp automation',
      'n8n workflow automation',
      'order automation',
      'webhooks',
      'customer support automation',
    ],
  },
  {
    slug: 'whatsapp-ai-bot',
    title: 'WhatsApp AI Support Bot',
    industry: 'Customer Support',
    summary:
      'Launched a WhatsApp AI bot that answers FAQs, captures order context, and escalates to agents with full history.',
    problem:
      'Support agents spent most of their day answering repetitive questions without structured context or routing.',
    stack: ['WhatsApp Business API', 'n8n', 'OpenAI', 'Zendesk', 'Airtable'],
    workflowDiagram: [
      'WhatsApp message ingested and classified by intent',
      'AI bot responds with FAQs and gathers order data',
      'Context pushed into Zendesk for agent handoff',
      'Escalation rules triggered for priority keywords',
      'Daily support summaries generated for ops',
    ],
    beforeMetrics: [
      'First response time: 9 hours',
      'FAQ tickets in queue: 60% of volume',
      'Agent context collection: manual',
    ],
    afterMetrics: [
      '48% of repetitive queries resolved instantly',
      'First response time reduced by 70%',
      'Agent handoffs arrive with full context',
    ],
    testimonialQuote:
      'The bot now handles the repetitive load, and our agents focus on the tough tickets.',
    testimonialName: 'Omar Siddiqui',
    testimonialRole: 'Support Operations Manager',
    relatedServiceSlug: 'support-automation',
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773737834/WhatsApp_AI_Bot_iepyts.png',
    keywords: [
      'whatsapp ai bot',
      'ai chatbot automation',
      'support automation',
      'n8n workflow automation',
      'messenger bot',
      'notification automation',
    ],
  },
];

export interface ComparePageContent {
  slug: string;
  title: string;
  summary: string;
  idealFor: string;
  tradeoffs: string[];
  whyAqibOpsWins: string[];
}

export const comparePages: ComparePageContent[] = [
  {
    slug: 'aqib-ops',
    title: 'Aqib Ops Model',
    summary:
      'A focused execution partner that designs and ships production-ready workflows with clear ownership.',
    idealFor: 'Teams that need fast implementation with reliable operations.',
    tradeoffs: [
      'Requires stakeholder alignment on workflow scope early.',
      'Best results come from access to current stack and process details.',
    ],
    whyAqibOpsWins: [
      'Faster time-to-value than internal build cycles',
      'Lower operational risk than generic no-code setups',
      'Clear handover and monitoring guidance included',
    ],
  },
  {
    slug: 'hiring-in-house',
    title: 'Hiring In-House',
    summary:
      'Build a dedicated internal team to own automation strategy, implementation, and maintenance long-term.',
    idealFor: 'Large teams with ongoing automation demand and internal engineering bandwidth.',
    tradeoffs: [
      'Higher hiring and ramp-up costs',
      'Longer time before first production wins',
      'Risk if automation expertise is concentrated in one person',
    ],
    whyAqibOpsWins: [
      'Immediate execution without waiting for hiring cycles',
      'Battle-tested delivery patterns from cross-industry workflows',
      'No long onboarding lag before first launch',
    ],
  },
  {
    slug: 'generic-agency',
    title: 'Generic Agency',
    summary:
      'Broad service providers that often treat automation as one small part of a larger offering.',
    idealFor: 'Businesses seeking one vendor for many marketing and operations tasks.',
    tradeoffs: [
      'Automation depth can be shallow',
      'Less focus on runtime reliability and observability',
      'One-size-fits-all builds may miss your edge-case processes',
    ],
    whyAqibOpsWins: [
      'Workflow-first architecture with failover thinking',
      'Direct ownership over operations automation outcomes',
      'Tailored builds over broad generic templates',
    ],
  },
];

export interface IndustryPageContent {
  slug: string;
  title: string;
  subtitle: string;
  problems: string[];
  workflows: string[];
  kpis: string[];
  relatedServiceSlug: string;
}

export const industryPages: IndustryPageContent[] = [
  {
    slug: 'healthcare-automation',
    title: 'Healthcare Workflow Automation',
    subtitle: 'Reduce no-shows, speed intake, and keep patient operations consistent.',
    problems: [
      'Appointment reminders handled manually',
      'Intake information spread across tools',
      'Delayed escalations for urgent follow-ups',
    ],
    workflows: [
      'Patient reminder and confirmation workflow',
      'Intake form sync to CRM/EHR-supporting systems',
      'Urgency-based escalation alerts for care coordinators',
    ],
    kpis: ['No-show reduction', 'Faster intake processing', 'Lower coordination overhead'],
    relatedServiceSlug: 'support-automation',
  },
  {
    slug: 'ecommerce-automation',
    title: 'E-commerce Operations Automation',
    subtitle: 'Make order ops, fulfillment communication, and support updates run automatically.',
    problems: [
      'Manual order status communication',
      'Inventory and support updates disconnected',
      'High-value order alerts missed during busy periods',
    ],
    workflows: [
      'Order and fulfillment notification routing',
      'Inventory threshold alerts and sync workflows',
      'Support event triggers from shipment status changes',
    ],
    kpis: ['Ticket volume reduction', 'Faster fulfillment updates', 'Improved order visibility'],
    relatedServiceSlug: 'shopify-automation',
  },
  {
    slug: 'saas-automation',
    title: 'SaaS Revenue & Support Automation',
    subtitle: 'Speed lead handoff, reduce churn risk, and unify customer lifecycle operations.',
    problems: [
      'Leads wait too long before first response',
      'Customer risk signals are not surfaced early',
      'Lifecycle data is fragmented between product and CRM',
    ],
    workflows: [
      'Lead scoring and account routing automation',
      'Health score alerts to success and support teams',
      'Lifecycle status sync across CRM, support, and product systems',
    ],
    kpis: ['Lead response speed', 'Churn-risk visibility', 'Cleaner lifecycle reporting'],
    relatedServiceSlug: 'crm-automation',
  },
];

