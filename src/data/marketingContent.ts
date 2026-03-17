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

export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedOn: string;
  readTime: string;
  keywords: string[];
  intent: string;
  topics: string[];
  takeaways: string[];
  ctaLabel: string;
  ctaHref: string;
  sections: Array<{ title: string; copy: string }>;
  relatedServiceSlug: string;
}

export const insightPosts: InsightPost[] = [
  {
    slug: 'automate-lead-follow-up-with-n8n',
    title: 'Lead Follow-Up Automation With n8n: A 7-Step Revenue Workflow',
    excerpt:
      'A practical system to capture, enrich, score, route, and follow up leads with SLA-safe reminders and clean ownership.',
    publishedOn: '2026-03-05',
    readTime: '8 min read',
    keywords: [
      'lead follow up automation',
      'n8n lead routing workflow',
      'crm lead scoring automation',
      'sales ops automation playbook',
    ],
    intent: 'For sales and revenue ops teams who need faster response times and reliable lead ownership.',
    topics: ['Lead routing', 'CRM scoring', 'SLA follow-up'],
    takeaways: [
      'A repeatable 7-step lead routing workflow you can ship in days.',
      'Rules for enrichment, scoring, and owner assignment that prevent missed follow-ups.',
      'SLA-aware reminders and escalation paths that protect response speed.',
    ],
    ctaLabel: 'Explore CRM Automation',
    ctaHref: '/crm-automation',
    sections: [
      {
        title: 'Unify Lead Intake',
        copy:
          'Consolidate forms, chat, and ad sources into a single intake so routing rules stay deterministic and consistent.',
      },
      {
        title: 'Enrich Before You Score',
        copy:
          'Add company size, intent, and fit signals before scoring so owners receive context, not noise.',
      },
      {
        title: 'Score With Clear Thresholds',
        copy:
          'Define MQL and SQL thresholds, weight signals by intent, and update the score whenever key events occur.',
      },
      {
        title: 'Route Owners With Context',
        copy:
          'Assign by territory, segment, or existing account owner. Include score and context in the first alert.',
      },
      {
        title: 'Build SLA-Aware Follow-Ups',
        copy:
          'Trigger reminders at fixed intervals, escalate when SLAs are at risk, and stop sequences once a response is logged.',
      },
      {
        title: 'Close the Loop With Attribution',
        copy:
          'Log outcomes back to the CRM and capture source-to-revenue data for continuous scoring improvements.',
      },
    ],
    relatedServiceSlug: 'crm-automation',
  },
  {
    slug: 'support-triage-automation-playbook',
    title: 'Support Triage Automation Playbook: SLA-Safe Routing',
    excerpt:
      'Design routing rules, urgency signals, and escalation paths that keep first response predictable and queues clean.',
    publishedOn: '2026-03-05',
    readTime: '7 min read',
    keywords: [
      'support triage automation',
      'ticket routing workflow',
      'sla escalation automation',
      'support ops playbook',
    ],
    intent: 'For support leaders who want SLA-safe triage without hiring more agents.',
    topics: ['Ticket triage', 'Escalation', 'Queue health'],
    takeaways: [
      'A risk-tiered classification model that prevents noisy priorities.',
      'Capacity-aware routing and escalation rules to handle spikes.',
      'Daily queue health reporting so leads stay proactive.',
    ],
    ctaLabel: 'Explore Support Automation',
    ctaHref: '/support-automation',
    sections: [
      {
        title: 'Define Risk Tiers, Not Just Categories',
        copy:
          'Not every urgent keyword is high-risk. Blend urgency, account tier, and outage indicators for better prioritization.',
      },
      {
        title: 'Classify With Signals That Matter',
        copy:
          'Combine sentiment, product area, SLA tier, and historical issues so triage decisions are consistent.',
      },
      {
        title: 'Route With Capacity Awareness',
        copy:
          'Routing should account for queue pressure and ownership, not only category labels.',
      },
      {
        title: 'Escalate With Policy + Timers',
        copy:
          'Use time-based triggers and policy rules to escalate high-risk or aging tickets before SLAs slip.',
      },
      {
        title: 'Standardize Auto-Responses',
        copy:
          'Send immediate acknowledgements with expected response windows and self-serve links to reduce repeat tickets.',
      },
      {
        title: 'Instrument Queue Health Reporting',
        copy:
          'Automated daily summaries keep team leads proactive instead of reactive.',
      },
    ],
    relatedServiceSlug: 'support-automation',
  },
  {
    slug: 'shopify-ops-automation-checklist',
    title: 'Shopify Ops Automation: Remove the Top Manual Tasks',
    excerpt:
      'A prioritized system to automate order updates, inventory alerts, fulfillment handoffs, and customer notifications.',
    publishedOn: '2026-03-05',
    readTime: '6 min read',
    keywords: [
      'shopify operations automation checklist',
      'shopify order workflow automation',
      'ecommerce ops automation',
      'shopify ops playbook',
    ],
    intent: 'For store operators who want to cut manual ops and reduce support load.',
    topics: ['Order ops', 'Inventory alerts', 'Customer updates'],
    takeaways: [
      'A prioritized roadmap for post-purchase automation.',
      'Alert thresholds and exception handling that prevent customer churn.',
      'A simple rollout plan that avoids disrupting daily ops.',
    ],
    ctaLabel: 'Explore Shopify Automation',
    ctaHref: '/shopify-automation',
    sections: [
      {
        title: 'Map Every Post-Purchase Event',
        copy:
          'Track all events from order creation to delivery confirmation, including exceptions and returns.',
      },
      {
        title: 'Automate Exceptions and Delays',
        copy:
          'Set high-value and delayed-order thresholds to trigger fast operational responses.',
      },
      {
        title: 'Sync Inventory and Fulfillment',
        copy:
          'Keep stock, fulfillment, and support status aligned so customers always see the right update.',
      },
      {
        title: 'Proactive Customer Updates',
        copy:
          'Send the right status update at each milestone to reduce where-is-my-order tickets.',
      },
      {
        title: 'Returns and Refunds Workflow',
        copy:
          'Automate return approvals by policy, sync inventory, and notify finance without manual follow-ups.',
      },
      {
        title: 'Close the Loop With Customers',
        copy:
          'Automate status communication across email, SMS, or support channels to reduce incoming tickets.',
      },
    ],
    relatedServiceSlug: 'shopify-automation',
  },
  {
    slug: 'ai-agent-ops-guardrails-playbook',
    title: 'AI Agent Ops: Guardrails, Confidence, and Human Approval',
    excerpt:
      'A practical framework for safe agent automation with validation, confidence thresholds, and audit-ready logs.',
    publishedOn: '2026-03-08',
    readTime: '9 min read',
    keywords: [
      'ai agent ops',
      'agent guardrails',
      'human in the loop automation',
      'ai workflow governance',
    ],
    intent: 'For teams deploying AI agents in production who need reliability and control.',
    topics: ['AI agents', 'Safety', 'Audit trails'],
    takeaways: [
      'How to define safe vs. high-risk agent actions.',
      'Confidence thresholds that trigger human review automatically.',
      'Audit-ready logging for every decision and action.',
    ],
    ctaLabel: 'Explore AI Agent Ops',
    ctaHref: '/ai-agent-ops',
    sections: [
      {
        title: 'Define Allowed Actions',
        copy:
          'List actions that are safe to automate and separate them from actions that require approval.',
      },
      {
        title: 'Set Confidence Thresholds',
        copy:
          'Route low-confidence outputs to human review so mistakes do not reach customers.',
      },
      {
        title: 'Validate Inputs and Outputs',
        copy:
          'Use schema checks, allowlists, and business rules before the agent can execute.',
      },
      {
        title: 'Add Human Review Gates',
        copy:
          'Queue approvals for high-risk actions with clear ownership and time-based escalation.',
      },
      {
        title: 'Log Everything',
        copy:
          'Store prompts, decisions, and data changes so every action is auditable.',
      },
      {
        title: 'Plan Fallback Paths',
        copy:
          'If validation fails, route to a safe fallback or notify an operator immediately.',
      },
    ],
    relatedServiceSlug: 'ai-agent-ops',
  },
  {
    slug: 'automation-reliability-playbook',
    title: 'Automation Reliability Playbook: Retries, Alerts, and Runbooks',
    excerpt:
      'How to keep workflows stable in production with smart retries, alert routing, and incident runbooks.',
    publishedOn: '2026-03-10',
    readTime: '8 min read',
    keywords: [
      'workflow reliability',
      'automation monitoring',
      'retry strategy',
      'incident runbook automation',
    ],
    intent: 'For ops teams responsible for always-on workflows and escalation coverage.',
    topics: ['Retries', 'Alerting', 'Runbooks'],
    takeaways: [
      'How to design idempotent steps that can safely retry.',
      'Alert routing rules that prevent noisy pages.',
      'Runbooks that cut recovery time without chaos.',
    ],
    ctaLabel: 'Explore Support Automation',
    ctaHref: '/support-automation',
    sections: [
      {
        title: 'Design Idempotent Steps',
        copy:
          'Build steps so they can rerun without double-charging, duplicate records, or broken state.',
      },
      {
        title: 'Use Smart Retry Strategy',
        copy:
          'Apply exponential backoff and circuit-breakers when upstream systems are unstable.',
      },
      {
        title: 'Route Alerts by Ownership',
        copy:
          'Send alerts to the right owner by workflow, not just a generic channel.',
      },
      {
        title: 'Build Runbooks for Each Failure Mode',
        copy:
          'Document recovery steps so incidents resolve quickly and consistently.',
      },
      {
        title: 'Track Reliability KPIs',
        copy:
          'Monitor success rate, time to recover, and SLA risk to prevent silent failures.',
      },
    ],
    relatedServiceSlug: 'support-automation',
  },
  {
    slug: 'ecommerce-returns-exceptions-automation',
    title: 'E-commerce Returns and Exceptions Automation',
    excerpt:
      'Reduce refund load and support tickets by automating exceptions, returns, and fulfillment handoffs.',
    publishedOn: '2026-03-12',
    readTime: '7 min read',
    keywords: [
      'ecommerce returns automation',
      'fulfillment exception workflow',
      'shopify operations automation',
      'returns process automation',
    ],
    intent: 'For operators who want fewer escalations and faster resolution on post-purchase issues.',
    topics: ['Returns', 'Exceptions', 'Fulfillment'],
    takeaways: [
      'How to detect exceptions early and reduce refund risk.',
      'Policy-driven return approvals that protect margins.',
      'Customer updates that cut WISMO tickets.',
    ],
    ctaLabel: 'Explore Shopify Automation',
    ctaHref: '/shopify-automation',
    sections: [
      {
        title: 'Detect Exceptions Early',
        copy:
          'Flag delayed shipments, failed deliveries, and chargeback risk before customers escalate.',
      },
      {
        title: 'Automate Return Approvals',
        copy:
          'Approve low-risk returns instantly while routing high-value cases to a human.',
      },
      {
        title: 'Sync Inventory and Finance',
        copy:
          'Update inventory counts and finance records automatically when returns are processed.',
      },
      {
        title: 'Proactive Customer Updates',
        copy:
          'Send clear next-step messages so customers know what to expect without opening tickets.',
      },
      {
        title: 'Escalate High-Value Orders',
        copy:
          'Apply special handling to VIP or high-margin orders with priority alerts.',
      },
    ],
    relatedServiceSlug: 'shopify-automation',
  },
];

