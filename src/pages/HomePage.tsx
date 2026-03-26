import { useEffect, useRef, type CSSProperties } from 'react';
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

const reliabilityPoints = [
  'Runs reliably without constant checking',
  'Handles issues automatically',
  'Keeps everything organized and on track',
  'Scales as your workflow grows',
  'No missed actions or broken flows',
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
  { label: 'Workflows Live', value: 30, suffix: '+' },
];

const audiencePills = [
  'Founders missing opportunities due to slow follow-ups',
  'Teams dealing with messy, disconnected systems',
  'Teams struggling to keep up with incoming leads',
  'Teams replying late and losing conversations',
  'Businesses letting potential customers slip away daily',
];

const processSteps = [
  {
    step: '01',
    title: 'Find the Gaps',
    detail: 'We look at where leads, messages, and tasks are being missed or delayed.',
  },
  {
    step: '02',
    title: 'Build the System',
    detail: 'We set up automation that responds, follows up, and keeps everything moving.',
  },
  {
    step: '03',
    title: 'Keep It Running',
    detail: 'Your system stays active, reliable, and optimized as you grow.',
  },
];

const stepperSteps = [
  {
    step: '01',
    title: 'Spot the Drag',
    headline: 'See where momentum gets stuck first.',
    description: 'We trace the handoffs, delays, and silent drop-offs slowing down the whole flow.',
    points: ['Drop-off map', 'Priority bottleneck'],
  },
  {
    step: '02',
    title: 'Shape the Flow',
    headline: 'Turn the messy path into a clear one.',
    description: 'We define what should happen next, who sees it, and how the flow stays easy to follow.',
    points: ['Decision rules', 'Clear owner path'],
  },
  {
    step: '03',
    title: 'Launch the System',
    headline: 'Put the live workflow into motion.',
    description: 'We build the working version, test it with real inputs, and make sure every step moves cleanly.',
    points: ['Live rollout', 'Real-world testing'],
  },
  {
    step: '04',
    title: 'Strengthen the System',
    headline: 'Keep it sharp as volume grows.',
    description: 'We refine weak spots, tighten the experience, and keep the workflow dependable over time.',
    points: ['Performance tuning', 'Ongoing improvements'],
  },
];

