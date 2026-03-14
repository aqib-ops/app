import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function parseDelay(node: Element): number {
  const raw = node.getAttribute('data-delay');
  const value = raw ? Number(raw) : 0;
  return Number.isFinite(value) ? value : 0;
}

export function usePageReveal(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      document.documentElement.classList.add('js-reveal');

      const fadeUpEls = gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]', scope);
      fadeUpEls.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.set(el, { willChange: 'transform, opacity, filter' });
            gsap.fromTo(
              el,
              { y: 28, opacity: 0, filter: 'blur(4px)' },
              {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.85,
                ease: 'power3.out',
                delay: parseDelay(el),
                onComplete: () => {
                  gsap.set(el, { clearProps: 'will-change' });
                },
              }
            );
          },
        });
      });

      const fadeEls = gsap.utils.toArray<HTMLElement>('[data-animate="fade"]', scope);
      fadeEls.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.set(el, { willChange: 'opacity' });
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.9,
                ease: 'power2.out',
                delay: parseDelay(el),
                onComplete: () => {
                  gsap.set(el, { clearProps: 'will-change' });
                },
              }
            );
          },
        });
      });

      const clipEls = gsap.utils.toArray<HTMLElement>('[data-animate="clip"]', scope);
      clipEls.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.set(el, { willChange: 'clip-path, opacity, transform' });
            gsap.fromTo(
              el,
              { clipPath: 'inset(0 0 100% 0)', opacity: 0.8 },
              {
                clipPath: 'inset(0 0 0% 0)',
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
                delay: parseDelay(el),
                onComplete: () => {
                  gsap.set(el, { clearProps: 'will-change' });
                },
              }
            );
          },
        });
      });

      const staggerParents = gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]', scope);
      staggerParents.forEach((parent) => {
        const children = parent.querySelectorAll<HTMLElement>('[data-animate-child]');
        if (!children.length) return;

        ScrollTrigger.create({
          trigger: parent,
          start: 'top 84%',
          once: true,
          onEnter: () => {
            gsap.set(children, { willChange: 'transform, opacity' });
            gsap.fromTo(
              children,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: parseDelay(parent),
                onComplete: () => {
                  gsap.set(children, { clearProps: 'will-change' });
                },
              }
            );
          },
        });
      });

      const parallaxEls = gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]', scope);
      parallaxEls.forEach((el) => {
        gsap.set(el, { willChange: 'transform' });
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
            onComplete: () => {
              gsap.set(el, { clearProps: 'will-change' });
            },
          }
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
