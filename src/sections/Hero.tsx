import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const badge3Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasContent =
    Boolean(heroConfig.backgroundText) ||
    Boolean(heroConfig.heroImage) ||
    heroConfig.navLinks.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Left panel slides in
      tl.fromTo(
        leftPanelRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );

      // Headline staggers in
      tl.fromTo(
        headlineRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        0.2
      );

      // Badges pop in with bounce
      tl.fromTo(
        [badge1Ref.current, badge2Ref.current, badge3Ref.current],
        { scale: 0.6, rotation: -12, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: 'back.out(1.8)' },
        0.4
      );

      // CTA fades in
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.6
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // SETTLE phase (0% - 70%): hold position
      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        leftPanelRef.current,
        { x: 0, opacity: 1 },
        { x: '-35vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [badge1Ref.current, badge2Ref.current],
        { x: 0, y: 0, opacity: 1 },
        { x: '10vw', y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        badge3Ref.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '-10vw', y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        ctaRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden z-10"
      style={{ background: 'var(--charcoal)' }}
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--neon-green)' }}>
            AQIB OPS
          </span>
          <span className="text-white/60 text-xs">STUDIO</span>
        </div>
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-white/70 text-sm">
            {heroConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <button
          type="button"
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {heroConfig.navLinks.length > 0 && (
          <div
            className={`md:hidden absolute left-6 right-6 top-full mt-3 rounded-lg border transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            style={{
              borderColor: 'rgba(244, 247, 245, 0.12)',
              background: 'rgba(11, 15, 13, 0.94)',
            }}
          >
            {heroConfig.navLinks.map((link) => (
              <a
                key={`mobile-${link.label}`}
                href={link.href}
                className="block px-4 py-3 text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Left Panel - Hero Image */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-full md:w-[52vw] h-full z-20"
      >
        <div className="relative w-full h-full p-4 md:p-8">
          <div className="relative w-full h-full overflow-hidden rounded-lg media-frame">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 60%, var(--charcoal))' }}
            />
            <div className="absolute inset-0 md:hidden bg-[linear-gradient(to_top,rgba(11,15,13,0.88),rgba(11,15,13,0.48),rgba(11,15,13,0.2))]" />
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div 
        className="hidden md:block absolute left-[52vw] top-0 w-px h-full z-30"
        style={{ background: 'rgba(244, 247, 245, 0.12)' }}
      />

      {/* Right Panel - Content */}
      <div
        ref={rightPanelRef}
        className="absolute right-0 top-0 w-full md:w-[48vw] h-full z-30 flex flex-col justify-center px-6 md:px-12 bg-[rgba(11,15,13,0.55)] md:bg-transparent"
      >
        {/* Badges */}
        <div className="absolute top-24 right-6 md:right-12 flex flex-col gap-3">
          <div ref={badge1Ref} className="neon-badge text-xs">
            n8n
          </div>
          <div ref={badge2Ref} className="neon-badge text-xs" style={{ marginRight: '2rem' }}>
            Make
          </div>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="max-w-lg mt-16 md:mt-0">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: 'var(--neon-green)' }} />
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">
              Automation Studio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Automation that{' '}
            <span style={{ color: 'var(--neon-green)' }}>actually fits</span> your business.
          </h1>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            We design and build reliable workflows using n8n and Make—so your team can focus on growth.
          </p>
        </div>

        {/* CTA */}
        <div ref={ctaRef}>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 mb-6">
            Book a free workflow audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-white/50 max-w-sm">
            Small teams, e-commerce brands, creators—turn repetitive work into auto-pilot.
          </p>
        </div>

        {/* Bottom Badge */}
        <div ref={badge3Ref} className="absolute bottom-12 left-6 md:left-12">
          <div className="neon-badge text-xs">Aqib Ops</div>
        </div>
      </div>
    </section>
  );
}
