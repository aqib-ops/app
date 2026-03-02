import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqConfig } from '../config';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hasContent = Boolean(faqConfig.titleRegular) || faqConfig.faqs.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Header — slide up
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Accordion items — staggered slide up
      ScrollTrigger.create({
        trigger: accordionRef.current,
        start: 'top 80%',
        onEnter: () => {
          const items = accordionRef.current?.querySelectorAll('[data-faq-item]');
          if (items) {
            gsap.fromTo(
              items,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.08,
              }
            );
          }
        },
        once: true,
      });

      // CTA — fade up
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 90%',
        onEnter: () => {
          gsap.fromTo(
            ctaRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--charcoal)' }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          {faqConfig.subtitle && (
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
              {faqConfig.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {faqConfig.titleRegular}{' '}
            <span className="italic font-normal" style={{ color: 'var(--neon-green)' }}>
              {faqConfig.titleItalic}
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqConfig.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-faq-item
                className="opacity-0 border-0 rounded-lg overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(244, 247, 245, 0.08)' }}
              >
                <AccordionTrigger 
                  className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors duration-300 group"
                >
                  <span className="text-left font-medium text-white text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        {(faqConfig.ctaText || faqConfig.ctaButtonText) && (
          <div ref={ctaRef} className="mt-16 text-center opacity-0">
            {faqConfig.ctaText && (
              <p className="text-white/50 text-sm mb-4">
                {faqConfig.ctaText}
              </p>
            )}
            {faqConfig.ctaButtonText && (
              <a
                href={faqConfig.ctaHref || '#contact'}
                className="inline-flex items-center gap-2 btn-primary"
              >
                {faqConfig.ctaButtonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div 
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(57, 255, 20, 0.2), transparent)' }}
      />
    </section>
  );
}
