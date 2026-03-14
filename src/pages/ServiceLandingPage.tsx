import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { caseStudyDetails, serviceLandingPages } from '../data/marketingContent';

interface ServiceLandingPageProps {
  serviceSlug: string;
}

export function ServiceLandingPage({ serviceSlug }: ServiceLandingPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const service = serviceLandingPages.find((item) => item.slug === serviceSlug);
  const relatedCaseStudy = service
    ? caseStudyDetails.find((item) => item.slug === service.relatedCaseStudySlug)
    : undefined;

  usePageMeta(
    service ? `${service.title} | Workflow Automation` : 'Service Not Found',
    service ? service.solution : 'The requested service page does not exist.',
    {
      keywords: service?.keywords ?? [],
      path: `/${serviceSlug}`,
      image: '/project-leads.jpg',
      noindex: !service,
      structuredData: service
        ? {
            '@type': 'Service',
            name: service.title,
            serviceType: service.title,
            description: service.solution,
            areaServed: 'Worldwide',
            provider: {
              '@type': 'Organization',
              name: 'Aqib Ops',
            },
            offers: {
              '@type': 'Offer',
              url: service.ctaHref,
            },
          }
        : undefined,
    }
  );

  usePageReveal(pageRef);

  if (!service) {
    return (
      <section className="section-dark -mt-20 pt-20">
        <div className="container-site py-20 md:py-28">
          <h1 className="display-title text-white">Service page not found.</h1>
          <Link to="/solutions" className="btn-solid mt-6">
            Back to Solutions
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-16 md:py-20">
          <p className="eyebrow text-white/60" data-animate="fade-up">
            Service
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.64fr_0.36fr]">
            <div>
              <h1 className="display-title text-white" data-animate="fade-up">
                {service.title}
              </h1>
              <p
                className="mt-4 max-w-2xl text-base text-white/[0.72]"
                data-animate="fade-up"
                data-delay="0.08"
              >
                {service.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-animate="fade-up" data-delay="0.14">
                <Link to={service.ctaHref} className="btn-solid">
                  {service.ctaLabel}
                </Link>
                {relatedCaseStudy ? (
                  <Link to={`/case-studies/${relatedCaseStudy.slug}`} className="btn-ghost">
                    Related Case Study
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5" data-animate="fade-up" data-delay="0.18">
              <p className="eyebrow text-white/60">Focus</p>
              <p className="mt-3 text-sm text-white/[0.74]">{service.intent}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/[0.5]">
                Primary Outcome
              </p>
              <p className="mt-2 text-sm text-white/[0.78]">{service.outcomes[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">The Bottleneck</p>
              <p className="mt-3 text-lg text-black/[0.78]">{service.problem}</p>
            </div>
            <div data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.5]">Automation Plan</p>
              <p className="mt-3 text-lg text-black/[0.78]">{service.solution}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="rounded-2xl border border-black/10 bg-white p-5" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Core Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.stack.map((tool) => (
                  <span key={tool} className="chip chip-light">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Expected Outcomes</p>
              <ul className="mt-3 space-y-2 text-sm text-black/[0.78]">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="list-inside list-disc">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedCaseStudy ? (
        <section className="section-paper border-t border-black/[0.08]">
          <div className="container-site py-12 md:py-16">
            <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
              <div data-animate="fade-up">
                <p className="eyebrow text-black/[0.5]">Related Case Study</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-black">
                  {relatedCaseStudy.title}
                </h2>
                <p className="mt-3 text-black/[0.7]">{relatedCaseStudy.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedCaseStudy.stack.map((tool) => (
                    <span key={`${relatedCaseStudy.slug}-${tool}`} className="chip chip-light">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-4 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black">
                  Outcome: {relatedCaseStudy.afterMetrics[0] ?? 'Measured improvement reported.'}
                </p>
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.7]"
                >
                  View full case study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5" data-animate="fade-up" data-delay="0.08">
                <p className="eyebrow text-black/[0.45]">Workflow Snapshot</p>
                <ol className="mt-3 space-y-2 text-sm text-black/[0.75]">
                  {relatedCaseStudy.workflowDiagram.slice(0, 3).map((step, index) => (
                    <li key={step} className="rounded-lg border border-black/10 bg-white px-3 py-2">
                      <span className="font-semibold">Step {index + 1}:</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-white/60" data-animate="fade-up">
                Next Step
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl" data-animate="fade-up">
                Ready to automate this bottleneck?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {relatedCaseStudy ? (
                <Link to={`/case-studies/${relatedCaseStudy.slug}`} className="btn-ghost">
                  See Related Case Study
                </Link>
              ) : null}
              <Link to={service.ctaHref} className="btn-solid">
                {service.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
