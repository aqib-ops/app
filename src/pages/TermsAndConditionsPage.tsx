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
    label: 'Scope first',
    value: 'The written quote, proposal, invoice, or approved brief controls the project scope and timeline.',
  },
  {
    label: 'Client ownership',
    value: 'You must have the rights to every file, asset, logo, script, and music track you provide.',
  },
  {
    label: 'No performance promise',
    value: 'Aqib Ops does not guarantee views, virality, monetization, or platform outcomes.',
  },
  {
    label: 'Rights after payment',
    value: 'Final usage rights follow the written agreement and are not final until payment obligations are met.',
  },
] as const;

const termsSections: LegalSection[] = [
  {
    title: 'Using the Website',
    paragraphs: [
      'You may browse and use this website only for lawful business or informational purposes.',
      'You must not misuse the website, interfere with its operation, try to gain unauthorized access, or use the contact flow for spam, scraping, fraud, or abusive activity.',
    ],
  },
  {
    title: 'Project Engagement and Scope',
    intro:
      'Aqib Ops provides video editing services for YouTube, short-form content, and related creator or brand assets.',
    bullets: [
      'Each project is governed first by the written quote, proposal, invoice, scope note, or direct written approval between Aqib Ops and the client.',
      'Those written commercial terms control deliverables, turnaround time, revision rounds, payment timing, and any rush or add-on work.',
      'Requests outside the approved scope may require a change in price, timing, or both.',
      'Work may begin only after the required brief, footage, access, and any required upfront payment are received.',
    ],
  },
  {
    title: 'Client Responsibilities',
    bullets: [
      'Provide accurate project information, references, and files needed for editing.',
      'Supply feedback and approvals on time so the agreed schedule can be maintained.',
      'Maintain legal rights to all footage, music, images, scripts, trademarks, and other assets you share.',
      'Keep your own backup copies of raw footage and project materials.',
      'Use delivered work in compliance with copyright law, platform rules, and other applicable law.',
    ],
  },
  {
    title: 'Fees, Invoices, and Delays',
    paragraphs: [
      'Pricing is quote-based and depends on scope, format, turnaround, revision load, and production complexity.',
      'Deposits, milestone payments, or full advance payment may be required if stated in the written proposal or invoice.',
      'Late payment, missing materials, delayed feedback, or third-party platform issues may pause work and move delivery dates.',
      'Unless specifically included in writing, taxes, transfer fees, paid stock assets, music licensing, and similar external costs are the client’s responsibility.',
    ],
  },
  {
    title: 'Revisions, Delivery, and Storage',
    bullets: [
      'Revision rounds and review windows are limited to what is included in the agreed scope.',
      'Major creative changes, repeated restarts, or new directions after approval may be treated as additional work.',
      'Final delivery is made in the agreed format, resolution, and transfer method.',
      'Unless archival storage is included in writing, Aqib Ops is not responsible for keeping raw footage or final exports indefinitely.',
    ],
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      'You retain ownership of your pre-existing footage, brand assets, channel assets, trademarks, and other materials you provide.',
      'You confirm that you have the rights and permissions needed for every asset you ask Aqib Ops to edit, repurpose, publish, or deliver.',
      'Unless a written agreement says otherwise, rights in the final approved deliverables pass to you or are licensed for the intended use only after full payment is received.',
      'Aqib Ops retains ownership of pre-existing workflows, reusable editing systems, templates, know-how, and any third-party licensed material that is not exclusively created for your project.',
    ],
  },
  {
    title: 'Confidentiality and Public Work',
    paragraphs: [
      'Aqib Ops will use non-public client material only to quote, edit, deliver, support, or protect the service.',
      'If a project requires stricter confidentiality, embargoes, or portfolio restrictions, those terms should be agreed in writing before work begins.',
      'Aqib Ops will not intentionally publish unreleased client material without permission, except where disclosure is required by law or necessary to provide the service.',
    ],
  },
  {
    title: 'Acceptable Use and Prohibited Projects',
    bullets: [
      'No illegal, fraudulent, deceptive, or impersonation-based projects.',
      'No use of content you do not have the right to edit, publish, or repurpose.',
      'No projects that infringe third-party intellectual property or violate platform rules.',
      'No attempts to probe, disrupt, reverse-engineer, or misuse systems operated by Aqib Ops.',
    ],
  },
  {
    title: 'Disclaimers and Performance',
    paragraphs: [
      'Aqib Ops will provide services with reasonable skill and care, but editing results are affected by the source footage, brief quality, platform changes, audience behavior, and client decisions.',
      'Aqib Ops does not guarantee views, retention metrics, watch time, subscriber growth, virality, monetization, brand results, or approval by YouTube, Instagram, TikTok, Meta, or any other platform.',
      'Third-party services, platforms, hosts, and tools are outside Aqib Ops control and may affect delivery or publishing outcomes.',
    ],
  },
  {
    title: 'Liability, Suspension, and Termination',
    paragraphs: [
      'To the maximum extent permitted by law, Aqib Ops is not liable for indirect, incidental, special, punitive, or consequential loss, including lost profits, lost opportunities, lost platform performance, or lost data.',
      'If a project is paused or ended because of non-payment, missing cooperation, breach of agreed terms, or unlawful use, fees for completed work, time reserved, and approved third-party costs remain payable.',
      'Where liability cannot be excluded, any limits or remedies stated in the written project agreement will control first.',
    ],
  },
  {
    title: 'Policy Updates and Contact',
    paragraphs: [
      'These website Terms may be updated from time to time for future use. The “Last updated” date reflects the latest revision.',
      'If there is any conflict between these website Terms and a signed proposal, invoice, or project agreement, the signed or written project terms control.',
      `For legal or contractual questions, contact ${siteIdentity.email}.`,
    ],
  },
];

export function TermsAndConditionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Terms and Conditions | Aqib Ops',
    'Read the Aqib Ops terms and conditions covering website use, project scope, revisions, fees, ownership, confidentiality, and legal limitations for video editing services.',
    {
      keywords: [
        'video editing service terms',
        'aqib ops terms and conditions',
        'creative services contract terms',
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
          <p className="eyebrow text-white/[0.58]" data-animate="fade-up">
            Legal
          </p>
          <h1 className="display-title mt-4 max-w-4xl text-white" data-animate="fade-up">
            Terms and Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/[0.74]" data-animate="fade-up" data-delay="0.08">
            Clear commercial terms for using the website and working with Aqib Ops on editing
            projects.
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
            {termsSections.map((section, index) => (
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
            <p className="eyebrow text-black/[0.5]">Privacy Link</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Data handling is covered separately.
            </h2>
            <p className="mt-4 max-w-3xl text-black/[0.74]">
              These Terms cover commercial use of the site and services. Information collection,
              tracking disclosures, retention, and privacy rights are explained in the{' '}
              <Link to="/privacy-policy" className="font-semibold text-black underline">
                Privacy Policy
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
