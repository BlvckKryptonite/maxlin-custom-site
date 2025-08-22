import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maxlin Enterprise Limited has been our trusted cleaning partner for over 5 years. Their professionalism, reliability, and attention to detail is unmatched. They truly understand the importance of maintaining a clean and healthy environment for our patients and staff.",
      name: "Dr. Sarah Mwanza",
      position: "Hospital Administrator",
      organization: "University Teaching Hospital",
      rating: 5
    },
    {
      quote: "We've worked with several cleaning companies over the years, but none compare to Maxlin's level of service. They're always punctual, thorough, and their staff is incredibly professional. Our office spaces have never looked better.",
      name: "James Phiri",
      position: "Facilities Manager",
      organization: "Standard Chartered Bank",
      rating: 5
    },
    {
      quote: "Maxlin's pest control services saved our warehouse from a major infestation. Their team was quick to respond, professional in their approach, and completely resolved the issue. We now have them on a maintenance contract.",
      name: "Mary Banda",
      position: "Operations Director",
      organization: "Shoprite Holdings",
      rating: 5
    },
    {
      quote: "The quality of Maxlin's cleaning products is exceptional. As a hotel, we need reliable suppliers who understand our standards. Maxlin consistently delivers high-quality products on time, every time.",
      name: "Robert Tembo",
      position: "General Manager",
      organization: "Radisson Blu Hotel",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/f3788506-1c5c-40e4-bbdb-718728fe9398.png')`
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary-foreground/80 mb-4 tracking-wide uppercase">
            Client Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h3>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about 
            our services and commitment to excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="testimonial-card mx-auto max-w-3xl animate-fade-in-up">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-primary-foreground font-medium text-center leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-primary-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary-foreground/80">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {testimonials[currentTestimonial].organization}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-primary-foreground' 
                    : 'bg-primary-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};