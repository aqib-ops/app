export interface ShowreelContent {
  title: string;
  summary: string;
  mediaUrl: string;
}

export const showreelContent: ShowreelContent = {
  title: 'Featured Showreel',
  summary:
    'A curated highlight reel showing the editing style, pacing, motion, and finish across creator formats.',
  mediaUrl: 'https://youtu.be/ixlcWkuXec8',
};

export interface ServiceItem {
  title: string;
  summary: string;
  deliverables: string[];
}

export const serviceItems: ServiceItem[] = [
  {
    title: 'Basic Editing',
    summary: 'Clean cuts, music balancing, audio cleanup, and delivery-ready exports.',
    deliverables: ['A-roll cleanup', 'Music and audio balancing', 'Simple transitions and export'],
  },
  {
    title: 'High-Retention Editing',
    summary: 'Hook shaping, pacing work, subtitles, and edit decisions built to hold attention.',
    deliverables: ['Stronger intros', 'Retention-focused pacing', 'Subtitles, zooms, and visual emphasis'],
  },
  {
    title: 'Short-Form Content',
    summary: 'Reels, Shorts, and social clips cut for speed, clarity, and platform-native viewing.',
    deliverables: ['Vertical formatting', 'Caption-led clips', 'Short-form delivery packs'],
  },
  {
    title: 'Content Repurposing',
    summary: 'Turn one recording into multiple usable assets across YouTube and short-form platforms.',
    deliverables: ['Clip selection', 'Multi-format exports', 'Organized fast workflow'],
  },
];

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
