
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, CreditCard, FileText, UserCheck, Briefcase, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Apartment Packages",
      description: "Complete apartment application packages including co-signer documents, professional paystubs, and compelling offer letters. Everything you need to secure your dream apartment.",
      features: ["Co-signer Documentation", "Professional Paystubs", "Offer Letters", "Employment Verification"],
      price: "Starting at $299"
    },
    {
      icon: CreditCard,
      title: "Loan Support",
      description: "Professional loan documentation services to help you qualify for personal, auto, or business loans. Increase your approval chances significantly.",
      features: ["Income Verification", "Employment Letters", "Bank Statements", "Financial Documentation"],
      price: "Starting at $199"
    },
    {
      icon: Shield,
      title: "Credit Help",
      description: "Comprehensive credit repair and improvement services. We help you build, repair, and optimize your credit profile for better approval rates.",
      features: ["Credit Report Analysis", "Dispute Letters", "Credit Building", "Score Optimization"],
      price: "Starting at $149"
    },
    {
      icon: FileText,
      title: "Eviction Removal",
      description: "Professional eviction removal services to clean your rental history. Get a fresh start and improve your housing approval chances.",
      features: ["Record Review", "Legal Documentation", "Dispute Process", "Follow-up Support"],
      price: "Starting at $399"
    },
    {
      icon: Briefcase,
      title: "Employment Docs",
      description: "Professional employment verification documents including pay stubs, employment letters, and HR documentation for any application needs.",
      features: ["Pay Stub Creation", "Employment Letters", "HR Documentation", "Income Verification"],
      price: "Starting at $99"
    },
    {
      icon: UserCheck,
      title: "Verification Services",
      description: "Complete document verification services ensuring all your paperwork meets the highest standards and passes all verification checks.",
      features: ["Document Review", "Compliance Check", "Quality Assurance", "Revision Support"],
      price: "Starting at $79"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of professional document services. 
            Each service is designed to maximize your approval chances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-transparent rounded-bl-full"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-dark-green-500 to-dark-green-600 rounded-2xl mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold text-gold-600">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full gold-gradient hover:shadow-lg hover:shadow-gold-500/25 text-white font-semibold transition-all duration-300"
                >
                  Request This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-green-600 to-dark-green-700 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We offer custom solutions tailored to your specific needs. 
              Contact us for a personalized consultation.
            </p>
            <Button 
              size="lg"
              className="gold-gradient hover:shadow-2xl hover:shadow-gold-500/25 text-white font-semibold px-8 py-4 text-lg"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
