import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { insightPosts, serviceLandingPages } from '../data/marketingContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

interface InsightDetailPageProps {
  postSlug: string;
}

export function InsightDetailPage({ postSlug }: InsightDetailPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const post = insightPosts.find((item) => item.slug === postSlug);
  const relatedService = serviceLandingPages.find((item) => item.slug === post?.relatedServiceSlug);

  usePageMeta(post ? post.title : 'Insight Not Found', post ? post.excerpt : 'The requested insight does not exist.', {
    keywords: post?.keywords ?? [],
    path: `/insights/${postSlug}`,
    image: '/code-nodes-ui.jpg',
    noindex: !post,
    type: 'article',
    structuredData: post
      ? {
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedOn,
          author: {
            '@type': 'Organization',
            name: 'Aqib Ops',
          },
        }
      : undefined,
  });

  usePageReveal(pageRef);

  if (!post) {
    return (
      <section className="section-dark -mt-20 pt-20">
        <div className="container-site py-20 md:py-28">
          <h1 className="display-title text-white">Insight not found.</h1>
          <Link to="/insights" className="btn-solid mt-6">
            Back to Insights
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
            {post.readTime}
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            {post.intent}
          </p>
          <div className="mt-5 flex flex-wrap gap-2" data-animate="fade-up" data-delay="0.12">
            {post.topics.map((topic) => (
              <span key={`${post.slug}-${topic}`} className="chip">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <article className="paper-card p-7 md:p-10" data-animate="fade-up">
            <p className="text-black/[0.74]">{post.excerpt}</p>
            {post.takeaways.length ? (
              <div className="mt-6 rounded-2xl border border-black/10 bg-white px-4 py-4">
                <p className="eyebrow text-black/[0.45]">Key Takeaways</p>
                <ul className="mt-3 space-y-2 text-sm text-black/[0.78]">
                  {post.takeaways.map((takeaway) => (
                    <li key={`${post.slug}-${takeaway}`} className="list-inside list-disc">
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-8 space-y-8">
              {post.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-black/[0.75]">{section.copy}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-[rgba(0,140,116,0.2)] bg-[rgba(0,140,116,0.06)] p-5">
              <p className="eyebrow text-black/[0.45]">Next Step</p>
              <p className="mt-2 text-black/[0.7]">
                Want help implementing this playbook in your stack?
              </p>
              <Link to={post.ctaHref} className="btn-solid mt-4">
                {post.ctaLabel}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            {relatedService && (
              <Link to={`/${relatedService.slug}`} className="btn-ghost">
                Related Service: {relatedService.title}
              </Link>
            )}
            <Link to="/contact" className="btn-solid">
              Talk With Aqib Ops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
