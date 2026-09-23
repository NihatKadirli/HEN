import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
export default function Logo({ light = false }) {
 return <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="HEN Temizlik ana sayfa"><span className="logo-word">hen<span className="logo-dot">.</span><Sparkles className="logo-spark" size={18}/></span><span className="logo-caption">TEMİZLİK</span></Link>;
}
