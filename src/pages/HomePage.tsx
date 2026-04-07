import { useRef, type CSSProperties } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShowreelPlayer } from '../components/site/ShowreelPlayer';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { processSteps, serviceItems, showreelContent } from '../data/videoContent';

type HeroParticleStyle = CSSProperties & {
  '--x': string;
  '--y': string;
  '--size': string;
  '--z': string;
  '--duration': string;
  '--delay': string;
};

const heroMarqueeItems = [
  'Long-form YouTube edits',
  'Short-form clips',
  'Hook shaping',
  'Motion text',
  'Subtitles',
  'Fast delivery',
];
const heroTitle = 'Editing That Keeps People Watching';
const heroParticles: HeroParticleStyle[] = [
  { '--x': '14%', '--y': '22%', '--size': '0.5rem', '--z': '0px', '--duration': '7.8s', '--delay': '0s' },
  { '--x': '24%', '--y': '68%', '--size': '0.38rem', '--z': '0px', '--duration': '9.2s', '--delay': '-1.8s' },
  { '--x': '48%', '--y': '18%', '--size': '0.62rem', '--z': '0px', '--duration': '8.4s', '--delay': '-0.8s' },
  { '--x': '64%', '--y': '74%', '--size': '0.46rem', '--z': '0px', '--duration': '10.2s', '--delay': '-3.1s' },
  { '--x': '82%', '--y': '28%', '--size': '0.56rem', '--z': '0px', '--duration': '8.8s', '--delay': '-2.2s' },
];
const aboutHighlights = ['Stronger hooks', 'Cleaner pacing', 'Fast workflow'];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Aqib Ops | High-Retention Video Editing for YouTube & Shorts',
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
      image: '/hero-portrait.jpg',
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="hero-stage section-dark relative -mt-20 overflow-hidden border-b border-white/10 pt-20">
        <div className="hero-aurora hero-aurora-left" />
        <div className="hero-aurora hero-aurora-right" />
        <div className="hero-center-glow" />
        <div className="hero-particles" aria-hidden="true">
          {heroParticles.map((style, index) => (
            <span key={`${style['--x']}-${index}`} className="hero-particle" style={style} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(245,196,62,0.18),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(245,196,62,0.14),transparent_28%),linear-gradient(180deg,rgba(255,214,76,0.05),transparent_32%)]" />
        <div className="container-site flex min-h-[calc(100svh-88px)] items-center justify-center py-16 md:min-h-[calc(100svh-96px)] md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <p className="eyebrow text-white/[0.62]" data-animate="fade-up">
              YouTube + Short-Form Video Editing
            </p>
            <h1 className="hero-display-title mx-auto mt-5 max-w-[10.2ch] text-white sm:max-w-[11.2ch] md:max-w-[11.6ch]">
              <span className="title-wrap">
                <span
                  className="hero-title-line"
                  style={
                    {
                      '--type-delay': '0.08s',
                      '--type-duration': '0.98s',
                    } as CSSProperties
                  }
                >
                  {heroTitle}
                </span>
              </span>
            </h1>
            <p
              className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/[0.74] sm:text-lg sm:leading-8"
              data-animate="fade-up"
              data-delay="0.22"
            >
              High-retention video editing for YouTube &amp; short-form content.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row" data-animate="fade-up" data-delay="0.3">
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

            <div className="mt-8" data-animate="fade-up" data-delay="0.36">
              <div className="hero-marquee">
                <div className="hero-marquee-track">
                  {[0, 1].map((setIndex) => (
                    <div key={setIndex} className="hero-marquee-set">
                      {heroMarqueeItems.map((tag) => (
                        <span key={`${setIndex}-${tag}`} className="hero-marquee-item">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
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
                One clean showreel. Simple, minimal, and visual-first.
              </h2>
              <p className="mt-4 max-w-2xl text-black/[0.66]">{showreelContent.summary}</p>
              <p className="mt-3 text-sm font-medium text-black/[0.48]">One reel link is enough. The section handles the presentation cleanly.</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/[0.68]">
              Open portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-5xl" data-animate="fade-up" data-delay="0.08">
            <ShowreelPlayer url={showreelContent.mediaUrl} title={showreelContent.title} />
          </div>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-3xl" data-animate="fade-up">
            <p className="eyebrow text-black/[0.5]">Services</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              Editing support built around the formats creators actually publish.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2" data-animate="stagger">
            {serviceItems.map((service) => (
              <article key={service.title} className="paper-card p-5 sm:p-6" data-animate-child>
                <h3 className="font-display text-2xl font-semibold text-black">{service.title}</h3>
                <p className="mt-3 text-black/[0.66]">{service.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-black/[0.76]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#151515] text-[#ffd95a]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
