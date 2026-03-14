import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { faqTopics } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqTopics.flatMap((topic) =>
    topic.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
};

export function FAQHubPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'FAQ Hub | Workflow Automation Questions',
    'Answers to common workflow automation questions on pricing, delivery, tools, and security.',
    {
      keywords: [
        'workflow automation faq',
        'n8n automation questions',
        'automation delivery and pricing faq',
      ],
      path: '/faq',
      image: '/process-road.jpg',
      structuredData: faqSchema,
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            FAQ Hub
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Clear answers before you commit to automation.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Grouped by pricing, delivery, tools, and security so teams can make informed decisions quickly.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site faq-container py-10 md:py-12">
          <div className="space-y-5">
            {faqTopics.map((topic) => (
              <article key={topic.label} className="paper-card p-6 md:p-7" data-animate="fade-up">
                <p className="eyebrow text-black/[0.45]">{topic.label}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {topic.questions.map((item) => (
                    <div key={item.question} className="faq-item rounded-xl border border-black/10 bg-white p-3.5">
                      <h2 className="font-display text-lg font-semibold text-black">{item.question}</h2>
                      <p className="faq-answer mt-2 text-sm text-black/[0.72]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-12 md:py-16">
          <div className="flex flex-wrap gap-3">
            <Link to="/solutions" className="btn-ghost">
              View Solutions
            </Link>
            <Link to="/contact" className="btn-solid">
              Ask A Custom Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
