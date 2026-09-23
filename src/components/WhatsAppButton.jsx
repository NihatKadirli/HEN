import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config/site';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={whatsappLink('Merhaba, temizlik hizmeti hakkında bilgi almak istiyorum.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="fab-tooltip">WhatsApp'tan Yazın</span>
    </a>
  );
}
