import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Web Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Hi, I'm <span className="gradient-text">Anish Patankar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Turning ideas into code and data into insight
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-2xl">
                A Final Year B.Tech student at RCOEM,
                AI/ML‑focused CSE undergraduate with hands‑on experience in full‑stack web development, database
                systems, and real‑time machine learning applications. Passionate about drone technologies,
                automation, and building secure, user‑centric digital solutions.
              </p>

              {/* <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "Flask",
                  "YOLOv8",
                  "Tailwind CSS",
                  "WebSockets",
                  "Nginx"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div> */}

              <div className="flex gap-3 pt-2">
                <Button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nagpur, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="font-medium">Open to: Freelance & Collaborations</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30"></div>
              <img
                src={profileImage}
                alt="Anish Patankar"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
