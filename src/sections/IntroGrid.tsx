import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { introGridConfig } from '../config';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Per-image animation config: unique direction, rotation, parallax depth, stagger order
const imageAnimConfigs = [
  // img0: tall left — sweeps in from the left
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -2, parallax: [-6, 6], delay: 0 },
  // img1: top center — drops in from above
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1.5, parallax: [-3, 3], delay: 0.12 },
  // img2: top right — slides in from the right
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.2, parallax: [-5, 5], delay: 0.08 },
  // img3: tall center — rises from below
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1, parallax: [-4, 4], delay: 0.22 },
  // img4: bottom right — slides in from the right
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.5, parallax: [-7, 7], delay: 0.18 },
];

export function IntroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const windowsRef = useRef<HTMLDivElement>(null);
  const hasContent =
    Boolean(introGridConfig.titleLine1) ||
    Boolean(introGridConfig.titleLine2) ||
    introGridConfig.portfolioImages.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // ── Title: mask-reveal per line ──
      const titleWrap = titleLine1Ref.current?.parentElement?.parentElement;
      if (titleWrap) {
        ScrollTrigger.create({
          trigger: titleWrap,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(
              [titleLine1Ref.current, titleLine2Ref.current],
              {
                yPercent: 0,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.13,
              }
            );
          },
          once: true,
        });
      }

      // ── Description: fade up ──
      ScrollTrigger.create({
        trigger: textRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            textRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.35 }
          );
        },
        once: true,
      });

      // ── Workflow Windows: slide in from sides ──
      const windows = windowsRef.current?.querySelectorAll('.workflow-window');
      if (windows) {
        windows.forEach((window, i) => {
          const fromX = i === 0 ? '-55vw' : '55vw';
          ScrollTrigger.create({
            trigger: windowsRef.current,
            start: 'top 80%',
            onEnter: () => {
              gsap.fromTo(
                window,
                { x: fromX, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: i * 0.15 }
              );
            },
            once: true,
          });
        });
      }

      // ── Grid images: per-image directional reveal + rotation + scale + parallax ──
      const gridItems = gridRef.current?.querySelectorAll('.grid-item');
      if (gridItems) {
        gridItems.forEach((item, i) => {
          const img = item.querySelector('img');
          const cfg = imageAnimConfigs[i];
          if (!cfg) return;

          // One-shot reveal on scroll-enter
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
              // Unhide (Tailwind opacity-0 used as pre-GSAP fallback)
              gsap.set(item, { opacity: 1 });

              // Clip-path directional reveal
              gsap.fromTo(
                item,
                { clipPath: cfg.clipFrom },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.3,
                  ease: 'power4.inOut',
                  delay: cfg.delay,
                }
              );

              if (img) {
                // Scale zoom-out (Ken Burns)
                gsap.fromTo(
                  img,
                  { scale: 1.45, rotate: cfg.rotation },
                  {
                    scale: 1.12,
                    rotate: 0,
                    duration: 1.8,
                    ease: 'power3.out',
                    delay: cfg.delay,
                  }
                );
              }
            },
            once: true,
          });

          // Continuous parallax (varied depth per image → layered 3D feel)
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: cfg.parallax[0] },
              {
                yPercent: cfg.parallax[1],
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 light-section"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Title with split-line mask reveal ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6">
            <div className="overflow-hidden">
              <div
                ref={titleLine1Ref}
                className="translate-y-[110%]"
              >
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--charcoal)' }}>
                  {introGridConfig.titleLine1}
                </span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                ref={titleLine2Ref}
                className="translate-y-[110%]"
              >
                <span 
                  className="block text-3xl md:text-4xl lg:text-5xl italic font-normal"
                  style={{ color: 'var(--neon-green)' }}
                >
                  {introGridConfig.titleLine2}
                </span>
              </div>
            </div>
          </div>

          <p
            ref={textRef}
            className="text-base md:text-lg leading-relaxed opacity-0"
            style={{ color: 'var(--text-secondary-light)' }}
          >
            {introGridConfig.description}
          </p>
        </div>

        {/* ── Workflow Lab Windows ── */}
        <div ref={windowsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Left Window - Workspace */}
          <div 
            className="workflow-window relative overflow-hidden rounded-lg opacity-0"
            style={{ 
              aspectRatio: '16/9',
              border: '1px solid rgba(11, 15, 13, 0.12)'
            }}
          >
            <img
              src={introGridConfig.portfolioImages[0]?.src}
              alt={introGridConfig.portfolioImages[0]?.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'var(--neon-green)' }} />
          </div>

          {/* Right Window - Code/Nodes */}
          <div 
            className="workflow-window relative overflow-hidden rounded-lg opacity-0"
            style={{ 
              aspectRatio: '16/9',
              border: '1px solid rgba(11, 15, 13, 0.12)'
            }}
          >
            <img
              src={introGridConfig.portfolioImages[1]?.src}
              alt={introGridConfig.portfolioImages[1]?.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: 'var(--neon-green)' }} />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'var(--neon-green)' }} />
          </div>
        </div>

        {/* ── Principles Grid ── */}
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--neon-green)' }}>
            Our Method: Map. Build. Monitor. Improve.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]"
        >
          {introGridConfig.portfolioImages.slice(2).map((image, index) => (
            <div
              key={index}
              className={`grid-item relative overflow-hidden rounded-lg group cursor-pointer opacity-0 ${
                index === 0 ? 'md:col-span-1 md:row-span-2' : ''
              } ${index === 2 ? 'row-span-2' : ''}`}
              style={{ border: '1px solid rgba(11, 15, 13, 0.12)' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Viewfinder corners on hover */}
              <div 
                className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500"
              />
              <div 
                className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500"
              />
              <div 
                className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500"
              />
              <div 
                className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Floating accent text */}
        {introGridConfig.accentText && (
          <div className="mt-12 md:mt-16 flex justify-between items-center">
            <p className="text-sm tracking-wider uppercase" style={{ color: 'var(--text-secondary-light)' }}>
              {introGridConfig.accentText}
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--charcoal)' }}
            >
              See our services
              <ArrowRight className="w-4 h-4" style={{ color: 'var(--neon-green)' }} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
