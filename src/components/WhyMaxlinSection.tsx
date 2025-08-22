import { Shield, Clock, Award, Users } from 'lucide-react';

export const WhyMaxlinSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "18+ years of consistent service delivery with zero compromise on quality and safety standards."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service availability for emergency cleaning and maintenance requirements."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Professionally trained staff with industry certifications and adherence to international standards."
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "Personalized solutions tailored to meet specific client needs with dedicated account management."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Why Maxlin Enterprise Limited Stands Out
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With nearly two decades of experience in the cleaning and hygiene industry, 
              Maxlin Enterprise Limited has established itself as Zambia's most trusted 
              partner for comprehensive cleaning solutions.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Professional cleaning service"
                  className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Office cleaning"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Cleaning team"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Cleaning equipment"
                  className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};