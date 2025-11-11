import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend & APIs",
    skills: ["Python", "Django", "Flask", "REST APIs", "Docker"],
    icon: "⚙️"
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "Tailwind"],
    icon: "🎨"
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "NLP", "Data Analysis"],
    icon: "🧠"
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
    icon: "🛠️"
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specializing in backend development, clean code practices, RESTful API design, 
            and machine learning integration for intelligent web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
