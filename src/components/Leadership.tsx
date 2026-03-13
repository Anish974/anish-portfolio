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
    image: "/assets/SPORTS_SEC.jpeg"
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
    <section id="leadership" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Leadership & <span className="gradient-text">Responsibilities</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Roles and responsibilities that have shaped my leadership journey and team collaboration skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {leadership.map((item, index) => (
            <Card key={index} className="card-hover border-border text-center flex flex-col">
              <CardHeader className="pb-2 sm:pb-3 flex-grow">
                {item.image && (
                  <figure className="border border-border rounded-lg overflow-hidden mb-2 sm:mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-square object-cover"
                    />
                  </figure>
                )}
                <CardTitle className="text-sm sm:text-base md:text-lg">{item.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">{item.period}</CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-4">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-left leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
