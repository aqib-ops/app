import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { industryPages, serviceLandingPages } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

interface IndustryPageProps {
  industrySlug: string;
}

export function IndustryPage({ industrySlug }: IndustryPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const industry = industryPages.find((item) => item.slug === industrySlug);
  const relatedService = serviceLandingPages.find((item) => item.slug === industry?.relatedServiceSlug);

  usePageMeta(industry ? industry.title : 'Industry Page Not Found', industry ? industry.subtitle : 'Industry page not found.', {
    keywords: industry
      ? [industry.title.toLowerCase(), 'industry automation services', 'workflow automation for industry']
      : [],
    path: `/industry/${industrySlug}`,
    image: '/process-road.jpg',
    noindex: !industry,
    structuredData: industry
      ? {
          '@type': 'Service',
          name: industry.title,
          description: industry.subtitle,
          areaServed: 'Worldwide',
          provider: {
            '@type': 'Organization',
            name: 'Aqib Ops',
          },
        }
      : undefined,
  });

  usePageReveal(pageRef);

  if (!industry) {
    return (
      <section className="section-dark -mt-20 pt-20">
        <div className="container-site py-20 md:py-28">
          <h1 className="display-title text-white">Industry page not found.</h1>
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
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Industry Page
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            {industry.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/[0.74] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            {industry.subtitle}
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Common Problems</p>
              <ul className="mt-4 space-y-2 text-black/[0.76]">
                {industry.problems.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up" data-delay="0.05">
              <p className="eyebrow text-black/[0.45]">Workflow Builds</p>
              <ul className="mt-4 space-y-2 text-black/[0.76]">
                {industry.workflows.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up" data-delay="0.1">
              <p className="eyebrow text-black/[0.45]">Key KPIs</p>
              <ul className="mt-4 space-y-2 text-black/[0.76]">
                {industry.kpis.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {relatedService && (
              <Link to={`/${relatedService.slug}`} className="btn-ghost w-full justify-center sm:w-auto">
                Related Service: {relatedService.title}
              </Link>
            )}
            <Link to="/contact" className="btn-solid w-full justify-center sm:w-auto">
              Build My Industry Workflow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
