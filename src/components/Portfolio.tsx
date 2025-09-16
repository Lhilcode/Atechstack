import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "PrimeLux Estates Redesign",
      problem: "Outdated layout with poor mobile experience",
      solution: "Modern responsive design with intuitive property filters",
      result: "300% increase in mobile engagement and 45% more inquiries",
      image: "https://images.unsplash.com/photo-1753012520514-2365262cc4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NTgwMjY1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Metro Property Hub",
      problem: "Cluttered listing layout difficult to navigate",
      solution: "Clean, filtered grid with advanced search functionality",
      result: "Users find properties 60% faster, 35% increase in viewings",
      image: "https://images.unsplash.com/photo-1652676345302-3cc0acc4195b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGxpc3RpbmclMjB3ZWJzaXRlfGVufDF8fHx8MTc1ODAyNjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: 3,
      title: "Elite Realty",
      problem: "No mobile presence for on-the-go agents",
      solution: "Progressive web app with offline property browsing",
      result: "Agents close deals 25% faster with mobile accessibility",
      image: "https://images.unsplash.com/photo-1599723331688-cc62e87a8100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwdWl8ZW58MXx8fHwxNzU4MDI2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Coastal Properties Portal",
      problem: "Low conversion rates from website visitors",
      solution: "Strategic lead capture forms and compelling CTAs",
      result: "Conversion rate improved from 2% to 8.5%",
      image: "https://images.unsplash.com/photo-1736232249544-0b9008cf623f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1ODAyNjU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "PHP", "PostgreSQL"]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real estate websites that drive results through modern design and smart functionality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-semibold text-red-400 shrink-0">Problem:</span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-semibold text-blue-400 shrink-0">Solution:</span>
                      <span className="text-muted-foreground">{project.solution}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-semibold text-green-400 shrink-0">Result:</span>
                      <span className="text-muted-foreground">{project.result}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group"
          >
            See more projects & discuss your idea
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}