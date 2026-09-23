import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner" data-reveal>
          <h2>Temiz bir başlangıç için hazır mısınız?</h2>
          <p>Randevunuzu birkaç dakika içinde oluşturun; gerisini HEN ekibi halletsin.</p>
          <Link to="/randevu" className="button">
            Randevu Oluştur <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
