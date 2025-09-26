import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I'm a passionate Computer Science student with a deep love for technology 
                and problem-solving. Currently in my final year, I've spent the last few 
                years building a strong foundation in software development, algorithms, 
                and modern web technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My journey in tech started with curiosity about how things work, and has 
                evolved into a drive to create meaningful digital experiences that solve 
                real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">Fast Learner</Badge>
                <Badge variant="secondary">Innovation Driven</Badge>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Experience</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="glass-card p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    2021 - 2025 (Expected)
                  </div>
                  <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                  <p className="text-sm text-muted-foreground mt-2">GPA: 3.9/4.0</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="glass-card p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Summer 2024
                  </div>
                  <h4 className="text-lg font-semibold">Software Development Intern</h4>
                  <p className="text-muted-foreground">TechStart Inc.</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Developed React components for customer dashboard</li>
                    <li>• Optimized database queries improving performance by 30%</li>
                    <li>• Collaborated with design team on UI/UX improvements</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - Present
                  </div>
                  <h4 className="text-lg font-semibold">Teaching Assistant</h4>
                  <p className="text-muted-foreground">University CS Department</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Assisted 50+ students with programming assignments</li>
                    <li>• Conducted weekly lab sessions on web development</li>
                    <li>• Graded assignments and provided constructive feedback</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Achievements & Awards</h2>
            <p className="text-xl text-muted-foreground">Recognition for academic and project excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 text-center hover-lift">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dean's List</h3>
              <p className="text-muted-foreground">Fall 2023, Spring 2024</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hackathon Winner</h3>
              <p className="text-muted-foreground">Best Web App - TechHack 2024</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">CS Excellence Award</h3>
              <p className="text-muted-foreground">Outstanding Senior Project</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;