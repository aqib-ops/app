import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShowreelPlayer } from '../components/site/ShowreelPlayer';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { siteIdentity } from '../lib/siteIdentity';
import { processSteps, showreelContent } from '../data/videoContent';

const heroHeadlinePrefix = 'Editing That Keeps People';
const heroHeadlineWords = ['Watching', 'Hooked', 'Engaged', 'Glued', 'Addicted'] as const;
const heroHeadlineRotationMs = 4600;
const heroHeadlineTransitionMs = 820;
const heroHeadlineWordBufferPx = 36;
const heroToolIcons = [
  {
    name: 'Adobe Premiere Pro',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660449/premiere-pro_ublol3.png',
    className: 'hero-tool-premiere',
    delay: '0s',
  },
  {
    name: 'Adobe Photoshop',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660446/photoshop_owex5e.png',
    className: 'hero-tool-photoshop',
    delay: '-1.4s',
  },
  {
    name: 'Adobe After Effects',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775660447/after-effects_vdphpm.png',
    className: 'hero-tool-after-effects',
    delay: '-2.8s',
  },
  {
    name: 'Adobe Illustrator',
    imageUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775662419/illustrator_jndtgi.png',
    className: 'hero-tool-illustrator',
    delay: '-4.2s',
  },
] as const;
const aboutHighlights = ['Stronger hooks', 'Cleaner pacing', 'Fast workflow'];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const headlineMeasureRef = useRef<HTMLSpanElement>(null);
  const wordTransitionTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isHeadlineTransitioning, setIsHeadlineTransitioning] = useState(false);
  const [headlineWordWidth, setHeadlineWordWidth] = useState<number | null>(null);
  const activeHeadlineWord = heroHeadlineWords[activeIndex];
  const heroTitle = `${heroHeadlinePrefix} ${activeHeadlineWord}`;

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
      return;
    }

    const runWordSwap = () => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % heroHeadlineWords.length;
        setPreviousIndex(current);
        return nextIndex;
      });
      setIsHeadlineTransitioning(true);

      if (wordTransitionTimeoutRef.current) {
        window.clearTimeout(wordTransitionTimeoutRef.current);
      }

      wordTransitionTimeoutRef.current = window.setTimeout(() => {
        setPreviousIndex(null);
        setIsHeadlineTransitioning(false);
      }, heroHeadlineTransitionMs);
    };

    const intervalId = window.setInterval(() => {
      runWordSwap();
    }, heroHeadlineRotationMs);

    return () => {
      window.clearInterval(intervalId);

      if (wordTransitionTimeoutRef.current) {
        window.clearTimeout(wordTransitionTimeoutRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const updateHeadlineWidth = () => {
      if (!headlineMeasureRef.current) {
        return;
      }

      const widths = Array.from(
        headlineMeasureRef.current.querySelectorAll<HTMLElement>('[data-headline-word-measure]')
      ).map((element) => element.getBoundingClientRect().width);

      if (!widths.length) {
        return;
      }

      setHeadlineWordWidth(
        Math.ceil(Math.max(...widths)) + heroHeadlineWordBufferPx
      );
    };

    updateHeadlineWidth();
    window.addEventListener('resize', updateHeadlineWidth);

    return () => window.removeEventListener('resize', updateHeadlineWidth);
  }, []);

  usePageMeta(
    'Aqib Mehmood | High-Retention Video Editing for YouTube & Shorts',
    'Editing That Keeps People Watching. High-retention video editing for YouTube and short-form content for creators, personal brands, and businesses.',
    {
      keywords: [
        'video editor for youtube',
        'high retention video editor',
        'short form video editing',
        'youtube video editor',
        'reels and shorts editor',
        'video editing portfolio',
      ],
      path: '/',
      image: siteIdentity.logoPath,
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="hero-stage section-dark relative -mt-20 overflow-hidden border-b border-white/10 pt-20">
        <div className="hero-aurora hero-aurora-left" />
        <div className="hero-aurora hero-aurora-right" />
        <div className="hero-center-glow" />
        <div className="hero-backdrop-word" aria-hidden="true">
          aqib mehmood
        </div>
        <div className="hero-backdrop-grid" aria-hidden="true" />

        <div className="container-site hero-shell">
          <div className="hero-copy-column">
            <div className="hero-tool-cloud" aria-hidden="true">
              {heroToolIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`hero-tool-badge ${icon.className}`}
                  style={{ '--badge-delay': icon.delay } as CSSProperties}
                >
                  <img src={icon.imageUrl} alt="" className="hero-tool-icon" decoding="async" loading="eager" />
                </div>
              ))}
            </div>

            <div className="hero-copy-content">
              <p className="eyebrow text-white/[0.62]" data-animate="fade-up">
                Aqib Mehmood | Premium Video Editing
              </p>
              <h1
                className="hero-display-title hero-headline mx-auto mt-6 text-white"
                data-animate="fade-up"
                data-delay="0.04"
                aria-label={heroTitle}
              >
                <span className="hero-headline-line" aria-hidden="true">
                  Editing That Keeps
                </span>
                <span className="hero-headline-line hero-headline-line-animated" aria-hidden="true">
                  <span className="hero-headline-people">People</span>
                  <span
                    className="hero-rotating-word-stage"
                    style={{ width: headlineWordWidth ? `${headlineWordWidth}px` : undefined }}
                  >
                    <span ref={headlineMeasureRef} className="hero-rotating-word-measure">
                      {heroHeadlineWords.map((word) => (
                        <span key={word} className="hero-rotating-word-measure-item" data-headline-word-measure>
                          {word}
                        </span>
                      ))}
                    </span>
                    {previousIndex !== null ? (
                      <span
                        key={`headline-out-${previousIndex}-${activeIndex}`}
                        className="hero-rotating-word hero-rotating-word-exit"
                        aria-hidden="true"
                      >
                        {heroHeadlineWords[previousIndex]}
                      </span>
                    ) : null}
                    <span
                      key={`headline-in-${activeIndex}`}
                      className={`hero-rotating-word ${
                        isHeadlineTransitioning ? 'hero-rotating-word-enter' : 'hero-rotating-word-current'
                      }`.trim()}
                    >
                      {activeHeadlineWord}
                    </span>
                  </span>
                </span>
              </h1>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/[0.74] sm:text-lg sm:leading-8"
                data-animate="fade-up"
                data-delay="0.14"
              >
                Premium editing for creators and brands that want stronger hooks, great pacing,
                clean subtitles, and a workflow that stays fast after the first draft.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row" data-animate="fade-up" data-delay="0.22">
                <Link to="/portfolio" className="btn-solid w-full justify-center sm:w-auto">
                  View Portfolio
                </Link>
                <WhatsAppCta
                  variant="ghost"
                  className="w-full sm:w-auto"
                  message="Hi Aqib, I saw your site and want help editing my content."
                >
                  Start on WhatsApp
                </WhatsAppCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade-up">
            <div>
              <p className="eyebrow text-black/[0.5]">Portfolio</p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
                Current featured edit.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">{showreelContent.summary}</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.68]">
              Open portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-5xl" data-animate="fade-up" data-delay="0.08">
            <ShowreelPlayer
              url={showreelContent.mediaUrl}
              title={showreelContent.title}
              posterUrl={showreelContent.posterUrl}
            />
          </div>
        </div>
      </section>

      <section className="section-dark border-b border-white/10">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div data-animate="fade-up">
              <p className="eyebrow text-white/[0.58]">How It Works</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Simple process. Cleaner revisions. Faster delivery.
              </h2>
              <p className="mt-4 max-w-xl text-white/[0.7]">
                The workflow stays efficient so you spend less time chasing edits and more time publishing.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2" data-animate="stagger">
              {processSteps.map((step) => (
                <article
                  key={step.step}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6"
                  data-animate-child
                >
                  <span className="inline-flex rounded-full border border-[#ffd95a]/30 bg-[#ffd95a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd95a]">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-white/[0.68]">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center" data-animate="fade-up">
            <p className="eyebrow text-black/[0.5]">About</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.2vw,4.4rem)] font-bold leading-[0.96] tracking-[-0.05em] text-black">
              I edit content to feel sharper, cleaner, and easier to watch.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/[0.62] sm:text-base sm:leading-8">
              No fake viral promises. Just stronger hooks, cleaner pacing, and a fast workflow.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3" data-animate="stagger">
            {aboutHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/[0.1] bg-white/70 px-4 py-2 text-sm font-semibold text-black/[0.76] shadow-[0_10px_22px_rgba(10,14,20,0.06)]"
                data-animate-child
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 h-px max-w-4xl bg-black/[0.08]" data-animate="fade" data-delay="0.12" />

          <div className="mx-auto mt-6 max-w-3xl text-center" data-animate="fade-up" data-delay="0.16">
            <p className="text-sm leading-7 text-black/[0.56] sm:text-base">
              Best for creators and brands who want polished edits without a messy process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-site py-16 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,215,90,0.12),rgba(255,255,255,0.02))] p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div data-animate="fade-up">
                <p className="eyebrow text-white/[0.58]">Next Step</p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let&apos;s make your content more engaging.
                </h2>
                <p className="mt-4 max-w-2xl text-white/[0.7]">
                  If your videos need tighter pacing, cleaner edits, or a better content workflow,
                  let&apos;s build the right editing setup for your channel or brand.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/portfolio" className="btn-ghost justify-center">
                  View Portfolio
                </Link>
                <WhatsAppCta message="Hi Aqib, I want to make my content more engaging. Can we talk on WhatsApp?">
                  Chat on WhatsApp
                </WhatsAppCta>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
