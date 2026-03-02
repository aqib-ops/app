import { type FormEvent, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Linkedin, Mail, Send, type LucideIcon } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Linkedin,
  Mail,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const hasContent =
    Boolean(footerConfig.logoText) ||
    Boolean(footerConfig.email) ||
    footerConfig.navLinks.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Logo — scale up + fade
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Content — fade up
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const business = String(formData.get('business') ?? '').trim();
    const challenge = String(formData.get('challenge') ?? '').trim();

    const subject = business
      ? `Workflow Audit Request - ${business}`
      : 'Workflow Audit Request';
    const body = [
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `Business / Website: ${business || '-'}`,
      '',
      'Workflow challenge:',
      challenge || '-',
    ].join('\n');

    const mailto = `mailto:${footerConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full pt-24 md:pt-32 pb-8 overflow-hidden"
      style={{ background: 'var(--charcoal)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Logo */}
        {footerConfig.logoText && (
          <div ref={logoRef} className="opacity-0 mb-16 md:mb-24">
            <svg
              viewBox="0 0 600 100"
              className="w-full h-auto max-h-[20vh]"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-extrabold"
                style={{
                  fontSize: '90px',
                  letterSpacing: '-0.03em',
                  fill: 'var(--neon-green)',
                }}
              >
                {footerConfig.logoText}
              </text>
            </svg>
          </div>
        )}

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Left - Headline */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s build your next{' '}
              <span style={{ color: 'var(--neon-green)' }}>workflow.</span>
            </h3>
            <p className="text-white/60 mb-6">
              Tell us what you&apos;re repeating. We&apos;ll reply with a plan and a timeline.
            </p>
            <a 
              href={`mailto:${footerConfig.email}`}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Mail className="w-4 h-4" style={{ color: 'var(--neon-green)' }} />
              {footerConfig.email}
            </a>
          </div>

          {/* Right - Form */}
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon-green)] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon-green)] transition-colors"
              />
            </div>
            <input
              type="text"
              name="business"
              placeholder="Business / Website"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon-green)] transition-colors"
            />
            <textarea
              name="challenge"
              placeholder="Tell us about your workflow challenge..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--neon-green)] transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div ref={contentRef} className="opacity-0">
          <div 
            className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16 pt-8"
            style={{ borderTop: '1px solid rgba(244, 247, 245, 0.08)' }}
          >
            {/* Contact Info */}
            <div>
              {footerConfig.contactLabel && (
                <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
                  {footerConfig.contactLabel}
                </p>
              )}
              {footerConfig.email && (
                <a
                  href={`mailto:${footerConfig.email}`}
                  className="text-xl md:text-2xl font-semibold text-white hover:text-white/70 transition-colors duration-300"
                >
                  {footerConfig.email}
                </a>
              )}
              {footerConfig.locationText && (
                <p className="mt-4 text-white/50 text-sm whitespace-pre-line">
                  {footerConfig.locationText}
                </p>
              )}
            </div>

            {/* Navigation */}
            {footerConfig.navLinks.length > 0 && (
              <div>
                {footerConfig.navigationLabel && (
                  <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
                    {footerConfig.navigationLabel}
                  </p>
                )}
                <nav className="space-y-3">
                  {footerConfig.navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Social Links */}
            <div>
              {footerConfig.socialLabel && (
                <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--neon-green)' }}>
                  {footerConfig.socialLabel}
                </p>
              )}
              {footerConfig.socialLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {footerConfig.socialLinks.map((social) => {
                    const Icon = iconMap[social.iconName] || Mail;
                    const isExternal = social.href.startsWith('http');
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ 
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--neon-green)'
                        }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              )}
              {footerConfig.tagline && (
                <p className="mt-6 text-white/40 text-sm whitespace-pre-line">
                  {footerConfig.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(244, 247, 245, 0.08)' }}
          >
            <p className="text-white/40 text-sm">
              {footerConfig.copyright || `\u00A9 ${new Date().getFullYear()} All rights reserved.`}
            </p>
            {footerConfig.bottomLinks.length > 0 && (
              <div className="flex items-center gap-6 text-white/40 text-sm">
                {footerConfig.bottomLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(57, 255, 20, 0.05), transparent)' }}
      />
    </footer>
  );
}
