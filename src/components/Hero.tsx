import { MapPin, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.png";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/Background looping animation.json";

export function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Anish Patankar";
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDeletingRef.current) {
        // Typing mode
        if (indexRef.current <= fullName.length) {
          setDisplayedName(fullName.slice(0, indexRef.current));
          indexRef.current++;
        } else {
          // Start deleting after 1 second pause
          isDeletingRef.current = true;
        }
      } else {
        // Deleting mode
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayedName(fullName.slice(0, indexRef.current));
        } else {
          // Start typing again
          isDeletingRef.current = false;
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg pt-16 sm:pt-20 relative overflow-hidden">
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Web Developer
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">{displayedName}</span>
              </h1>
              
            </div>

            <div className="space-y-4 w-full">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
                A Final Year B-Tech student at RCOEM,
                AI/ML‑focused CSE undergraduate with hands‑on experience in full‑stack web development, database
                systems, and real‑time machine learning applications. Passionate about drone technologies,
                automation, and building secure, user‑centric digital solutions.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground ">
                Turning ideas into code and data into insight
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                <Button
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) {
                      const navHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/assets/Anish Resume NEW.pdf';
                    link.download = 'Anish_Patankar_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full sm:w-auto"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const navHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Nagpur, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
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
