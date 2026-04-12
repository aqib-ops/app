export interface ShowreelContent {
  title: string;
  summary: string;
  mediaUrl: string;
  posterUrl?: string;
}

export const showreelContent: ShowreelContent = {
  title: 'Video Showreel',
  summary:
    'A direct showreel cut that highlights pacing, polish, and the editing style behind the portfolio.',
  mediaUrl: 'https://res.cloudinary.com/dw0pjpqsu/video/upload/v1775989574/Final_V_iyl2qj.mp4',
  posterUrl: 'https://res.cloudinary.com/dw0pjpqsu/image/upload/v1775997653/remove_the__24_202604121740_m5mqkx.jpg',
};

export interface ServiceItem {
  title: string;
  summary: string;
  deliverables: string[];
  fit?: string;
  result?: string;
}

export const serviceItems: ServiceItem[] = [
  {
    title: 'YouTube Cuts',
    summary: 'Long-form edits built to stay clean, focused, and easy to keep watching.',
    deliverables: ['Hook shaping', 'Pacing + cleanup', 'Final export'],
    fit: 'Main uploads',
  },
  {
    title: 'Retention Polish',
    summary: 'Sharper intros, tighter pacing, and visual emphasis built to hold attention longer.',
    deliverables: ['Intro tightening', 'Subtitles + punch-ins', 'Watch-time polish'],
    fit: 'Retention boost',
  },
  {
    title: 'Short Clips',
    summary: 'Vertical edits made for Reels, Shorts, and fast social posting.',
    deliverables: ['Captions + punch-ins', 'Tight trimming', 'Platform-ready versions'],
    fit: 'Reels + Shorts',
  },
  {
    title: 'Repurpose Workflow',
    summary: 'One recording turned into a full video and extra assets without extra chaos.',
    deliverables: ['Main edit + clips', 'Organized exports', 'Simple revisions'],
    fit: 'One shoot, many assets',
  },
];

export const portfolioCollections = [
  {
    title: 'Long-form YouTube edits',
    detail: 'Full episodes, talking-head pieces, and retention-led pacing passes.',
  },
  {
    title: 'Short-form clip packs',
    detail: 'Reels, Shorts, and vertical cutdowns from larger recordings.',
  },
  {
    title: 'Client highlight work',
    detail: 'More polished edit samples are being added as the portfolio expands.',
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Send your footage',
    detail: 'Share your raw files, references, and any notes about the tone or pacing you want.',
  },
  {
    step: '02',
    title: 'We edit for engagement',
    detail: 'The cut is shaped around stronger hooks, cleaner pacing, and a better viewing flow.',
  },
  {
    step: '03',
    title: 'Review & revisions',
    detail: 'You review the draft, leave notes, and we tighten the edit without unnecessary back-and-forth.',
  },
  {
    step: '04',
    title: 'Final delivery',
    detail: 'You get polished final exports, organized handoff files, and a fast workflow you can keep using.',
  },
];

export const trustPillars = [
  {
    title: 'Retention-first editing',
    detail: 'Every cut is made to improve clarity, pacing, and how easy the video is to keep watching.',
  },
  {
    title: 'Clean pacing and structure',
    detail: 'The edit supports the message with stronger openings, less drift, and a more focused viewer flow.',
  },
  {
    title: 'Fast, organized workflow',
    detail: 'Clear handoff, simple revisions, and predictable delivery keep the process smooth.',
  },
  {
    title: 'No fake promises',
    detail: 'No viral claims. Just better edits, stronger delivery, and more engaging content.',
  },
];

export const creatorFit = [
  'Creators publishing long-form YouTube content.',
  'Personal brands repurposing one recording into multiple assets.',
  'Businesses that want polished edits without a messy review process.',
];

export const faqItems = [
  {
    question: 'What kind of content do you edit?',
    answer: 'YouTube videos, talking-head content, educational videos, podcasts, and short-form clips.',
  },
  {
    question: 'Can you edit long-form and shorts from the same recording?',
    answer: 'Yes. One recording can become a main YouTube edit plus multiple short-form clips.',
  },
  {
    question: 'Do you handle subtitles and motion text?',
    answer: 'Yes. Subtitle styling, emphasis text, and simple motion support are part of the editing workflow when needed.',
  },
  {
    question: 'How do revisions work?',
    answer: 'You review the draft, leave notes, and we make focused revisions to tighten the final result.',
  },
  {
    question: 'What do you need from me to start?',
    answer: 'Raw footage, a brief on your content goals, and a few style references if you have them.',
  },
  {
    question: 'Do you promise viral results?',
    answer: 'No. The promise is better structure, stronger pacing, and more engaging edits, not fake viral guarantees.',
  },
] as const;
