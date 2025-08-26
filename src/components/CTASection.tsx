import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Free consultation and quotes",
    "24/7 emergency service",
    "Fully insured and certified",
    "100% satisfaction guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Experience the 
            <span className="block text-primary-foreground/80">Maxlin Difference?</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients across Zambia. Get your free consultation 
            and quote today – no obligations, just solutions.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 text-primary-foreground/90 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Free Quote Now
            </Button>
            <Button 
              onClick={() => scrollToSection('#services')}
              variant="outline" 
              size="lg"
              className="border-white text-blue-400 hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto"
            >
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg mb-2">Call us now: <span className="font-semibold text-white">+260979927525</span></p>
            <p>Or email: <span className="font-semibold text-white">sales@maxlinenterprise.com</span></p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};