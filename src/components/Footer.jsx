import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import { site, telLink, whatsappLink } from '../config/site';

const quickLinks = [
  ['Ana Sayfa', '/'],
  ['Hizmetler', '/#hizmetler'],
  ['Randevu', '/randevu'],
  ['Hakkımızda', '/#hakkimizda'],
  ['İletişim', '/#iletisim'],
];

const legalLinks = [
  ['Gizlilik', '/gizlilik'],
  ['KVKK', '/kvkk'],
  ['Kullanım Koşulları', '/kullanim-kosullari'],
];

export default function Footer() {
  return (
    <footer className="site-footer" id="iletisim">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Ev, ofis, bina ve inşaat sonrası temizlikte özenli ve şeffaf hizmet. Sakarya'da yanınızdayız.</p>
            <div className="footer-social">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Site</h4>
            <ul>
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Yasal</h4>
            <ul>
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>İletişim</h4>
            <ul>
              <li>
                <a href={telLink}>
                  <Phone size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  {site.email}
                </a>
              </li>
              <li>
                <MapPin size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} HEN Temizlik. Tüm hakları saklıdır.</span>
          <nav aria-label="Yasal bağlantılar">
            {legalLinks.map(([label, href]) => (
              <Link key={href} to={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
