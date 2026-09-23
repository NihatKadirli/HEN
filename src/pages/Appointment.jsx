import { CalendarCheck } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  return (
    <main className="appointment-page">
      <div className="container">
        <div className="appointment-intro">
          <span className="eyebrow"><span className="small-line" />RANDEVU</span>
          <h1>Temizliğinizi planlayın.</h1>
          <p>
            Hizmetinizi seçin, tarih ve konumu belirtin, iletişim bilgilerinizi bırakın. HEN ekibi
            uygunluk ve fiyat için sizinle iletişime geçer. Talep göndermek, kesinleşmiş randevu
            anlamına gelmez.
          </p>
        </div>
        <AppointmentForm />
        <p className="form-security" style={{ marginTop: '2rem' }}>
          <CalendarCheck size={14} /> Randevunuz, ekibimizle yapılacak kısa görüşmenin ardından kesinleşir.
        </p>
      </div>
    </main>
  );
}
