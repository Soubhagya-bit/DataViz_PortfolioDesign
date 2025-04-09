import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  UserIcon,
  FolderIcon,
  WrenchIcon,
  InfoIcon,
  MailIcon,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

const HeroSection = ({
  name = "Soubhagya Swain",
  title = "Data Analyst & Visualization Expert",
  bio = "I Turn Complex Data Into Clear, Actionable Insights Through Statistical Analysis, Compelling Visualizations, And Predictive Modeling — With Just Enough Magic To Make You Wonder If I Time-Traveled To Get The Answers.",
}: HeroSectionProps) => {
  // Sample education data
  const educationData: Education[] = [
    {
      degree: "Master of Science in Data Analytics",
      institution: "University of Data Science",
      year: "2018-2020",
      description:
        "Specialized in statistical modeling and data visualization techniques. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      year: "2014-2018",
      description: "Focus on algorithms and database management systems.",
    },
  ];

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background">
      {/* Hero Section */}
      <div id="profile" className="container max-w-5xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">{bio}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowDownIcon size={16} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] w-full"
          >
            <DataVisualization />
          </motion.div>
        </div>
      </div>

      {/* Projects Section Placeholder */}
      <div id="projects" className="container max-w-5xl mx-auto mt-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <FolderIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Projects / Portfolio
            </h2>
          </div>
          <p className="text-muted-foreground">
            Projects will be displayed here from the ProjectsGallery component.
          </p>
        </motion.div>
      </div>

      {/* Skills Section Placeholder */}
      <div id="skills" className="container max-w-5xl mx-auto mt-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <WrenchIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Skills / Tools</h2>
          </div>
          <p className="text-muted-foreground">
            Skills will be displayed here from the SkillsSection component.
          </p>
        </motion.div>
      </div>

      {/* Education Section */}
      <div id="education" className="container max-w-5xl mx-auto mt-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <GraduationCapIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded inline-block">
                    {edu.year}
                  </span>
                </div>
                {edu.description && (
                  <p className="mt-3 text-muted-foreground">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications Section */}
      <div
        id="certifications"
        className="container max-w-5xl mx-auto mt-24 pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <AwardIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Certifications & Achievements
            </h2>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border rounded-lg p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-semibold text-lg">
                    Certified Data Analyst
                  </h3>
                  <p className="text-muted-foreground">
                    Data Science Association
                  </p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded inline-block">
                  2021
                </span>
              </div>
              <p className="mt-3 text-muted-foreground">
                Professional certification in data analysis and visualization
                techniques.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Me Section */}
      <div id="about" className="container max-w-5xl mx-auto mt-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <InfoIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <p className="text-muted-foreground">
              I'm a passionate data analyst with over 5 years of experience
              transforming complex datasets into actionable insights. My
              approach combines technical expertise with creative
              problem-solving to deliver clear, impactful data visualizations
              and analysis that drive business decisions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="container max-w-5xl mx-auto mt-24 pt-10 mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <MailIcon size={24} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <p className="text-muted-foreground mb-4">
              Interested in working together? Feel free to reach out through any
              of the channels below.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <MailIcon size={16} />
                contact@example.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownIcon size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const DataVisualization = () => {
  // This is a simple animated data visualization component
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg"></div>

      {/* Animated circles representing data points */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          initial={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0.3,
          }}
          animate={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
          }}
        />
      ))}

      {/* Animated lines connecting data points */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.path
            key={i}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary/20"
            initial={{
              pathLength: 0,
              opacity: 0.2,
            }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            d={`M${Math.random() * 400},${Math.random() * 400} Q${Math.random() * 400},${Math.random() * 400} ${Math.random() * 400},${Math.random() * 400}`}
          />
        ))}
      </svg>

      {/* Central visualization element */}
      <motion.div
        className="relative z-10 w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
