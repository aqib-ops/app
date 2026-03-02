import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

export function NotFoundPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta('Page Not Found | Aqib Ops', 'The page you requested does not exist.');
  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark">
        <div className="container-site py-24 md:py-32">
          <p className="eyebrow" data-animate="fade-up">404</p>
          <h1 className="display-title mt-4 text-white" data-animate="fade-up">This page does not exist.</h1>
          <p className="mt-4 max-w-xl text-white/70" data-animate="fade-up" data-delay="0.08">
            The URL may have changed. Return to the homepage and continue from there.
          </p>
          <Link to="/" className="btn-solid mt-8" data-animate="fade-up" data-delay="0.15">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
