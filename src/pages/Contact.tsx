import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/saniamactelinap",
    username: "saniamactelinap",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sania-mactelin-a-p-40a5a3321/",
    username: "sania-mactelin-a-p",
    color: "hover:text-blue-400",
  },
  
];

const Contact = () => {
  return (
    <div className="relative min-h-screen py-20 page-gradient">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 glow-text">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Social Links Grid */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="block group"
                >
                  <Card className="glass-effect p-8 hover:glow-border transition-all duration-300">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                        />
                        <div className="relative w-16 h-16 rounded-full glass-effect flex items-center justify-center">
                          <Icon size={32} className={`text-primary transition-colors ${social.color}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold mb-1">
                          {social.label}
                        </h3>
                        <p className="text-muted-foreground font-mono text-sm">
                          {social.username}
                        </p>
                      </div>

                      <Send className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-effect p-8 md:p-12 text-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center glow-border"
              >
                <Mail size={40} className="text-primary" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                Ready to Work Together?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the channels above!
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/sania-mactelin-a-p-40a5a3321/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold glow-border inline-flex items-center gap-2"
                >
                  <Mail size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">

                </p>
              </div>
            </Card>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className="text-lg italic text-muted-foreground">
              Great software isn't built by chance, it's built by curiosity, consistency, and clean code.
            </p>
            <p className="text-sm text-primary mt-2">— Let's create together</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
