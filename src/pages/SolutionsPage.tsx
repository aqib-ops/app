import { useRef } from 'react';
import { Check, Clapperboard, Repeat2, Scissors, Subtitles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { creatorFit, serviceItems } from '../data/videoContent';

const serviceIcons = [Scissors, Clapperboard, Subtitles, Repeat2];

const workflowBenefits = [
  'Organized handoff and file structure',
  'Clear review notes and revision rounds',
  'Platform-ready exports for YouTube and short-form',
  'Fast workflow without unnecessary complexity',
];

export function SolutionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Video Editing Services | Aqib Ops',
    'Video editing services for YouTube and short-form content including basic editing, high-retention edits, short clips, and content repurposing.',
    {
      keywords: [
        'video editing services',
        'youtube video editing service',
        'short form editor',
        'content repurposing service',
        'high retention editing',
      ],
      path: '/services',
      image: '/aqib.png',
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            Services
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Editing services built for creators who publish consistently.
          </h1>
          <p
            className="mt-5 max-w-3xl text-base text-white/[0.72] sm:text-lg"
            data-animate="fade-up"
            data-delay="0.08"
          >
            Long-form YouTube edits, short-form clips, and content repurposing delivered through a
            clean, reliable post-production workflow.
          </p>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-3xl" data-animate="fade-up">
            <p className="eyebrow text-black/[0.5]">Core Offers</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              Choose the editing support that fits your content flow.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2" data-animate="stagger">
            {serviceItems.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="paper-card p-5 sm:p-6" data-animate-child>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#ffd95a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-black">{service.title}</h2>
                  <p className="mt-3 text-black/[0.66]">{service.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-black/[0.76]">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5c43e]/20 text-[#b37b00]">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="paper-card p-6 sm:p-7" data-animate="fade-up">
              <p className="eyebrow text-black/[0.5]">What You Get</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Stronger edits plus a smoother workflow behind them.
              </h2>
              <ul className="mt-6 space-y-3 text-black/[0.76]">
                {workflowBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[#ffd95a]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#111111] p-6 text-white" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-white/[0.48]">Best Fit</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                Built for channels, brands, and teams that want sharper content output.
              </h2>
              <div className="mt-6 grid gap-3">
                {creatorFit.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/[0.74]">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:flex-row md:items-end md:justify-between md:p-10">
            <div data-animate="fade-up">
              <p className="eyebrow text-white/[0.58]">Start Here</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need help choosing the right edit package?
              </h2>
              <p className="mt-4 max-w-2xl text-white/[0.7]">
                Share your channel, content format, and what is not working in the current edit.
                We&apos;ll map the right starting point.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/portfolio" className="btn-ghost justify-center">
                View Portfolio
              </Link>
              <WhatsAppCta message="Hi Aqib, I need help choosing the right editing package for my content.">
                Ask on WhatsApp
              </WhatsAppCta>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
