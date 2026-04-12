import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { WhatsAppCta } from './WhatsAppCta';
import { siteIdentity } from '../../lib/siteIdentity';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/faq' },
];

function navLinkClass(isActive: boolean) {
  return [
    'inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'bg-[#ffd95a] text-[#191200]'
      : 'text-white/72 hover:bg-white/[0.08] hover:text-white',
  ].join(' ');
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-site">
        <div
          className={`overflow-hidden rounded-b-[1rem] border-x border-b border-t-0 backdrop-blur-xl transition-all duration-300 sm:rounded-b-[1.2rem] ${
            isScrolled
              ? 'border-white/14 bg-[rgba(8,8,8,0.94)] shadow-[0_12px_30px_rgba(0,0,0,0.26)]'
              : 'border-white/10 bg-[rgba(6,6,6,0.8)] shadow-[0_6px_18px_rgba(0,0,0,0.18)]'
          }`}
        >
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:h-[4.45rem] sm:px-4 md:px-5">
            <Link
              to="/"
              className="group inline-flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={siteIdentity.logoPath}
                alt="Aqib Mehmood logo"
                className="h-8 w-8 shrink-0 rounded-[0.85rem] border border-white/[0.16] bg-white/[0.03] object-contain p-0.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:h-9 sm:w-9"
              />
              <div className="min-w-0 leading-none">
                <span className="font-display text-[1.1rem] font-extrabold tracking-[-0.03em] text-white sm:text-[1.45rem]">
                  Aqib <span className="text-[#ffd95a]">Mehmood</span>
                </span>
              </div>
            </Link>

            <nav className="hidden items-center rounded-full border border-white/[0.12] bg-white/[0.03] p-[3px] md:flex">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                  {({ isActive }) => <span className={navLinkClass(isActive)}>{item.label}</span>}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex xl:gap-4">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-white/[0.58] xl:block">
                YouTube + Short-Form Editing
              </span>
              <WhatsAppCta
                className="shadow-[0_10px_24px_rgba(245,196,62,0.22)]"
                message="Hi Aqib, I want to discuss editing for my content."
              >
                Chat on WhatsApp
              </WhatsAppCta>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 bg-[rgba(8,8,8,0.97)] px-3.5 pb-5 pt-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={`mobile-${item.to}`}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                  >
                    {({ isActive }) => <span className={navLinkClass(isActive)}>{item.label}</span>}
                  </NavLink>
                ))}
                <WhatsAppCta
                  className="mt-2"
                  message="Hi Aqib, I want to discuss editing for my content."
                  onClick={() => setMobileOpen(false)}
                >
                  Chat on WhatsApp
                </WhatsAppCta>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
