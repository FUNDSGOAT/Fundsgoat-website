
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25aa2b8?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely incredible service! I was struggling to get approved for an apartment for months. Their apartment package was perfect and looked completely authentic. Got approved within 3 days of submitting. The documents passed all Snappt verifications without any issues. Highly recommend!",
      service: "Apartment Package"
    },
    {
      name: "Michael Chen",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The loan support service was a game-changer for me. I needed documentation for a car loan and they provided everything perfectly. The bank accepted all documents immediately and I got approved for a rate better than expected. Professional and fast service!",
      service: "Loan Support"
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Had an eviction on my record that was blocking me everywhere. Their eviction removal service worked like magic - completely cleared my record in just 2 weeks. Now I can apply for apartments with confidence. Worth every penny!",
      service: "Eviction Removal"
    },
    {
      name: "David Williams",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Needed employment verification quickly for a rental application. They delivered professional paystubs and employment letters that looked completely legitimate. Landlord accepted everything immediately. Super fast turnaround time!",
      service: "Employment Docs"
    },
    {
      name: "Jessica Taylor",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "My credit was terrible and I couldn't get approved anywhere. Their credit help service not only improved my score by 150 points but also provided backup documentation for immediate approvals. Life-changing service!",
      service: "Credit Help"
    },
    {
      name: "Robert Anderson",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Used their verification services for multiple applications. Every single document was perfect and passed all checks including Nova Credit and Approved Shield. The attention to detail is incredible. They really know what they're doing!",
      service: "Verification Services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gold-100 text-gold-800 mb-4 px-4 py-2">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600"> Real Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about 
            their approval success stories and how we helped them achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-gold-300" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Service Badge */}
                <Badge className="mt-4 bg-dark-green-100 text-dark-green-800">
                  {testimonial.service}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">99.8%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">50</div>
              <div className="text-gray-300">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
