import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const stats = [
    { label: "CGPA", value: "9.35" },
    { label: "Problems Solved", value: "300+" },
    { label: "Projects Built", value: "5+" },
    { label: "Technologies Learned", value: "10+" },
    { label: "Internships & Hackathons", value: "3+" },
  ];

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
            Overview
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my skills, projects, certifications, and technical growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="glass-effect p-6 text-center hover:glow-border transition-all">
                <div className="text-3xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
