import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import PrivateWealth from '@/components/sections/PrivateWealth';
import SovereignEngineering from '@/components/sections/SovereignEngineering';
import StrategicIntelligence from '@/components/sections/StrategicIntelligence';
import GeographyWealth from '@/components/sections/GeographyWealth';
import EmergingEldorado from '@/components/sections/EmergingEldorado';
import DisciplineCapital from '@/components/sections/DisciplineCapital';
import AcquisitionFramework from '@/components/sections/AcquisitionFramework';
import QuietWins from '@/components/sections/QuietWins';
import GlobalIntelligence from '@/components/sections/GlobalIntelligence';
import StatesmanPortrait from '@/components/sections/StatesmanPortrait';
import TrustConfidentiality from '@/components/sections/TrustConfidentiality';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import MandateGateway from '@/components/sections/MandateGateway';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PrivateWealth />
        <SovereignEngineering />
        <StrategicIntelligence />
        <GeographyWealth />
        <EmergingEldorado />
        <DisciplineCapital />
        <AcquisitionFramework />
        <QuietWins />
        <GlobalIntelligence />
        <StatesmanPortrait />
        <TrustConfidentiality />
        <Testimonials />
        <BlogPreview />
        <MandateGateway />
      </main>
      <Footer />
    </>
  );
}
