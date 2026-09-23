import { Link } from 'react-router-dom';
import { House, BriefcaseBusiness, Building2, PaintRoller, KeyRound, PackageOpen, Sparkles, PanelsTopLeft, ArrowUpRight } from 'lucide-react';
const icons = { House, BriefcaseBusiness, Building2, PaintRoller, KeyRound, PackageOpen, Sparkles, PanelsTopLeft };
export default function ServiceCard({ service, index }) { const Icon = icons[service.icon]; return <Link to={`/hizmetler/${service.id}`} className="service-card"><div className="service-card-top"><span className="service-icon"><Icon size={25} strokeWidth={1.5}/></span><span className="service-index">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-link">Hizmeti incele <ArrowUpRight size={18}/></span></Link>; }
