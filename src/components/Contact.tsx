import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:anishpatankar974@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing 
            new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Send me a message and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Direct Contact</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here are my contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4"
                  onClick={() => window.location.href = "mailto:anishpatankar974@gmail.com"}
                >
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">anishpatankar974@gmail.com</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4"
                  onClick={() => window.open("https://github.com/Anish974", "_blank")}
                >
                  <Github className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">@Anish974</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4"
                  onClick={() => window.open("https://www.linkedin.com/in/anish-patankar-47421b25a/", "_blank")}
                >
                  <Linkedin className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Anish Patankar</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
