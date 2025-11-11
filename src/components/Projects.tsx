import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
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
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive personal portfolio showcasing projects and skills with dark mode support and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    icon: "💼",
    githubUrl: "https://github.com/Anish974"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in backend development, 
            machine learning integration, and building production-ready applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border">
              <CardHeader>
                <div className="text-5xl mb-4">{project.icon}</div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
