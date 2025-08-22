"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, FileText, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectsSection() {
  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });
  const viewAllRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 300 });
  
  const featuredProjects = portfolioData.projects.slice(0, 6); // Show top 6 projects

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'research':
        return 'bg-primary/10 text-primary';
      case 'application':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-accent/10 text-accent';
      case 'in_progress':
        return 'bg-primary/10 text-primary';
      case 'planned':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Research Projects
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my most impactful research projects and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg group scroll-hidden" data-animate="card-entrance" data-delay={index * 100}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge 
                    variant="outline" 
                    className={`capitalize ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`capitalize ${getStatusColor(project.status)}`}
                  >
                    {project.status.replace('_', ' ')}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="space-y-2 text-sm">
                    {project.period && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    )}
                    {project.affiliation && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{project.affiliation}</span>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {project.links.paper && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="mr-1 h-3 w-3" />
                        Paper
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show more projects button */}
        <div ref={viewAllRef} className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              // Navigate to projects page or show all projects
              window.location.href = '/projects';
            }}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Research areas */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Research Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[...new Set(portfolioData.projects.flatMap(p => p.technologies))]
              .filter(tech => 
                ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Artificial Intelligence', 
                 'Object Detection', 'Quantum Computing', 'Signal Processing', 'Performance Benchmarking']
                .includes(tech)
              )
              .slice(0, 8)
              .map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {area}
                </Badge>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
