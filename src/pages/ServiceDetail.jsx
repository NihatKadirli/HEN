import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/services';

const included = [
  'İhtiyaca göre planlanan kapsam',
  'Yüzeye uygun ekipman ve yöntem',
  'İş bitiminde birlikte kontrol',
  'Başlamadan önce net fiyat bilgisi',
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) return <Navigate to="/#hizmetler" replace />;

  return (
    <main className="simple-page">
      <div className="container">
        <Link className="text-link" to="/#hizmetler">
          <ArrowLeft size={18} /> Tüm hizmetler
        </Link>
        <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'flex' }}>
          <span className="small-line" />HİZMET DETAYI
        </span>
        <h1>{service.title}</h1>
        <p>{service.details}</p>

        <h2>Bu hizmete neler dahil?</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.6rem' }}>
          {included.map((line) => (
            <li key={line} style={{ display: 'flex', gap: '0.6rem', color: 'var(--color-muted)' }}>
              <Check size={18} style={{ color: 'var(--color-primary-strong)', flexShrink: 0, marginTop: 3 }} />
              {line}
            </li>
          ))}
        </ul>

        <Link className="button button-primary" to={`/randevu?hizmet=${service.id}`}>
          Bu hizmet için randevu oluştur <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
