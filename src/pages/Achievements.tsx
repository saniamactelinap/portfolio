import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

const achievementsData = [
  {
    year: "2025",
    title: "Project Expo Runner Up",
    event:"KRATOS'25",
    description: "Developed a Smart Document Management System aligned with KMRL’s requirements",
    award: "2nd Place",
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    year: "2025",
    title: "PRIDE Hackathon 2025",
    event: "Shortlisted as Top Team",
    description: "Developed a conceptual solution for Smart Riverwater and Flood Control Management System, Integrating environmental monitoring and flood mitigation strategies.",
    award: "Participant",
    icon: Star,
    color: "text-purple-400",
  },
  {
    year: "2025",
    title: "BlockDAG Hackathon 2025",
    event: "Reached to the Finals",
    description: "Proposed a solution and developed a Blockchain based Voting System.",
    award: "Participant",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    year: "2023",
    title: "IDL Hackathon 2025",
    event: "Agentix , IIT Delhi",
    description: "Built a Debate Learning Platform - interactive web application for learning debate techniques.",
    award: "Participant",
    icon: Award,
    color: "text-green-400",
  },
  {
    year: "2022",
    title: "Bharatiya Antariksh Hackathon 2025",
    event: "ISRO",
    description: "Proposed a solution of AI/ML driven automated feature detection and change analysis of glacial lakes, road networks and urban drainage systems from multi source satellite imagery.",
    award: "Winner",
    icon: Trophy,
    color: "text-yellow-400",
  },
];

const Achievements = () => {
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
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hackathons, awards, and milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-effect flex items-center justify-center glow-border z-10">
                    <Icon className={`${achievement.color}`} size={32} />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? "md:pr-16" : "md:pl-16"} pl-24 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="glass-effect p-6 md:p-8 hover:glow-border transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className="glass-effect text-lg px-4 py-1">
                            {achievement.year}
                          </Badge>
                          <Badge variant="secondary" className="glass-effect">
                            {achievement.award}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-primary font-medium mb-4">
                          {achievement.event}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: "Hackathons", value: "5+" },
            { label: "Courses", value: "15+" },
            { label: "Projects", value: "5+" },
            { label: "Contributions", value: "10+" },
          ].map((stat, index) => (
            <Card key={index} className="glass-effect p-6 text-center hover:glow-border transition-all">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
