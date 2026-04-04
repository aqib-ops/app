import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShowreelPlayer } from '../components/site/ShowreelPlayer';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { showreelContent } from '../data/videoContent';

export function CaseStudiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Portfolio | Aqib Ops',
    'A clean video editing portfolio page with one showreel for YouTube and short-form content.',
    {
      keywords: [
        'video editing portfolio',
        'youtube editor portfolio',
        'showreel editor',
        'short form editing portfolio',
      ],
      path: '/portfolio',
      image: '/hero-portrait.jpg',
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            Portfolio
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            One showreel. Clean presentation. Nothing extra.
          </h1>
          <p
            className="mt-5 max-w-3xl text-base text-white/[0.72] sm:text-lg"
            data-animate="fade-up"
            data-delay="0.08"
          >
            A minimal portfolio section built to show the work clearly without clutter.
          </p>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="mx-auto max-w-5xl" data-animate="fade-up">
            <div className="mb-8 max-w-3xl">
              <p className="eyebrow text-black/[0.5]">{showreelContent.title}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
                {showreelContent.summary}
              </h2>
            </div>
            <ShowreelPlayer url={showreelContent.cloudinaryUrl} title={showreelContent.title} />
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:flex-row md:items-end md:justify-between md:p-10">
            <div data-animate="fade-up">
              <p className="eyebrow text-white/[0.58]">Work Together</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want this same clean style for your content?
              </h2>
              <p className="mt-4 max-w-2xl text-white/[0.7]">
                Share your footage, format, and goals. The edit can be built around that.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="btn-ghost justify-center">
                View Services
              </Link>
              <WhatsAppCta message="Hi Aqib, I saw your portfolio and want the same clean editing style for my content.">
                Start on WhatsApp
              </WhatsAppCta>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
