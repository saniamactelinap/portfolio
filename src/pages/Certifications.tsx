import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Award, ExternalLink } from "lucide-react";
import unstopImg from "@/img/Unstop.jpg";
import generativeAIImg from "@/img/Introduction_to_Generative_AI_Studio.jpg";
import bharatiyaHackathonImg from "@/img/Bharatiya_Antariksh_Hackathon_2025.jpg";
import mongodbBasicsImg from "@/img/MongoDB_Basics_for_Students.jpg";
import ciscoCyberImg from "@/img/Introduction_to_Cybersecurity.jpeg";
import ciscoDataImg from "@/img/Introduction_to_Data_Science.jpeg";
import forageImg from "@/img/Operations_Job_Simulation.jpeg";
import networkingBasicsImg from "@/img/Networking_Basics.jpeg";
import guviImg from "@/img/Unlock_the_roadmap_to_the_hottest_jobs_of_2025.jpg";
import pythonEssentialsImg from "@/img/Python_Essentials_I.jpeg";
import aiProductivityImg from "@/img/AI_Productivity_Hacks.jpg";
import leedsPythonImg from "@/img/An_Introduction_to_Programming_using_PYTHON.jpeg";
import infosysPythonImg from "@/img/Basics_of_Python.jpeg";
import microsoftDevImg from "@/img/Career_Essentials_in_Software_Development.jpeg";
import accentureAIImg from "@/img/DIGITAL_SKILLS_ARTIFICIAL_INTELLIGENCE.jpeg";
import greatLearningImg from "@/img/Front_End_Development_HTML.jpeg";
import hpLifeDSImg from "@/img/HP_LIFE_Data_Science_Analytics.jpeg";
import hpLifeCyberImg from "@/img/Introduction_to_Cybersecurity_Awareness.jpeg";
import nptelImg from "@/img/NPTEL.jpeg";
import mongodb1Img from "@/img/MONGODB1.jpg";
import kratos from "@/img/kratos.jpeg";
import idl from "@/img/idl.jpeg";
import adobe from "@/img/adobe.jpeg";


