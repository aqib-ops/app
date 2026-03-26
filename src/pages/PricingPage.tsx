import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const pricingFlow = [
  'Discovery call to understand your current workflow and bottlenecks.',
  'Scope and architecture based on your tools, operations, and business goals.',
  'Custom quote with timeline, delivery phases, and clear ownership.',
];

const costFactors = [
  'Number of workflows and process branches',
  'Integration complexity across your tools',
  'Reliability requirements (alerts, retries, fallbacks)',
  'Rollout scope, handoff, and post-launch iteration',
];

const faq = [
  {
    q: 'Why are there no fixed plans?',
    a: 'Automation scope varies by workflow depth and operational risk. Fixed packages usually miss critical requirements or include unnecessary work.',
  },
  {
    q: 'What happens in the first call?',
    a: 'We review your current process, identify repeated tasks, and define what to automate first for the fastest business impact.',
  },
  {
    q: 'Can we launch in phases?',
    a: 'Yes. Most teams start with one high-impact workflow, then scale to more departments after early wins.',
  },
];

const pricingFaqSchema = {
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export function PricingPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Pricing | Aqib Ops Workflow Automation Consulting',
    'Workflow-first pricing for automation consulting: discovery, architecture scoping, and implementation quote based on your business operations.',
    {
      keywords: [
        'workflow automation pricing',
        'n8n consultant pricing',
        'automation discovery call',
        'operations automation quote',
      ],
      path: '/pricing',
      image: '/capability-scheduling.jpg',
      structuredData: pricingFaqSchema,
    }
  );
  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Pricing
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Simple workflow-first pricing.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/[0.74] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            No fixed packages. We discuss your workflow first, scope what is actually needed, then
            share a clear quote and timeline.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-animate="fade-up" data-delay="0.14">
            <Link to="/contact" className="btn-solid w-full justify-center sm:w-auto">
              Book Automation Audit
            </Link>
            <Link to="/solutions" className="btn-ghost w-full justify-center sm:w-auto">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">How It Works</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
                Discovery first. Quote second.
              </h2>
              <div className="mt-6 space-y-3">
                {pricingFlow.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/[0.68] p-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b1115] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm text-black/[0.78]">{step}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Cost Factors</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
                Your quote is based on real scope.
              </h2>
              <ul className="mt-6 space-y-3">
                {costFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-black/[0.8]">
                    <Check className="mt-0.5 h-4 w-4 text-[var(--mint-deep)]" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-paper border-t border-black/10">
        <div className="container-site py-16 md:py-20">
          <p className="eyebrow text-black/[0.5]" data-animate="fade-up">
            FAQ
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3" data-animate="stagger">
            {faq.map((item) => (
              <article key={item.q} className="paper-card p-6" data-animate-child>
                <h2 className="font-display text-xl font-semibold text-black">{item.q}</h2>
                <p className="mt-2 text-black/[0.72]">{item.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0a0f12] p-5 sm:p-7 md:p-8" data-animate="fade-up">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h2 className="max-w-2xl font-display text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                Tell us your workflow. We&apos;ll scope it and share a clear quote.
              </h2>
              <Link to="/contact" className="btn-solid w-full justify-center sm:w-auto">
                Start Automation Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
