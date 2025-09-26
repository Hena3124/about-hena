import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder-project-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder-project-2.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
      image: "/placeholder-project-3.jpg",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Machine Learning Classifier",
      description: "Image classification model using TensorFlow and Python. Achieved 94% accuracy on test dataset with custom CNN architecture.",
      image: "/placeholder-project-4.jpg",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      github: "https://github.com",
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and emoji support. Built with modern web technologies.",
      image: "/placeholder-project-5.jpg",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing my projects and skills. Built with modern React and beautiful animations.",
      image: "/placeholder-project-6.jpg",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my technical skills and passion for creating 
              innovative solutions. From web applications to machine learning models.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Star className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="glass-card p-0 overflow-hidden hover-lift group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Other Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.id} className="glass-card p-6 hover-lift group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
