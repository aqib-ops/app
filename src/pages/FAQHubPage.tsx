import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { WhatsAppCta } from '../components/site/WhatsAppCta';
import { faqItems } from '../data/videoContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function FAQHubPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'FAQ | Aqib Ops',
    'Answers about YouTube and short-form video editing, revisions, workflow, and what is needed to start.',
    {
      keywords: [
        'video editing faq',
        'youtube video editor questions',
        'short form editor faq',
        'video editing revisions',
      ],
      path: '/faq',
      image: '/hero-portrait.jpg',
      structuredData: faqSchema,
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            FAQ
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Clear answers before you hand off the footage.
          </h1>
          <p
            className="mt-5 max-w-3xl text-base text-white/[0.74] sm:text-lg"
            data-animate="fade-up"
            data-delay="0.08"
          >
            Everything important about edits, revisions, formats, and workflow, without the vague
            agency language.
          </p>
        </div>
      </section>

      <section className="section-paper border-b border-black/[0.08]">
        <div className="container-site py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div data-animate="stagger">
              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-3xl border border-black/[0.1] bg-white px-4 shadow-[0_14px_34px_rgba(10,14,20,0.05)] sm:px-6"
                    data-animate-child
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-black hover:no-underline sm:py-6 sm:text-xl">
                      <span className="pr-4 sm:pr-6">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pt-0 text-sm leading-6 text-black/[0.68] sm:pb-6 sm:text-base sm:leading-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container-site py-16 md:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center sm:px-8">
            <h2
              className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
              data-animate="fade-up"
            >
              Ready to turn raw footage into stronger content?
            </h2>
            <p className="mt-4 max-w-2xl text-white/[0.7]" data-animate="fade-up" data-delay="0.08">
              Share your channel or brand, the type of video you create, and where the current edit
              feels weak.
            </p>
            <WhatsAppCta
              className="mt-6"
              message="Hi Aqib, I read your FAQ and want to discuss editing for my content."
              data-animate="fade-up"
              data-delay="0.12"
            >
              Chat on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </section>
    </div>
  );
}
