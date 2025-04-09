import React from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
}

const HeroSection = ({
  name = "Soubhagya Swain",
  title = "Data Analyst & Visualization Expert",
  bio = "I Turn Complex Data Into Clear, Actionable Insights Through Statistical Analysis, Compelling Visualizations, And Predictive Modeling — With Just Enough Magic To Make You Wonder If I Time-Traveled To Get The Answers.",
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background">
      <div className="container max-w-5xl mx-auto">
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
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
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
