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
                  src="/lovable-uploads/79fc9308-62bf-4caf-9b24-d04a8b215321.png"
                  alt="Professional cleaning service"
                  className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/lovable-uploads/aa04f537-558a-4d5a-aafe-5badc4add145.png"
                  alt="Office cleaning equipment"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/lovable-uploads/996800e4-bb87-4907-b0a7-69b23de0cdbd.png"
                  alt="Cleaning products specialist"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/lovable-uploads/87fb8b66-2e93-44e1-bba2-4c847e9b8e94.png"
                  alt="Professional cleaning"
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