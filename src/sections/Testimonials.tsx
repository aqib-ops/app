import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Quote, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasContent =
    Boolean(testimonialsConfig.titleRegular) ||
    testimonialsConfig.testimonials.length > 0;

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

      // Carousel — fade up
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            carouselRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
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
      className="relative w-full py-24 md:py-32 overflow-hidden light-section"
      style={{ background: 'var(--off-white)' }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div ref={headerRef} className="text-center opacity-0">
          {testimonialsConfig.subtitle && (
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary-light)' }}>
              {testimonialsConfig.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--charcoal)' }}>
            {testimonialsConfig.titleRegular}{' '}
            <span className="italic font-normal" style={{ color: 'var(--neon-green)' }}>
              {testimonialsConfig.titleItalic}
            </span>
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={carouselRef} className="relative opacity-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          className="!px-6"
        >
          {testimonialsConfig.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div 
                className="group rounded-lg p-8 md:p-10 h-full transition-all duration-500 hover:text-white"
                style={{ 
                  background: 'rgba(11, 15, 13, 0.04)',
                  border: '1px solid rgba(11, 15, 13, 0.08)'
                }}
              >
                {/* Quote icon */}
                <div className="flex items-center gap-2 mb-6">
                  <Quote 
                    className="w-8 h-8 transition-colors duration-500" 
                    strokeWidth={1} 
                    style={{ color: 'var(--neon-green)', opacity: 0.5 }}
                  />
                  <Sparkles 
                    className="w-4 h-4 starburst" 
                    style={{ color: 'var(--neon-green)' }}
                  />
                </div>

                {/* Quote text */}
                <p 
                  className="text-base md:text-lg leading-relaxed mb-8 transition-colors duration-500"
                  style={{ color: 'var(--charcoal)', opacity: 0.8 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold transition-colors duration-500" style={{ color: 'var(--charcoal)' }}>
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-sm transition-colors duration-500" 
                      style={{ color: 'var(--text-secondary-light)' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient overlays for fade effect */}
        <div 
          className="absolute top-0 left-0 w-24 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--off-white), transparent)' }}
        />
        <div 
          className="absolute top-0 right-0 w-24 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--off-white), transparent)' }}
        />
      </div>

      {/* Decorative element */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div 
          className="h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(57, 255, 20, 0.3), transparent)' }}
        />
      </div>
    </section>
  );
}
