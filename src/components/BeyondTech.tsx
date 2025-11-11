import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const hobbies = [
  {
    title: "Volleyball",
    description: "When I'm not coding, you'll find me on the volleyball court. I love the strategy, teamwork, and energy of the game.",
    icon: "🏐",
    instagram: "volley_champ1137",
    instagramUrl: "https://instagram.com/volley_champ1137"
  },
  {
    title: "Art & Creativity",
    description: "I express my creative side through various art forms, bringing the same attention to detail I apply to my code.",
    icon: "🎨",
    instagram: "artistic.anish",
    instagramUrl: "https://instagram.com/artistic.anish"
  }
];

export function BeyondTech() {
  return (
    <section id="beyond-tech" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="gradient-text">Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Life is more than code. Here's what keeps me balanced and inspired outside of development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="text-5xl mb-4">{hobby.icon}</div>
                <CardTitle className="text-2xl">{hobby.title}</CardTitle>
                <CardDescription className="text-base">
                  {hobby.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => window.open(hobby.instagramUrl, "_blank")}
                >
                  <Instagram className="h-4 w-4 mr-2" />
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
