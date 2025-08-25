import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const NewsSection = () => {
  const blogPosts = [
    {
      title: "The Importance of Regular Maintenance for a Healthy Home",
      excerpt: "Discover essential tips and professional insights on how regular home maintenance and cleaning routines create healthier living environments for your family.",
      date: "2024-01-15",
      author: "Maxlin Team",
      image: "/lovable-uploads/home-maintenance-image.png",
      category: "Home Care",
      link: "https://maxlinenterprise.com/the-importance-of-regular-maintenance-for-a-healthy-home/"
    },
    {
      title: "Unlocking the Power of Eco-Friendly Cleaning Products",
      excerpt: "Learn how sustainable cleaning solutions protect both your family and the environment while delivering exceptional cleaning results that you can trust.",
      date: "2024-01-10",
      author: "Maxlin Team",
      image: "/lovable-uploads/eco-friendly-cleaning.png",
      category: "Sustainability",
      link: "https://maxlinenterprise.com/unlocking-the-power-of-eco-friendly-cleaning-products/"
    },
    {
      title: "Use Soap and Water to Clean Your Kitchen Shelves Too",
      excerpt: "Simple yet effective techniques for maintaining pristine kitchen hygiene. Discover why soap and water remains one of the most powerful cleaning combinations.",
      date: "2024-01-05",
      author: "Maxlin Team",
      image: "/lovable-uploads/kitchen-cleaning.png",
      category: "Kitchen Care",
      link: "https://maxlinenterprise.com/use-soap-and-water-to-clean-your-kitchen-shelves-too/"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Latest News & Insights
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Industry Trends
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get the latest insights on cleaning best practices, industry trends, and helpful tips 
            to maintain clean and healthy environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium group p-0"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};