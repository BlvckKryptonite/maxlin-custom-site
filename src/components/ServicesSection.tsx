import { Building2, Bug, Home, Construction, PartyPopper, Droplets, Wrench, GraduationCap, Trees } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning services to maintain a pristine work environment.",
      color: "from-primary to-primary-light"
    },
    {
      icon: Bug,
      title: "Pest Control",
      description: "Comprehensive pest management solutions to keep your spaces safe and pest-free.",
      color: "from-primary-light to-primary"
    },
    {
      icon: Home,
      title: "Domestic Cleaning",
      description: "Reliable home cleaning services to keep your living spaces spotless and healthy.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Construction,
      title: "On & Post Construction Cleaning",
      description: "Specialized cleaning for construction sites and post-construction cleanup services.",
      color: "from-primary-dark to-primary"
    },
    {
      icon: PartyPopper,
      title: "Pre & Post Events Cleaning",
      description: "Event cleaning services to ensure your venue is pristine before and after your special occasions.",
      color: "from-primary to-primary-light"
    },
    {
      icon: Droplets,
      title: "Sanitary Services",
      description: "Complete sanitary and hygiene solutions for restrooms and washroom facilities.",
      color: "from-primary-light to-primary-dark"
    },
    {
      icon: Wrench,
      title: "Water Vacuuming",
      description: "Professional water extraction and vacuuming services for flood damage and spills.",
      color: "from-primary-dark to-primary-light"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Professional training programs for cleaning staff to ensure quality service delivery.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Trees,
      title: "Garden Maintenance",
      description: "Complete landscaping and garden maintenance services to keep your outdoor spaces beautiful.",
      color: "from-primary-light to-primary"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Cleaning & Hygiene Solutions
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From commercial spaces to residential homes, we provide complete cleaning and hygiene services 
            tailored to meet your specific needs across Zambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="btn-hero-primary text-lg px-8 py-4"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};