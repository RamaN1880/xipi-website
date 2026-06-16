import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Portraits from '@/components/sections/Portraits';
import Problem from '@/components/sections/Problem';
import Pillars from '@/components/sections/Pillars';
import Features from '@/components/sections/Features';
import SloganBanner from '@/components/sections/SloganBanner';
import Vision from '@/components/sections/Vision';
import Values from '@/components/sections/Values';
import AISection from '@/components/sections/AISection';
import AidaSection from '@/components/sections/AidaSection';
import Pricing from '@/components/sections/Pricing';
import Security from '@/components/sections/Security';
import ContactSection from '@/components/sections/ContactSection';
import CTAFinal from '@/components/sections/CTAFinal';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Nav />
      <Hero />
      <Portraits />
      <Problem />
      <Pillars />
      <Features />
      <SloganBanner />
      <Vision />
      <Values />
      <AISection />
      <AidaSection />
      <Pricing />
      <Security />
      <ContactSection />
      <CTAFinal />
      <Footer />
    </main>
  );
}
