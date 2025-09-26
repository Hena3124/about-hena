import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 floating"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
              Hi, I'm{" "}
              <span className="hero-gradient">Hena Patel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-delay-1">
              A passionate Computer Science student specializing in full-stack development, 
              machine learning, and creating innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-delay-2">
              <Button asChild size="lg" className="glow-effect">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 fade-in-delay-3">
              <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                <Link to="/contact">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center hover-lift bounce-in">
              <h3 className="text-4xl font-bold text-gradient mb-2">7</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </Card>
            <Card className="glass-card p-8 text-center hover-lift bounce-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-4xl font-bold text-gradient mb-2">8+</h3>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </Card>
            <Card className="glass-card p-8 text-center hover-lift bounce-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-4xl font-bold text-gradient mb-2">3.5</h3>
              <p className="text-muted-foreground">GPA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in web development, mobile apps, and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((project, index) => <Card key={project} className="glass-card p-6 hover-lift group fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Project {project}
                </h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of this amazing project and the technologies used.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm hover:bg-primary/20 transition-colors">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm hover:bg-primary/20 transition-colors">TypeScript</span>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center fade-in-delay-3">
            <Button asChild variant="outline" size="lg" className="hover:scale-105 hover:glow-effect transition-all duration-300">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;