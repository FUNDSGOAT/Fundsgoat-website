
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Mail, MessageCircle, Shield } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-gold-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">FundsGoat</h1>
              <p className="text-xs text-gray-600">Approval Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('samples')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Samples
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('consultation')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Consultation
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
              onClick={() => window.open('https://t.me/Fundsgoat_Approvals', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button
              size="sm"
              className="gold-gradient text-white hover:shadow-lg"
              onClick={() => window.location.href = 'mailto:fundsgoatapprovalservices@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('samples')}
              className="block w-full text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
            >
              Samples
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('consultation')}
              className="block w-full text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
            >
              Consultation
            </button>
            
            <div className="pt-4 border-t space-y-3">
              <Button
                variant="outline"
                className="w-full border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
                onClick={() => window.open('https://t.me/Fundsgoat_Approvals', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button
                className="w-full gold-gradient text-white"
                onClick={() => window.location.href = 'mailto:fundsgoatapprovalservices@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-dark-green-600 to-dark-green-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 px-2 py-1">
              ✅ Snappt Verified
            </Badge>
            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 px-2 py-1">
              ✅ 99.8% Success Rate
            </Badge>
            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 px-2 py-1 hidden sm:inline-flex">
              ✅ 24/7 Support
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
