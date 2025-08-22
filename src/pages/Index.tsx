import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { JourneySection } from '@/components/JourneySection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProductsSection } from '@/components/ProductsSection';
import { WhyMaxlinSection } from '@/components/WhyMaxlinSection';
import { ClientsSection } from '@/components/ClientsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { NewsSection } from '@/components/NewsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <ServicesSection />
        <ProductsSection />
        <WhyMaxlinSection />
        <ClientsSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
