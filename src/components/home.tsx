import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div className="text-xl font-semibold" variants={slideUp}>
            Data<span className="text-primary">Analyst</span>
          </motion.div>
          <motion.nav className="hidden md:flex space-x-6" variants={slideUp}>
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </motion.nav>
          <motion.div variants={slideUp}>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {" "}
        {/* Add padding to account for fixed header */}
        {/* Hero Section */}
        <section id="hero" className="py-20">
          <HeroSection />
        </section>
        {/* Projects Gallery */}
        <section id="projects" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my data analysis projects showcasing visualization,
                insights, and dashboard creation.
              </p>
            </motion.div>
            <ProjectsGallery />
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technical proficiencies and tools I use to transform data into
                actionable insights.
              </p>
            </motion.div>
            <SkillsSection />
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss data analysis
                opportunities? Reach out to me.
              </p>
            </motion.div>

            <motion.div
              className="max-w-md mx-auto bg-card rounded-xl shadow-sm border p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>

              <div className="mt-8">
                <Separator className="my-4" />
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Data Analyst Portfolio. All rights
            reserved.
          </p>
          <p className="mt-2">
            Designed with minimalism and smooth animations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
