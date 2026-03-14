import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle, Twitter, type LucideIcon } from 'lucide-react';
import { buildWhatsAppLink, whatsappDisplayNumber } from '../../lib/whatsapp';

const footerLinks = {
  company: [
    { label: 'Solutions', to: '/solutions' },
    { label: 'Service Pages', to: '/shopify-automation' },
    { label: 'Industry Pages', to: '/industry/ecommerce-automation' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
  ],
  resources: [
    { label: 'Insights', to: '/insights' },
    { label: 'FAQ Hub', to: '/faq' },
    { label: 'Audit Checklist', to: '/workflow-audit-checklist' },
    { label: 'Compare Alternatives', to: '/compare-alternatives' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  ],
};

const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aqibops', icon: Linkedin },
  { label: 'X', href: 'https://x.com/AqibOps', icon: Twitter },
  {
    label: 'WhatsApp',
    href: buildWhatsAppLink('Hi Aqib Ops, I want to discuss workflow automation for my business.'),
    icon: MessageCircle,
  },
  { label: 'Email', href: 'mailto:AqibOpscontact@gmail.com', icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-paper border-t border-black/[0.12]">
      <div className="container-site py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(140deg,#05080a,#0b1115)] p-7 md:p-10">
          <div className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[rgba(0,228,194,0.18)] blur-[80px]" />
          <div className="pointer-events-none absolute -left-6 bottom-0 h-36 w-36 rounded-full bg-[rgba(117,142,255,0.2)] blur-[80px]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-white/[0.58]">Ready To Build</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Manual operations slow you down every week. Build automations that execute while
                your team scales.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/70">
                We cap projects at <span className="font-semibold text-white">5 active clients</span> so every build
                gets senior attention, fast iteration, and extra QA. Slots reopen as projects ship.
              </p>
            </div>
            <Link to="/contact" className="btn-solid w-full justify-center md:w-auto">
              Book Quickly
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="eyebrow text-black/[0.5]">Aqib Ops</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
              Automation systems for teams that refuse to stay slow.
            </h2>
            <p className="mt-4 max-w-lg text-black/[0.65]">
              We design, build, and run workflow automation for sales, support, and operations.
              Built for reliability, speed, and measurable business output.
            </p>
          </div>

          <div>
            <p className="eyebrow text-black/[0.5]">Company</p>
            <div className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <Link key={item.to + item.label} to={item.to} className="block text-black/[0.7] hover:text-black">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-black/[0.5]">Resources</p>
            <div className="mt-4 space-y-3">
              {footerLinks.resources.map((item) => (
                <Link key={item.to + item.label} to={item.to} className="block text-black/[0.7] hover:text-black">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-black/[0.1] pt-6">
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group inline-flex items-center gap-2 rounded-full border border-black/[0.14] bg-white/[0.78] px-3 py-2 text-sm font-medium text-black/[0.86] transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.26] hover:bg-white"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(0,140,116,0.34)] bg-[rgba(0,140,116,0.08)] text-[var(--mint-deep)]">
                  <item.icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="text-sm text-black/[0.55]">
            <p>(c) {year} Aqib Ops. All rights reserved.</p>
            <p className="mt-1">WhatsApp: {whatsappDisplayNumber}</p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-black/[0.12] bg-[#0a0f12] p-6 md:p-10">
          <p className="eyebrow text-white/[0.55]">Automation Execution Studio</p>
          <p className="mt-5 font-display font-extrabold leading-[0.86] tracking-[-0.05em]">
            <span
              className="block text-[clamp(3.2rem,16vw,12rem)] text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(112deg, rgba(255,255,255,0.95), rgba(0,228,194,0.98), rgba(154,167,255,0.94))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              aqibops
            </span>
            <span className="mt-1 block text-[clamp(0.95rem,3.2vw,1.9rem)] font-semibold uppercase tracking-[0.16em] text-white/[0.68]">
              automation studio
            </span>
          </p>
          <p className="mt-3 max-w-2xl text-sm text-white/[0.66]">
            Stop repeating manual work. Launch automations that keep your business fast under
            pressure.
          </p>
        </div>
      </div>
    </footer>
  );
}
