import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function MobileCTABar() {
  const [hidden, setHidden] = useState(false);
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    footerRef.current = document.querySelector('.site-footer');
    if (!footerRef.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      rootMargin: '0px 0px -40% 0px',
    });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [location.pathname]);

  if (location.pathname === '/randevu') return null;

  return (
    <div className="mobile-cta-bar" hidden={hidden}>
      <span>
        Randevunuzu planlayın
        <small>Birkaç dakika sürer</small>
      </span>
      <Link className="button button-primary" to="/randevu">
        Randevu <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
