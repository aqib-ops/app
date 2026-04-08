import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle, Twitter, type LucideIcon } from 'lucide-react';
import { buildWhatsAppLink, whatsappDisplayNumber } from '../../lib/whatsapp';

const footerLinks = {
  pages: [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Services', to: '/services' },
    { label: 'FAQ', to: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  ],
};

const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aqibops', icon: Linkedin },
  { label: 'X', href: 'https://x.com/AqibOps', icon: Twitter },
  {
    label: 'WhatsApp',
    href: buildWhatsAppLink('Hi, I want help editing my content.'),
    icon: MessageCircle,
  },
  { label: 'Email', href: 'mailto:AqibOpscontact@gmail.com', icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-paper border-t border-black/[0.12]">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="eyebrow text-black/[0.5]">Aqib Ops</p>
            <h2 className="mt-4 max-w-xl font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              Premium editing for creators who care about retention.
            </h2>
            <p className="mt-4 max-w-lg text-black/[0.65]">
              YouTube edits, short-form clips, and repurposed content built for stronger pacing,
              clearer storytelling, and smoother delivery.
            </p>
          </div>

          <div>
            <p className="eyebrow text-black/[0.5]">Pages</p>
            <div className="mt-4 space-y-3">
              {footerLinks.pages.map((item) => (
                <Link key={item.to + item.label} to={item.to} className="block text-black/[0.7] hover:text-black">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-black/[0.5]">Legal</p>
            <div className="mt-4 space-y-3">
              {footerLinks.legal.map((item) => (
                <Link key={item.to + item.label} to={item.to} className="block text-black/[0.7] hover:text-black">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-black/[0.1] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-wrap gap-3 md:w-auto md:items-center">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group inline-flex w-full items-center gap-2 rounded-full border border-black/[0.14] bg-white/[0.78] px-3 py-2 text-sm font-medium text-black/[0.86] transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.26] hover:bg-white sm:w-auto"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#d9b032]/35 bg-[#f5c43e]/14 text-[#b37b00]">
                  <item.icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="w-full text-sm text-black/[0.55] md:w-auto md:text-right">
            <p>(c) {year} Aqib Ops. All rights reserved.</p>
            <p className="mt-1">WhatsApp: {whatsappDisplayNumber}</p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-black/[0.12] bg-[#0b0b0b] p-5 sm:p-6 md:p-10">
          <p className="eyebrow text-white/[0.55]">YouTube + Short-Form Editing</p>
          <p className="mt-5 font-display font-extrabold leading-[0.86] tracking-[-0.05em]">
            <span
              className="block text-[clamp(2.7rem,18vw,9.5rem)] text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(112deg, rgba(255,255,255,0.96), rgba(245,196,62,0.98), rgba(194,133,0,0.92))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              aqibops
            </span>
            <span className="mt-1 block text-[clamp(0.85rem,4vw,1.9rem)] font-semibold uppercase tracking-[0.16em] text-white/[0.68]">
              retention-focused portfolio
            </span>
          </p>
          <p className="mt-3 max-w-2xl text-sm text-white/[0.66]">
            Better hooks, cleaner pacing, and efficient post-production for creators who want
            content that feels sharper.
          </p>
        </div>
      </div>
    </footer>
  );
}
