
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    application: '',
    documentType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Consultation Request - ${formData.application}`;
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Application Type: ${formData.application}
Document Type Needed: ${formData.documentType}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:fundsgoatapprovalservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Consultation Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gold-100 text-gold-800 mb-4 px-4 py-2">
            Free Consultation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600"> Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get approved? Fill out our consultation form and we'll provide you with 
            a personalized solution that fits your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-dark-green-600 to-dark-green-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Start Your Approval Journey</CardTitle>
              <CardDescription className="text-dark-green-100">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="application" className="text-gray-700 font-medium">
                    What are you applying for? *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('application', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select application type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment/Rental</SelectItem>
                      <SelectItem value="house">House Purchase</SelectItem>
                      <SelectItem value="personal-loan">Personal Loan</SelectItem>
                      <SelectItem value="auto-loan">Auto Loan</SelectItem>
                      <SelectItem value="business-loan">Business Loan</SelectItem>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="documentType" className="text-gray-700 font-medium">
                    Document Type Needed *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('documentType', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment-package">Complete Apartment Package</SelectItem>
                      <SelectItem value="paystubs">Professional Paystubs</SelectItem>
                      <SelectItem value="employment-letter">Employment Letters</SelectItem>
                      <SelectItem value="bank-statements">Bank Statements</SelectItem>
                      <SelectItem value="credit-repair">Credit Repair</SelectItem>
                      <SelectItem value="eviction-removal">Eviction Removal</SelectItem>
                      <SelectItem value="co-signer">Co-signer Documentation</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Additional Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your specific situation and requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Upload className="w-5 h-5 text-gold-600 mr-2" />
                    <span className="font-medium text-gray-700">Optional: Upload Documents</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    You can also email any relevant documents to: 
                    <span className="font-medium text-dark-green-600"> fundsgoatapprovalservices@gmail.com</span>
                  </p>
                </div>

                <Button 
                  type="submit"
                  className="w-full gold-gradient hover:shadow-2xl hover:shadow-gold-500/25 text-white font-semibold py-4 text-lg transition-all duration-300"
                >
                  Send Consultation Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-gold-50 to-gold-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Consultation Review</h4>
                      <p className="text-gray-600">We review your request within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Custom Solution</h4>
                      <p className="text-gray-600">We create a tailored plan for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600">Get your documents within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-dark-green-50 to-dark-green-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-dark-green-600 mr-3" />
                    <span className="text-gray-700">99.8% Success Rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-dark-green-600 mr-3" />
                    <span className="text-gray-700">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-dark-green-600 mr-3" />
                    <span className="text-gray-700">Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-dark-green-600 mr-3" />
                    <span className="text-gray-700">All Major Platforms Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold-400 mr-3" />
                  <span>fundsgoatapprovalservices@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold-400 mr-3" />
                  <span>Available 24/7 via Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
