import { motion } from 'motion/react';
import { Code, Zap, Users, Award } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Vue.js', level: 95 },
    { name: 'React', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Performance Optimization', level: 90 }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Modern Technologies",
      description: "Vue.js, React, and cutting-edge web technologies"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Lightning-fast loading times and optimized user experience"
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Understanding real estate business needs and goals"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Consistent delivery of high-converting websites"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                About Me
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-blue-400 font-semibold">Akorede</span>, a frontend developer 
                  passionate about turning outdated real estate websites into modern, high-performing platforms.
                </p>
                
                <p>
                  I specialize in <span className="text-foreground font-medium">HTML, CSS, JavaScript, Vue & React</span>, 
                  creating elegant, responsive designs that help brokerages and firms stand out online.
                </p>
                
                <p>
                  My focus is on building websites that don't just look great, but actually convert visitors 
                  into clients through strategic design and seamless user experiences.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-card/30 border border-border/30"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}