export const certificationsData = [
  {
    title: "The October Conclave: Codeclash",
    issuer: "Unstop",
    date: "Oct 2025",
    image: unstopImg,
    verifyUrl: "https://unstop.com/certificate-preview/5fc43183-8bb5-4d72-9dd0-b332800cd3e6",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2025",
    image: generativeAIImg,
    verifyUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODU4ODkyOV84NzkyMDg0MTc1MTkzNzY4MDA3OS5wbmciLCJ1c2VybmFtZSI6IlNhbmlhIE1hY3RlbGluIEEgUCAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8588929_87920841751937680079.png&_branch_match_id=1396732829556805053&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1i8oM0%2F0d8wz9Q9Nsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwD1CmdsPwAAAA%3D%3D",
  },
  {
    title: "Bharatiya Antariksh Hackathon",
    issuer: "ISRO - Indian Space Research Organization",
    date: "Jun 2025",
    image: bharatiyaHackathonImg,
    verifyUrl: "#",
  },
  {
    title: "Building AI Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    date: "Jun 2025",
    image: mongodb1Img,
    verifyUrl: "https://www.credly.com/badges/9e2f20e9-4024-4277-bdcb-ce3734ff4012/print",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "Jun 2025",
    image: mongodbBasicsImg,
    verifyUrl: "https://www.credly.com/badges/2cdd56a2-a2ba-4cf1-bfd6-8cba2d385e0f/print",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "May 2025",
    image: ciscoCyberImg,
    verifyUrl: "https://www.credly.com/badges/aea0289d-6b07-495c-8970-cf9f0708314f/public_url",
  },
  {
    title: "Adobe India Hackathon",
    issuer: "Adobe",
    date: "Oct 2025",
    image: adobe,
    verifyUrl: "#",
  },
  {
    title: "IDL Debate Hackathon 2025",
    issuer: "Agentix, IIT Delhi",
    date: "July 2025",
    image: idl,
    verifyUrl: "#",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "May 2025",
    image: ciscoDataImg,
    verifyUrl: "https://www.credly.com/badges/9a52d99c-a4a4-469f-bf8b-e3ab6ff6e004/public_url",
  },
  {
    title: "Goldman Sachs - Operations Job Simulation",
    issuer: "Forage",
    date: "Dec 2024",
    image: forageImg,
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_xaDHjN2d4kivzZd4h_1735027765332_completion_certificate.pdf",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Dec 2024",
    image: networkingBasicsImg,
    verifyUrl: "https://www.credly.com/badges/97e49c68-518d-48df-8a09-b02353f2e604/public_url",
  },
  {
    title: "Unlock the roadmap to the hottest jobs of 2025",
    issuer: "HCL GUVI",
    date: "Dec 2024",
    image: guviImg,
    verifyUrl: "#",
  },
  {
    title: "Python Essentials I",
    issuer: "Cisco Networking Academy",
    date: "Oct 2024",
    image: pythonEssentialsImg,
    verifyUrl: "https://www.credly.com/badges/08357b82-8efd-4c54-a475-349fc831752c/public_url",
  },
  {
    title: "AI Productivity Hacks to Reimagine Your Workday and Career",
    issuer: "LinkedIn / Project Management Institute",
    date: "Aug 2024",
    image: aiProductivityImg,
    verifyUrl: "https://www.linkedin.com/learning/certificates/1add105381c68fc771d98a2240176a604eaa3d42025a27eac25f0d7314bd5712",
  },
  {
    title: "An Introduction to Programming using PYTHON",
    issuer: "University of Leeds",
    date: "Aug 2024",
    image: leedsPythonImg,
    verifyUrl: "https://www.futurelearn.com/certificates/b2b1c9h",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    image: infosysPythonImg,
    verifyUrl: "#",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    date: "Aug 2024",
    image: microsoftDevImg,
    verifyUrl: "https://www.linkedin.com/learning/certificates/ec323f6765e3885827f2ef054c16a72f1b3de6547a1cf4ea59ceff06d7345ae1",
  },
  {
    title: "DIGITAL SKILLS: ARTIFICIAL INTELLIGENCE",
    issuer: "Accenture",
    date: "Aug 2024",
    image: accentureAIImg,
    verifyUrl: "https://www.futurelearn.com/certificates/j5oyl86",
  },
  {
    title: "Front End Development - HTML",
    issuer: "Great Learning",
    date: "Aug 2024",
    image: greatLearningImg,
    verifyUrl: "#",
  },
  {
    title: "HP LIFE: Data Science & Analytics",
    issuer: "HP LIFE",
    date: "Aug 2024",
    image: hpLifeDSImg,
    verifyUrl: "#",
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE",
    date: "Aug 2024",
    image: hpLifeCyberImg,
    verifyUrl: "#",
  },
  {
    title: "Project Expo",
    issuer: "KRATOS'25",
    date: "Oct 2025",
    image: kratos,
    verifyUrl: "#",
  },
  {
    title: "NPTEL – Privacy & Security in Online Social Media (Elite+Silver)",
    issuer: "NPTEL / IIT",
    date: "2025",
    image: nptelImg,
    verifyUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S67520193110816500.pdf",
  },
  {
    title: "Building AI Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    date: "2025",
    image: mongodb1Img,
    verifyUrl: "https://www.credly.com/badges/9e2f20e9-4024-4277-bdcb-ce3734ff4012",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

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
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCert(index)}
              className="cursor-pointer"
            >
              <Card className="glass-effect overflow-hidden h-full hover:glow-border transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <Badge className="mb-3 glass-effect">{cert.date}</Badge>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <Card className="glass-effect overflow-hidden glow-border">
                <div className="relative max-h-[300px] overflow-hidden">
                  <img
                    src={certificationsData[selectedCert].image}
                    alt={certificationsData[selectedCert].title}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 glass-effect"
                    onClick={() => setSelectedCert(null)}
                  >
                    <X size={24} />
                  </Button>
                </div>
                
                <div className="p-8">
                  <Badge className="mb-4 glass-effect">
                    {certificationsData[selectedCert].date}
                  </Badge>
                  <h2 className="text-3xl font-display font-bold mb-4 gradient-text">
                    {certificationsData[selectedCert].title}
                  </h2>
                  <p className="text-xl text-primary font-medium mb-6">
                    {certificationsData[selectedCert].issuer}
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
                    onClick={() => window.open(certificationsData[selectedCert].verifyUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Verify Credential
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
