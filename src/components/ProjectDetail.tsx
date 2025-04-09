import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDetailProps {
  project?: {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tools: string[];
    objectives: string[];
    methodology: string;
    findings: string[];
    conclusion: string;
    link?: string;
    downloadLink?: string;
  };
  onClose?: () => void;
  open?: boolean;
}

const ProjectDetail = ({
  project,
  onClose,
  open = true,
}: ProjectDetailProps) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Default project data if none is provided
  const defaultProject = {
    id: "1",
    title: "E-commerce Customer Behavior Analysis",
    description:
      "A comprehensive analysis of customer behavior patterns for an e-commerce platform, identifying key trends and providing actionable insights.",
    category: "Data Analysis",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tools: ["Python", "Pandas", "Matplotlib", "SQL", "Tableau"],
    objectives: [
      "Identify key customer segments based on purchasing behavior",
      "Analyze seasonal trends in product categories",
      "Determine factors influencing cart abandonment",
      "Provide recommendations for improving conversion rates",
    ],
    methodology:
      "This analysis utilized a combination of SQL queries for data extraction, Python for data cleaning and statistical analysis, and Tableau for visualization. The dataset included 12 months of customer transactions, browsing behavior, and demographic information.",
    findings: [
      "Identified 4 distinct customer segments with unique purchasing patterns",
      "Discovered 23% higher conversion rates for customers using mobile app vs website",
      "Found significant seasonal variations in electronics and apparel categories",
      "Cart abandonment rates peaked during checkout when shipping costs were revealed",
    ],
    conclusion:
      "The analysis revealed several opportunities for improving customer engagement and conversion rates. By implementing targeted marketing strategies for identified customer segments and addressing key pain points in the checkout process, the client could potentially increase conversion rates by 15-20%.",
    link: "https://example.com/project",
    downloadLink: "/files/project-report.pdf",
  };

  const currentProject = project || defaultProject;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Dialog open={open} onOpenChange={() => onClose && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute left-4 top-4"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-2xl font-bold text-center mx-auto">
              {currentProject.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="mb-2">
                {currentProject.category}
              </Badge>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.tools.map((tool, index) => (
              <Badge key={index} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex space-x-4 mb-6 border-b">
              <Button
                variant={activeSection === "overview" ? "default" : "ghost"}
                onClick={() => setActiveSection("overview")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
                data-state={
                  activeSection === "overview" ? "active" : "inactive"
                }
              >
                Overview
              </Button>
              <Button
                variant={activeSection === "methodology" ? "default" : "ghost"}
                onClick={() => setActiveSection("methodology")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
                data-state={
                  activeSection === "methodology" ? "active" : "inactive"
                }
              >
                Methodology
              </Button>
              <Button
                variant={activeSection === "findings" ? "default" : "ghost"}
                onClick={() => setActiveSection("findings")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
                data-state={
                  activeSection === "findings" ? "active" : "inactive"
                }
              >
                Findings
              </Button>
              <Button
                variant={activeSection === "conclusion" ? "default" : "ghost"}
                onClick={() => setActiveSection("conclusion")}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
                data-state={
                  activeSection === "conclusion" ? "active" : "inactive"
                }
              >
                Conclusion
              </Button>
            </div>

            {activeSection === "overview" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="space-y-4"
              >
                <p className="text-muted-foreground">
                  {currentProject.description}
                </p>

                <h3 className="text-lg font-semibold mt-6">Objectives</h3>
                <motion.ul
                  variants={staggerContainer}
                  className="list-disc pl-5 space-y-2"
                >
                  {currentProject.objectives.map((objective, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      {objective}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            {activeSection === "methodology" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <p className="text-muted-foreground">
                  {currentProject.methodology}
                </p>
              </motion.div>
            )}

            {activeSection === "findings" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.ul
                  variants={staggerContainer}
                  className="list-disc pl-5 space-y-2"
                >
                  {currentProject.findings.map((finding, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      {finding}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            {activeSection === "conclusion" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <p className="text-muted-foreground">
                  {currentProject.conclusion}
                </p>
              </motion.div>
            )}
          </div>

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-4 justify-center">
            {currentProject.link && (
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </Button>
            )}
            {currentProject.downloadLink && (
              <Button variant="outline" className="gap-2" asChild>
                <a href={currentProject.downloadLink} download>
                  <Download className="h-4 w-4" />
                  Download Report
                </a>
              </Button>
            )}
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
