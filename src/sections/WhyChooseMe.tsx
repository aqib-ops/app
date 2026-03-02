import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseMeConfig } from '../config';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  shouldAnimate: boolean;
}

function Counter({ end, suffix = '', duration = 2, shouldAnimate }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    let rafId = 0;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.floor(easeProgress * end);

      if (newCount !== countRef.current) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (now < endTime) {
        rafId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [end, duration, shouldAnimate]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function WhyChooseMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const wideRef = useRef<HTMLDivElement>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const hasContent =
    Boolean(whyChooseMeConfig.titleRegular) ||
    whyChooseMeConfig.stats.length > 0 ||
    whyChooseMeConfig.featureCards.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Section header — slide up
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

      // Feature cards with images — clip-path reveal + inner scale
      const imageCards = cardsRef.current?.querySelectorAll('.feature-card-image');
      if (imageCards) {
        imageCards.forEach((card, i) => {
          const img = card.querySelector('img');

          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.set(card, { opacity: 1 });
              gsap.fromTo(
                card,
                { clipPath: 'inset(100% 0 0 0)' },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.2,
                  ease: 'power4.inOut',
                  delay: i * 0.15,
                }
              );
              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1.35 },
                  { scale: 1.1, duration: 1.6, ease: 'power3.out', delay: i * 0.15 }
                );
              }
            },
            once: true,
          });

          // Parallax on card images
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -4 },
              {
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.5,
                },
              }
            );
          }
        });
      }

      // Stats card — slide up + fade
      const statsCard = cardsRef.current?.querySelector('.feature-card-stats');
      if (statsCard) {
        ScrollTrigger.create({
          trigger: statsCard,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              statsCard,
              { y: 80, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            );
          },
          once: true,
        });
      }

      // Stats counter trigger
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 75%',
        onEnter: () => {
          setShouldAnimateStats(true);
        },
        once: true,
      });

      // Wide landscape — clip-path expand from center + inner scale + parallax
      const wideWrap = wideRef.current;
      const wideImg = wideWrap?.querySelector('img');
      if (wideWrap) {
        ScrollTrigger.create({
          trigger: wideWrap,
          start: 'top 82%',
          onEnter: () => {
            gsap.set(wideWrap, { opacity: 1 });
            gsap.fromTo(
              wideWrap,
              { clipPath: 'inset(15% 5% 15% 5%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.4,
                ease: 'power4.inOut',
              }
            );
            if (wideImg) {
              gsap.fromTo(
                wideImg,
                { scale: 1.25 },
                { scale: 1.08, duration: 1.8, ease: 'power3.out' }
              );
            }
          },
          once: true,
        });

        // Wide image parallax
        if (wideImg) {
          gsap.fromTo(
            wideImg,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: 'none',
              scrollTrigger: {
                trigger: wideWrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          );
        }
      }

      // Text overlay on wide image — fade up
      const wideText = wideWrap?.querySelector('.wide-text-overlay');
      if (wideText) {
        ScrollTrigger.create({
          trigger: wideWrap,
          start: 'top 70%',
          onEnter: () => {
            gsap.fromTo(
              wideText,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.6 }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 md:py-32 light-section"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          {whyChooseMeConfig.subtitle && (
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
              {whyChooseMeConfig.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--charcoal)' }}>
            {whyChooseMeConfig.titleRegular}{' '}
            <span className="italic font-normal" style={{ color: 'var(--neon-green)' }}>
              {whyChooseMeConfig.titleItalic}
            </span>
          </h2>
        </div>

        {/* Three Cards Row */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Feature Cards with Images */}
          {whyChooseMeConfig.featureCards.map((card, index) => (
            <div key={index} className="feature-card-image opacity-0 group">
              <div 
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
                style={{ background: 'var(--charcoal)' }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover will-change-transform"
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(11,15,13,0.8), transparent)' }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 font-semibold text-lg mb-2">
                    {card.title}
                  </p>
                  <p className="text-white/60 text-sm">
                    {card.description}
                  </p>
                </div>
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 transition-all duration-500" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/50 transition-all duration-500" />
              </div>
            </div>
          ))}

          {/* Stats Card */}
          {whyChooseMeConfig.stats.length > 0 && (
            <div
              ref={statsRef}
              className="feature-card-stats opacity-0 rounded-lg p-8 md:p-10 flex flex-col justify-between"
              style={{ background: 'rgba(11, 15, 13, 0.04)', border: '1px solid rgba(11, 15, 13, 0.08)' }}
            >
              <div>
                {whyChooseMeConfig.statsLabel && (
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="w-4 h-4" style={{ color: 'var(--neon-green)' }} />
                    <p className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary-light)' }}>
                      {whyChooseMeConfig.statsLabel}
                    </p>
                  </div>
                )}
                <div className="space-y-8">
                  {whyChooseMeConfig.stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="pb-6 last:border-0 last:pb-0"
                      style={{ borderBottom: '1px solid rgba(11, 15, 13, 0.08)' }}
                    >
                      <p className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--charcoal)' }}>
                        <Counter
                          end={stat.value}
                          suffix={stat.suffix}
                          shouldAnimate={shouldAnimateStats}
                        />
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-secondary-light)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wide Landscape Image */}
        {whyChooseMeConfig.wideImage && (
          <div 
            ref={wideRef} 
            className="mt-16 md:mt-24 relative rounded-lg overflow-hidden group opacity-0"
            style={{ border: '1px solid rgba(11, 15, 13, 0.12)' }}
          >
            <div className="aspect-[16/9] md:aspect-[3/1] overflow-hidden">
              <img
                src={whyChooseMeConfig.wideImage}
                alt={whyChooseMeConfig.wideImageAlt}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <div 
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(11,15,13,0.6), transparent)' }}
            />
            {(whyChooseMeConfig.wideTitle || whyChooseMeConfig.wideDescription) && (
              <div className="wide-text-overlay absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-md opacity-0">
                {whyChooseMeConfig.wideTitle && (
                  <p className="text-white/90 font-bold text-2xl md:text-3xl mb-3">
                    {whyChooseMeConfig.wideTitle}
                  </p>
                )}
                {whyChooseMeConfig.wideDescription && (
                  <p className="text-white/70 text-sm md:text-base">
                    {whyChooseMeConfig.wideDescription}
                  </p>
                )}
              </div>
            )}
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30" />
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div 
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(57, 255, 20, 0.3), transparent)' }}
      />
    </section>
  );
}
