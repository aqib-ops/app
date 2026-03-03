import { type FormEvent, useRef, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { buildWhatsAppLink, whatsappDisplayNumber } from '../lib/whatsapp';

const N8N_WEBHOOK_URL = 'https://n8n-dniislmq.ap-southeast-1.clawcloudrun.com/webhook/d7d34c3a-4e3c-41a3-9bd3-21e0141dea8c';
const CONTACT_WHATSAPP_LINK = buildWhatsAppLink('Hi Aqib Ops, I want to discuss my project.');

export function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  usePageMeta(
    'Contact | Aqib Ops',
    'Tell Aqib Ops about your automation needs and get a custom workflow plan.'
  );
  usePageReveal(pageRef);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const business = String(formData.get('business') ?? '').trim();
    const details = String(formData.get('details') ?? '').trim();
    const termsAccepted = true;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          businessOrWebsite: business,
          details,
          termsAccepted,
          submittedAt: new Date().toISOString(),
          source: 'aqib-ops-contact-page',
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }

      form.reset();
      setSubmitStatus({
        type: 'success',
        message: 'Great, your message is received. We will be in touch with you shortly.',
      });
    } catch (error) {
      console.error('Contact form webhook submission failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Submission failed. Please try again or contact us on WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
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
                  href="mailto:AqibOpscontact@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85]"
                >
                  <Mail className="h-5 w-5 text-[var(--mint-deep)]" />
                  AqibOpscontact@gmail.com
                </a>
                <a
                  href={CONTACT_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85]"
                >
                  <MessageCircle className="h-5 w-5 text-[var(--mint-deep)]" />
                  WhatsApp: {whatsappDisplayNumber}
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-solid mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Brief'}
              </button>
              <p className="mt-3 text-xs text-black/[0.62]">
                By sending brief, you agree to our terms and services.
              </p>
              {submitStatus && (
                <p className={`mt-4 text-sm ${submitStatus.type === 'success' ? 'text-[var(--mint-deep)]' : 'text-red-600'}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
