import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Headset,
  Quote,
  ShieldCheck,
  Sparkles,
  Store,
  UserRoundSearch,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const trustedBy = ['OpenAI', 'IBM', 'Cisco', 'Zillow', 'Microsoft', 'Talkdesk'];

const checklist = [
  'Workflow access controls',
  'Failover and retries',
  'Human approval checkpoints',
  'Live run monitoring',
  'Alert routing and escalation',
  'Audit and version history',
];

const comparisonRows = [
  {
    feature: 'Built for agent-driven workflows',
    aqibOps: 'Yes',
    legacyTools: 'Partial',
    inHouseOnly: 'No',
  },
  {
    feature: 'Production observability',
    aqibOps: 'Yes',
    legacyTools: 'No',
    inHouseOnly: 'Partial',
  },
  {
    feature: 'Fast implementation',
    aqibOps: 'Yes',
    legacyTools: 'Partial',
    inHouseOnly: 'No',
  },
  {
    feature: 'Lower maintenance overhead',
    aqibOps: 'Yes',
    legacyTools: 'No',
    inHouseOnly: 'No',
  },
];

const aiPrompts = [
  {
    prompt: 'How do we reduce missed sales follow-ups?',
    answer:
      'Use a lead-intent workflow: detect warm events, enrich lead context, assign owner, and send reminders until action is logged.',
    tag: 'Sales Ops',
  },
  {
    prompt: 'What should we automate first in support?',
    answer:
      'Start with triage + priority routing. It gives immediate SLA gains and clean data for the next layer: response draft automation.',
    tag: 'Support Ops',
  },
  {
    prompt: 'How can we keep AI outputs safe in production?',
    answer:
      'Add guardrails with validation checks, confidence thresholds, and human-approval gates for high-risk actions.',
    tag: 'AI Reliability',
  },
];

