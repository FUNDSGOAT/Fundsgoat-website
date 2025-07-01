import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SampleGallery from "@/components/SampleGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <section id="services">
          <ServicesSection />
        </section>

        <section id="samples">
          <SampleGallery />
        </section>

        <section id="reviews">
          <TestimonialsSection />
        </section>

        <section id="consultation">
          <ConsultationForm />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
