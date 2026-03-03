import { type FormEvent, useRef, useState } from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { buildWhatsAppLink, whatsappDisplayNumber } from '../lib/whatsapp';
import { countryCallingCodeOptions } from '../lib/countryCallingCodes';

const N8N_WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ??
  'https://n8n-dniislmq.ap-southeast-1.clawcloudrun.com/webhook/d7d34c3a-4e3c-41a3-9bd3-21e0141dea8c';
const CONTACT_WHATSAPP_LINK = buildWhatsAppLink('Hi Aqib Ops, I want to discuss my project.');
const HUMAN_CHECK_VALUE = 'AQIB';
const MIN_FORM_COMPLETION_MS = 2500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"
      />
    </svg>
  );
}

export function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formStartRef = useRef<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  usePageMeta(
    'Contact Aqib Ops | Workflow Automation Consultant',
    'Contact Aqib Ops for workflow automation consulting, n8n or Make.com implementation, and production-ready AI automation systems.',
    {
      keywords: [
        'contact workflow automation consultant',
        'aqib ops contact',
        'n8n automation expert contact',
        'make.com workflow consultant',
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
    const whatsappCountryCode = String(formData.get('whatsappCountryCode') ?? '+92').trim();
    const whatsappNumberRaw = String(formData.get('whatsappNumber') ?? '').trim();
    const details = String(formData.get('details') ?? '').trim();
    const honeypot = String(formData.get('referenceWebsite') ?? '').trim();
    const humanCheck = String(formData.get('humanCheck') ?? '').trim().toUpperCase();
    const termsAccepted = formData.get('termsAccepted') === 'on';
    const completionTime = Date.now() - formStartRef.current;
    const whatsappDigitsOnly = whatsappNumberRaw.replace(/\D/g, '');
    const whatsappNumber = whatsappDigitsOnly.replace(/^0+/, '');
    const whatsappE164 = `${whatsappCountryCode}${whatsappNumber}`;

    if (honeypot) {
      setSubmitStatus({
        type: 'success',
        message: 'Great, your message is received. We will be in touch with you shortly.',
      });
      form.reset();
      formStartRef.current = Date.now();
      return;
    }

    if (!name || !email || !website || !details) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete name, email, website, and project details before submitting.',
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
        message: 'Please enter a valid business email address.',
      });
      return;
    }

    if (details.length < 20) {
      setSubmitStatus({
        type: 'error',
        message: 'Please add at least 20 characters in project details so we can help properly.',
      });
      return;
    }

    if (!termsAccepted) {
      setSubmitStatus({
        type: 'error',
        message: 'Please accept the Terms and Privacy Policy before submitting.',
      });
      return;
    }

    if (humanCheck !== HUMAN_CHECK_VALUE) {
      setSubmitStatus({
        type: 'error',
        message: `Human check failed. Type "${HUMAN_CHECK_VALUE}" exactly and submit again.`,
      });
      return;
    }

    if (completionTime < MIN_FORM_COMPLETION_MS) {
      setSubmitStatus({
        type: 'error',
        message: 'Please wait a moment and submit again.',
      });
      return;
    }

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
          website,
          businessOrWebsite: website,
          whatsappCountryCode,
          whatsappNumber,
          whatsappE164,
          details,
          termsAccepted,
          humanCheckPassed: true,
          submittedAt: new Date().toISOString(),
          source: 'aqib-ops-contact-page',
          formCompletionMs: completionTime,
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
      formStartRef.current = Date.now();
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
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <a
                  href="https://www.linkedin.com/in/aqibops"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.14] bg-white px-3 py-1.5 text-black/[0.74] hover:text-black"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/AqibOps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.14] bg-white px-3 py-1.5 text-black/[0.74] hover:text-black"
                >
                  <XBrandIcon className="h-3.5 w-3.5" />
                  X
                </a>
              </div>
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

              <div className="mt-4 grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-black/[0.75]">WhatsApp country code</span>
                  <select
                    name="whatsappCountryCode"
                    defaultValue="+92"
                    className="contact-input"
                    required
                  >
                    {countryCallingCodeOptions.map((option) => (
                      <option key={`${option.value}-${option.label}`} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
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
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Business or website</span>
                <input
                  name="website"
                  type="text"
                  className="contact-input"
                  placeholder="company.com"
                  required
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

              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">
                  Human check: type <span className="font-mono">{HUMAN_CHECK_VALUE}</span>
                </span>
                <input
                  name="humanCheck"
                  type="text"
                  autoComplete="off"
                  className="contact-input"
                  placeholder={`Type ${HUMAN_CHECK_VALUE}`}
                  required
                />
              </label>

              <label className="mt-4 flex items-start gap-3 rounded-xl border border-black/[0.14] bg-white/60 p-3">
                <input
                  name="termsAccepted"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[var(--mint-deep)]"
                  required
                />
                <span className="text-xs leading-relaxed text-black/[0.72]">
                  I agree to the{' '}
                  <Link to="/terms-and-conditions" className="font-semibold underline">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="font-semibold underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
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
                {isSubmitting ? 'Sending...' : 'Send Brief'}
              </button>
              <p className="mt-3 text-xs text-black/[0.62]">Typical response time: within 24 hours.</p>
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
