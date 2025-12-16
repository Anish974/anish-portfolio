import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Intern",
    company: "BERAM Pvt. Ltd.",
    location: "Nagpur",
    period: "June 2025",
    description: [
      "Developed a personal server from an old PC using Ubuntu, Nginx, Flask, and Cloudflare Tunnel.",
      "Implemented enhancements to the official BERAM Pvt. Ltd. website.",
      "Contributed to building a UTMS (Unmanned Traffic Management System) for drone tracking in Indian airspace."
    ],
    tech: ["Ubuntu", "Nginx", "Flask", "Cloudflare Tunnel"],
    link: "https://beram.in"
  }
];

const positions = [
  {
    title: "Creative Lead – AIML Department",
    description: "Led a team of 15+ artists",
    period: "2024-2025"
  },
  {
    title: "Sports Secretary – AIML Department",
    description: "Currently guiding all Sports Teams of AIML Dept.",
    period: "2025-2026"
  },
  {
    title: "Captain – RCOEM Volleyball Team",
    description: "Secured 3rd position in RTMNU volleyball Tournament.",
    period: "2025-2026"
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and leadership roles that have shaped my career.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Experience</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                    >
                      Visit Website <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Positions */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Leadership & Responsibilities</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {positions.map((pos, index) => (
              <Card key={index} className="card-hover border-border text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{pos.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">{pos.period}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pos.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
