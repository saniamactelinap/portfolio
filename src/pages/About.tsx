import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    year: "2024",
    title: "Undergraduate Student",
    company: "Easwari Engineering College",
    description: "Currently pursuing a B.E. in Computer Science Engineering (2024-2028). Building strong foundations in software engineering while exploring web development, AI/ML, data science, and automation.",
  },
  {
    year: "2024",
    title: "Building Projects",
    company: "Self Learning",
    description: "Developed multiple full stack applications including Student Management System, Smart Waste Segregation, and Machine Learning models.",
  },
  {
    year: "2025",
    title: "Mitbots Internship",
    company: "August 2025 - October 2025",
    description: "Web Developer Intern at Mitbots, working with React.js, HTML, CSS, and responsive web design principles.",
  },
  {
    year: "2025",
    title: "1M1B's AI for Sustainability Virtual Internship(AICTE & IBM SkillsBuild",
    company: "December 2025 - January 2026",
    description: "Worked on leveraging AI driven solutions for environmental sustainability, focusing on data analysis, automation, and improving resource efficiency.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const About = () => {
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
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A curious learner and passionate developer on a journey to craft meaningful digital experiences.          
          </p>
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="glass-effect p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Hey! I’m an undergraduate second year Computer Science Engineering student at Easwari Engineering College, driven by a deep passion for web development, AI, machine learning, UI/UX, and data driven technologies. What began as simple curiosity about how websites and digital systems work has grown into a full fledged commitment to building impactful, visually appealing, and user centric solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I love transforming ideas into functional experiences through code, exploring modern frameworks, and constantly upgrading my skillset. Whether it's frontend development, backend logic, or intelligent systems using AI/ML, I enjoy creating solutions that are both practical and innovative.
              </p>
              <p className="text-lg leading-relaxed">
                Outside academics, I actively participate in hackathons, internships, and tech communities, where I get to collaborate, solve problems, and learn by doing. I believe in challenging myself, stepping outside my comfort zone, and consistently pushing my boundaries to grow as a developer and an engineer.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center gradient-text">
            My Journey
          </h2>
          
          <div className="space-y-8">
            {timelineData.map((entry, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="glass-effect p-6 md:p-8 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full glass-effect flex items-center justify-center glow-border">
                        <span className="text-2xl font-display font-bold gradient-text">
                          {entry.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
                        {entry.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">{entry.company}</p>
                      <p className="text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
