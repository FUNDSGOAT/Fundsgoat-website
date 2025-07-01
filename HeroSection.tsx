
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green-900/90 via-dark-green-800/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-gold-500/20 text-gold-400 border-gold-400/30 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Verified Documents
            </Badge>
            <Badge className="bg-gold-500/20 text-gold-400 border-gold-400/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Snappt Compatible
            </Badge>
            <Badge className="bg-gold-500/20 text-gold-400 border-gold-400/30 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              50 States Approved
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Get Approved with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Confidence
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gold-200 mt-2">
              in All 50 States
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional document verification services trusted by thousands. 
            Get the approval you deserve with our premium, reliable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gold-gradient hover:shadow-2xl hover:shadow-gold-500/25 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-white px-8 py-4 text-lg transition-all duration-300"
            >
              Get Approved Now
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">5000+</div>
              <div className="text-gray-300">Successful Approvals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">99.8%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-400/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-dark-green-400/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
