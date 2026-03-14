import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { comparePages } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const comparisonRows = [
  { factor: 'Time to first live workflow', aqibOps: 'Days', inHouse: 'Weeks-Months', generic: 'Varies' },
  { factor: 'Workflow reliability depth', aqibOps: 'High', inHouse: 'Medium-High', generic: 'Medium' },
  { factor: 'Ramp-up overhead', aqibOps: 'Low', inHouse: 'High', generic: 'Medium' },
  { factor: 'Specialization in automation', aqibOps: 'Focused', inHouse: 'Depends on hire', generic: 'Broad' },
];

export function CompareAlternativesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Compare Alternatives | Aqib Ops vs In-House vs Generic Agency',
    'Compare Aqib Ops with hiring in-house and generic agencies for workflow automation delivery, speed, and reliability.',
    {
      keywords: [
        'automation agency vs in house',
        'workflow automation partner comparison',
        'aqib ops vs generic agency',
      ],
      path: '/compare-alternatives',
      image: '/principle-map.jpg',
      structuredData: {
        '@type': 'ItemList',
        name: 'Automation Delivery Alternatives',
        itemListElement: comparePages.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
        })),
      },
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Compare Alternatives
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Aqib Ops vs hiring in-house vs generic agency.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Use this comparison to decide the best operating model for your workflow automation roadmap.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="overflow-x-auto rounded-2xl border border-black/[0.12] bg-white/[0.85]" data-animate="clip">
            <table className="comparison-table min-w-full">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Aqib Ops</th>
                  <th>In-house</th>
                  <th>Generic Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor}>
                    <td>{row.factor}</td>
                    <td>{row.aqibOps}</td>
                    <td>{row.inHouse}</td>
                    <td>{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3" data-animate="stagger">
            {comparePages.map((item) => (
              <article key={item.slug} className="paper-card p-6" data-animate-child>
                <h2 className="font-display text-2xl font-semibold text-black">{item.title}</h2>
                <p className="mt-3 text-black/[0.72]">{item.summary}</p>
                <Link
                  to={`/compare-alternatives/${item.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-black hover:text-black/[0.7]"
                >
                  Read Detailed Comparison
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-solid">
              Discuss My Best Option
            </Link>
            <Link to="/workflow-audit-checklist" className="btn-ghost">
              Start With Free Audit Checklist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
