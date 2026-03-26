import { useRef } from 'react';
import { Bot, MessageSquareMore, ShoppingCart, UserRoundSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const solutions = [
  {
    icon: UserRoundSearch,
    title: 'Lead Capture & Follow-Up System',
    href: '/lead-follow-up-automation',
    description:
      'Automatically respond, follow up, and turn interest into conversations.',
  },
  {
    icon: Bot,
    title: 'Sales Pipeline System',
    href: '/crm-automation',
    description:
      'Keep every lead moving - from first message to booked call.',
  },
  {
    icon: MessageSquareMore,
    title: 'Customer Support Automation',
    href: '/support-automation',
    description:
      'Respond faster, reduce delays, and never miss a message.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Automation System',
    href: '/shopify-automation',
    description:
      'Handle orders, updates, and customer communication automatically.',
  },
];

const deliveryPhases = [
  {
    title: 'Identify Gaps',
    detail: 'We find where leads, tasks, or messages are being missed.',
  },
  {
    title: 'Build the System',
    detail: 'We set up automation that handles responses and follow-ups.',
  },
  {
    title: 'Launch & Optimize',
    detail: 'Everything runs smoothly and improves over time.',
  },
];

export function SolutionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Automation Solutions | Aqib Ops Workflow Systems',
    'Explore automation systems that capture more leads, follow up faster, and keep support and operations from missing opportunities.',
    {
      keywords: [
        'workflow automation solutions',
        'lead capture automation',
        'follow up automation system',
        'sales pipeline automation system',
        'customer support automation',
        'e-commerce automation system',
      ],
      path: '/solutions',
      image: '/project-leads.jpg',
    }
  );
  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">Solutions</p>
          <h1 className="display-title mt-4 max-w-3xl text-white" data-animate="fade-up">
            Systems That Capture More &mdash; Automatically
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/[0.72] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            Explore automation systems designed to respond faster, follow up consistently, and
            make sure no opportunity slips through.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl" data-animate="fade-up">
            <p className="eyebrow text-black/[0.5]">Choose The Problem</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              Pick the system that solves the bottleneck first.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2" data-animate="stagger">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title} className="paper-card p-5 sm:p-7" data-animate-child>
                  <div className="inline-flex rounded-xl border border-black/10 bg-white p-3">
                    <Icon className="h-6 w-6 text-[var(--mint-deep)]" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-black sm:text-2xl">{solution.title}</h2>
                  <p className="mt-3 text-black/[0.65]">{solution.description}</p>
                  <Link
                    to={solution.href}
                    className="mt-6 inline-flex text-sm font-semibold text-black hover:text-black/[0.7]"
                  >
                    View System
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/10">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">Setup Process</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl" data-animate="fade-up">
            How We Set It Up
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2" data-animate="stagger">
            {deliveryPhases.map((phase, index) => (
              <article key={phase.title} className="paper-card p-6" data-animate-child>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/[0.45]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-black">{phase.title}</h3>
                <p className="mt-2 text-black/[0.65]">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
