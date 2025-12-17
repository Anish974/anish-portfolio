import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
    ]
  },
  {
    id: "ml",
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" }
    ]
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-4 sm:mb-6 md:mb-8 bg-muted/50 gap-0.5 sm:gap-1">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm py-2 sm:py-3">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="bg-muted/30 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                  {category.skills.map((skill, index) => {
                    // Logos with dark colors that need inversion in dark mode for visibility
                    const darkLogos = ["GitHub", "Git", "SQLite", "Flask"];
                    const needsInvert = darkLogos.includes(skill.name);
                    
                    return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mb-0.5 sm:mb-1 md:mb-2 rounded-lg bg-muted/50 dark:bg-muted/30">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain mx-auto ${
                            needsInvert ? "dark:invert invert-0" : ""
                          }`}
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground text-center font-medium break-words max-w-[50px] sm:max-w-[70px]">
                        {skill.name}
                      </p>
                    </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
