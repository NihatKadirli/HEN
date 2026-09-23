const digits = (value) => (value || '').replace(/\D/g, '');

// Placeholder contact details — override via .env before publishing.
const PHONE_FALLBACK = '0850 000 00 00';
const WHATSAPP_FALLBACK = '905000000000';
const EMAIL_FALLBACK = 'merhaba@hentemizlik.com';

export const site = {
  name: 'HEN Temizlik',
  location: 'Sakarya / Türkiye',
  phone: import.meta.env.VITE_CONTACT_PHONE || PHONE_FALLBACK,
  email: import.meta.env.VITE_CONTACT_EMAIL || EMAIL_FALLBACK,
  whatsapp: digits(import.meta.env.VITE_WHATSAPP_PHONE) || WHATSAPP_FALLBACK,
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
};

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${digits(site.phone).replace(/^0/, '+90')}`;

export const isDemo = !import.meta.env.VITE_APPOINTMENT_API_URL;

export const navigation = [
  ['Ana Sayfa', '/'],
  ['Hizmetlerimiz', '/#hizmetler'],
  ['Nasıl Çalışır?', '/#nasil-calisir'],
  ['Öncesi / Sonrası', '/#oncesi-sonrasi'],
  ['Hakkımızda', '/#hakkimizda'],
  ['İletişim', '/#iletisim'],
];
