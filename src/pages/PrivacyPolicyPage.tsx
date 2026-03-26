import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const updatedOn = 'March 3, 2026';

const collectedData = [
  'Contact details you provide, such as name, email address, and business website.',
  'Project information and workflow requirements shared through forms or messages.',
  'Technical metadata needed for service reliability, such as timestamp, source, and request context.',
  'Communication history needed to manage project requests and support follow-up.',
];

const processingPurposes = [
  'Respond to inquiries and provide discovery recommendations.',
  'Design, implement, and support automation workflows you request.',
  'Improve service quality, operational reliability, and issue resolution.',
  'Maintain security monitoring, abuse prevention, and audit traceability.',
];

const rightsList = [
  'Request access to personal data we hold about you.',
  'Request correction of inaccurate or outdated data.',
  'Request deletion of data, subject to legal and operational retention duties.',
  'Object to processing where applicable under relevant law.',
];

export function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Privacy Policy | Aqib Ops Automation Services',
    'Read Aqib Ops Privacy Policy to understand what data is collected, how it is used, retention practices, security controls, and your privacy rights.',
    {
      keywords: [
        'aqib ops privacy policy',
        'automation services data privacy',
        'n8n workflow data protection',
        'contact form privacy terms',
      ],
      path: '/privacy-policy',
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
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            This Privacy Policy explains how Aqib Ops collects, uses, protects, and stores data
            when you visit our website or request workflow automation services.
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
              1. Data We Collect
            </h2>
            <p className="mt-4 text-black/[0.74]">
              We collect only the information needed to respond to inquiries, scope automation
              projects, and support delivery.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {collectedData.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.05">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              2. How We Use Data
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Information is processed only for legitimate business and service-delivery purposes.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {processingPurposes.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.09">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              3. Legal Basis and Consent
            </h2>
            <div className="mt-4 space-y-3 text-black/[0.76]">
              <p>
                By submitting our contact form or initiating direct communication, you consent to
                processing needed to respond and provide services.
              </p>
              <p>
                Where applicable, processing may also be required to perform contractual obligations
                and maintain service security.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.13">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              4. Data Sharing and Third Parties
            </h2>
            <div className="mt-4 space-y-3 text-black/[0.76]">
              <p>
                We do not sell your personal information. Data may be processed by trusted
                infrastructure or communication providers strictly for service delivery.
              </p>
              <p>
                Access is limited to project and support needs, and data sharing follows minimum
                necessary principles.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.17">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              5. Data Retention
            </h2>
            <div className="mt-4 space-y-3 text-black/[0.76]">
              <p>
                We retain project and inquiry data only for as long as necessary for delivery,
                support, legal compliance, and audit traceability.
              </p>
              <p>
                Retention windows may vary based on project obligations, invoice records, and legal
                requirements.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.21">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              6. Security Practices
            </h2>
            <div className="mt-4 space-y-3 text-black/[0.76]">
              <p>
                Aqib Ops applies operational safeguards such as access control, minimum-privilege
                handling, and monitored workflow delivery standards.
              </p>
              <p>
                No internet transmission is fully risk-free, but we continuously improve practical
                controls to reduce security and integrity risk.
              </p>
            </div>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.25">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              7. Your Rights
            </h2>
            <p className="mt-4 text-black/[0.74]">
              Depending on your jurisdiction, you may have rights related to your personal data.
            </p>
            <ul className="mt-5 space-y-2 text-black/[0.76]">
              {rightsList.map((item) => (
                <li key={item} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.29">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
              8. Contact Us
            </h2>
            <p className="mt-4 text-black/[0.74]">
              For privacy requests or questions, email us at{' '}
              <a className="font-semibold text-black underline" href="mailto:AqibOpscontact@gmail.com">
                AqibOpscontact@gmail.com
              </a>
              .
            </p>
            <p className="mt-3 text-black/[0.74]">
              For contractual terms, also review our{' '}
              <Link to="/terms-and-conditions" className="font-semibold text-black underline">
                Terms and Conditions
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
