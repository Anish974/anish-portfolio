import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Brain, Globe, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projectCategories = {
  ml: {
    label: "Python / ML",
    icon: Brain,
    projects: [
      {
        title: "Orange Counter",
        description: "Real-time Orange Detection System using fine-tuned YOLOv8 on a custom dataset. Features responsive web interface with drag-and-drop upload, live camera capture, dark mode, and Flask-based detection API.",
        tech: ["Python", "Flask", "YOLOv8", "OpenCV", "HTML", "CSS", "JS"],
        icon: "🍊",
        githubUrl: "https://github.com/Anish974"
      },
      {
        title: "AI Chat Web App",
        description: "An intelligent conversational interface powered by NLP and Transformer models, delivering context-aware responses in real-time.",
        tech: ["Flask", "Python", "NLP", "Transformers", "REST API"],
        icon: "🤖",
        githubUrl: "https://github.com/Anish974"
      },
      {
        title: "Movie Recommender",
        description: "Collaborative filtering system that provides personalized movie recommendations based on user preferences and viewing history.",
        tech: ["Django", "Python", "scikit-learn", "ML", "PostgreSQL"],
        icon: "🎬",
        githubUrl: "https://github.com/Anish974"
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
        icon: "📄",
        githubUrl: "https://github.com/Anish974"
      },
      {
        title: "Digital Literature Diary",
        description: "Freelance project - A digital diary and reading tracker with secure admin login, poem vault with write/edit/share capabilities, and clean minimal interface for reading milestones.",
        tech: ["React", "SQL", "CSS"],
        icon: "📚",
        githubUrl: "https://github.com/Anish974"
      },
      {
        title: "StickToon E-Commerce",
        description: "Fully responsive e-commerce frontend for a sticker brand. Built complete UI from scratch with modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: "🛒",
        githubUrl: "https://github.com/Anish974"
      },
      {
        title: "Portfolio Website",
        description: "Modern, responsive personal portfolio showcasing projects and skills with dark mode support and smooth animations.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        icon: "💼",
        githubUrl: "https://github.com/Anish974"
      }
    ]
  },
  backend: {
    label: "Backend / DevOps",
    icon: Code,
    projects: [
      {
        title: "UTMS Server Infrastructure",
        description: "Developed personal server infrastructure from old PC using Ubuntu, Nginx, Flask, and Cloudflare Tunnel. Contributed to UTMS for drone tracking in Indian airspace.",
        tech: ["Ubuntu", "Nginx", "Flask", "Cloudflare Tunnel", "Python"],
        icon: "🖥️",
        githubUrl: "https://github.com/Anish974"
      }
    ]
  }
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="card-hover border-border h-full flex flex-col">
      <CardHeader>
        <div className="text-5xl mb-4">{project.icon}</div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 group"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
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
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in machine learning, 
            web development, and building production-ready applications.
          </p>
        </div>

        <Tabs defaultValue="ml" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
            {Object.entries(projectCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(projectCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
