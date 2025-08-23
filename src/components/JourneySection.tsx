import { CheckCircle, Heart, Leaf, Users } from 'lucide-react';

export const JourneySection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Excellence in Every Service",
      description: "We maintain the highest standards in all our cleaning and hygiene services."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach", 
      description: "Your satisfaction is our priority, with personalized solutions for every client."
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Committed to eco-friendly practices that protect our environment."
    },
    {
      icon: Heart,
      title: "Dedicated Zambian Ownership",
      description: "Built on dedication, honesty, and passion for transforming spaces."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Discover Our Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Explore the Heart of Maxlin Enterprise Limited
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Welcome to Maxlin Enterprise Limited, a Zambian-owned company that embarked on its journey 
                in 2006 as Maxlin Enterprise and later evolved into Maxlin Enterprise LTD upon its 
                incorporation in 2010. Our story is a testament to dedication, integrity, and a commitment 
                to excellence that has defined our path since the beginning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From our humble origins, we have grown into a company that ensures a unique blend of 
                expertise, personalized service, and environmental responsibility. Maxlin Enterprise 
                Limited is more than just a service provider; we are your dedicated partner in creating 
                a clean, safe, and healthy environment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-xl">
              <p className="text-primary font-medium text-lg">
                "At Maxlin, our journey is built on dedication, honesty, and a passion for transforming 
                spaces. We believe in creating not just environments but lasting impressions, reflecting 
                our commitment to excellence and the heart we infuse into every project."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl blur-lg"></div>
              <img 
                src="/lovable-uploads/ffaa6c66-6a7d-4b9d-8293-419ace041ac6.png"
                alt="Maxlin Enterprise Limited team"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};