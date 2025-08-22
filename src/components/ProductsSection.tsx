import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ProductsSection = () => {
  const featuredProducts = [
    {
      name: "Standard Mop Head",
      description: "High-quality cotton mop head perfect for commercial and domestic cleaning.",
      image: "/lovable-uploads/6a508820-f1ba-4d9b-b211-aa2399b3bfc3.png"
    },
    {
      name: "Platform Broom",
      description: "Durable platform broom designed for efficient floor cleaning in large areas.",
      image: "/lovable-uploads/996800e4-bb87-4907-b0a7-69b23de0cdbd.png"
    },
    {
      name: "Microfibre Fan Mop Head",
      description: "Advanced microfibre technology for superior cleaning performance.",
      image: "/lovable-uploads/aa04f537-558a-4d5a-aafe-5badc4add145.png"
    },
    {
      name: "Professional Cleaning Kit",
      description: "Complete cleaning solution with all essential tools and supplies.",
      image: "/lovable-uploads/87fb8b66-2e93-44e1-bba2-4c847e9b8e94.png"
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