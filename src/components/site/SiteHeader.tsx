import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

function navLinkClass(isActive: boolean) {
  return [
    'inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'bg-white/[0.14] text-white'
      : 'text-white/70 hover:bg-white/[0.08] hover:text-white',
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
          className={`overflow-hidden rounded-b-[1.35rem] border-x border-b border-t-0 backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? 'border-white/16 bg-[rgba(4,8,10,0.92)] shadow-[0_12px_30px_rgba(0,0,0,0.22)]'
              : 'border-white/10 bg-[rgba(5,8,10,0.72)] shadow-[0_6px_18px_rgba(0,0,0,0.16)]'
          }`}
        >
          <div className="flex h-20 items-center justify-between px-3 md:px-5">
            <Link to="/" className="group inline-flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <img
                src="/Aqib.svg"
                alt="Aqib Ops logo"
                className="h-10 w-10 rounded-xl border border-white/[0.2] object-contain"
              />
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                aqib <span className="text-[var(--mint)]">ops</span>
              </span>
            </Link>

            <nav className="hidden items-center rounded-full border border-white/[0.12] bg-white/[0.03] p-1 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                  {({ isActive }) => <span className={navLinkClass(isActive)}>{item.label}</span>}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/[0.58]">
                Automation Execution Studio
              </span>
              <Link to="/contact" className="btn-solid shadow-[0_8px_20px_rgba(0,228,194,0.24)]">
                Book Audit
              </Link>
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
            <div className="border-t border-white/10 bg-[rgba(5,8,10,0.96)] px-4 pb-4 pt-3 md:hidden">
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
                <Link to="/contact" className="btn-solid mt-2 justify-center" onClick={() => setMobileOpen(false)}>
                  Book Audit
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}
