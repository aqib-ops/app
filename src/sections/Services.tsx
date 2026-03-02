import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Workflow, Plug, Bell, Sparkles, type LucideIcon } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Plug,
  Bell,
  Sparkles,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const hasContent = Boolean(servicesConfig.titleLine1) || servicesConfig.services.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Heading — slide up
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Badge pop in
      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            badgeRef.current,
            { scale: 0.5, rotation: 10, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
          );
        },
        once: true,
      });

      // Service cards — staggered slide up
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
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
      id="services"
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Heading */}
          <div ref={headingRef} className="opacity-0">
            {servicesConfig.subtitle && (
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
                {servicesConfig.subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {servicesConfig.titleLine1}
              <br />
              <span className="italic font-normal" style={{ color: 'var(--neon-green)' }}>
                {servicesConfig.titleLine2Italic}
              </span>
            </h2>
            {servicesConfig.description && (
              <p className="mt-6 text-white/60 text-base md:text-lg max-w-md leading-relaxed">
                {servicesConfig.description}
              </p>
            )}
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40">
              E-commerce • CRM • Support • Marketing
            </p>
          </div>

          {/* Right Column - Badge + Services Grid */}
          <div>
            <div ref={badgeRef} className="flex justify-end mb-6 opacity-0">
              <div className="neon-badge">n8n + Make</div>
            </div>
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesConfig.services.map((service, index) => {
                const Icon = iconMap[service.iconName] || Workflow;
                return (
                  <div
                    key={index}
                    className="service-card group p-6 md:p-8 opacity-0 transition-all duration-500 rounded-lg cursor-pointer"
                    style={{ 
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(244, 247, 245, 0.08)'
                    }}
                  >
                    <div className="mb-4">
                      <Icon 
                        className="w-8 h-8 transition-colors duration-300" 
                        strokeWidth={1.5} 
                        style={{ color: 'var(--neon-green)' }}
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: 'var(--neon-green)' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div 
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(57, 255, 20, 0.2), transparent)' }}
      />
    </section>
  );
}
