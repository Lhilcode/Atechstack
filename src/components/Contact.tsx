import { motion } from 'motion/react';
import { Send, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:a3techstack@gmail.com?subject=Free Demo Request&body=Hi Akorede, I\'d like to discuss a real estate website project...';
  };

  const handleDemoRequest = () => {
    window.location.href = 'mailto:a3techstack@gmail.com?subject=Free Demo Concept Request&body=Hi Akorede,%0A%0AI\'m interested in getting a free demo concept for my real estate website. Here are my project details:%0A%0A- Business Name:%0A- Current Website (if any):%0A- Target Audience:%0A- Key Features Needed:%0A- Timeline:%0A- Budget Range:%0A%0ALooking forward to hearing from you!';
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your real estate business with a modern, high-converting website?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Free Demo</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I create custom demo concepts to show you exactly how your new website could look and function. 
                  No commitment required - just a clear vision of your potential.
                </p>
              </div>

              {/* Email Card */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group" onClick={handleEmailClick}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">Email Me Directly</h4>
                      <p className="text-blue-400 font-medium">a3techstack@gmail.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">What happens next?</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-semibold text-xs">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Free Consultation:</span> We discuss your business goals and website requirements
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-semibold text-xs">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Demo Creation:</span> I create a custom demo concept for your review
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-semibold text-xs">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Proposal:</span> Detailed project timeline and transparent pricing
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Typical response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:items-center"
            >
              <Card className="w-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Let's create a website that showcases your properties beautifully 
                    and converts visitors into qualified leads.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      onClick={handleDemoRequest}
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Your Free Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
                    <button
                      onClick={handleEmailClick}
                      className="w-full text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Or just say hello at a3techstack@gmail.com
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-border/50"
        >
          <p className="text-muted-foreground">
            Remote • Working with clients worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}