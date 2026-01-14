import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GallerySection from "@/components/GallerySection";
import SalesSection from "@/components/SalesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <GallerySection />
      <SalesSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
