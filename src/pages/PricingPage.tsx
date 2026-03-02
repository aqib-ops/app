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

export function PricingPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Pricing | Aqib Ops',
    'Minimal workflow-first pricing: discovery first, scoped quote second, then implementation.'
  );
  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark border-b border-white/10">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Pricing
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Simple workflow-first pricing.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            No fixed packages. We discuss your workflow first, scope what is actually needed, then
            share a clear quote and timeline.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" data-animate="fade-up" data-delay="0.14">
            <Link to="/contact" className="btn-solid">
              Book Discovery Call
            </Link>
            <Link to="/solutions" className="btn-ghost">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="paper-card p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">How It Works</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
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

            <article className="paper-card p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Cost Factors</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
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

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0a0f12] p-7 md:p-8" data-animate="fade-up">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                Tell us your workflow. We&apos;ll scope it and share a clear quote.
              </h2>
              <Link to="/contact" className="btn-solid">
                Start Discovery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
