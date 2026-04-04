import { type FormEvent, useRef, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { buildWhatsAppLink, whatsappDisplayNumber } from '../lib/whatsapp';

const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ||
  'https://n8n-dniislmq.ap-southeast-1.clawcloudrun.com/webhook/d7d34c3a-4e3c-41a3-9bd3-21e0141dea8c';
const CONTACT_WHATSAPP_LINK = buildWhatsAppLink('Hi, I want help editing my content.');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  usePageMeta(
    'Contact | Aqib Ops',
    'Get in touch about YouTube and short-form video editing for your channel, brand, or content team.',
    {
      keywords: [
        'contact video editor',
        'youtube video editor contact',
        'short form editor contact',
        'aqib ops contact',
      ],
      path: '/contact',
      image: '/contact-workspace.jpg',
    }
  );
  usePageReveal(pageRef);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();
    const whatsappNumberRaw = String(formData.get('whatsappNumber') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const honeypot = String(formData.get('referenceWebsite') ?? '').trim();
    const whatsappDigitsOnly = whatsappNumberRaw.replace(/\D/g, '');
    const whatsappNumber = whatsappDigitsOnly;

    if (honeypot) {
      setSubmitStatus({
        type: 'success',
        message: 'Great, your message is received. We will be in touch with you shortly.',
      });
      form.reset();
      return;
    }

    if (!name || !email || !message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete name, email, WhatsApp number, and project details before submitting.',
      });
      return;
    }

    if (!whatsappNumber || whatsappNumber.length < 6 || whatsappNumber.length > 15) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid WhatsApp number before submitting.',
      });
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          website,
          businessOrWebsite: website,
          whatsappNumber,
          message,
          details: message,
          submittedAt: new Date().toISOString(),
          source: 'aqib-edits-contact-page',
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
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            Contact
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Let&apos;s make your content more engaging.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/[0.72] sm:text-lg" data-animate="fade-up" data-delay="0.08">
            Send your channel or brand link, tell me what you create, and explain where the current
            edit feels weak.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <aside className="paper-card p-5 sm:p-7" data-animate="fade-up">
              <h2 className="font-display text-2xl font-semibold text-black sm:text-3xl">Prefer Direct?</h2>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:AqibOpscontact@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85] break-all sm:break-normal"
                >
                  <Mail className="h-5 w-5 text-[#b37b00]" />
                  AqibOpscontact@gmail.com
                </a>
                <a
                  href={CONTACT_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-black/[0.85]"
                >
                  <MessageCircle className="h-5 w-5 text-[#b37b00]" />
                  WhatsApp: {whatsappDisplayNumber}
                </a>
              </div>
              <p className="mt-6 text-sm leading-7 text-black/[0.68]">
                Fast replies for scoping, turnaround questions, and sample-link requests.
              </p>
            </aside>

            <form onSubmit={handleSubmit} className="paper-card p-5 sm:p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">Name</span>
                  <input name="name" type="text" className="contact-input" placeholder="Your name" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">Email</span>
                  <input name="email" type="email" className="contact-input" placeholder="you@company.com" required />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">WhatsApp number</span>
                  <input
                    name="whatsappNumber"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\\s\\-()]{6,20}"
                    className="contact-input"
                    placeholder="3432142032"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">Channel / brand link (optional)</span>
                  <input name="website" type="text" className="contact-input" placeholder="youtube.com/@yourchannel" />
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Project details</span>
                <textarea
                  name="message"
                  rows={6}
                  className="contact-input min-h-[140px] resize-y"
                  placeholder="Tell me what you create, which platform it is for, and what you want the edit to improve."
                  required
                />
              </label>

              <input
                name="referenceWebsite"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-solid mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <p className="mt-3 text-sm text-black/[0.62]">
                Most replies go out within 24 hours with a clear next step.
              </p>
              {submitStatus && (
                <p className={`mt-4 text-sm ${submitStatus.type === 'success' ? 'text-[#b37b00]' : 'text-red-600'}`}>
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
