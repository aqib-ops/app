import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppChatButton } from './WhatsAppChatButton';

export function SiteLayout() {
  const contentRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <main ref={contentRef}>
        <Outlet />
      </main>
      <WhatsAppChatButton />
      <SiteFooter />
    </div>
  );
}
