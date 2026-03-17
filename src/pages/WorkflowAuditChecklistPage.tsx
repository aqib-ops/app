import { type FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const checklistHighlights = [
  'Trigger map: where your automation should start',
  'Exception handling: what to do when data is incomplete',
  'Alerts and escalation: who gets notified and when',
  'Monitoring: what to track daily and weekly',
  'Handover rules: who owns workflow updates after launch',
];

export function WorkflowAuditChecklistPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  usePageMeta(
    'Workflow Audit Checklist | Free Download',
    'Download a free workflow audit checklist by Aqib Ops and identify automation opportunities in your operations.',
    {
      keywords: [
        'workflow audit checklist',
        'free automation checklist',
        'operations automation audit template',
      ],
      path: '/workflow-audit-checklist',
      image: '/workspace-desk.jpg',
      structuredData: {
        '@type': 'CreativeWork',
        name: 'Workflow Audit Checklist',
        description: 'Free checklist for workflow automation discovery and implementation readiness.',
      },
    }
  );

  usePageReveal(pageRef);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    if (!name || !email) {
      setStatusMessage('Please add your name and email.');
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      setSubmitted(true);
      setStatusMessage('Thanks. Your checklist is ready below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Free Lead Magnet
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Workflow Audit Checklist
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Use this checklist to identify automation opportunities, reduce execution risk, and plan clean handoff.
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.5fr_0.5fr]">
            <article className="paper-card p-7 md:p-8" data-animate="fade-up">
              <p className="eyebrow text-black/[0.45]">What You Get</p>
              <ul className="mt-4 space-y-3 text-black/[0.78]">
                {checklistHighlights.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <form onSubmit={handleSubmit} className="paper-card p-7 md:p-8" data-animate="fade-up" data-delay="0.08">
              <p className="eyebrow text-black/[0.45]">Get Access</p>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Name</span>
                <input name="name" type="text" className="contact-input" placeholder="Your name" required />
              </label>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-semibold text-black/[0.75]">Email</span>
                <input
                  name="email"
                  type="email"
                  className="contact-input"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-solid mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Unlock Checklist'}
              </button>
              {statusMessage && <p className="mt-3 text-sm text-black/[0.68]">{statusMessage}</p>}

              {submitted && (
                <a href="/downloads/workflow-audit-checklist.txt" download className="btn-ghost mt-5 w-full justify-center">
                  Download Checklist (.txt)
                </a>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section-dark border-t border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <Link to="/faq" className="btn-ghost">
              Browse FAQ
            </Link>
            <Link to="/contact" className="btn-solid">
              Book Automation Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
