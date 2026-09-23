import { CalendarDays, Clock3, House, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { services } from '../data/services';
export default function AppointmentSummary({ values }) {
 const date = values.date ? new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${values.date}T12:00:00`)) : 'Henüz seçilmedi';
 const rows = [{ icon: Sparkles, label: 'Hizmet', value: services.find(s => s.id === values.service)?.title || 'Henüz seçilmedi' }, { icon: House, label: 'Alan', value: values.area ? `${values.area}${values.squareMeters ? ` · ${values.squareMeters} m²` : ''}` : 'Henüz seçilmedi' }, { icon: CalendarDays, label: 'Tarih', value: date }, { icon: Clock3, label: 'Saat', value: values.time || 'Henüz seçilmedi' }, { icon: MapPin, label: 'Konum', value: values.address || 'Henüz belirtilmedi' }];
 return <aside className="appointment-summary"><div className="summary-heading"><span className="eyebrow">SİZE ÖZEL PLAN</span><h3>Bir adım daha ferahlığa.</h3><p>Seçimlerinizle şekillenen temizlik planınız.</p></div><dl>{rows.map(({ icon: Icon, label, value }) => <div key={label}><Icon size={19}/><div><dt>{label}</dt><dd>{value}</dd></div></div>)}</dl><div className="summary-bottom"><ShieldCheck size={21}/><p><strong>Sürpriz ücret yok.</strong>Hizmet kapsamı ve fiyat, onayınız alınmadan kesinleşmez.</p></div></aside>;
}
