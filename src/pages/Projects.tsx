import { motion } from "framer-motion";
import { useState } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import studentmanage from "@/img/student.jpeg"
import kmrl from "@/img/kmrl.jpeg"
import debate from "@/img/debate.jpeg"



const projectsData = [
  {
    title: "Student Management System",
    description: "A full stack student management system to manage students, attendance, and academics efficiently.",
    tech: ["React.js", "Java", "MySQL", "REST APIs","Typescript"],
    image: studentmanage,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "RADAR Using Ultrasonic Sensor",
    description: "A sensor based RADAR prototype for detecting obstacles and measuring distance in real time.",
    tech: ["Arduino", "Ultrasonic Sensor", "Embedded C", "Processing"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Spam & Ham Detection (ML)",
    description: "A machine learning model that classifies emails as spam or ham using NLP processing.",
    tech: ["Python", "Scikit Learn", "NLP", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Waste Segregation System",
    description: "An AI powered system that identifies and classifies waste for smart automated segregation.",
    tech: ["Sensors", "Arduino", "Python", "Automation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Document Management System",
    description: "An intelligent document system with automated classification and OCR, built for KMRL.",
    tech: ["ML", "Firebase", "React.js", "OCR", "Python"],
    image: kmrl,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Debate Learning Website",
    description: "A simple interactive website designed to help users learn and practice debate skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: debate,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-effect overflow-hidden h-full hover:glow-border transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 gradient-text">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="glass-effect"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-effect hover:glow-border"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
