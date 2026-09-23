import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="section" id="hizmetler">
      <div className="container">
        <SectionTitle
          eyebrow="HİZMETLERİMİZ"
          title={<>Temizlik ihtiyaçlarınıza<br />özel çözümler.</>}
          description="Her alanın kendine göre bir düzeni var. Hangisi size uygunsa oradan başlayalım."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <div data-reveal key={service.id} style={{ transitionDelay: `${(index % 4) * 60}ms` }}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
