import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
      { name: "scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
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
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-4 sm:mb-6 md:mb-8 bg-transparent gap-1 sm:gap-2 md:gap-3 p-0">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg bg-muted hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-colors">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="bg-muted/30 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 pt-20 sm:pt-6 md:pt-8 lg:pt-10">
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

        {/* Competitive Programming Platforms */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 max-w-2xl mx-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto group text-sm sm:text-base"
            onClick={() => window.open("https://leetcode.com/u/Anish1137/", "_blank")}
          >
            <svg className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
            LeetCode Profile
            <ExternalLink className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          <Button
            variant="outline"
            className="w-full sm:w-auto group text-sm sm:text-base"
            onClick={() => window.open("https://www.hackerrank.com/profile/anishpatankar974", "_blank")}
          >
            <svg className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.218 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704v4.145c0 .143.113.258.255.258h4.213c.141 0 .254-.115.254-.258v-4.32c0-.141-.113-.254-.254-.254h-.23zm-2.314 7.633c-.738-.219-1.032-.369-1.032-.738 0-.262.22-.477.627-.477.396 0 .656.146.838.477.068.123.158.162.287.162.158 0 .273-.105.273-.262v-.053c0-.09-.014-.193-.133-.36-.23-.318-.686-.631-1.29-.631-1.027 0-1.754.615-1.754 1.486 0 .877.545 1.236 1.594 1.553.67.201.917.352.917.676 0 .369-.273.604-.707.604-.492 0-.836-.252-.947-.693-.029-.117-.117-.205-.268-.205-.158 0-.273.115-.273.273v.047c0 .068.012.143.045.217.205.541.738.969 1.443.969 1.092 0 1.838-.68 1.838-1.674 0-.8-.455-1.145-1.457-1.37z"/>
            </svg>
            HackerRank Profile
            <ExternalLink className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </section>
  );
}
