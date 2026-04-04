import { MessageCircle } from 'lucide-react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { cn } from '../../lib/utils';

type WhatsAppCtaProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  children: ReactNode;
  message?: string;
  variant?: 'solid' | 'ghost';
  showIcon?: boolean;
};

export function WhatsAppCta({
  children,
  className,
  message,
  variant = 'solid',
  showIcon = true,
  ...props
}: WhatsAppCtaProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(variant === 'solid' ? 'btn-solid' : 'btn-ghost', 'justify-center gap-2.5', className)}
      {...props}
    >
      {showIcon ? <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
