import { useEffect, useRef, useState } from 'react';
import { Bot } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';

const CHAT_LINK = buildWhatsAppLink();

export function WhatsAppChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const openAiChat = () => {
    const toggle = document.querySelector<HTMLButtonElement>('.thesys--widget-toggle');
    toggle?.click();
    setIsOpen(false);
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[1001] sm:bottom-7 sm:right-6">
      <div ref={panelRef} className="pointer-events-auto relative">
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-56 rounded-2xl border border-black/10 bg-[rgba(241,238,231,0.98)] p-2 text-black shadow-[0_18px_46px_rgba(2,12,10,0.28)]">
            <button
              type="button"
              onClick={openAiChat}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-black/90 transition-colors hover:bg-black/5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--mint)] text-[#05080a] shadow-[inset_0_-6px_14px_rgba(0,0,0,0.18)]">
                <Bot className="h-4 w-4" />
              </span>
              Chat with AI
            </button>
            <a
              href={CHAT_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-black/90 transition-colors hover:bg-black/5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#05080a]">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              Chat on WhatsApp
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Open chat options"
          className="group relative inline-flex items-center gap-3 rounded-full border border-black/10 bg-[rgba(241,238,231,0.96)] px-3 py-3 pr-4 text-black shadow-[0_14px_40px_rgba(2,12,10,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,140,116,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05080a]"
        >
          <span
            aria-hidden
            className="absolute -inset-1 -z-10 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(0,228,194,0.35),rgba(0,0,0,0))] blur-sm transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--mint)] text-black shadow-[inset_0_-8px_20px_rgba(0,0,0,0.18)]">
            <span aria-hidden className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)]/65" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border border-white/70 bg-[var(--mint-deep)]" />
            </span>
            <WhatsAppIcon className="h-5 w-5 text-[#05080a]" />
          </span>
          <span className="hidden sm:flex sm:flex-col sm:leading-tight">
            <span className="font-display text-sm font-semibold tracking-[-0.015em] text-black/90">
              Chat options
            </span>
            <span className="text-[11px] font-medium text-black/60">AI + WhatsApp</span>
          </span>
        </button>
      </div>
    </div>
  );
}

interface WhatsAppIconProps {
  className?: string;
}

function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M19.05 4.91A9.81 9.81 0 0 0 12.04 2c-5.44 0-9.86 4.42-9.86 9.86 0 1.74.45 3.44 1.31 4.94L2 22l5.33-1.4a9.86 9.86 0 0 0 4.71 1.2h.01c5.44 0 9.86-4.42 9.86-9.86a9.8 9.8 0 0 0-2.86-7.03zm-7.01 15.2h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 0 1-1.27-4.38c0-4.52 3.68-8.2 8.21-8.2a8.2 8.2 0 0 1 8.2 8.2c0 4.53-3.68 8.21-8.14 8.27zm4.5-6.16c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.52.11-.1.25-.29.37-.44.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.11s.9 2.46 1.02 2.63c.13.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.61.2 1.17.17 1.61.11.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"
      />
    </svg>
  );
}
