import { motion } from 'motion/react';
import { 
  Home, 
  Search, 
  Smartphone, 
  Palette,
  MessageSquare 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Real Estate Listing & Property Showcase",
      description: "Beautiful property galleries with high-resolution images, virtual tours, and detailed property information that converts visitors into leads."
    },
    {
      icon: Search,
      title: "Search + Filter Functionality",
      description: "Advanced property search with multiple filters including price, location, property type, amenities, and more to help users find their perfect match."
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive & Performance Optimized Design",
      description: "Lightning-fast, mobile-first websites that work perfectly on all devices with optimized loading times and smooth user experience."
    },
    {
      icon: Palette,
      title: "Modern UI / UX with React or Vue",
      description: "Clean, contemporary designs built with the latest frontend technologies, focusing on user engagement and conversion optimization."
    },
    {
      icon: MessageSquare,
      title: "Lead Generation & Contact Forms",
      description: "Strategic placement of contact forms, inquiry buttons, and lead capture mechanisms to maximize conversions and grow your client base."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            My Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized real estate web development services that drive results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-blue-500" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Real Estate Business?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's create a website that converts visitors into clients and helps you stand out in the competitive real estate market.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Your Free Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}