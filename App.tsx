import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SampleGallery from "./components/SampleGallery";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <TestimonialsSection />
        <SampleGallery />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
