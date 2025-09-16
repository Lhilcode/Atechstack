import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
}

export function Hero({ onRequestDemo }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background to-gray-800"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Available for new projects
          </motion.div>

          {/* Main Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Modern Real Estate</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Websites
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-semibold mb-4">
              Vue & React Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            I build fast, responsive, and conversion-focused real estate websites with property filters, 
            listing grids, and mobile-first design.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={onRequestDemo}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold group shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Request a Free Demo Concept
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-muted-foreground">Real Estate Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-32 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"
      ></motion.div>
    </section>
  );
}