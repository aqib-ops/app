import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  Check,
  ChevronRight,
  Quote,
  ShieldCheck,
  Sparkles,
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

const serviceCards = [
  {
    id: 'sales-crm',
    title: 'Sales Pipeline Automation',
    subtitle: 'Lead capture → scoring → owner routing',
    summary: 'Never miss a hot lead. Qualify, enrich, and route within minutes.',
    bullets: ['Instant enrichment + scoring', 'Owner alerts + follow‑up sequences'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731634/Sales___CRM_xvt5en.png',
  },
  {
    id: 'support',
    title: 'Support Command Center',
    subtitle: 'Triage → priority → escalation',
    summary: 'Protect SLAs with automated routing and intelligent escalation.',
    bullets: ['Auto‑classify tickets', 'SLA breach alerts'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731633/Support_Ops_eer3lg.png',
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce Ops Automation',
    subtitle: 'Orders → fulfillment → returns',
    summary: 'Keep customers updated and ops synced across every channel.',
    bullets: ['Status sync + notifications', 'Refund + return workflows'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731634/E-commerce_Ops_v36vhd.png',
  },
  {
    id: 'finance',
    title: 'Revenue Ops Automation',
    subtitle: 'Quotes → invoices → renewals',
    summary: 'Automate revenue handoffs so money never gets stuck.',
    bullets: ['Invoice reminders', 'Renewal follow‑ups'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731632/Revenue_Ops_zjuviw.png',
  },
  {
    id: 'ai-ops',
    title: 'AI Agent Operations',
    subtitle: 'Guardrails → approvals → audit',
    summary: 'Ship AI workflows that are trusted, visible, and reversible.',
    bullets: ['Human checkpoints', 'Run logs + rollback'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731633/AI_Agent_Ops_et2rke.png',
  },
  {
    id: 'reporting',
    title: 'Reporting & Insights',
    subtitle: 'Dashboards → summaries → alerts',
    summary: 'Get weekly visibility without manual reporting overhead.',
    bullets: ['Live KPI dashboards', 'Exec‑ready summaries'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731633/Reporting_zb3hjb.png',
  },
  {
    id: 'dashboard-builder',
    title: 'Dashboard Builder',
    subtitle: 'Live dashboards in hours',
    summary: 'Turn messy data into clean exec views with real‑time updates.',
    bullets: ['Custom KPI views', 'Auto refresh + alerts'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731938/Dashboard_Builder_gyxb8l.png',
  },
  {
    id: 'ai-website',
    title: 'AI Website Builder',
    subtitle: 'Launch faster with AI',
    summary: 'Generate, customize, and deploy high‑converting pages quickly.',
    bullets: ['AI sections + copy', 'SEO‑ready pages'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773731989/AI_Website_Builder_dhcrbc.png',
  },
  {
    id: 'n8n',
    title: 'n8n Automations',
    subtitle: 'Flows, retries, monitoring',
    summary: 'Production‑grade n8n automations with clear guardrails.',
    bullets: ['Error handling', 'Run visibility'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773732328/sdfga_satqcx.png',
  },
  {
    id: 'order-handling',
    title: 'E‑commerce Order Handling',
    subtitle: 'Order → ship → notify',
    summary: 'Automate order updates, fulfillment, and customer messaging.',
    bullets: ['Status sync', 'Shipment alerts'],
    image: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1773732334/E-commerce_Order_Handling_1_jr0fpq.png',
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

const stepperSteps = [
  {
    step: '01',
    title: 'Scope the Bottleneck',
    headline: 'Find the one workflow to fix first.',
    description: 'Map the triggers and handoffs to isolate the single point of delay.',
    points: ['Workflow map + gap', 'Success metric'],
  },
  {
    step: '02',
    title: 'Design the Flow',
    headline: 'Blueprint the automation with guardrails.',
    description: 'Define routing and exception paths so the system stays reliable.',
    points: ['Workflow blueprint', 'Rollback plan'],
  },
  {
    step: '03',
    title: 'Build & Integrate',
    headline: 'Build and test with real data.',
    description: 'Integrate systems and validate edge cases in production conditions.',
    points: ['Live automation', 'Owner handoff'],
  },
  {
    step: '04',
    title: 'Monitor & Improve',
    headline: 'Add monitoring and recovery paths.',
    description: 'Track run health, add retries, and keep stakeholders informed.',
    points: ['Alerts + retries', 'Weekly snapshot'],
  },
];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroCopyRef = useRef<HTMLParagraphElement>(null);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const trustRowRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stepperSectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeDragRef = useRef<HTMLDivElement>(null);
  const isMarqueeDraggingRef = useRef(false);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activeStepRef = useRef(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      introTl.fromTo(
        heroCopyRef.current,
        { y: 24, opacity: 0, filter: 'blur(6px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75 },
        0.4
      );
      introTl.fromTo(
        heroActionsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.55
      );

      if (trustRowRef.current) {
        const trustItems = trustRowRef.current.querySelectorAll<HTMLElement>('.chip');
        introTl.fromTo(
          trustItems,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, stagger: 0.06 },
          0.75
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
    const marquee = marqueeRef.current;
    const dragLayer = marqueeDragRef.current;
    if (!marquee || !dragLayer) return;

    let scrollTimeout: number | undefined;
    let isPointerDown = false;
    let hasDragged = false;
    let activePointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let baseOffset = 0;
    let currentOffset = 0;

    const pause = () => marquee.classList.add('is-paused');
    const resume = () => marquee.classList.remove('is-paused');

    const setOffset = (value: number) => {
      currentOffset = value;
      dragLayer.style.transform = `translate3d(${value}px, 0, 0)`;
    };

    const onScroll = () => {
      pause();
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        scrollTimeout = undefined;
        if (!isMarqueeDraggingRef.current) {
          resume();
        }
      }, 220);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      isPointerDown = true;
      hasDragged = false;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      baseOffset = currentOffset;
      pause();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isPointerDown) return;

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (!hasDragged) {
        if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) return;
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          isPointerDown = false;
          if (marquee.hasPointerCapture(event.pointerId)) {
            marquee.releasePointerCapture(event.pointerId);
          }
          return;
        }
        hasDragged = true;
        isMarqueeDraggingRef.current = true;
        marquee.classList.add('is-dragging');
        if (activePointerId !== null && !marquee.hasPointerCapture(activePointerId)) {
          marquee.setPointerCapture(activePointerId);
        }
      }

      event.preventDefault();
      setOffset(baseOffset + deltaX);
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;
      if (activePointerId !== null && marquee.hasPointerCapture(activePointerId)) {
        marquee.releasePointerCapture(activePointerId);
      }
      activePointerId = null;
      marquee.classList.remove('is-dragging');
      window.setTimeout(() => {
        isMarqueeDraggingRef.current = false;
      }, 60);
      if (!scrollTimeout) {
        resume();
      }
    };

    marquee.addEventListener('pointerdown', onPointerDown);
    marquee.addEventListener('pointermove', onPointerMove);
    marquee.addEventListener('pointerup', onPointerUp);
    marquee.addEventListener('pointerleave', onPointerUp);
    marquee.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      marquee.removeEventListener('pointerdown', onPointerDown);
      marquee.removeEventListener('pointermove', onPointerMove);
      marquee.removeEventListener('pointerup', onPointerUp);
      marquee.removeEventListener('pointerleave', onPointerUp);
      marquee.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const section = stepperSectionRef.current;
    if (!section) return;

    const totalSteps = stepperSteps.length;
    const stepScrollPx = 320;
    let ticking = false;

    const updateStep = () => {
      const viewport = window.innerHeight || 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const start = section.offsetTop - viewport * 0.2;
      const end = start + stepScrollPx * (totalSteps - 1);

      let nextIndex = 0;
      if (scrollY <= start) {
        nextIndex = 0;
      } else if (scrollY >= end) {
        nextIndex = totalSteps - 1;
      } else {
        const progress = (scrollY - start) / Math.max(1, stepScrollPx * (totalSteps - 1));
        nextIndex = Math.min(totalSteps - 1, Math.floor(progress * totalSteps));
      }

      if (activeStepRef.current !== nextIndex) {
        activeStepRef.current = nextIndex;
        setActiveStepIndex(nextIndex);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateStep();
        ticking = false;
      });
    };

    updateStep();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={pageRef}>
      <section className="section-dark relative -mt-20 overflow-hidden pt-20">
        <div className="hero-orb-a absolute -bottom-28 -left-24 h-80 w-80 rounded-[54%_46%_40%_60%/50%_38%_62%_50%] bg-[radial-gradient(circle_at_28%_30%,rgba(111,203,255,0.95),rgba(42,84,255,0.8)_42%,rgba(17,31,120,0.7)_68%,transparent_84%)] blur-[8px]" />
        <div className="hero-orb-b absolute -right-28 -top-24 h-[360px] w-[420px] rounded-[58%_42%_62%_38%/40%_57%_43%_60%] bg-[radial-gradient(circle_at_60%_24%,rgba(255,255,255,0.85),rgba(102,190,255,0.9)_26%,rgba(58,90,255,0.82)_48%,rgba(22,28,110,0.76)_72%,transparent_86%)] blur-[8px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:86px_86px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,10,0.38)_68%,rgba(5,8,10,0.68)_100%)]" />
        <div className="hero-particles" aria-hidden="true">
          {[
            { x: '10%', y: '18%', size: '5px', z: '60px', delay: '0s', duration: '12s' },
            { x: '24%', y: '12%', size: '3px', z: '35px', delay: '0.6s', duration: '9s' },
            { x: '42%', y: '20%', size: '6px', z: '70px', delay: '1.2s', duration: '13s' },
            { x: '60%', y: '10%', size: '4px', z: '45px', delay: '0.4s', duration: '10s' },
            { x: '76%', y: '22%', size: '5px', z: '62px', delay: '1.6s', duration: '12.5s' },
            { x: '18%', y: '38%', size: '4px', z: '30px', delay: '0.8s', duration: '9.5s' },
            { x: '36%', y: '44%', size: '3px', z: '40px', delay: '1.1s', duration: '10.5s' },
            { x: '70%', y: '40%', size: '5px', z: '75px', delay: '0.2s', duration: '12s' },
          ].map((particle, index) => (
            <span
              key={`hero-particle-${index}`}
              className="hero-particle"
              style={
                {
                  '--x': particle.x,
                  '--y': particle.y,
                  '--size': particle.size,
                  '--z': particle.z,
                  '--delay': particle.delay,
                  '--duration': particle.duration,
                } as CSSProperties
              }
            />
          ))}
        </div>
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
                <span
                  className="hero-title-line"
                  style={
                    {
                      '--type-width': '8ch',
                      '--type-steps': 8,
                      '--type-delay': '0s',
                      '--type-duration': '0.6s',
                    } as CSSProperties
                  }
                >
                  Automate
                </span>
              </span>
              <span className="title-wrap">
                <span
                  className="hero-title-line"
                  style={
                    {
                      '--type-width': '14ch',
                      '--type-steps': 14,
                      '--type-delay': '0.35s',
                      '--type-duration': '0.8s',
                    } as CSSProperties
                  }
                >
                  Repeated Work.
                </span>
              </span>
              <span className="title-wrap">
                <span
                  className="hero-title-line"
                  style={
                    {
                      '--type-width': '19ch',
                      '--type-steps': 19,
                      '--type-delay': '0.7s',
                      '--type-duration': '0.95s',
                    } as CSSProperties
                  }
                >
                  Scale With Clarity.
                </span>
              </span>
            </h1>

            <p ref={heroCopyRef} className="mx-auto mt-7 max-w-3xl text-lg text-white/[0.74]">
              We build n8n + AI automation systems for e-commerce, SaaS, and ops teams in 2-4 weeks.
            </p>

            <div ref={heroActionsRef} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-solid">
                Book Automation Audit
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

          <div className="service-marquee" data-animate="fade-up" ref={marqueeRef}>
            <div className="service-drag" ref={marqueeDragRef}>
              <div className="service-track">
                {[0, 1].map((setIndex) => (
                  <div
                    key={`set-${setIndex}`}
                    className="service-set"
                    aria-hidden={setIndex === 1}
                  >
                    {serviceCards.map((card) => {
                      const key = `${card.id}-${setIndex}`;
                      const isExpanded = expandedService === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          className={`service-card ${isExpanded ? 'is-expanded' : ''}`}
                          onClick={(event) => {
                            if (isMarqueeDraggingRef.current) {
                              event.preventDefault();
                              return;
                            }
                            setExpandedService(isExpanded ? null : key);
                          }}
                          aria-expanded={isExpanded}
                        >
                          <div className="service-media">
                            {card.image ? (
                              <img src={card.image} alt={card.title} loading="lazy" />
                            ) : (
                              <div className="service-media-fallback" />
                            )}
                          </div>
                          <div className="service-footer">
                            <p className="service-title">{card.title}</p>
                            <p className="service-subtitle">{card.subtitle}</p>
                          </div>
                          <div className="service-details">
                            <p className="service-summary">{card.summary}</p>
                            <ul>
                              {card.bullets.map((bullet) => (
                                <li key={bullet}>
                                  <Check className="h-4 w-4 text-[var(--mint-deep)]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">Interactive Process</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl">
                A modern step-by-step system for shipping automation fast.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">
                Scroll down to move through each step. The active item expands in place as you
                progress.
              </p>
            </div>
            <div className="stepper-pill" data-animate="fade-up" data-delay="0.1">
              Fully guided delivery
            </div>
          </div>

          <div ref={stepperSectionRef} className="stepper-shell mt-10">
            <div className="stepper-surface">
              {stepperSteps.map((step, index) => {
                const isActive = index === activeStepIndex;
                return (
                  <div
                    key={step.step}
                    className={`stepper-item ${isActive ? 'is-active' : ''}`}
                  >
                    <button
                      type="button"
                      className="stepper-head"
                      onMouseEnter={() => {
                        activeStepRef.current = index;
                        setActiveStepIndex(index);
                      }}
                      onFocus={() => {
                        activeStepRef.current = index;
                        setActiveStepIndex(index);
                      }}
                      onClick={() => {
                        activeStepRef.current = index;
                        setActiveStepIndex(index);
                      }}
                    >
                      <span className="stepper-index">{step.step}</span>
                      <div className="stepper-text">
                        <p className="stepper-title">{step.title}</p>
                      </div>
                      <span className="stepper-arrow">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </button>
                    <div className="stepper-body">
                      <div className="stepper-body-inner">
                        <p className="stepper-headline">{step.headline}</p>
                        <p className="stepper-desc">{step.description}</p>
                        <ul className="stepper-list stepper-list-compact">
                          {step.points.map((item) => (
                            <li key={item}>
                              <Check className="h-4 w-4 text-[var(--mint-deep)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
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
            Automation Expertise
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            n8n workflow automation, AI agents, and integration services.
          </h2>
          <p className="mt-4 max-w-3xl text-black/[0.66]" data-animate="fade-up" data-delay="0.08">
            Work with an n8n automation expert to build n8n workflows, n8n API integration, and
            n8n AI automation that replaces manual handoffs. If you want to hire an n8n developer,
            an automation engineer (n8n), or an AI automation consultant n8n teams trust, we deliver
            n8n automation services backed by real workflow automation expert playbooks.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="paper-card p-6 md:p-7">
              <span className="chip chip-light">n8n Workflow Automation</span>
              <h3 className="mt-4 text-2xl font-semibold text-black">Build n8n workflows that scale.</h3>
              <p className="mt-3 text-black/[0.7]">
                We ship advanced n8n workflows with n8n webhooks, n8n integrations, and automation
                templates tailored to your business automation goals.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-black/[0.78]">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  n8n workflow examples + real world projects.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  n8n automation templates and custom scripts.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  n8n automation specialist delivery and testing.
                </li>
              </ul>
            </article>

            <article className="paper-card p-6 md:p-7">
              <span className="chip chip-light">AI Automation</span>
              <h3 className="mt-4 text-2xl font-semibold text-black">n8n AI agents + chatbot automation.</h3>
              <p className="mt-3 text-black/[0.7]">
                Launch n8n AI automation workflows, n8n OpenAI workflows, and GPT chatbot
                automation that powers support, sales, and internal ops.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-black/[0.78]">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  n8n chatbot automation + conversational AI.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  AI automation workflows and AI agents.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  ChatGPT automation and AI assistant flows.
                </li>
              </ul>
            </article>

            <article className="paper-card p-6 md:p-7">
              <span className="chip chip-light">Integrations</span>
              <h3 className="mt-4 text-2xl font-semibold text-black">API integrations + no-code automation.</h3>
              <p className="mt-3 text-black/[0.7]">
                We connect CRMs, databases, and SaaS tools with REST API, webhook, and backend
                integration paths—plus Make.com and Zapier automation where it fits.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-black/[0.78]">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  n8n vs Zapier automation expert guidance.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  No code automation + low code automation stacks.
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--mint-deep)]" />
                  Integration specialist n8n setups for CRM, email, and data.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]">
            Workflows
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl">
            Transform workflows across your business.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="paper-card p-6 md:p-8">
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

            <article className="paper-card p-4 md:p-5">
              <img
                src="/impact-hands-tasks.jpg"
                alt="Team operating workflow with live data"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]">
            Security
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl">
            Enterprise-grade controls, built into your automation stack.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {securityBadges.map((badge) => (
              <div
                key={badge}
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
              <p className="eyebrow">
                Performance
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Where milliseconds matter, reliability delivers.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                From support to sales to operations, your workflows stay fast, observable, and easy
                to maintain as volume grows.
              </p>
            </div>
            <Link to="/contact" className="btn-solid h-fit">
              Get My Automation Audit
            </Link>
          </div>

          <div ref={statsRef} className="mt-10 grid gap-4 md:grid-cols-3">
            {performanceStats.map((item, index) => (
              <div key={item.label} className="stat-pill">
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
    </div>
  );
}
