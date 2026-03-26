import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const updatedOn = 'March 3, 2026';

const serviceRules = [
  'Project delivery is based on an agreed scope document, timeline, and milestone plan.',
  'Any requested features outside scope are handled as change requests with revised timeline and pricing.',
  'Client-side access to tools, APIs, datasets, and platforms must be provided before implementation starts.',
  'Aqib Ops may use vetted third-party tools and providers where needed to deliver stable automation outcomes.',
  'Final delivery includes tested workflows and handover notes for day-to-day operational use.',
];

const clientResponsibilities = [
  'Provide accurate business and process information required for discovery and implementation.',
  'Review deliverables and provide timely feedback within agreed review windows.',
  'Maintain legal rights to any data, content, or credentials shared for implementation.',
  'Use delivered workflows in compliance with laws, platform rules, and internal governance policies.',
];

const prohibitedUses = [
  'Automations intended for illegal activity, fraud, impersonation, or unauthorized data collection.',
  'Attempting to probe, reverse-engineer, or disrupt systems operated by Aqib Ops.',
  'Use of delivered workflows to send spam, malicious messages, or abusive content.',
  'Bypassing security controls, access controls, or audit controls intentionally.',
];

export function TermsAndConditionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Terms and Conditions | Aqib Ops Workflow Automation Services',
    'Read Aqib Ops terms and conditions covering project scope, payments, client obligations, data handling, and legal terms for automation services.',
    {
      keywords: [
        'aqib ops terms and conditions',
        'workflow automation contract terms',
        'automation service legal terms',
        'n8n automation implementation terms',
      ],
      path: '/terms-and-conditions',
      type: 'article',
    }
  );

  usePageReveal(pageRef);

  return (
    <div ref={pageRef}>
      <section className="section-dark -mt-20 border-b border-white/10 pt-20">
        <div className="container-site py-20 md:py-28">
          <p className="eyebrow" data-animate="fade-up">
            Legal
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Terms and Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            These Terms and Conditions govern your use of Aqib Ops services and website. By
            requesting discovery, submitting a project brief, or engaging our services, you agree
            to these terms.
          </p>
          <p className="mt-4 text-sm text-white/[0.6]" data-animate="fade-up" data-delay="0.12">
            Last updated: {updatedOn}
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <article className="paper-card p-7 md:p-10" data-animate="fade-up">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              1. Service Agreement
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Aqib Ops provides workflow automation consulting, architecture, and implementation
              services for operations, support, sales, and e-commerce teams. Scope, timelines,
              pricing, and delivery terms are finalized during discovery and documented before work
              begins.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {serviceRules.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.05">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              2. Client Responsibilities
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Successful automation delivery depends on timely collaboration. Clients remain
              responsible for internal approvals, operational decisions, and final use of
              implemented workflows.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {clientResponsibilities.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.09">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              3. Payments and Commercial Terms
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Pricing is quote-based according to scope complexity, integration dependencies, and
              reliability requirements. Unless otherwise stated in writing, invoices are due as per
              the signed proposal or invoice terms.
            </p>
            <div className="mt-5 space-y-3 text-black/[0.76]">
              <p>
                Milestone-delivery projects may require staged payments before moving into each
                phase.
              </p>
              <p>
                Delays caused by missing client access, late feedback, or third-party outages may
                shift timelines.
              </p>
              <p>
                Ongoing maintenance, support retainers, and post-launch enhancements are separate
                unless explicitly included in the signed scope.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.13">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              4. Data and Security
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Aqib Ops applies practical safeguards for credentials, workflow logic, and operational
              data handling. However, clients are responsible for security and compliance settings
              in their own connected tools and environments.
            </p>
            <div className="mt-5 space-y-3 text-black/[0.76]">
              <p>
                Sensitive data access is limited to project-delivery requirements and collaboration
                purposes.
              </p>
              <p>
                Clients should rotate tokens and credentials after project handover where applicable.
              </p>
              <p>
                Security incidents observed during delivery will be communicated promptly with
                recommended mitigation steps.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.17">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              5. Acceptable Use
            </h2>
            <p className="mt-4 text-black/[0.74]">
              You agree not to use Aqib Ops services or delivered assets in ways that violate law,
              third-party platform policies, or these terms.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {prohibitedUses.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.21">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              6. Warranties and Liability
            </h2>
            <div className="mt-4 space-y-3 text-black/[0.76]">
              <p>
                Aqib Ops will use commercially reasonable efforts to deliver services with care and
                professional standards.
              </p>
              <p>
                No guarantee is made for uninterrupted performance where outcomes depend on
                third-party APIs, platform outages, policy changes, or client-side configuration.
              </p>
              <p>
                To the maximum extent permitted by law, Aqib Ops is not liable for indirect,
                incidental, special, or consequential losses arising from use of services or
                deliverables.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.25">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              7. Termination
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Either party may terminate ongoing engagement if the other party materially breaches
              agreed terms and fails to cure within a reasonable written notice period. Fees for
              completed milestones remain payable.
            </p>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.29">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              8. Contact and Policy Links
            </h2>
            <p className="mt-4 text-black/[0.74]">
              For legal, privacy, or contractual questions, contact us at{' '}
              <a className="font-semibold text-black underline" href="mailto:AqibOpscontact@gmail.com">
                AqibOpscontact@gmail.com
              </a>
              .
            </p>
            <p className="mt-3 text-black/[0.74]">
              You can also review our{' '}
              <Link to="/privacy-policy" className="font-semibold text-black underline">
                Privacy Policy
              </Link>{' '}
              for detailed information about data collection and processing.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
