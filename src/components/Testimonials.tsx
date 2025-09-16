import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Real Estate Broker",
      company: "Elite Properties Group",
      content: "Working with this developer was a game-changer for our brokerage. The custom website increased our lead generation by 300% and the IDX integration works flawlessly. Our agents love the modern design and our clients find properties effortlessly.",
      rating: 5,
      avatar: "SM"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Independent Realtor",
      company: "Rodriguez Real Estate",
      content: "I needed a professional website that would help me compete with larger brokerages. The result exceeded my expectations. The mobile-responsive design and SEO optimization have significantly improved my online presence and client acquisition.",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "Property Manager",
      company: "Premium Property Management",
      content: "The custom membership platform developed for our property management company streamlined our operations completely. Tenants can now access documents, submit requests, and make payments online. It's been a huge time-saver for our team.",
      rating: 5,
      avatar: "JP"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Real Estate Team Leader",
      company: "Thompson & Associates",
      content: "Our new website has transformed how we do business. The property search functionality is intuitive, the lead capture system is effective, and the overall design perfectly represents our brand. We've seen a 250% increase in online inquiries.",
      rating: 5,
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Chen",
      role: "Commercial Realtor",
      company: "Metro Commercial Group",
      content: "The attention to detail and understanding of the real estate industry is outstanding. The website not only looks professional but functions exactly how we need it to. The ongoing support and maintenance service gives us peace of mind.",
      rating: 5,
      avatar: "LC"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what real estate professionals say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-sm mx-auto">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <motion.div
                key={currentIndex}
                className="bg-blue-600 h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isAutoPlaying ? '100%' : '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}