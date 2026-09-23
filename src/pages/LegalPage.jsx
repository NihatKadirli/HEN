import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { legalPages } from '../data/legal';

export default function LegalPage({ slug }) {
  const params = useParams();
  const key = slug || params.slug;
  const page = legalPages[key];

  if (!page) return <Navigate to="/" replace />;

  return (
    <main className="simple-page">
      <div className="container">
        <Link className="text-link" to="/">
          <ArrowLeft size={18} /> Ana sayfa
        </Link>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        {page.sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
