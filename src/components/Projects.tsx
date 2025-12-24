import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Brain, Globe, Code, Briefcase } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projectCategories = {
  featured: {
    label: "Featured",
    icon: Globe,
    projects: [
      {
        title: "ResumeWell",
        description: "A secure platform for students to upload, manage, and store resumes online. Features PDF/Word upload, download, delete, and real-time notifications. Deployed on Vercel for global access.",
        tech: ["React", "CSS", "Python", "SQL"],
        icon: "",
        githubUrl: "https://github.com/Anish974/ResumeWell",
        liveUrl: "https://resumewell.vercel.app/",
        image: "/assets/resumewell.png"
      },
      {
        title: "Orange Counter",
        description: "Real-time Orange Detection System using fine-tuned YOLOv8 on a custom dataset. Features responsive web interface with drag-and-drop upload, live camera capture, dark mode, and Flask-based detection API.",
        tech: ["Python", "Flask","Machine Learning","YOLOv8", "OpenCV", "HTML", "CSS", "JS"],
        icon: "🍊",
        githubUrl: "https://github.com/Anish974/Orange-Counter",
        image: "/assets/orangecount.png"
      },
      {
        title: "StickToon E-Commerce",
        description: "Fully responsive e-commerce frontend for a sticker brand. Built complete UI from scratch with modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: "",
        // githubUrl: "https://github.com/Anish974",
        liveUrl: "https://sticktoon.netlify.app/",
        image: "/assets/sticktoon.png"
      }
    ]
  },
  ml: {
    label: "Python / ML",
    icon: Brain,
    projects: [
      {
        title: "Orange Counter",
        description: "Real-time Orange Detection System using fine-tuned YOLOv8 on a custom dataset. Features responsive web interface with drag-and-drop upload, live camera capture, dark mode, and Flask-based detection API.",
        tech: ["Python", "Flask", "YOLOv8", "OpenCV", "HTML", "CSS", "JS"],
        icon: "🍊",
        githubUrl: "https://github.com/Anish974/Orange-Counter",
        image: "/assets/orangecount.png"
      }
    ]
  },
  webdev: {
    label: "Web Development",
    icon: Globe,
    projects: [
      {
        title: "ResumeWell",
        description: "A secure platform for students to upload, manage, and store resumes online. Features PDF/Word upload, download, delete, and real-time notifications. Deployed on Vercel for global access.",
        tech: ["React", "CSS", "Python", "SQL"],
        icon: "",
        githubUrl: "https://github.com/Anish974/ResumeWell",
        liveUrl: "https://resumewell.vercel.app/",
        image: "/assets/resumewell.png"
      },
      {
        title: "Portfolio Website",
        description: "Modern, responsive personal portfolio showcasing projects and skills with dark mode support and smooth animations.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        icon: "",
        githubUrl: "https://github.com/Anish974/anish-portfolio",
        liveUrl: "https://anishpatankar.vercel.app/",
        image: "/assets/Portfolio.png"
      }
    ]
  },
  freelance: {
    label: "Freelance Projects",
    icon: Briefcase,
    projects: [
      // {
      //   title: "Digital Literature Diary",
      //   description: "A digital diary and reading tracker with secure admin login, poem vault with write/edit/share capabilities, and clean minimal interface for reading milestones.",
      //   tech: ["React", "SQL", "CSS"],
      //   icon: "📚",
      //   githubUrl: "https://github.com/Anish974"
      // },
      {
        title: "StickToon E-Commerce",
        description: "Fully responsive e-commerce frontend for a sticker brand. Built complete UI from scratch with modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: "",
        // githubUrl: "https://github.com/Anish974",
        liveUrl: "https://sticktoon.netlify.app/",
        image: "/assets/sticktoon.png"
      }
    ]
  }
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="card-hover border-border h-full flex flex-col overflow-hidden group">
      {project.image ? (
        <div className="relative w-full bg-muted/50">
          {/* Image - visible by default */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover group-hover:opacity-0 transition-opacity duration-300"
          />
          {/* Details overlay - only subdetails on hover */}
          <div className="absolute inset-0 p-2 sm:p-3 md:p-4 lg:p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80">
            <CardDescription className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-4">
              {project.description}
            </CardDescription>
          </div>
        </div>
      ) : (
        <CardHeader className="pb-2 sm:pb-3">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">{project.icon}</div>
          <CardTitle className="text-base sm:text-lg md:text-xl">{project.title}</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
      )}
      {/* Title always visible below image when image exists */}
      {project.image && (
        <div className="px-2 sm:px-3 md:px-4 lg:px-6 pt-2 sm:pt-3">
          <CardTitle className="text-base sm:text-lg md:text-xl">{project.title}</CardTitle>
        </div>
      )}
      <CardContent className="space-y-2 sm:space-y-3 mt-auto px-2 sm:px-3 md:px-4 lg:px-6 pb-3 sm:pb-4">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-xs sm:text-sm py-0.5 sm:py-1">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-1.5 sm:gap-2 flex-col sm:flex-row">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:flex-1 group text-xs sm:text-sm py-2 sm:py-2.5 h-auto"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="truncate">Code</span>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="w-full sm:flex-1 group text-xs sm:text-sm py-2 sm:py-2.5 h-auto"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="truncate">Live</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            A selection of projects showcasing my expertise in machine learning, 
            web development, and building production-ready applications.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 sm:grid-cols-4 items-center gap-1 sm:gap-2 md:gap-3 bg-transparent p-0 mb-4 sm:mb-6">
            {Object.entries(projectCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 rounded-lg px-2 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-muted hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-colors duration-200">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(projectCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              {(() => {
                const isFeatured = key === "featured";
                const fewProjects = category.projects.length < 3;
                const containerClass = fewProjects
                  ? `${isFeatured ? 'flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8 max-w-7xl' : 'flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl'} mx-auto pt-4 sm:pt-0`
                  : `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 ${isFeatured ? 'max-w-7xl' : 'max-w-6xl'} mx-auto pt-4 sm:pt-0`;
                return (
                  <div className={containerClass}>
                    {category.projects.map((project, index) => {
                      const itemClass = category.projects.length === 1
                        ? (isFeatured ? 'w-full max-w-2xl' : 'w-full max-w-md')
                        : category.projects.length === 2
                          ? (isFeatured ? 'w-full sm:w-auto sm:max-w-lg' : 'w-full sm:w-auto sm:max-w-sm')
                          : 'w-full';
                      return (
                        <div key={index} className={itemClass}>
                          <ProjectCard project={project} />
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
