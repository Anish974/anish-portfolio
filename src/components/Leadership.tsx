import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const leadership = [
  {
    title: "Creative Lead – AIML Department",
    description: "Led the team of 15+ people of backdrop team with creative vision and coordination to deliver impactful visual designs.",
    period: "2024-2025",
    image: "/assets/Creative-lead.jpg"
  },
  {
    title: "Sports Secretary – AIML Department",
    description: "Guiding and coordinating all Sports Teams of AIML Dept. with organizational skills and team motivation.",
    period: "2025-2026",
    image: "/assets/Sports-secretory.jpg"
  },
  {
    title: "Captain – RCOEM Volleyball Team",
    description: "Led the team with strategic planning and motivation. Secured 3rd position in RTMNU volleyball Tournament.",
    period: "2025-2026",
    image: "/assets/Volleyball-captain.jpg"
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="gradient-text">Responsibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Roles and responsibilities that have shaped my leadership journey and team collaboration skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {leadership.map((item, index) => (
            <Card key={index} className="card-hover border-border text-center">
              <CardHeader className="pb-3">
                {item.image && (
                  <figure className="border border-border rounded-lg overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-square object-cover"
                    />
                  </figure>
                )}
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{item.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
