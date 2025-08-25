import { useEffect, useRef, useState } from 'react';

export const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Our trusted clients with real logos
  const clients = [
    { name: "Zambia Daily Mail", logo: "/lovable-uploads/2b219e29-df11-4977-8428-e31ca186b69b.png" },
    { name: "Copperbelt University", logo: "/lovable-uploads/a8b95592-0040-4887-9990-74166b780e0d.png" },
    { name: "ABSA Bank", logo: "/lovable-uploads/b124f865-32a9-4b24-bfc7-6bb8a0c86605.png" },
    { name: "Hollard Insurance", logo: "/lovable-uploads/05a46695-74e0-484b-ad6a-f2f91d0d7b2e.png" },
    { name: "UNHCR", logo: "/lovable-uploads/dbd96426-418b-446a-8086-db80038b221a.png" },
    { name: "University of Zambia", logo: "/lovable-uploads/113849c1-a7e4-4bb8-8c30-2e87d8570121.png" },
    { name: "USAID", logo: "/lovable-uploads/623e3d54-0d04-4d35-a37e-3e02239c813d.png" },
    { name: "Zamtel", logo: "/lovable-uploads/74b312f7-b5eb-49d8-abc7-eab67fd87c47.png" }
  ];

  // Duplicate clients for seamless scroll
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollLeft = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollLeft += 1;
        if (scrollLeft >= scrollWidth / 2) {
          scrollLeft = 0;
        }
        scrollContainer.scrollLeft = scrollLeft;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Clients
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Leading Organizations
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We proudly serve government institutions, banks, hospitals, universities, 
            and businesses across Zambia with our professional cleaning services.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-hidden scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-44 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4 group cursor-pointer"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground">
            Join over <span className="font-semibold text-primary">500+ satisfied clients</span> who trust Maxlin Enterprise Limited
          </p>
        </div>
      </div>
    </section>
  );
};