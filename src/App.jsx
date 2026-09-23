import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileCTABar from './components/MobileCTABar';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';

const Appointment = lazy(() => import('./pages/Appointment'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <>
      <a href="#icerik" className="skip-link">İçeriğe geç</a>
      <ScrollManager />
      <Navbar />
      <div id="icerik">
        <Suspense fallback={<div className="route-fallback" aria-live="polite">Yükleniyor…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/randevu" element={<Appointment />} />
            <Route path="/hizmetler/:id" element={<ServiceDetail />} />
            <Route path="/kvkk" element={<LegalPage slug="kvkk" />} />
            <Route path="/gizlilik" element={<LegalPage slug="gizlilik" />} />
            <Route path="/kullanim-kosullari" element={<LegalPage slug="kullanim-kosullari" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
    </>
  );
}
