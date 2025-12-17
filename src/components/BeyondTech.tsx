import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const hobbies = [
  {
    title: "Volleyball",
    description: "When I'm not coding, you'll find me on the volleyball court. I love the strategy, teamwork, and energy of the game.",
    icon: "🏐",
    instagram: "volley_champ1137",
    instagramUrl: "https://instagram.com/volley_champ1137",
    image: "/assets/Volleyball.jpg"
  },
  {
    title: "Art & Creativity",
    description: "I express my creative side through various art forms, bringing the same attention to detail I apply to my code.",
    icon: "🎨",
    instagram: "artistic.anish",
    instagramUrl: "https://instagram.com/artistic.anish",
    image: "/assets/Art.jpg"
  }
];

export function BeyondTech() {
  return (
    <section id="beyond-tech" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Beyond <span className="gradient-text">Tech</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Life is more than code. Here's what keeps me balanced and inspired outside of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="card-hover flex flex-col">
              <CardHeader className="pb-2 sm:pb-3 flex-grow">
                {hobby.image ? (
                  <figure className="border border-border rounded-lg overflow-hidden mb-2 sm:mb-3">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      loading="lazy"
                      className="w-full aspect-square object-cover"
                    />
                  </figure>
                ) : (
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">{hobby.icon}</div>
                )}
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{hobby.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {hobby.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-4">
                <Button
                  variant="outline"
                  className="w-full group text-xs sm:text-sm py-2 sm:py-2.5"
                  onClick={() => window.open(hobby.instagramUrl, "_blank")}
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  @{hobby.instagram}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
