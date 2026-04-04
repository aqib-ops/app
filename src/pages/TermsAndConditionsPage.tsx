import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePageReveal } from '../hooks/usePageReveal';
import { siteIdentity } from '../lib/siteIdentity';

const updatedOn = 'April 4, 2026';

type LegalSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
};

const summaryItems = [
  {
    label: 'Written scope wins',
    value:
      'The quote, proposal, invoice, or written approval controls deliverables, timing, revisions, and commercial terms for each project.',
  },
  {
    label: 'Client must own rights',
    value:
      'You are responsible for making sure all footage, music, graphics, scripts, and brand assets can legally be used in the project.',
  },
  {
    label: 'Approvals matter',
    value:
      'Turnaround depends on timely feedback, approvals, and access to the files needed to keep the edit moving.',
  },
  {
    label: 'No outcome guarantee',
    value:
      'Aqib Ops does not guarantee views, retention metrics, subscriber growth, virality, or platform approval.',
  },
] as const;

const termsSections: LegalSection[] = [
  {
    title: 'Acceptance and Website Use',
    paragraphs: [
      'By using this website, sending an inquiry, requesting a quote, or engaging Aqib Ops for editing services, you agree to these Terms and Conditions.',
      'You may use the website only for lawful informational or business purposes. You must not misuse the website, interfere with its operation, try to gain unauthorized access, scrape content in an abusive way, or use the contact channels for spam, fraud, or unlawful activity.',
    ],
  },
  {
    title: 'Services and Project Scope',
    intro:
      'Aqib Ops provides video editing and related post-production services for creators, personal brands, and businesses.',
    bullets: [
      'Each project is governed by the written quote, proposal, invoice, scope note, or direct written approval between Aqib Ops and the client.',
      'Those written terms control the deliverables, format, turnaround time, revision rounds, delivery method, pricing, and any add-on or rush work.',
      'Requests outside the approved scope may require an updated quote, a revised timeline, or both.',
      'Work may start only after the necessary brief, files, references, access, and any required upfront payment are received.',
    ],
  },
  {
    title: 'Client Materials and Permissions',
    bullets: [
      'You must provide accurate project information and reasonably complete materials needed to perform the work.',
      'You are responsible for having the legal right to use all footage, audio, music, images, fonts, scripts, thumbnails, trademarks, and brand assets you provide.',
      'You must make sure the materials you submit do not infringe third-party rights or violate applicable law or platform rules.',
      'Aqib Ops may rely on the information, permissions, and instructions you provide without independently verifying ownership of every asset.',
    ],
  },
  {
    title: 'Editing Process, Revisions, and Approvals',
    paragraphs: [
      'Editing is a collaborative service. Timelines depend on the quality of the brief, the condition of the source footage, and how quickly feedback and approvals are provided.',
      'Revision rounds are limited to what is included in the agreed scope. Changes in creative direction, new footage after work starts, repeated resets, or significant additions may be treated as extra work.',
      'If feedback or approvals are delayed, delivery dates may shift. Aqib Ops is not responsible for delays caused by missing files, missing access, slow approvals, or third-party platform issues.',
    ],
  },
  {
    title: 'Fees, Invoices, and Payment',
    paragraphs: [
      'Pricing is quote-based and depends on scope, complexity, turnaround, platform format, and revision load.',
      'Deposits, milestone payments, or full advance payment may be required if stated in the written proposal or invoice.',
      'Unless otherwise stated in writing, external costs such as licensed music, paid stock assets, paid plugins, translation, transcription, or platform-specific third-party costs are separate from the editing fee.',
      'Late payment may pause delivery, file handoff, or further revisions until the account is brought current.',
    ],
  },
  {
    title: 'Pauses, Cancellations, and Abandoned Projects',
    paragraphs: [
      'If a project is paused, canceled, or abandoned after work has started, Aqib Ops may invoice for work already completed, time already reserved, and any approved third-party costs already incurred.',
      'If the client becomes unresponsive or fails to provide required files or approvals for an extended period, the project may be rescheduled, repriced, or closed based on the stage of work already completed.',
    ],
  },
  {
    title: 'Delivery, Storage, and Backups',
    bullets: [
      'Final delivery is made in the agreed format, resolution, and handoff method.',
      'Unless archival storage is included in writing, Aqib Ops is not responsible for storing raw footage, project files, or final exports indefinitely.',
      'Clients should keep their own backups of raw footage, assets, final exports, and any project files that matter to them.',
      'Aqib Ops may delete older source files, project files, or exports when they are no longer reasonably needed for delivery, revisions, support, or recordkeeping.',
    ],
  },
  {
    title: 'Intellectual Property and Usage Rights',
    paragraphs: [
      'You retain ownership of your pre-existing footage, brand assets, scripts, and other materials you provide.',
      'Unless a written agreement says otherwise, rights in the final approved deliverables transfer to you or are licensed to you for the intended use only after full payment has been received.',
      'Aqib Ops retains ownership of its pre-existing workflows, editing systems, know-how, reusable templates, internal processes, and any third-party materials that are separately licensed or not exclusively created for your project.',
    ],
  },
  {
    title: 'Confidentiality, Credits, and Portfolio Use',
    paragraphs: [
      'Aqib Ops will use non-public client materials only as reasonably needed to quote, edit, deliver, support, and protect the service.',
      'If your project requires stricter confidentiality, embargoes, NDA terms, or no-portfolio restrictions, those terms should be agreed in writing before work starts.',
      'Unless otherwise agreed in writing, Aqib Ops may identify the client name and display non-confidential, publicly released final work for portfolio, case-study, website, or social proof purposes.',
    ],
  },
  {
    title: 'Third-Party Platforms and Licensed Materials',
    paragraphs: [
      'Editing services may depend on third-party platforms, hosting providers, payment services, cloud tools, communication tools, captioning tools, and social media or publishing platforms that are outside Aqib Ops control.',
      'Aqib Ops is not responsible for strikes, claims, takedowns, demonetization, reduced reach, account issues, or policy enforcement caused by client-supplied materials, third-party rights issues, or platform rule changes.',
    ],
  },
  {
    title: 'Disclaimers and Limitation of Liability',
    paragraphs: [
      'Aqib Ops will provide services with reasonable skill and care, but no guarantee is made about platform performance, audience response, watch time, subscriber growth, virality, monetization, sponsorship results, or business outcomes.',
      'To the maximum extent permitted by law, Aqib Ops is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages, including lost revenue, lost opportunities, lost data, or lost platform performance.',
      'Where liability cannot legally be excluded, any liability limits stated in the written project agreement will control first.',
    ],
  },
  {
    title: 'Suspension, Termination, and Order of Terms',
    paragraphs: [
      'Aqib Ops may suspend or end work if there is non-payment, unlawful use, abusive conduct, repeated breach of scope, refusal to cooperate, or a material breach of these Terms or the written project agreement.',
      'If these website Terms conflict with a signed proposal, invoice, or project agreement, the signed or written project terms control for that project.',
      'These Terms may be updated from time to time for future use. The "Last updated" date reflects the latest revision.',
      `For legal or contractual questions, contact ${siteIdentity.email}.`,
    ],
  },
];

export function TermsAndConditionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  usePageMeta(
    'Terms and Conditions | Aqib Ops',
    'Read the Aqib Ops terms and conditions for video editing services, including scope, revisions, payment, cancellations, file retention, rights, confidentiality, and liability limits.',
    {
      keywords: [
        'video editing agency terms and conditions',
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
            Commercial terms for Aqib Ops as a video editing agency, including scope, approvals,
            revisions, payment, rights, storage, and project conduct.
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
              Privacy terms are covered separately.
            </h2>
            <p className="mt-4 max-w-3xl text-black/[0.74]">
              These Terms cover use of the website and editing services. Information collection,
              communication records, retention, and privacy rights are explained in the{' '}
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
