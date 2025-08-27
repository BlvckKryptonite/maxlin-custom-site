import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const HealthyHomeMaintenance = () => {
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
                Home Care
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Importance of Regular Maintenance for a Healthy Home
            </h1>
            
            <div className="flex items-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Maxlin Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <img 
              src="/lovable-uploads/c8a9f1fb-cbb1-403a-89a6-f7db50fb4227.png" 
              alt="Home maintenance and cleaning"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover essential tips and professional insights on how regular home maintenance and cleaning routines create healthier living environments for your family.
            </p>
            
            <h2>Why Regular Maintenance Matters</h2>
            <p>
              A well-maintained home is more than just visually appealing—it's essential for your family's health and well-being. Regular maintenance prevents the buildup of harmful contaminants, extends the life of your home's systems, and creates a safer environment for everyone.
            </p>
            
            <h2>Key Areas to Focus On</h2>
            
            <h3>HVAC System Maintenance</h3>
            <p>
              Your heating, ventilation, and air conditioning system circulates air throughout your home. Regular filter changes and professional cleaning ensure that the air your family breathes is clean and free from allergens and pollutants.
            </p>
            
            <h3>Deep Cleaning High-Touch Surfaces</h3>
            <p>
              Doorknobs, light switches, and handrails harbor bacteria and viruses. Regular disinfection of these surfaces is crucial for preventing the spread of illness, especially during flu season or when family members are sick.
            </p>
            
            <h3>Moisture Control and Mold Prevention</h3>
            <p>
              Excess moisture in bathrooms, kitchens, and basements can lead to mold growth, which poses serious health risks. Regular cleaning and proper ventilation help maintain optimal humidity levels and prevent mold formation.
            </p>
            
            <h2>Creating a Maintenance Schedule</h2>
            <p>
              Consistency is key to effective home maintenance. Create a schedule that includes:
            </p>
            <ul>
              <li>Daily tasks: Making beds, wiping down kitchen counters, and doing dishes</li>
              <li>Weekly tasks: Vacuuming, mopping floors, and cleaning bathrooms</li>
              <li>Monthly tasks: Deep cleaning appliances and organizing storage areas</li>
              <li>Seasonal tasks: HVAC maintenance, gutter cleaning, and carpet deep cleaning</li>
            </ul>
            
            <h2>The Professional Advantage</h2>
            <p>
              While regular household cleaning is important, professional cleaning services bring expertise, specialized equipment, and commercial-grade products that ensure thorough sanitization. Professional cleaners can identify and address problem areas that might be overlooked in routine cleaning.
            </p>
            
            <h2>Health Benefits You'll Notice</h2>
            <p>
              Families who maintain regular cleaning schedules often report:
            </p>
            <ul>
              <li>Reduced allergy symptoms and respiratory issues</li>
              <li>Better sleep quality in clean, fresh environments</li>
              <li>Lower stress levels from living in organized spaces</li>
              <li>Fewer sick days due to reduced exposure to germs</li>
            </ul>
            
            <h2>Getting Started</h2>
            <p>
              If you're overwhelmed by the thought of implementing a comprehensive maintenance routine, start small. Focus on one area at a time and gradually build your routine. Consider partnering with a professional cleaning service to handle deep cleaning while you maintain daily upkeep.
            </p>
            
            <p>
              Remember, a healthy home is an investment in your family's future. Regular maintenance not only protects your property value but, more importantly, safeguards the health and happiness of those you love most.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to Create a Healthier Home?</h3>
              <p className="text-muted-foreground mb-4">
                Let Maxlin Enterprise help you maintain a clean, healthy living environment with our professional cleaning services.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HealthyHomeMaintenance;