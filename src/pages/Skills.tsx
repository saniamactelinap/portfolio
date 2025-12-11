import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";

const skillsData = [
  { name: "React / Next.js", level: 75, category: "Frontend" },
  { name: "HTML / CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Java", level: 90, category: "Backend" },
  { name: "MySQL", level: 87, category: "Backend" },
  { name: "AWS / Cloud", level: 80, category: "DevOps" },
  { name: "Git & GitHub", level: 85, category: "DevOps" },
  { name: "CI/CD", level: 78, category: "DevOps" },
  { name: "Python", level: 75, category: "AI/ML" },
  { name: "Machine Learning Basics", level: 90, category: "AI/ML" },
];

const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

const Skills = () => {
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
            Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 gradient-text">
                {category}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="glass-effect p-6 hover:glow-border transition-all duration-300">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        
                        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{
                              boxShadow: "0 0 20px hsl(var(--glow) / 0.5)",
                            }}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Skill Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="glass-effect p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold mb-12 text-center gradient-text">
              Expertise Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Frontend", percent: 92 },
                { label: "Backend", percent: 85 },
                { label: "DevOps", level: 80 },
                { label: "AI/ML", percent: 72 },
              ].map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 352 }}
                        animate={{ strokeDashoffset: 352 - (352 * area.percent) / 100 }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                        style={{
                          strokeDasharray: 352,
                          filter: "drop-shadow(0 0 8px hsl(var(--glow)))",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold gradient-text">
                        {area.percent}%
                      </span>
                    </div>
                  </div>
                  <p className="font-semibold text-lg">{area.label}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
