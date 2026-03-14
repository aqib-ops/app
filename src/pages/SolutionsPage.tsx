import { useRef } from 'react';
import { Bot, MessageSquareMore, ShoppingCart, UserRoundSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const solutions = [
  {
    icon: MessageSquareMore,
    title: 'Support Automation',
    href: '/support-automation',
    description:
      'Route tickets, generate response drafts, and escalate urgent issues with SLA awareness.',
  },
  {
    icon: UserRoundSearch,
    title: 'Sales Pipeline Ops',
    href: '/crm-automation',
    description:
      'Capture leads, enrich profiles, score intent, and alert your team in real-time.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Operations',
    href: '/shopify-automation',
    description:
      'Automate order updates, returns workflows, inventory checks, and customer notifications.',
  },
  {
    icon: Bot,
    title: 'Agent Orchestration',
    href: '/ai-agent-ops',
    description:
      'Coordinate AI agents with guardrails, human-in-the-loop controls, and rollback paths.',
  },
];

const deliveryPhases = [
  {
    title: 'Discovery',
    detail: 'Map every manual step, exception path, and data source.',
  },
  {
    title: 'Architecture',
    detail: 'Design runtime, retry logic, and escalation strategy.',
  },
  {
    title: 'Implementation',
    detail: 'Build, test, and instrument workflows in production-like conditions.',
  },
  {
    title: 'Optimization',
    detail: 'Track outcomes and continuously improve performance with your team.',
  },
];

export function SolutionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Automation Solutions | Aqib Ops Workflow Systems',
    'Explore workflow automation solutions by Aqib Ops for support automation, sales pipeline ops, e-commerce operations, and AI agent orchestration.',
    {
      keywords: [
        'workflow automation solutions',
        'support automation setup',
        'sales pipeline automation',
        'e-commerce operations automation',
        'ai agent workflow orchestration',
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
            Landing pages for each workflow system you need.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/[0.72]" data-animate="fade-up" data-delay="0.08">
            Instead of one generic page, we organize your offer into focused solution pages that
            speak directly to each buyer and use case.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-2" data-animate="stagger">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title} className="paper-card p-7" data-animate-child>
                  <div className="inline-flex rounded-xl border border-black/10 bg-white p-3">
                    <Icon className="h-6 w-6 text-[var(--mint-deep)]" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-black">{solution.title}</h2>
                  <p className="mt-3 text-black/[0.65]">{solution.description}</p>
                  <Link to={solution.href} className="mt-6 inline-flex text-sm font-semibold text-black hover:text-black/[0.7]">
                    Open Service Page
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/10">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">Delivery Model</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-black md:text-5xl" data-animate="fade-up">
            How we move from idea to stable production rollout.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2" data-animate="stagger">
            {deliveryPhases.map((phase, index) => (
              <article key={phase.title} className="paper-card p-6" data-animate-child>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/[0.45]">Phase {index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-black">{phase.title}</h3>
                <p className="mt-2 text-black/[0.65]">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow" data-animate="fade-up">Industry Specific Pages</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-white md:text-4xl" data-animate="fade-up">
                Explore healthcare, e-commerce, and SaaS workflow architectures.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3" data-animate="fade-up" data-delay="0.12">
              <Link to="/industry/healthcare-automation" className="btn-ghost">
                Healthcare
              </Link>
              <Link to="/industry/ecommerce-automation" className="btn-ghost">
                E-commerce
              </Link>
              <Link to="/industry/saas-automation" className="btn-ghost">
                SaaS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
