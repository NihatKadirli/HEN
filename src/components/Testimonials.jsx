import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="MÜŞTERİ YORUMLARI"
          title={<>Bizimle çalışanlar<br />ne diyor?</>}
          description="Farklı alanlarda hizmet verdiğimiz müşterilerimizin paylaştığı geri bildirimlerden bir bölüm."
        />
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.name} data-reveal style={{ transitionDelay: `${(index % 3) * 70}ms` }}>
              <span className="testimonial-stars" aria-label="5 üzerinden 5 yıldız">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <blockquote>{item.text}</blockquote>
              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.service}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="sample-note">Yorumlar tanıtım amaçlı temsili örneklerdir.</p>
      </div>
    </section>
  );
}