const captureCards = [
  {
    step: '01',
    label: 'Always On',
    title: 'Capture Every Lead',
    points: ['No missed messages', 'No delayed responses', 'Instant handling'],
    accent: 'from-[#0e8c74] via-[#2ec4a5] to-[#b7f3e4]',
    glow: 'bg-[radial-gradient(circle,rgba(14,140,116,0.18),transparent_72%)]',
  },
  {
    step: '02',
    label: 'Stay Warm',
    title: 'Automate Follow-Ups',
    points: ['Smart follow-ups', 'Across channels', 'Keeps opportunities warm'],
    accent: 'from-[#ff8b3d] via-[#ffb364] to-[#ffe1bf]',
    glow: 'bg-[radial-gradient(circle,rgba(255,139,61,0.18),transparent_72%)]',
  },
  {
    step: '03',
    label: 'Stay Aligned',
    title: 'Connect Your Systems',
    points: ['Bring tools together', 'One smooth flow', 'Clear handoffs'],
    accent: 'from-[#2858ff] via-[#5e8aff] to-[#d4e1ff]',
    glow: 'bg-[radial-gradient(circle,rgba(40,88,255,0.16),transparent_72%)]',
  },
  {
    step: '04',
    label: 'Stay Focused',
    title: 'Reduce Manual Work',
    points: ['Less task chasing', 'Less manual work', 'More time for growth'],
    accent: 'from-[#0f1720] via-[#44616b] to-[#c4d7dd]',
    glow: 'bg-[radial-gradient(circle,rgba(68,97,107,0.18),transparent_72%)]',
  },
];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroCopyRef = useRef<HTMLParagraphElement>(null);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

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
        <div className="container-site flex min-h-[calc(100svh-88px)] items-center justify-center pt-8 pb-10 sm:pt-10 sm:pb-12 md:min-h-[calc(100svh-104px)] md:pt-14 md:pb-16">
          <div className="w-full max-w-6xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm" data-animate="fade">
              <span className="rounded-full border border-white/[0.16] bg-white/[0.08] px-2.5 py-1.5 text-white/[0.86] sm:px-3">
                Automation Studio
              </span>
              <span className="rounded-full border border-white/[0.16] bg-white/[0.08] px-2.5 py-1.5 text-white/[0.86] sm:px-3">
                Aqib Ops
              </span>
            </div>

            <h1
              ref={heroTitleRef}
              className="mx-auto mt-8 max-w-[11ch] font-display font-bold leading-[0.9] tracking-[-0.058em] text-white md:max-w-none"
            >
              <span
                className="hero-title-line block text-[clamp(2.9rem,11vw,5rem)] md:whitespace-nowrap"
                style={
                  {
                    '--type-delay': '0s',
                    '--type-duration': '0.75s',
                  } as CSSProperties
                }
              >
                Built to Capture
              </span>
              <span
                className="hero-title-line mt-1 block bg-[linear-gradient(110deg,#f7fbff_5%,#ffffff_40%,#7ff5e1_82%,#b8fff0_100%)] bg-clip-text text-[clamp(2.9rem,10.6vw,4.8rem)] text-transparent md:mt-2 md:whitespace-nowrap"
                style={
                  {
                    '--type-delay': '0.14s',
                    '--type-duration': '0.9s',
                  } as CSSProperties
                }
              >
                More Opportunities.
              </span>
            </h1>

            <p ref={heroCopyRef} className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/[0.72] sm:text-lg sm:leading-8">
              Automate your follow-ups, responses, and workflows &mdash; so no opportunity slips through.
            </p>

            <div ref={heroActionsRef} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Link to="/contact" className="btn-solid w-full justify-center px-6 py-3.5 sm:w-auto">
                Book Automation Audit
              </Link>
              <Link to="/solutions" className="btn-ghost w-full justify-center px-6 py-3.5 sm:w-auto">
                Explore Solutions
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-2.5 text-xs text-white/[0.86] sm:text-sm">
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3 py-1.5 sm:px-3.5 sm:py-2">
                Lead capture
              </span>
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3 py-1.5 sm:px-3.5 sm:py-2">
                Follow-up systems
              </span>
              <span className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3 py-1.5 sm:px-3.5 sm:py-2">
                Support automation
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper relative overflow-hidden border-t border-black/[0.1]">
        <div className="clarity-orb-a pointer-events-none absolute -left-24 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,228,194,0.26),rgba(0,140,116,0.06),transparent_72%)] blur-[4px]" />
        <div className="clarity-orb-b pointer-events-none absolute -right-24 bottom-8 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(117,142,255,0.22),rgba(42,84,255,0.08),transparent_72%)] blur-[4px]" />
        <div className="container-site integration-container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center" data-animate="fade-up">
            <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              How You Capture More
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-animate="stagger">
            {captureCards.map((card) => (
              <article
                key={card.step}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[28px] border border-black/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-5 shadow-[0_18px_40px_rgba(10,14,20,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(10,14,20,0.12)] sm:min-h-[320px] sm:p-6"
                data-animate-child
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl ${card.glow}`} />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#081118] font-mono text-[11px] font-semibold tracking-[0.18em] text-white sm:h-12 sm:w-12 sm:text-xs">
                    {card.step}
                  </span>
                  <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/[0.58] sm:px-3 sm:text-[10px]">
                    {card.label}
                  </span>
                </div>
                <h3 className="relative mt-6 max-w-none font-display text-[1.7rem] font-bold leading-[1.02] tracking-[-0.04em] text-black sm:mt-8 sm:max-w-[11ch] sm:text-[1.95rem]">
                  {card.title}
                </h3>
                <ul className="relative mt-6 grid gap-3 sm:mt-8">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white/80 px-3.5 py-3 text-sm font-medium text-black/[0.72] shadow-[0_10px_24px_rgba(10,14,20,0.05)]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,0.88)] text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
              For teams losing time, leads, and opportunities due to slow or manual processes.
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
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl" data-animate="fade-up">
            A simple system to capture more and miss less &mdash; without the chaos.
          </h2>

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
          <div className="mx-auto max-w-4xl" data-animate="fade-up">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              Built to Work. Built to Last.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-black/[0.66]">
              Your automation doesn&apos;t just launch &mdash; it keeps running smoothly without breaking
              or missing anything.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-black/[0.08] bg-white p-6 shadow-[0_18px_44px_rgba(10,14,20,0.07)] md:p-10">
            <ul className="grid gap-3 md:grid-cols-2" data-animate="stagger">
              {reliabilityPoints.map((item, index) => (
                <li
                  key={item}
                  data-animate-child
                  className={`flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-[rgba(250,251,252,0.96)] px-4 py-4 text-sm font-medium text-black/[0.74] shadow-[0_8px_24px_rgba(10,14,20,0.04)] ${
                    index === reliabilityPoints.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(0,140,116,0.1)] text-[var(--mint-deep)]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-sm text-black/[0.52]">
              Built with safeguards to ensure nothing slips or breaks.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.12]">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">Interactive Process</p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
                A clear path from bottleneck to working system.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">
                Four stages. Clear decisions. No guesswork about what happens next.
              </p>
            </div>
            <div className="stepper-pill" data-animate="fade-up" data-delay="0.1">
              4-step delivery path
            </div>
          </div>

          <div className="stepper-grid mt-12" data-animate="stagger">
            {stepperSteps.map((step) => (
              <article key={step.step} className="stepper-card" data-animate-child>
                <div className="stepper-card-top">
                  <span className="stepper-card-index">{step.step}</span>
                  <span className="stepper-card-stage">Stage {step.step}</span>
                </div>
                <h3 className="stepper-card-title">{step.title}</h3>
                <p className="stepper-card-headline">{step.headline}</p>
                <p className="stepper-card-desc">{step.description}</p>
                <ul className="stepper-card-points">
                  {step.points.map((item) => (
                    <li key={item}>
                      <span className="stepper-card-check">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/[0.1]">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            Comparison
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl" data-animate="fade-up">
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
          <p className="eyebrow text-black/[0.5]">
            Workflows
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
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
                className="h-full min-h-[220px] w-full rounded-2xl object-cover sm:min-h-[320px]"
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
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
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
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Where milliseconds matter, reliability delivers.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                From support to sales to operations, your workflows stay fast, observable, and easy
                to maintain as volume grows.
              </p>
            </div>
            <Link to="/contact" className="btn-solid h-fit w-full justify-center sm:w-auto">
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
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
                Proof from teams running live automations.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">
                Real outcomes from automation programs we build, launch, and monitor in production.
              </p>
            </div>
            <Link to="/case-studies" className="btn-solid h-fit w-full justify-center sm:w-auto" data-animate="fade-up" data-delay="0.12">
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
