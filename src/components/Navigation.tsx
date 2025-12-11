import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { Home, User, FileText, Briefcase, Award, Code, Trophy, Mail } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: User, label: "About" },
  { to: "/resume", icon: FileText, label: "Overview" },
  { to: "/projects", icon: Briefcase, label: "Projects" },
  { to: "/certifications", icon: Award, label: "Certifications" },
  { to: "/skills", icon: Code, label: "Skills" },
  { to: "/achievements", icon: Trophy, label: "Achievements" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold gradient-text"
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  activeClassName="text-foreground bg-primary/10 glow-border"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile menu button - you can expand this later */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg glass-effect"
            >
              <Code size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
