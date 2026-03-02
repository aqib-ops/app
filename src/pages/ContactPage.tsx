import { type FormEvent, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

export function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Contact | Aqib Ops',
    'Tell Aqib Ops about your automation needs and get a custom workflow plan.'
  );
  usePageReveal(pageRef);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const business = String(formData.get('business') ?? '').trim();
    const details = String(formData.get('details') ?? '').trim();

    const subject = business ? `Automation Inquiry - ${business}` : 'Automation Inquiry';
    const body = [
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `Business: ${business || '-'}`,
      '',
      'Project Details:',
      details || '-',
    ].join('\n');

    window.location.href = `mailto:hello@aqibops.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={pageRef}>
      <section className="section-dark border-b border-white/10">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">Contact</p>
          <h1 className="display-title mt-4 max-w-3xl text-white" data-animate="fade-up">
            Tell us your workflow bottleneck.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/[0.72]" data-animate="fade-up" data-delay="0.08">
            We will map your current process, suggest the right architecture, and provide a clear
            implementation plan.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <aside className="paper-card p-7" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">Direct</p>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:hello@aqibops.studio"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85]"
                >
                  <Mail className="h-5 w-5 text-[var(--mint-deep)]" />
                  hello@aqibops.studio
                </a>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85]"
                >
                  <Phone className="h-5 w-5 text-[var(--mint-deep)]" />
                  +92 300 1234567
                </a>
              </div>
              <p className="mt-6 text-sm text-black/60">
                Response window: usually within 24 hours. Share your stack and we will tailor the
                solution.
              </p>
            </aside>

            <form onSubmit={handleSubmit} className="paper-card p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">Name</span>
                  <input
                    name="name"
                    type="text"
                    className="contact-input"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Business or website</span>
                <input
                  name="business"
                  type="text"
                  className="contact-input"
                  placeholder="company.com"
                />
              </label>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Project details</span>
                <textarea
                  name="details"
                  rows={6}
                  className="contact-input min-h-[140px] resize-y"
                  placeholder="What workflow are you trying to automate?"
                  required
                />
              </label>

              <button type="submit" className="btn-solid mt-6 w-full justify-center sm:w-auto">
                Send Brief
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
