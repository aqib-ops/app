import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { siteIdentity } from '../lib/siteIdentity';

const updatedOn = 'April 3, 2026';

type LegalSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
};

const summaryItems = [
  {
    label: 'What you share',
    value: 'Name, email, WhatsApp number, optional channel or website link, and project details.',
  },
  {
    label: 'Why it is used',
    value: 'To reply to inquiries, prepare quotes, deliver editing work, and manage support.',
  },
  {
    label: 'Tracking status',
    value: 'The website is not currently set up to run targeted ads or third-party analytics cookies.',
  },
  {
    label: 'Privacy contact',
    value: siteIdentity.email,
  },
] as const;

const privacySections: LegalSection[] = [
  {
    title: 'Scope',
    paragraphs: [
      'This Privacy Policy applies to information collected through aqibops.xyz, the contact form, direct email, WhatsApp conversations, and project-related communication with Aqib Ops.',
      'It does not apply to third-party websites, platforms, or tools you access through links, including YouTube, WhatsApp, X, LinkedIn, cloud file-sharing services, or other external providers.',
    ],
  },
  {
    title: 'Information We Collect',
    intro:
      'Aqib Ops collects only the information reasonably needed to discuss, deliver, and support video editing work.',
    bullets: [
      'Identity and contact details you provide, including your name, email address, and WhatsApp number.',
      'Optional business, channel, or website information you choose to share.',
      'Project details, notes, feedback, references, and files you submit for quoting or production.',
      'Communication records such as submission time, source page, message history, and project notes.',
      'Basic technical and security records created by hosting or form-processing infrastructure, such as timestamps, request context, and log data.',
    ],
  },
  {
    title: 'How We Use Information',
    bullets: [
      'Respond to inquiries and decide whether the project is a fit.',
      'Prepare proposals, pricing, timelines, and project scope.',
      'Edit, revise, deliver, and support client work.',
      'Protect the website, inbox, and contact flow from spam, abuse, or misuse.',
      'Maintain service records, backups, billing support, and legal compliance.',
    ],
  },
  {
    title: 'How Information Is Shared',
    paragraphs: [
      'Aqib Ops does not sell or rent personal information.',
      'Information may be shared with service providers that help operate the business, such as website hosting, form-processing, cloud storage, file transfer, email, messaging, invoicing, or payment support tools when needed for your project.',
      'Information may also be disclosed where reasonably necessary to comply with law, enforce rights, investigate abuse, or protect Aqib Ops, clients, and the public.',
    ],
  },
  {
    title: 'Cookies, Analytics, and Do Not Track',
    paragraphs: [
      'The public website is not currently configured to use targeted advertising or third-party analytics cookies.',
      'Like most websites, hosting and infrastructure providers may still create limited technical logs needed to keep the site available, secure, and reliable.',
      'At this time, the website does not change its data practices in response to browser “Do Not Track” signals or similar mechanisms. If tracking practices change later, this Privacy Policy will be updated.',
    ],
  },
  {
    title: 'Retention and Security',
    paragraphs: [
      'Inquiry records, project communication, and related files are kept only for as long as reasonably necessary for quoting, delivery, revisions, support, recordkeeping, and legal or accounting obligations.',
      'Clients should keep their own backup copies of raw footage and final assets. Unless archival storage is expressly included in writing, long-term file hosting is not guaranteed.',
      'Reasonable technical and organizational safeguards are used, but no method of transmission or storage is completely secure.',
    ],
  },
  {
    title: 'International Processing',
    paragraphs: [
      'Depending on where infrastructure or service providers operate, your information may be processed or stored outside your country. By contacting Aqib Ops or using the site, you understand that these transfers may occur.',
    ],
  },
  {
    title: 'Your Choices and Rights',
    intro:
      'Depending on where you live, privacy law may give you rights over your personal information.',
    bullets: [
      'Request access to the personal information we hold about you.',
      'Ask us to correct inaccurate or incomplete information.',
      'Request deletion, subject to legal, operational, billing, or security retention needs.',
      'Object to or restrict certain processing where applicable law gives you that right.',
      'Withdraw consent for future non-essential communications at any time.',
    ],
    paragraphs: [
      'If you are a California resident, you may also request information about rights available under California privacy law. Aqib Ops does not currently sell personal information or share it for cross-context behavioral advertising through this website.',
    ],
  },
  {
    title: 'Children’s Privacy',
    paragraphs: [
      'This website and service are intended for creators, businesses, and professional contacts and are not directed to children under 13.',
    ],
  },
  {
    title: 'Changes and Contact',
    paragraphs: [
      'This Privacy Policy may be updated as the website, tools, or legal requirements change. The “Last updated” date shows the latest revision.',
      `For privacy questions or requests, email ${siteIdentity.email}.`,
    ],
  },
];

export function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Privacy Policy | Aqib Ops',
    'Read the Aqib Ops privacy policy covering what information is collected, how it is used, tracking disclosures, retention, and your privacy rights.',
    {
      keywords: [
        'video editor privacy policy',
        'aqib ops privacy policy',
        'creative services privacy policy',
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
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            Legal
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Plain-English information about what Aqib Ops collects, why it is used, how long it is
            kept, and what choices you have.
          </p>
          <p className="mt-4 text-sm text-white/[0.6]" data-animate="fade-up" data-delay="0.12">
            Last updated: {updatedOn}
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="container-site py-16 md:py-24">
          <article className="paper-card p-7 md:p-10" data-animate="fade-up">
            <p className="eyebrow text-black/[0.5]">Quick Summary</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {summaryItems.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-black/[0.08] bg-white/70 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/[0.46]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/[0.74] sm:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="mt-6 space-y-6">
            {privacySections.map((section, index) => (
              <article
                key={section.title}
                className="paper-card p-7 md:p-10"
                data-animate="fade-up"
                data-delay={Math.min(index * 0.04, 0.24)}
              >
                <h2 className="font-display text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
                  {index + 1}. {section.title}
                </h2>

                {section.intro ? (
                  <p className="mt-4 text-black/[0.74]">{section.intro}</p>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-black/[0.74]">
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-2 text-black/[0.76]">
                    {section.bullets.map((item) => (
                      <li key={item} className="list-inside list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <article className="paper-card mt-6 p-7 md:p-10" data-animate="fade-up" data-delay="0.28">
            <p className="eyebrow text-black/[0.5]">Related Terms</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Service terms still matter.
            </h2>
            <p className="mt-4 max-w-3xl text-black/[0.74]">
              This Privacy Policy explains data handling. Commercial topics like project scope,
              delivery, revisions, ownership, and liability are covered in the{' '}
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
