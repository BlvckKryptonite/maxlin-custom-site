import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const EcoFriendlyProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Sustainability
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlocking the Power of Eco-Friendly Cleaning Products
            </h1>
            
            <div className="flex items-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>February 8, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Maxlin Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
            </div>
            
            <img 
              src="/lovable-uploads/f18a3b51-7262-49a7-81aa-09fcf6d32215.png" 
              alt="Eco-friendly cleaning products"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </div>
          
          <div className="prose prose-lg max-w-none [&>p]:mb-6 [&>h2]:mt-10 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:mb-6 [&>ol]:mb-6">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn how sustainable cleaning solutions protect both your family and the environment while delivering exceptional cleaning results that you can trust.
            </p>
            
            <h2>The Green Cleaning Revolution</h2>
            <p>
              The shift toward eco-friendly cleaning products isn't just a trend—it's a necessary evolution in how we maintain our homes and workspaces. These innovative solutions prove that you don't have to choose between effective cleaning and environmental responsibility.
            </p>
            
            <h2>Understanding Eco-Friendly Cleaning</h2>
            <p>
              Eco-friendly cleaning products are formulated with biodegradable ingredients that break down naturally without harming ecosystems. Unlike traditional cleaners that may contain harsh chemicals, these products use plant-based ingredients and natural enzymes to achieve superior cleaning results.
            </p>
            
            <h3>Key Benefits for Your Family</h3>
            <ul>
              <li><strong>Improved Indoor Air Quality:</strong> Eco-friendly products don't release toxic fumes, creating a healthier breathing environment</li>
              <li><strong>Gentle on Skin:</strong> Natural ingredients are less likely to cause skin irritation or allergic reactions</li>
              <li><strong>Safe Around Children and Pets:</strong> Non-toxic formulations provide peace of mind for families</li>
              <li><strong>Reduced Chemical Exposure:</strong> Lower risk of respiratory issues and chemical sensitivities</li>
            </ul>
            
            <h2>Environmental Impact</h2>
            
            <h3>Protecting Water Systems</h3>
            <p>
              Traditional cleaning products often contain phosphates and other chemicals that can harm aquatic life when they enter water systems. Eco-friendly alternatives use biodegradable ingredients that break down safely, protecting rivers, lakes, and oceans.
            </p>
            
            <h3>Reducing Carbon Footprint</h3>
            <p>
              Many eco-friendly cleaning products are manufactured using renewable energy sources and sustainable practices. This reduces the overall carbon footprint associated with production and transportation.
            </p>
            
            <h3>Packaging Innovation</h3>
            <p>
              Leading eco-friendly brands are pioneering sustainable packaging solutions, including concentrated formulas that reduce plastic waste and refillable containers that minimize environmental impact.
            </p>
            
            <h2>Effectiveness Myths Debunked</h2>
            <p>
              One common misconception is that eco-friendly products are less effective than their chemical counterparts. Modern green cleaning formulations use advanced biotechnology to create powerful cleaning agents that often outperform traditional products.
            </p>
            
            <h3>Scientific Innovation</h3>
            <p>
              Today's eco-friendly cleaners utilize:
            </p>
            <ul>
              <li>Enzyme technology that breaks down organic matter at the molecular level</li>
              <li>Plant-based surfactants that lift dirt and grime effectively</li>
              <li>Natural antimicrobial agents that eliminate bacteria and viruses</li>
              <li>Probiotics that continue cleaning even after application</li>
            </ul>
            
            <h2>Making the Switch</h2>
            
            <h3>Start Gradually</h3>
            <p>
              You don't need to replace your entire cleaning arsenal overnight. Begin by substituting eco-friendly alternatives for your most frequently used products, such as all-purpose cleaners and dish soap.
            </p>
            
            <h3>Read Labels Carefully</h3>
            <p>
              Look for certifications from recognized organizations like the EPA's Safer Choice program or Green Seal. These certifications ensure that products meet strict environmental and health standards.
            </p>
            
            <h3>Consider Professional Services</h3>
            <p>
              Professional cleaning services that specialize in eco-friendly products can provide the expertise and equipment needed to maximize the effectiveness of green cleaning solutions while ensuring proper application and safety.
            </p>
            
            <h2>The Future of Clean</h2>
            <p>
              As technology advances, eco-friendly cleaning products continue to improve in both effectiveness and environmental impact. Innovations in biotechnology, nanotechnology, and sustainable chemistry are creating cleaning solutions that are more powerful and environmentally responsible than ever before.
            </p>
            
            <h2>Cost Considerations</h2>
            <p>
              While some eco-friendly products may have a higher upfront cost, they often provide better value through:
            </p>
            <ul>
              <li>Concentrated formulas that last longer</li>
              <li>Multi-purpose capabilities that reduce the number of products needed</li>
              <li>Health benefits that may reduce medical costs over time</li>
              <li>Environmental benefits that contribute to long-term sustainability</li>
            </ul>
            
            <p>
              Making the switch to eco-friendly cleaning products is an investment in your family's health and the planet's future. With today's advanced formulations, you can achieve exceptional cleaning results while maintaining your commitment to environmental responsibility.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Experience Eco-Friendly Professional Cleaning</h3>
              <p className="text-muted-foreground mb-4">
                Discover how Maxlin Enterprise's eco-friendly cleaning solutions can transform your space while protecting your family and the environment.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Learn About Our Green Services
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EcoFriendlyProducts;