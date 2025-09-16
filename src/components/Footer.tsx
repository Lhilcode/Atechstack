import { motion } from 'motion/react';
import { ArrowUp, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xl font-bold text-foreground">Atechstack</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Transforming real estate businesses with modern, high-performing websites 
                that convert visitors into clients.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/akorede-adaraloye-9720a6327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </a>
                <a
                  href="https://x.com/atechstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Services', href: '#services' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-2">
                <a
                  href="mailto:a3techstack@gmail.com"
                  className="block text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  a3techstack@gmail.com
                </a>
                <p className="text-muted-foreground text-sm">
                  Available for new projects
                </p>
                <p className="text-muted-foreground text-sm">
                  Response within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Atechstack. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-muted-foreground">
                Designed for growth, built for real estate
              </span>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 w-8 h-8"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}