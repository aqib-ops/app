import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { comparePages } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

interface CompareDetailPageProps {
  compareSlug: string;
}

export function CompareDetailPage({ compareSlug }: CompareDetailPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const comparison = comparePages.find((item) => item.slug === compareSlug);

  usePageMeta(
    comparison ? `${comparison.title} | Detailed Comparison` : 'Comparison Not Found',
    comparison ? comparison.summary : 'The requested comparison page does not exist.',
    {
      path: `/compare-alternatives/${compareSlug}`,
      noindex: !comparison,
      image: '/principle-build.jpg',
      keywords: comparison
        ? ['automation options comparison', comparison.title.toLowerCase(), 'workflow execution model']
        : [],
      structuredData: comparison
        ? {
            '@type': 'Article',
            headline: comparison.title,
            description: comparison.summary,
            datePublished: '2026-03-05',
          }
        : undefined,
    }
  );

  usePageReveal(pageRef);

  if (!comparison) {
    return (
      <section className="section-dark -mt-20 pt-20">
        <div className="container-site py-20 md:py-28">
          <h1 className="display-title text-white">Comparison page not found.</h1>
          <Link to="/compare-alternatives" className="btn-solid mt-6">
            Back to Compare
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
            Detailed Comparison
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            {comparison.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            {comparison.summary}
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="paper-card p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Ideal For</p>
              <p className="mt-4 text-black/[0.78]">{comparison.idealFor}</p>
            </article>
            <article className="paper-card p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Common Tradeoffs</p>
              <ul className="mt-4 space-y-3 text-black/[0.78]">
                {comparison.tradeoffs.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="paper-card mt-8 p-7 md:p-8" data-animate="fade-up">
            <p className="eyebrow text-black/[0.45]">Why Aqib Ops Stands Out</p>
            <ul className="mt-4 space-y-3 text-black/[0.8]">
              {comparison.whyAqibOpsWins.map((point) => (
                <li key={point} className="list-inside list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <Link to="/compare-alternatives" className="btn-ghost">
              Back to All Comparisons
            </Link>
            <Link to="/contact" className="btn-solid">
              Choose My Best Route
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
