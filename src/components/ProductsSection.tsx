import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ProductsSection = () => {
  const featuredProducts = [
    {
      name: "Truck Wash Broom",
      description: "Professional red bristle brush perfect for heavy-duty cleaning and scrubbing.",
      image: "/lovable-uploads/04c8dac2-a095-4bc9-8eb4-622d9d061849.png"
    },
    {
      name: "Dustmop Sweeper Complete",
      description: "Complete mop system with interchangeable heads for versatile cleaning solutions.",
      image: "/lovable-uploads/b73acd5b-1bc4-41a2-aca0-13c9214a2357.png"
    },
    {
      name: "Platform Broom",
      description: "Traditional wooden-handled broom with durable bristles for effective sweeping.",
      image: "/lovable-uploads/a3bd66ea-4277-4ea7-927d-92a83082d261.png"
    },
    {
      name: "Microfibre Fan Mop Head",
      description: "Industrial-grade microfibre mop head designed for commercial cleaning applications.",
      image: "/lovable-uploads/98825cda-0494-4b9d-87a2-c717a6447ceb.png"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Featured Products
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Cleaning Supplies
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            High-quality cleaning products and equipment designed for professional use. 
            From basic supplies to specialized tools, we have everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => scrollToSection('#contact')}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};