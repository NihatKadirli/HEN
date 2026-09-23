import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const values = ['Güven', 'Kalite', 'Özen'];

export default function About() {
  return (
    <section className="section about-section" id="hakkimizda">
      <div className="container about-grid">
        <div data-reveal>
          <span className="eyebrow"><span className="small-line" />HAKKIMIZDA</span>
          <h2>Temiz görünmesi değil,<br />gerçekten temiz hissettirmesi.</h2>
          <p>
            HEN Temizlik olarak evlerin, ofislerin ve yaşam alanlarının sadece göze hoş görünmesini
            değil; içine girildiğinde ferahlık veren, güvenle vakit geçirilen alanlar olmasını
            hedefliyoruz. Sakarya'da, ihtiyacınıza göre planlanan ve baştan sona şeffaf ilerleyen bir
            hizmet sunuyoruz.
          </p>
          <div className="about-values">
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
          <p style={{ marginTop: '1.6rem' }}>
            <Link className="text-link" to="/randevu" style={{ color: '#fff' }}>
              Randevu oluşturun <ArrowUpRight size={18} />
            </Link>
          </p>
        </div>
        <div className="about-media" data-reveal aria-hidden="true">
          <div>
            <strong>Alanınıza özen.</strong>
            <small>İlk görüşmeden son kontrole kadar.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
