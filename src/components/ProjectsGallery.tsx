import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ProjectDetail from "./ProjectDetail";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "visualization" | "analysis" | "dashboard";
  image: string;
  tools: string[];
}

interface ProjectsGalleryProps {
  projects?: Project[];
}

const ProjectsGallery = ({
  projects = defaultProjects,
}: ProjectsGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const closeProjectDetail = () => {
    setIsDetailOpen(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore My Projects in Data Analysis — From Dashboards and EDA to
            Statistical Insights and Predictive Models.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mx-auto">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
          </TabsList>

          {["all", "visualization", "analysis", "dashboard"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter(
                    (project) =>
                      category === "all" || project.category === category,
                  )
                  .map((project) => (
                    <motion.div key={project.id} variants={item}>
                      <Card
                        className="overflow-hidden h-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        onClick={() => openProjectDetail(project)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">
                              {project.category}
                            </Badge>
                            {project.tools.slice(0, 2).map((tool) => (
                              <Badge key={tool} variant="outline">
                                {tool}
                              </Badge>
                            ))}
                            {project.tools.length > 2 && (
                              <Badge variant="outline">
                                +{project.tools.length - 2}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          isOpen={isDetailOpen}
          onClose={closeProjectDetail}
        />
      )}
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Sales Dashboard",
    description:
      "Interactive dashboard visualizing sales trends, customer behavior, and product performance for an e-commerce platform.",
    category: "dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tools: ["Tableau", "SQL", "Excel"],
  },
  {
    id: "2",
    title: "Customer Segmentation Analysis",
    description:
      "In-depth analysis of customer segments using clustering algorithms to identify key customer groups and their behaviors.",
    category: "analysis",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    id: "3",
    title: "Global Supply Chain Visualization",
    description:
      "Interactive visualization of global supply chain networks, highlighting bottlenecks and optimization opportunities.",
    category: "visualization",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    tools: ["D3.js", "JavaScript", "GeoJSON"],
  },
  {
    id: "4",
    title: "Predictive Maintenance Model",
    description:
      "Machine learning model to predict equipment failures before they occur, reducing downtime and maintenance costs.",
    category: "analysis",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    tools: ["Python", "TensorFlow", "Time Series Analysis"],
  },
  {
    id: "5",
    title: "Marketing Campaign Performance",
    description:
      "Comprehensive dashboard tracking marketing campaign performance across multiple channels and customer segments.",
    category: "dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tools: ["Power BI", "Google Analytics", "R"],
  },
  {
    id: "6",
    title: "Social Media Sentiment Analysis",
    description:
      "Real-time analysis of social media sentiment for brand monitoring and reputation management.",
    category: "visualization",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    tools: ["Python", "NLTK", "Plotly", "Twitter API"],
  },
];

export default ProjectsGallery;
