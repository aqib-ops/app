import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';

const updatedOn = 'April 4, 2026';

type LegalSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
};

const summaryItems = [
  {
    label: 'What we collect',
    value:
      'Contact details, project details, files or links you share, and basic technical records needed to run the site and respond to you.',
  },
  {
    label: 'Why we use it',
    value:
      'To reply to inquiries, prepare quotes, deliver editing work, manage revisions, and keep reliable business records.',
  },
  {
    label: 'What we do not do',
    value:
      'We do not sell personal information or use the site for targeted advertising or cross-context behavioral advertising.',
  },
  {
    label: 'Privacy contact',
    value: 'Reach out through the WhatsApp button on the site for privacy questions.',
  },
] as const;

const privacySections: LegalSection[] = [
  {
    title: 'Who This Policy Applies To',
    paragraphs: [
      'This Privacy Policy applies to information collected through aqib.eu.cc, the contact form, WhatsApp conversations, proposals, and project-related communication with Aqib Mehmood.',
      'It covers website visitors, leads, clients, and business contacts. It does not apply to third-party websites, payment providers, cloud storage tools, social platforms, or messaging services that have their own privacy policies.',
    ],
  },
  {
    title: 'Information We Collect',
    intro:
      'We collect only the information reasonably needed to run the website and provide video editing services.',
    bullets: [
      'Contact details such as your name, email address, WhatsApp number, and optional company, channel, or website link.',
      'Project details such as your brief, editing goals, references, scripts, notes, revision comments, and delivery requirements.',
      'Files and assets you choose to share, including footage, audio, graphics, thumbnails, subtitles, brand assets, and related links.',
      'Communication records such as messages, meeting notes, proposals, approvals, timestamps, and project history.',
      'Billing or administrative information if you become a client, such as invoice details, payment references, or tax-related business information.',
      'Basic technical and anti-abuse records created by hosting, form-processing, or security infrastructure, such as request metadata, timestamps, and source information.',
    ],
  },
  {
    title: 'How We Use Information',
    bullets: [
      'Respond to inquiries and decide whether a project is a fit.',
      'Prepare quotes, timelines, scopes, and editing proposals.',
      'Deliver edits, revisions, exports, handoff files, and client support.',
      'Manage approvals, communication, invoicing, and business administration.',
      'Protect the website, inbox, and workflow from spam, abuse, fraud, or technical misuse.',
      'Maintain backups, records, troubleshooting, and legal or accounting compliance.',
    ],
  },
  {
    title: 'Legal Bases Where Applicable',
    paragraphs: [
      'Depending on where you live, we may process personal information because it is necessary to perform a contract, respond to your request before entering a contract, comply with legal obligations, pursue legitimate business interests, or because you gave consent.',
      'If consent is the legal basis for a specific activity, you may withdraw that consent for future processing where the law gives you that right.',
    ],
  },
  {
    title: 'How Information Is Shared',
    paragraphs: [
      'Aqib Mehmood does not sell personal information and does not share personal information for cross-context behavioral advertising through this website.',
      'Information may be shared with service providers that help operate the business, such as website hosting, form-processing systems, cloud storage, email, messaging, invoicing, payments, file transfer, captioning, transcription, or project-delivery tools, but only where reasonably needed to provide the service.',
      'Information may also be shared if required by law, to protect rights or safety, to investigate abuse, or if you ask us to coordinate with another platform, editor, team member, or contractor involved in your project.',
    ],
  },
  {
    title: 'International Transfers',
    paragraphs: [
      'Because service providers may operate in different countries, your information may be processed or stored outside your home country. By contacting Aqib Mehmood or using the service, you understand that these transfers may happen.',
    ],
  },
  {
    title: 'Retention and File Handling',
    paragraphs: [
      'We keep inquiry records, project communication, and administrative records only for as long as reasonably necessary for quoting, delivery, revisions, support, dispute management, security, legal compliance, and accounting.',
      'Large raw footage files, exports, and working files may be deleted sooner because storage is limited, unless longer retention or archival storage is agreed in writing.',
      'Clients should maintain their own backup copies of all source footage and final deliverables. Long-term hosting is not guaranteed unless expressly included in the project agreement.',
    ],
  },
  {
    title: 'Cookies, Logs, and Do Not Track',
    paragraphs: [
      'The public website is not currently configured to use targeted advertising cookies or third-party analytics cookies.',
      'Like most websites, the hosting and security infrastructure may still generate limited logs or technical records needed to keep the site available, secure, and functioning properly.',
      'At this time, the website does not respond differently to browser "Do Not Track" signals. If that changes, this Privacy Policy will be updated.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'Reasonable technical and organizational safeguards are used to reduce the risk of unauthorized access, loss, misuse, or disclosure.',
      'That said, no website, file transfer method, cloud platform, or internet transmission is completely secure. You should avoid sharing sensitive information unless it is necessary for the project.',
    ],
  },
  {
    title: 'Your Rights and Choices',
    intro:
      'Depending on your location, privacy law may give you rights over your personal information.',
    bullets: [
      'Request access to personal information we hold about you.',
      'Ask us to correct inaccurate or incomplete information.',
      'Request deletion, subject to legal, billing, security, or operational retention needs.',
      'Object to or restrict certain processing where applicable law gives you that right.',
      'Withdraw consent for non-essential communications or future optional processing.',
      'Ask how your information has been used or disclosed where local law requires that information.',
    ],
    paragraphs: [
      'California residents may have rights to know, delete, and correct personal information, as well as the right not to be discriminated against for exercising applicable privacy rights. Aqib Mehmood does not currently sell personal information or share it for targeted advertising through this website.',
      'If you are in the UK, EEA, or another jurisdiction with regulator complaint rights, you may also complain to your local data protection authority.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    paragraphs: [
      'This website and service are intended for creators, businesses, and professional contacts and are not directed to children under 13.',
    ],
  },
  {
    title: 'Changes and Contact',
    paragraphs: [
      'This Privacy Policy may be updated from time to time as the website, tools, service process, or legal requirements change. The "Last updated" date shows the latest revision.',
      'For privacy questions or requests, use the WhatsApp contact option on this website.',
    ],
  },
];

export function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Privacy Policy | Aqib Mehmood',
    'Read the Aqib Mehmood privacy policy for video editing services, including what information is collected, how it is used, retention, file handling, and privacy rights.',
    {
      keywords: [
        'video editing agency privacy policy',
        'video editor privacy policy',
        'aqib mehmood privacy policy',
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
            Privacy information for Aqib Mehmood as an independent video editor, including what we collect,
            how we use it, how long we keep it, and what rights you may have.
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
              This Privacy Policy covers data handling. Commercial topics like scope, approvals,
              revisions, cancellations, file retention, and usage rights are covered in the{' '}
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
