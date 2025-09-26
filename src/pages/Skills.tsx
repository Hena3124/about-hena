import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, Brain, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 65 }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Node.js/Express", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas/NumPy", level: 90 },
        { name: "Computer Vision", level: 70 },
        { name: "NLP", level: 65 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Swift", level: 60 },
        { name: "Kotlin", level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Jest/Testing", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 }
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "Meta React Developer",
    "MongoDB Associate Developer"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "Communication",
    "Leadership",
    "Adaptability",
    "Time Management",
    "Critical Thinking"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies 
              I've mastered throughout my computer science journey.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Soft Skills */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span className="text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Currently Learning</h2>
            <p className="text-xl text-muted-foreground">
              Always expanding my knowledge and staying up-to-date with the latest technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Web3 & Blockchain</h3>
              <p className="text-muted-foreground">Exploring decentralized applications and smart contracts</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">DevOps & Cloud</h3>
              <p className="text-muted-foreground">Kubernetes, Terraform, and advanced AWS services</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">AI/ML Advanced</h3>
              <p className="text-muted-foreground">Deep learning architectures and LLM applications</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;