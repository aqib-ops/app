import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const faqItems = [
  {
    question: 'How quickly can we get started?',
    answer: 'Most projects start within a few days after understanding your needs.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      "You'll start seeing improvements as soon as automation goes live - often within the first few days.",
  },
  {
    question: 'Do I need to change my current tools?',
    answer: 'No. We work with your existing tools and make them work better together.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Your system is built to handle issues automatically and stay reliable.',
  },
  {
    question: 'Will this actually save me time?',
    answer:
      'Yes - automation removes repetitive work and ensures things keep moving without manual effort.',
  },
  {
    question: 'Is this a one-time setup or ongoing?',
    answer: 'We can do both - build once or continue optimizing as you grow.',
  },
  {
    question: 'How do we get started?',
    answer: "Book a quick call, and we'll map out the best system for you.",
  },
] as const;

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
    'FAQ Hub | Workflow Automation Questions',
    'Simple answers to the most important questions about getting started with workflow automation.',
    {
      keywords: [
        'workflow automation faq',
        'automation questions',
        'workflow automation getting started',
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
          <p className="mt-5 max-w-3xl text-base text-white/[0.74] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            Everything you need to know before getting started &mdash; simple, clear, and to the
            point.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div data-animate="stagger">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="space-y-4"
              >
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

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
              data-animate="fade-up"
            >
              Still Have Questions? Let&apos;s Clear Them Fast.
            </h2>
            <Link to="/contact" className="btn-solid mt-6" data-animate="fade-up" data-delay="0.08">
              Book Your Automation Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
