const WHATSAPP_NUMBER = '923432142032';
const DEFAULT_MESSAGE = 'Hi Aqib Ops, I just visited your website and want to discuss my project.';

export const whatsappDisplayNumber = '+92 343 2142032';

export function buildWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  const content = message.trim() || DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(content)}`;
}
