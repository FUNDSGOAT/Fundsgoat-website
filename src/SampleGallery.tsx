
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Download } from "lucide-react";

const SampleGallery = () => {
  const samples = [
    {
      title: "Professional Pay Stub Sample",
      description: "High-quality paystub template verified by Snappt",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      verified: "Snappt Verified",
      category: "Employment"
    },
    {
      title: "Employment Verification Letter",
      description: "Official employment letter format accepted by all major platforms",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      verified: "Nova Credit Approved",
      category: "Verification"
    },
    {
      title: "Bank Statement Template",
      description: "Professional bank statement format for loan applications",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      verified: "Verified by Approved Shield",
      category: "Financial"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-dark-green-100 text-dark-green-800 mb-4 px-4 py-2">
            Sample Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Document
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600"> Samples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our high-quality document samples. All templates are professionally 
            designed and verified by major platforms including Snappt, Nova Credit, and Approved Shield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
            >
              <div className="relative">
                <img 
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay with blur effect for watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Download className="w-4 h-4 mr-2" />
                        Sample
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-dark-green-600 text-white px-3 py-1">
                    <Shield className="w-3 h-3 mr-1" />
                    {sample.verified}
                  </Badge>
                </div>

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-4xl font-bold transform rotate-45 select-none">
                    SAMPLE
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {sample.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {sample.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sample.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality Guaranteed
            </h3>
            <p className="text-xl text-gold-100 mb-8">
              All our documents undergo rigorous quality checks and are designed to pass 
              verification on all major platforms. We guarantee authenticity and acceptance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-2xl font-bold mb-2">✓ Snappt Verified</div>
                <div className="text-gold-100">Passes all Snappt checks</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">✓ Nova Credit Approved</div>
                <div className="text-gold-100">Meets Nova Credit standards</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">✓ Shield Compatible</div>
                <div className="text-gold-100">Approved Shield certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleGallery;