const homeFaqSchema = {
  '@type': 'FAQPage',
  mainEntity: aiPrompts.map((item) => ({
    '@type': 'Question',
    name: item.prompt,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const securityBadges = ['SOC 2 Ready', 'Audit Logging', 'Role-based Access', 'Change History', 'Encrypted Data'];

const performanceStats = [
  { label: 'Implementations', value: 40, suffix: '+' },
  { label: 'Hours Saved Monthly', value: 500, prefix: '<' },
  { label: 'Integrations Used', value: 30, suffix: '+' },
];

const integrationLogoGrid = [
  {
    name: 'Slack',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404320/slack_twd79b.png',
  },
  {
    name: 'Airtable',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404347/images_uslysp.png',
  },
  {
    name: 'HubSpot',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404415/e00454ed-7f50-4aed-af53-56a52bf925b1.png',
  },
  {
    name: 'Stripe',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404320/stripe_n4gzrf.png',
  },
  {
    name: 'WhatsApp',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404538/whatsapp_efgrka.png',
  },
  {
    name: 'Telegram',
    logo: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773404541/telegram_sprlee.png',
  },
];

const clarityCards: Array<{
  icon: LucideIcon;
  title: string;
  bottleneck: string;
  automation: string;
  caseStudy: {
    title: string;
    summary: string;
    outcome: string;
    stack: string[];
  };
  href: string;
}> = [
  {
    icon: UserRoundSearch,
    title: 'Sales & CRM Automation',
    bottleneck: 'Leads stall between forms, enrichment, and CRM ownership.',
    automation: 'Capture → enrich → score → route with instant owner alerts.',
    caseStudy: {
      title: 'Lead Qualification Pipeline',
      summary: 'Automated capture, enrichment, scoring, and CRM routing tied to ownership rules.',
      outcome: 'Qualified leads surfaced in under 60 seconds.',
      stack: ['Web forms', 'n8n', 'CRM', 'Clearbit', 'Slack'],
    },
    href: '/crm-automation',
  },
  {
    icon: Headset,
    title: 'Support Workflow Automation',
    bottleneck: 'Manual triage slows first response and increases SLA risk during spikes.',
    automation: 'Classify tickets, route by urgency, and escalate high-risk cases automatically.',
    caseStudy: {
      title: 'SLA Triage Control Room',
      summary: 'Automated ticket classification, escalation logic, and queue health summaries.',
      outcome: 'Faster first response with clear ownership during peak volume.',
      stack: ['Zendesk', 'Intercom', 'n8n', 'Slack', 'Notion'],
    },
    href: '/support-automation',
  },
  {
    icon: Store,
    title: 'E-commerce Ops Automation',
    bottleneck: 'Order updates and fulfillment handoffs create constant manual follow-ups.',
    automation: 'Sync order events, fulfillment status, and customer updates across channels.',
    caseStudy: {
      title: 'D2C Order Notifications',
      summary: 'Connected Shopify orders to Slack and fulfillment boards with priority alerting.',
      outcome: 'Support response lag reduced by 62%.',
      stack: ['Shopify', 'n8n', 'Slack', 'Google Sheets'],
    },
    href: '/shopify-automation',
  },
  {
    icon: Bot,
    title: 'AI Agent Operations',
    bottleneck: 'Agent actions are hard to trust without validation and audit trails.',
    automation: 'Add policy checks, confidence thresholds, and approval gates before execution.',
    caseStudy: {
      title: 'Agent Guardrails Launch',
      summary: 'Wrapped agent actions with validation layers, fallbacks, and human review paths.',
      outcome: 'High-risk actions require approval; every run stays auditable.',
      stack: ['OpenAI', 'n8n', 'Slack', 'Postgres'],
    },
    href: '/ai-agent-ops',
  },
];

const audiencePills = [
  'Founders running lean teams',
  'Operations leads fixing bottlenecks',
  'Revenue teams scaling follow-ups',
  'Support managers improving SLA response',
  'E-commerce owners reducing manual tasks',
];

const processSteps = [
  {
    step: '01',
    title: 'Audit',
    detail: 'We map your current workflow and identify the highest-impact automation gap.',
  },
  {
    step: '02',
    title: 'Build',
    detail: 'We design and implement the workflow with integrations, guardrails, and testing.',
  },
  {
    step: '03',
    title: 'Monitor',
    detail: 'We add alerts, retries, and visibility so the system stays reliable as you scale.',
  },
];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroCopyRef = useRef<HTMLParagraphElement>(null);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const trustRowRef = useRef<HTMLDivElement>(null);
  const aiResponseRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeAiIndex, setActiveAiIndex] = useState(0);

  const activeAi = aiPrompts[activeAiIndex];

  usePageMeta(
    'Aqib Ops | Workflow Automation Services for Sales, Support, and Operations',
    'Aqib Ops builds production-ready workflow automation with n8n and Make.com for sales ops, support automation, AI agent orchestration, and e-commerce operations.',
    {
      keywords: [
        'workflow automation services',
        'n8n automation expert',
        'make.com consultant',
        'sales automation agency',
        'support workflow automation',
        'ai agent orchestration',
      ],
      path: '/',
      image: '/hero-portrait.jpg',
      structuredData: homeFaqSchema,
    }
  );

  usePageReveal(pageRef);

  useEffect(() => {
    const scope = pageRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const titleLines = heroTitleRef.current?.querySelectorAll<HTMLElement>('.title-line') ?? [];

      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      introTl.fromTo(
        titleLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.09 }
      );
      introTl.fromTo(
        heroCopyRef.current,
        { y: 24, opacity: 0, filter: 'blur(6px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75 },
        '-=0.62'
      );
      introTl.fromTo(
        heroActionsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.55'
      );

      if (trustRowRef.current) {
        const trustItems = trustRowRef.current.querySelectorAll<HTMLElement>('.chip');
        introTl.fromTo(
          trustItems,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, stagger: 0.06 },
          '-=0.4'
        );
      }

      gsap.to('.hero-orb-a', {
        y: -18,
        x: 16,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-orb-b', {
        y: 22,
        x: -12,
        duration: 5.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.clarity-orb-a', {
        y: -16,
        x: 14,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.clarity-orb-b', {
        y: 14,
        x: -10,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const processLine = scope.querySelector<HTMLElement>('.process-progress');
      if (processLine) {
        gsap.fromTo(
          processLine,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: processLine,
              start: 'top 83%',
              once: true,
            },
          }
        );
      }

      if (statsRef.current) {
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: 'top 76%',
          once: true,
          onEnter: () => {
            numberRefs.current.forEach((node) => {
              if (!node) return;

              const end = Number(node.dataset.end ?? 0);
              const prefix = node.dataset.prefix ?? '';
              const suffix = node.dataset.suffix ?? '';
              const tracker = { value: 0 };

              gsap.to(tracker, {
                value: end,
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: () => {
                  node.textContent = `${prefix}${Math.round(tracker.value)}${suffix}`;
                },
              });
            });
          },
        });
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!aiResponseRef.current) return;
    gsap.set(aiResponseRef.current, { willChange: 'transform, opacity, filter' });
    gsap.fromTo(
      aiResponseRef.current,
      { y: 10, opacity: 0, filter: 'blur(3px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(aiResponseRef.current, { clearProps: 'will-change' });
        },
      }
    );
  }, [activeAiIndex]);

  return (
    <div ref={pageRef}>
      <section className="section-dark relative -mt-20 overflow-hidden pt-20">
        <div className="hero-orb-a absolute -bottom-28 -left-24 h-80 w-80 rounded-[54%_46%_40%_60%/50%_38%_62%_50%] bg-[radial-gradient(circle_at_28%_30%,rgba(111,203,255,0.95),rgba(42,84,255,0.8)_42%,rgba(17,31,120,0.7)_68%,transparent_84%)] blur-[8px]" />
        <div className="hero-orb-b absolute -right-28 -top-24 h-[360px] w-[420px] rounded-[58%_42%_62%_38%/40%_57%_43%_60%] bg-[radial-gradient(circle_at_60%_24%,rgba(255,255,255,0.85),rgba(102,190,255,0.9)_26%,rgba(58,90,255,0.82)_48%,rgba(22,28,110,0.76)_72%,transparent_86%)] blur-[8px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:86px_86px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,10,0.38)_68%,rgba(5,8,10,0.68)_100%)]" />

        <div className="container-site flex min-h-[calc(100svh-104px)] items-start justify-center pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="w-full max-w-6xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm" data-animate="fade">
              <span className="rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1.5 text-white/[0.86]">
                Automation Studio
              </span>
              <span className="rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1.5 text-white/[0.86]">
                Aqib Ops
              </span>
            </div>

            <h1
              ref={heroTitleRef}
              className="mx-auto mt-8 max-w-5xl font-display text-[clamp(2.9rem,11vw,7rem)] font-bold leading-[0.9] tracking-[-0.052em] text-white"
            >
              <span className="title-wrap">
                <span className="title-line block">Automate Repeated Work.</span>
              </span>
              <span className="title-wrap">
                <span className="title-line block">Scale With Clarity.</span>
              </span>
            </h1>

            <p ref={heroCopyRef} className="mx-auto mt-7 max-w-3xl text-lg text-white/[0.74]">
              We build clean, reliable workflow automation for sales, support, and operations so
              your team moves faster with less manual effort.
            </p>

            <div ref={heroActionsRef} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-solid">
                Book Discovery
              </Link>
              <Link to="/solutions" className="btn-ghost">
                Explore Solutions
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5 text-sm text-white/[0.86]">
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-2">
                Lead & CRM automation
              </span>
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-2">
                Support workflow orchestration
              </span>
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-2">
                Alerts, retries, and reporting
              </span>
            </div>
          </div>
        </div>

        <div className="container-site pb-10 md:pb-14">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-white/[0.45]" data-animate="fade-up">
            Trusted by high-velocity teams
          </p>
          <div ref={trustRowRef} className="mt-4 flex flex-wrap justify-center gap-3">
            {trustedBy.map((name) => (
              <span key={name} className="chip">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-paper relative overflow-hidden border-t border-black/[0.1]">
        <div className="clarity-orb-a pointer-events-none absolute -left-24 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,228,194,0.26),rgba(0,140,116,0.06),transparent_72%)] blur-[4px]" />
        <div className="clarity-orb-b pointer-events-none absolute -right-24 bottom-8 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(117,142,255,0.22),rgba(42,84,255,0.08),transparent_72%)] blur-[4px]" />
        <div className="container-site integration-container py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            What We Do
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            Pick one bottleneck. We automate it end-to-end.
          </h2>
          <p className="mt-4 max-w-3xl text-black/[0.66]" data-animate="fade-up" data-delay="0.08">
            Most teams do not need a full platform redesign on day one. They need one painful
            process fixed fast, with clear business impact.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2" data-animate="stagger">
            {clarityCards.map((item) => {
              const Icon = item.icon;
                return (
                  <article key={item.title} className="clarity-card p-6 md:p-7" data-animate-child>
                    <div className="inline-flex rounded-2xl border border-black/10 bg-white p-3.5">
                      <Icon className="h-5 w-5 text-[var(--mint-deep)]" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-black">{item.title}</h3>
                    <div className="mt-4 rounded-2xl border border-black/10 bg-white/[0.72] p-4">
                      <p className="eyebrow text-black/[0.45]">Case Study Snapshot</p>
                      <h4 className="mt-2 font-display text-lg font-semibold text-black">
                        {item.caseStudy.title}
                      </h4>
                      <p className="mt-2 text-sm text-black/[0.7]">{item.caseStudy.summary}</p>
                      <p className="mt-3 text-sm font-semibold text-black">
                        Outcome: {item.caseStudy.outcome}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.caseStudy.stack.map((tool) => (
                          <span key={`${item.title}-${tool}`} className="chip chip-light">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-black/[0.78]">
                        Bottleneck: {item.bottleneck}
                      </p>
                      <p className="text-black/[0.7]">Automation: {item.automation}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.7]"
                      >
                        See case studies <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.7]"
                      >
                        See this service <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-10 md:py-14">
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#0a1116,#0d1720)] p-6 md:p-8">
            <p className="eyebrow text-white/[0.55]" data-animate="fade-up">
              Who It&apos;s For
            </p>
            <h2
              className="mt-3 max-w-3xl font-display text-2xl font-bold tracking-tight text-white md:text-3xl"
              data-animate="fade-up"
            >
              Built for teams that are tired of repeating the same manual work every day.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5" data-animate="stagger">
              {audiencePills.map((pill) => (
                <span key={pill} className="intent-pill" data-animate-child>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            How It Works
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            Audit, build, and monitor in a clear 3-step workflow.
          </h2>
          <p className="mt-4 max-w-3xl text-black/[0.66]" data-animate="fade-up" data-delay="0.08">
            You always know what we are building, why it matters, and how reliability is handled
            after launch.
          </p>

          <div className="relative mt-10">
            <div className="process-progress absolute left-6 right-6 top-[1.65rem] hidden h-px bg-[linear-gradient(90deg,rgba(0,140,116,0.28),rgba(56,95,255,0.22))] md:block" />
            <div className="grid gap-4 md:grid-cols-3" data-animate="stagger">
              {processSteps.map((item) => (
                <article key={item.step} className="process-step-card p-6 md:p-7" data-animate-child>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,140,116,0.32)] bg-[rgba(0,140,116,0.08)] font-mono text-xs font-semibold tracking-[0.08em] text-black">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-black">{item.title}</h3>
                  <p className="mt-2 text-black/[0.7]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            Reliability Layer
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            How we keep your workflows stable in production.
          </h2>
          <p className="mt-4 max-w-3xl text-black/[0.65]" data-animate="fade-up" data-delay="0.08">
            After launch, we add clear rules, scoped access, retries, and monitoring so your
            automations stay reliable as volume grows.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="paper-card p-6" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Checklist</p>
              <div className="mt-4 space-y-2" data-animate="stagger">
                {checklist.map((item) => (
                  <div
                    key={item}
                    data-animate-child
                    className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/[0.55] p-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-[var(--mint-deep)]" />
                    <p className="text-sm text-black/[0.8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="paper-card p-6 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Environment Snapshot</p>
              <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-black/[0.45]">Node Group</p>
                <p className="mt-2 text-xl font-semibold text-black">Production Cluster A</p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <span className="text-sm text-black/[0.65]">Retry Policy</span>
                    <span className="font-mono text-sm text-black">3 attempts</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                    <span className="text-sm text-black/[0.65]">Fallback Route</span>
                    <span className="font-mono text-sm text-black">Queue + Alert</span>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-sm text-black/[0.65]">Human Review Gate</span>
                    <span className="font-mono text-sm text-black">Enabled</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-solid mt-6 w-full justify-center">
                  Launch Similar Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">{testimonialsConfig.subtitle}</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl">
                Proof from teams running live automations.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">
                Real outcomes from automation programs we build, launch, and monitor in production.
              </p>
            </div>
            <Link to="/case-studies" className="btn-solid h-fit" data-animate="fade-up" data-delay="0.12">
              Read Case Studies
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3" data-animate="stagger">
            {testimonialsConfig.testimonials.map((testimonial) => (
              <article key={testimonial.id} className="testimonial-card p-6 md:p-7" data-animate-child>
                <div className="testimonial-quote">
                  <Quote className="h-6 w-6 text-[var(--mint-deep)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/[0.45]">
                    Client voice
                  </span>
                </div>
                <p className="mt-5 text-black/[0.82]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{testimonial.name}</p>
                    <p className="text-xs text-black/[0.55]">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

        <section className="section-dark integration-section border-t border-white/10">
          <div className="container-site integration-container py-8 md:py-10">
          <div className="integration-header">
            <p className="eyebrow text-white/60" data-animate="fade-up">
              Integrations
            </p>
            <h2 className="integration-title font-display text-white" data-animate="fade-up">
              Connect to the systems your team already runs.
            </h2>
            <p className="integration-copy text-white/70" data-animate="fade-up" data-delay="0.08">
              We map your data flow, plug into existing tools, and orchestrate workflows without
              ripping out what already works.
            </p>
          </div>

            <div className="integration-visual" data-animate="clip">
              <div className="integration-panel integration-panel-core">
                <div className="integration-canvas">
                  <span className="flow-line line-horizontal line-core-left" />
                  <span className="flow-line line-horizontal line-core-right-top" />
                  <span className="flow-line line-horizontal line-core-right-bottom" />
                  <span className="flow-line line-vertical line-core-top-left" />
                  <span className="flow-line line-vertical line-core-top-right" />
                  <span className="flow-line line-vertical line-core-bottom" />
                  <span className="flow-line line-vertical line-bots-left" />
                  <span className="flow-line line-vertical line-bots-right" />
                  <span className="flow-line line-vertical line-core-to-bots" />

                  <div className="flow-node node-workflows">
                    <span className="node-pill">Trigger</span>
                    <p className="node-title">Custom Workflows</p>
                  </div>
                  <div className="flow-node node-api">
                    <span className="node-pill">HTTP</span>
                    <p className="node-title">API Integrations</p>
                  </div>

                  <div className="flow-market">
                    <div className="flow-market-header">
                      <p className="flow-market-title">App Marketplace</p>
                      <span className="flow-market-badge">500+ apps</span>
                    </div>
                    <div className="flow-logo-grid">
                      {integrationLogoGrid.map((logo) => (
                        <span key={logo.name} className="flow-logo-chip">
                          <img src={logo.logo} alt={logo.name} loading="lazy" />
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flow-core">
                    <p className="flow-core-eyebrow">Aqib Ops</p>
                    <p className="flow-core-title">Orchestration Layer</p>
                    <p className="flow-core-subtitle">n8n-grade routing + guardrails</p>
                  </div>

                  <div className="flow-node node-analytics">
                    <span className="node-pill">Store</span>
                    <p className="node-title">Data Analytics</p>
                  </div>
                  <div className="flow-node node-reporting">
                    <span className="node-pill">Report</span>
                    <p className="node-title">Reporting Dashboards</p>
                  </div>

                  <div className="flow-node node-automation">
                    <span className="node-pill">Subflow</span>
                    <p className="node-title">Workflow Automation</p>
                  </div>
                  <div className="flow-bot-row">
                    {['Ops Bot', 'Alerts Bot', 'Recovery Bot'].map((label, index) => (
                      <span key={`${label}-${index}`} className="flow-bot-chip">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="section-paper border-t border-black/[0.12]">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.44fr_0.56fr]">
            <div data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">Ask AI</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-black md:text-5xl">
                Ask a workflow question. Get an execution-ready answer.
              </h2>
              <p className="mt-4 text-black/[0.66]">
                Strategy answers are useful only if they can be implemented. Aqib Ops translates AI
                suggestions into monitored, production-safe workflows.
              </p>
            </div>
            <div className="paper-card p-6 md:p-7" data-animate="fade-up" data-delay="0.1">
              <p className="eyebrow text-black/[0.45]">Live Prompt Console</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aiPrompts.map((item, index) => (
                  <button
                    key={`paper-${item.prompt}`}
                    type="button"
                    onClick={() => setActiveAiIndex(index)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      index === activeAiIndex
                        ? 'border-[var(--mint-deep)] bg-[rgba(0,140,116,0.13)] text-black'
                        : 'border-black/[0.14] bg-white text-black/[0.68] hover:text-black'
                    }`}
                  >
                    {item.tag}
                  </button>
                ))}
              </div>
              <div ref={aiResponseRef} className="mt-4 rounded-xl border border-black/[0.1] bg-white p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-black/[0.45]">
                  Prompt: {activeAi.prompt}
                </p>
                <p className="mt-3 leading-relaxed text-black/[0.8]">{activeAi.answer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            Comparison
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            Built for agents, not retrofitted for them.
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-black/[0.12] bg-white/[0.85]" data-animate="clip">
            <table className="comparison-table min-w-full">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Aqib Ops</th>
                  <th>Legacy Tools</th>
                  <th>In-house Only</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.aqibOps}</td>
                    <td>{row.legacyTools}</td>
                    <td>{row.inHouseOnly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            Workflows
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            Transform workflows across your business.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="paper-card p-6 md:p-8" data-animate="fade-up">
              <span className="chip chip-light">Healthcare Intake</span>
              <h3 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
                Reduce appointment no-shows with real-time reminders.
              </h3>
              <p className="mt-3 text-black/[0.78]">
                Build multi-channel reminders, auto-confirmation flows, and operational escalation
                when responses are missing.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-black/[0.88]">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  Connect forms, CRM, and calendar in one flow.
                </li>
                <li className="flex items-center gap-2 text-black/[0.88]">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  Send SMS, email, and Slack alerts with one rule set.
                </li>
                <li className="flex items-center gap-2 text-black/[0.88]">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  Track outcomes with daily health dashboards.
                </li>
              </ul>
              <Link to="/case-studies" className="mt-7 inline-flex items-center gap-2 text-black hover:text-black/[0.7]">
                See Case Studies <ChevronRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="paper-card p-4 md:p-5" data-animate="clip">
              <img
                src="/impact-hands-tasks.jpg"
                alt="Team operating workflow with live data"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
                data-animate="parallax"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            Security
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            Enterprise-grade controls, built into your automation stack.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5" data-animate="stagger">
            {securityBadges.map((badge) => (
              <div
                key={badge}
                data-animate-child
                className="paper-card badge-card-hover flex items-center justify-center gap-2 rounded-2xl px-4 py-6 text-center"
              >
                <ShieldCheck className="h-5 w-5 text-[var(--mint-deep)]" />
                <span className="text-sm font-semibold text-black">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow" data-animate="fade-up">
                Performance
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl" data-animate="fade-up">
                Where milliseconds matter, reliability delivers.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70" data-animate="fade-up" data-delay="0.08">
                From support to sales to operations, your workflows stay fast, observable, and easy
                to maintain as volume grows.
              </p>
            </div>
            <Link to="/contact" className="btn-solid h-fit" data-animate="fade-up" data-delay="0.15">
              Start My Audit
            </Link>
          </div>

          <div ref={statsRef} className="mt-10 grid gap-4 md:grid-cols-3" data-animate="stagger">
            {performanceStats.map((item, index) => (
              <div key={item.label} data-animate-child className="stat-pill">
                <p className="text-xs uppercase text-white/50">{item.label}</p>
                <p className="mt-1 text-3xl font-bold text-white">
                  <span
                    ref={(node) => {
                      numberRefs.current[index] = node;
                    }}
                    data-end={item.value}
                    data-prefix={item.prefix ?? ''}
                    data-suffix={item.suffix ?? ''}
                  >
                    {item.prefix ?? ''}
                    0
                    {item.suffix ?? ''}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
