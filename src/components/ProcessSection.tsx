import { MessageSquare, FileText, Settings, Users } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation and Needs Assessment",
      description: "Client expresses interest leading to thorough consultation. We understand specific requirements and define project scope for clarity.",
      icon: MessageSquare,
    },
    {
      number: "02", 
      title: "Tailored Service Proposal",
      description: "Crafting customized solutions with transparent communication and flexible options tailored to your unique needs.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Service Execution and Quality Assurance", 
      description: "Our skilled team implements approved proposals with precision, conducts regular quality checks, and provides updates.",
      icon: Settings,
    },
    {
      number: "04",
      title: "Client Satisfaction and Follow-up",
      description: "We gather feedback, address questions, and provide comprehensive post-service support for complete satisfaction.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wider">Process</p>
          <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;