import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navigation } from '../config/site';
export default function Navbar() {
 const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
 const toggle = useRef(null); const panel = useRef(null); const location = useLocation();
 useEffect(() => { setOpen(false); }, [location]);
 useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
 useEffect(() => {
  if (!open) return;
  const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
  const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } if (e.key === 'Tab') { const links = panel.current.querySelectorAll('a'); const last = links[links.length - 1]; if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); toggle.current.focus(); } else if (e.shiftKey && document.activeElement === toggle.current) { e.preventDefault(); last.focus(); } } };
  const onResize = () => { if (window.innerWidth > 1100) setOpen(false); };
  window.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
  return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
 }, [open]);
 return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="container navbar"><Logo/><nav className="desktop-nav" aria-label="Ana menü">{navigation.map(([label, href], i) => <Link className={i === 0 && location.pathname === '/' && !location.hash ? 'active' : ''} key={href} to={href}>{label}</Link>)}</nav><Link className="button button-primary nav-cta" to="/randevu">Randevu Oluştur <ArrowUpRight size={16}/></Link><button ref={toggle} className="menu-toggle" aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>{open && <div className="mobile-menu" id="mobile-menu" ref={panel}><nav aria-label="Mobil menü">{navigation.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} to={href}>{label}<ArrowUpRight size={18}/></Link>)}<Link className="button button-primary" to="/randevu">Randevu Oluştur <ArrowUpRight size={18}/></Link></nav><span>Sakarya’da, yaşam alanınızın yanındayız.</span></div>}</header>;
}
