import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { caseStudyDetails } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

interface CaseStudyDetailPageProps {
  caseStudySlug: string;
}

export function CaseStudyDetailPage({ caseStudySlug }: CaseStudyDetailPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const caseStudy = caseStudyDetails.find((item) => item.slug === caseStudySlug);

  usePageMeta(
    caseStudy ? `${caseStudy.title} | Case Study` : 'Case Study Not Found',
    caseStudy ? caseStudy.summary : 'The requested case study does not exist.',
    {
      keywords: caseStudy?.keywords ?? [],
      path: `/case-studies/${caseStudySlug}`,
      image: caseStudy?.image ?? '/project-shopify.jpg',
      noindex: !caseStudy,
      type: 'article',
      structuredData: caseStudy
        ? {
            '@type': 'Article',
            headline: caseStudy.title,
            description: caseStudy.summary,
            image: caseStudy.image,
            genre: 'Case Study',
            datePublished: '2026-03-05',
            author: {
              '@type': 'Organization',
              name: 'Aqib Ops',
            },
            about: caseStudy.stack,
          }
        : undefined,
    }
  );

  usePageReveal(pageRef);

  if (!caseStudy) {
    return (
      <section className="section-dark -mt-20 pt-20">
        <div className="container-site py-20 md:py-28">
          <h1 className="display-title text-white">Case study not found.</h1>
          <Link to="/case-studies" className="btn-solid mt-6">
            Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            {caseStudy.industry}
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            {caseStudy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/[0.74] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            {caseStudy.summary}
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
            <article className="paper-card overflow-hidden" data-animate="clip">
              <img src={caseStudy.image} alt={caseStudy.title} className="h-full min-h-[220px] w-full object-cover sm:min-h-[280px]" />
            </article>
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Client Problem</p>
              <p className="mt-4 text-black/[0.78]">{caseStudy.problem}</p>
              <p className="eyebrow mt-7 text-black/[0.45]">Stack Used</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseStudy.stack.map((tool) => (
                  <span key={tool} className="chip chip-light">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Workflow Diagram</p>
              <ol className="mt-4 space-y-3 text-black/[0.8]">
                {caseStudy.workflowDiagram.map((step, index) => (
                  <li key={step} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                    <span className="font-semibold">Step {index + 1}:</span> {step}
                  </li>
                ))}
              </ol>
            </article>
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Before / After Metrics</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/[0.5]">Before</p>
                  <ul className="mt-3 space-y-2 text-sm text-black/[0.76]">
                    {caseStudy.beforeMetrics.map((metric) => (
                      <li key={metric} className="list-inside list-disc">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[rgba(0,140,116,0.28)] bg-[rgba(0,140,116,0.06)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/[0.5]">After</p>
                  <ul className="mt-3 space-y-2 text-sm text-black/[0.82]">
                    {caseStudy.afterMetrics.map((metric) => (
                      <li key={metric} className="list-inside list-disc">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <article className="paper-card mt-8 p-5 sm:p-7 md:p-8" data-animate="fade-up">
            <p className="eyebrow text-black/[0.45]">Testimonial</p>
            <blockquote className="mt-4 text-xl font-semibold leading-relaxed text-black/[0.82]">
              "{caseStudy.testimonialQuote}"
            </blockquote>
            <p className="mt-4 text-sm text-black/[0.62]">
              {caseStudy.testimonialName} - {caseStudy.testimonialRole}
            </p>
          </article>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to={`/${caseStudy.relatedServiceSlug}`} className="btn-ghost w-full justify-center sm:w-auto">
              View Related Service Page
            </Link>
            <Link to="/contact" className="btn-solid w-full justify-center sm:w-auto">
              Build Similar Workflow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
