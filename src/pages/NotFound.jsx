import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="simple-page">
      <div className="container">
        <span className="eyebrow"><span className="small-line" />404</span>
        <h1>Aradığınız sayfayı bulamadık.</h1>
        <p>Bağlantı taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.</p>
        <Link className="button button-primary" to="/">
          <ArrowLeft size={18} /> Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
