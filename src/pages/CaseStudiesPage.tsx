import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShowreelPlayer } from '../components/site/ShowreelPlayer';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { siteIdentity } from '../lib/siteIdentity';
import { portfolioCollections, showreelContent } from '../data/videoContent';

const portfolioCapabilities = [
  {
    title: 'Story structure',
    detail: 'Raw footage arranged into a cleaner flow so the video has a sharper start, middle, and payoff.',
  },
  {
    title: 'Pacing control',
    detail: 'Dead space removed and cut timing adjusted so the video keeps moving without feeling rushed.',
  },
  {
    title: 'Subtitles and callouts',
    detail: 'Readable captions, emphasis text, and screen callouts added where clarity or attention needs support.',
  },
  {
    title: 'Audio cleanup',
    detail: 'Dialogue leveled, distractions reduced, and music or effects balanced so the edit feels more finished.',
  },
  {
    title: 'Motion polish',
    detail: 'Zooms, reframes, overlays, and simple motion graphics used to add energy without cluttering the frame.',
  },
  {
    title: 'Multi-format delivery',
    detail: 'Long-form videos, shorts, reels, and revision-ready exports prepared from the same source footage.',
  },
] as const;

const portfolioSoftware = [
  {
    name: 'Premiere Pro',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660449/premiere-pro_ublol3.png',
    note: 'Main timeline and final cut.',
  },
  {
    name: 'After Effects',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660447/after-effects_vdphpm.png',
    note: 'Motion, polish, and emphasis.',
  },
  {
    name: 'Photoshop',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660446/photoshop_owex5e.png',
    note: 'Thumbnails, assets, and cleanup.',
  },
  {
    name: 'Illustrator',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775662419/illustrator_jndtgi.png',
    note: 'Vector graphics and brand elements.',
  },
] as const;

export function CaseStudiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Portfolio | Aqib Mehmood',
    'A growing video editing portfolio with a current highlight reel and more edits being added over time.',
    {
      keywords: [
        'video editing portfolio',
        'youtube editor portfolio',
        'showreel editor',
        'short form editing portfolio',
      ],
      path: '/portfolio',
      image: siteIdentity.logoPath,
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
            Selected edits, with more on the way.
          </h1>
          <p
            className="mt-5 max-w-3xl text-base text-white/[0.72] sm:text-lg"
            data-animate="fade-up"
            data-delay="0.08"
          >
            The portfolio starts with the current highlight reel and expands as more client and
            creator work is added.
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
            <ShowreelPlayer
              url={showreelContent.mediaUrl}
              title={showreelContent.title}
              posterUrl={showreelContent.posterUrl}
            />

            <div className="portfolio-preview-grid mt-12" data-animate="stagger">
              {portfolioCollections.map((item) => (
                <article key={item.title} className="portfolio-preview-slot" data-animate-child>
                  <p className="portfolio-preview-status">Adding Soon</p>
                  <h3 className="portfolio-preview-title">{item.title}</h3>
                  <p className="portfolio-preview-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div data-animate="fade-up">
                <p className="eyebrow text-black/[0.5]">Capabilities</p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
                  Editing capabilities that shape the final result.
                </h2>
                <p className="mt-4 max-w-2xl text-black/[0.66]">
                  This section covers the actual editing work behind the portfolio, not general
                  promises. From rough footage to delivery, each part of the cut is built with a
                  clear purpose.
                </p>
              </div>

              <div className="mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2" data-animate="stagger">
                {portfolioCapabilities.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-t border-black/[0.1] py-5 first:pt-0 sm:py-6"
                    data-animate-child
                  >
                    <span className="inline-flex font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/[0.42]">
                      {`0${index + 1}`}
                    </span>
                    <h3 className="mt-2 font-display text-[1.4rem] font-semibold tracking-tight text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/[0.66] sm:text-[0.95rem]">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside
              className="self-start overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#111111] p-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-6 lg:max-w-[30rem] lg:justify-self-end"
              data-animate="fade-up"
              data-delay="0.08"
            >
              <p className="eyebrow text-white/[0.48]">Edited In</p>
              <h2 className="mt-4 max-w-[11ch] font-display text-[1.9rem] font-bold tracking-tight sm:text-[2.2rem]">
                Adobe tools used in the edit.
              </h2>
              <p className="mt-3 max-w-[30ch] text-sm leading-7 text-white/[0.68] sm:text-[0.96rem]">
                Premiere Pro handles the core edit, After Effects adds polish, and Photoshop plus
                Illustrator support the graphics and assets behind the final look.
              </p>

              <div className="mt-7 grid gap-x-5 gap-y-4 sm:grid-cols-2" data-animate="stagger">
                {portfolioSoftware.map((software) => (
                  <article
                    key={software.name}
                    className="border-t border-white/10 pt-4"
                    data-animate-child
                  >
                    <div className="flex items-start gap-3.5">
                      <img
                        src={software.imageUrl}
                        alt={software.name}
                        className="mt-0.5 h-8 w-8 shrink-0 object-contain opacity-[0.9] drop-shadow-[0_0_12px_rgba(255,211,92,0.12)]"
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-white">{software.name}</h3>
                        <p className="mt-1 text-xs text-white/[0.56]">{software.note}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
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
