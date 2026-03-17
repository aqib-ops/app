import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { insightPosts } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

export function InsightsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Insights | Workflow Automation Guides',
    'Practical workflow automation guides by Aqib Ops for sales, support, e-commerce, and AI operations.',
    {
      keywords: [
        'workflow automation blog',
        'n8n automation guides',
        'crm automation playbook',
        'support operations automation',
      ],
      path: '/insights',
      image: '/code-nodes-ui.jpg',
      type: 'article',
      structuredData: {
        '@type': 'Blog',
        name: 'Aqib Ops Insights',
        description: 'Workflow automation tutorials and implementation playbooks.',
      },
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Blog / Insights
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Practical automation playbooks for real operations teams.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Long-tail guides designed to help you implement faster and choose the right workflow architecture.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-animate="stagger">
            {insightPosts.map((post) => (
              <article key={post.slug} className="paper-card p-7" data-animate-child>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-black/[0.45]">{post.readTime}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-black">{post.title}</h2>
                <p className="mt-3 text-black/[0.7]">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.topics.map((topic) => (
                    <span key={`${post.slug}-${topic}`} className="chip chip-light">
                      {topic}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-black/[0.72]">
                  {post.takeaways.slice(0, 2).map((takeaway) => (
                    <li key={`${post.slug}-${takeaway}`} className="list-inside list-disc">
                      {takeaway}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-black/[0.5]">Published: {post.publishedOn}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/insights/${post.slug}`}
                    className="inline-flex text-sm font-semibold text-black hover:text-black/[0.7]"
                  >
                    Read Guide
                  </Link>
                  <Link
                    to={post.ctaHref}
                    className="inline-flex text-sm font-semibold text-[var(--mint-deep)] hover:text-black"
                  >
                    {post.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/solutions" className="btn-ghost">
              Explore Solutions
            </Link>
            <Link to="/contact" className="btn-solid">
              Book Automation Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
