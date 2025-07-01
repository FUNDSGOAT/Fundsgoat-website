
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Star, Users, Clock, Award } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: CheckCircle,
      title: "Verified Documents",
      description: "All documents are professionally verified and meet industry standards"
    },
    {
      icon: Shield,
      title: "Snappt / Nova Credit Compatible",
      description: "Fully compatible with all major verification platforms"
    },
    {
      icon: Award,
      title: "Approved Shield Certified",
      description: "Certified by leading approval verification services"
    },
    {
      icon: Users,
      title: "Used by Real Clients",
      description: "Thousands of successful approvals with proven results"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times for urgent applications"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Highest quality documents that pass all verification checks"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-dark-green-100 text-dark-green-800 mb-4 px-4 py-2">
            Trusted & Verified
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional, reliable, and verified document services that guarantee results. 
            Trust the experts who have helped thousands get approved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-dark-green-600 to-dark-green-700 rounded-3xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">✅</div>
              <div className="text-white font-semibold">Verified Documents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">✅</div>
              <div className="text-white font-semibold">Snappt Compatible</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">✅</div>
              <div className="text-white font-semibold">Real Client Results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">✅</div>
              <div className="text-white font-semibold">50 States Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
