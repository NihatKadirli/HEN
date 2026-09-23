import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import WhyHen from '../components/WhyHen';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal([]);
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <BeforeAfterGallery />
      <WhyHen />
      <About />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