export interface FaqTopic {
  label: string;
  questions: Array<{ question: string; answer: string }>;
}

export const faqTopics: FaqTopic[] = [
  {
    label: 'Pricing',
    questions: [
      {
        question: 'How do you price automation projects?',
        answer:
          'Pricing is scope-based after discovery. We estimate by workflow complexity, integrations, risk controls, and delivery timeline.',
      },
      {
        question: 'Do you offer fixed packages?',
        answer:
          'We avoid rigid packages because workflow depth varies. Most teams start with one high-impact build and expand in phases.',
      },
      {
        question: 'What does a typical first project cost?',
        answer:
          'Most teams start with a single high-impact workflow. We scope in discovery and provide a fixed quote before build.',
      },
      {
        question: 'Do you offer monthly support plans?',
        answer:
          'Yes. Build is one-time; monitoring, improvements, and incident coverage are available as an ongoing plan.',
      },
      {
        question: 'Do you charge for discovery?',
        answer:
          'Discovery is scoped and typically folded into the project if you move forward. We confirm this before we start.',
      },
      {
        question: 'Can you work within a set budget?',
        answer:
          'Yes. We can prioritize the highest-impact workflow to fit a target budget and expand later.',
      },
      {
        question: 'Can we start with a pilot workflow?',
        answer:
          'Yes. A pilot is a great way to validate impact before expanding to more workflows.',
      },
      {
        question: 'Do you offer discounts for multiple workflows?',
        answer:
          'Yes. We can bundle related workflows and scope them together for better efficiency.',
      },
    ],
  },
  {
    label: 'Delivery',
    questions: [
      {
        question: 'How long does implementation take?',
        answer:
          'Simple workflows usually ship in 3-5 days. Multi-step systems typically take 1-3 weeks including testing and handover.',
      },
      {
        question: 'What does handover include?',
        answer:
          'You receive documented logic, monitoring guidance, and support recommendations so your team can operate confidently.',
      },
      {
        question: 'What do you need from us to start?',
        answer:
          'Access to the tools involved, a process owner, and a clear definition of success for the workflow.',
      },
      {
        question: 'Can you launch in phases?',
        answer:
          'Yes. We often ship a core workflow first, then add enhancements based on impact and feedback.',
      },
      {
        question: 'How do you test workflows before launch?',
        answer:
          'We run dry tests, edge-case checks, and staged rollouts so failures are caught before production impact.',
      },
      {
        question: 'Do you provide a project timeline?',
        answer:
          'Yes. After discovery you get a clear timeline with milestones and delivery checkpoints.',
      },
      {
        question: 'Do you provide training?',
        answer:
          'Yes. We include a handover walkthrough so your team knows how to run and update workflows.',
      },
      {
        question: 'How do you handle scope changes?',
        answer:
          'We review changes quickly and confirm impact on scope, cost, and timeline before proceeding.',
      },
    ],
  },
  {
    label: 'Tools',
    questions: [
      {
        question: 'Do you only work with n8n and Make?',
        answer:
          'Those are core tools, but we also integrate CRM, helpdesk, e-commerce, database, and communication systems based on your stack.',
      },
      {
        question: 'Can you integrate AI models safely?',
        answer:
          'Yes. We add validation layers, confidence checks, fallback routes, and human approval gates where needed.',
      },
      {
        question: 'Can you build inside our existing n8n or Make instance?',
        answer:
          'Yes. We can work directly in your environment or provide a managed setup if preferred.',
      },
      {
        question: 'Do you build custom API integrations?',
        answer:
          'Yes. When native connectors are limited, we use custom API calls or lightweight scripts.',
      },
      {
        question: 'Can you integrate with internal databases?',
        answer:
          'Yes. We connect to Postgres, MySQL, Airtable, or your internal data sources with least-privilege access.',
      },
      {
        question: 'Do you support webhooks and event streams?',
        answer:
          'Yes. We can trigger workflows from webhooks, event queues, or scheduled jobs.',
      },
      {
        question: 'Can you integrate ERP or finance tools?',
        answer:
          'Yes. We connect to ERP, billing, and finance systems when needed, with audit-safe logging.',
      },
      {
        question: 'Do you support Slack or Microsoft Teams?',
        answer:
          'Yes. We deliver alerts and actions directly to Slack or Teams.',
      },
    ],
  },
  {
    label: 'Security',
    questions: [
      {
        question: 'How do you handle credentials and sensitive data?',
        answer:
          'We follow least-privilege access, scoped credential usage, and operational safeguards for runtime visibility and incident response.',
      },
      {
        question: 'Can workflows be audited?',
        answer:
          'Yes. We design with change traceability and execution observability so actions can be reviewed when needed.',
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, on request.',
      },
      {
        question: 'How do you handle PII and compliance needs?',
        answer:
          'We minimize data exposure, use least-privilege access, and follow your retention and compliance policies.',
      },
      {
        question: 'Where do you store logs?',
        answer:
          'Logs stay in your system or approved tooling. We can route logs to your preferred logging platform.',
      },
      {
        question: 'Can you restrict access by role?',
        answer:
          'Yes. We set role-based access and approvals so only authorized users can change workflows.',
      },
      {
        question: 'Do you work with SOC 2 aligned teams?',
        answer:
          'Yes. We can align workflows with your SOC 2 controls and documentation requirements.',
      },
      {
        question: 'Can you limit data retention?',
        answer:
          'Yes. We follow your retention policies and minimize sensitive data storage where possible.',
      },
    ],
  },
  {
    label: 'Operations',
    questions: [
      {
        question: 'Who owns workflows after launch?',
        answer:
          'You can own them in-house or have us manage them. We provide documentation and a clean handoff either way.',
      },
      {
        question: 'What happens if a workflow fails?',
        answer:
          'We design retries and alerts so failures route to the right owner with clear next steps.',
      },
      {
        question: 'Do you provide monitoring and dashboards?',
        answer:
          'Yes. We can set up alerts, dashboards, and health summaries tailored to your team.',
      },
      {
        question: 'Can you provide 24/7 coverage?',
        answer:
          'If required, we can set up escalation paths and on-call coverage as part of a support plan.',
      },
      {
        question: 'How do you handle changes after launch?',
        answer:
          'We log changes, test updates, and deploy in controlled releases to avoid regressions.',
      },
      {
        question: 'Do you provide health checks?',
        answer:
          'Yes. We can set automated health checks and daily summaries for critical workflows.',
      },
      {
        question: 'Can you roll back changes?',
        answer:
          'Yes. We version workflows and can roll back to a previous stable state when needed.',
      },
    ],
  },
  {
    label: 'Process',
    questions: [
      {
        question: 'How does discovery work?',
        answer:
          'We map the process, identify the highest-impact bottleneck, and define success metrics before build.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We track time saved, SLA improvements, and error reductions tied directly to the workflow.',
      },
      {
        question: 'How involved will my team be?',
        answer:
          'Lightweight: 1-2 calls and access to the tools involved. We keep reviews async when possible.',
      },
      {
        question: 'How do you choose what to automate first?',
        answer:
          'We prioritize by impact, risk, and time-to-value so the first workflow delivers measurable wins quickly.',
      },
      {
        question: 'Can you work with an internal team?',
        answer:
          'Yes. We can co-build with your team or hand off workflows once they are stable.',
      },
      {
        question: 'Do you offer a workflow audit first?',
        answer:
          'Yes. We can start with a short audit to identify the highest ROI workflow.',
      },
      {
        question: 'How do we approve workflows before launch?',
        answer:
          'We review the flow with you, test in staging, and confirm approvals before go-live.',
      },
    ],
  },
  {
    label: 'AI Ops',
    questions: [
      {
        question: 'How do you keep AI actions safe?',
        answer:
          'We add validation, confidence thresholds, and approval gates for high-risk actions.',
      },
      {
        question: 'Can AI actions be audited?',
        answer:
          'Yes. We log prompts, outputs, and actions so every decision is traceable.',
      },
      {
        question: 'Do you support human-in-the-loop workflows?',
        answer:
          'Yes. We route low-confidence or high-risk actions to human review with clear ownership.',
      },
      {
        question: 'Can you switch models or add fallbacks?',
        answer:
          'Yes. We can route to fallback models or rules when confidence is low.',
      },
      {
        question: 'How do you update prompts safely?',
        answer:
          'We version prompts, test changes, and deploy with controlled rollouts.',
      },
    ],
  },
  {
    label: 'Integrations',
    questions: [
      {
        question: 'Which systems do you connect most often?',
        answer:
          'CRM, helpdesk, ecommerce, marketing, analytics, and data platforms—plus custom internal tools.',
      },
      {
        question: 'Can you connect multiple tools in one workflow?',
        answer:
          'Yes. We design end-to-end workflows across multiple systems with proper error handling.',
      },
      {
        question: 'Do you handle API limits and retries?',
        answer:
          'Yes. We include rate-limit handling, retries, and fallbacks in all integrations.',
      },
      {
        question: 'Do workflows run in real time?',
        answer:
          'Yes. We can trigger workflows instantly or schedule them based on your needs.',
      },
      {
        question: 'Can you integrate Shopify, HubSpot, or Salesforce?',
        answer:
          'Yes. We regularly work with those platforms and can connect them to your ops stack.',
      },
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
