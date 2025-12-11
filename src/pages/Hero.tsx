import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden page-gradient">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2">I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text font-sans mx-0 my-0 whitespace-nowrap py-[2px]">Sania Mactelin A P</h1>
              <h3 className="text-2xl md:text-3xl gradient-text font-display font-semibold">
                Undergraduate Student 
              </h3>
            </motion.div>

            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="text-lg text-muted-foreground max-w-lg">
              A dedicated Computer Science student with a strong interest in web development, AI, and modern software technologies. I enjoy building meaningful projects, exploring new tools, and continuously improving my technical and problem solving skills.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border group">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/resume">
                <Button size="lg" variant="outline" className="glass-effect hover:glow-border group">
                  <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Overview
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 1.1
          }} className="flex gap-4 pt-6">
              {[{
              icon: Github,
              href: "https://github.com/saniamactelinap",
              label: "GitHub"
            }, {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/sania-mactelin-a-p-40a5a3321/",
              label: "LinkedIn"
            }, {
              icon: Mail,
              href: "#",
              label: "Email"
            }].map((social, index) => {
              const Icon = social.icon;
              return <motion.a key={social.label} href={social.href} whileHover={{
                scale: 1.1,
                y: -5
              }} whileTap={{
                scale: 0.95
              }} className="p-3 rounded-full glass-effect hover:glow-border transition-all duration-300" aria-label={social.label}>
                    <Icon size={24} className="text-primary" />
                  </motion.a>;
            })}
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.5
        }} className="h-[400px] md:h-[600px] relative">
            
            
            {/* Floating Bot Icon */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2
          }} className="absolute top-8 right-8 p-3 rounded-xl glass-effect glow-border">
              <motion.div animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5,
      repeat: Infinity,
      repeatType: "reverse"
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>;
};
export default Hero;