import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Folder, Code, Award } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-accent/20 text-accent border-accent/30";
      case "in_progress": return "bg-primary/20 text-primary border-primary/30";
      case "planned": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research": return <Award className="h-5 w-5" />;
      case "application": return <Code className="h-5 w-5" />;
      default: return <Folder className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Research Projects & Applications
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Innovative AI and ML projects spanning research and real-world applications
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Badge variant="secondary" className="text-base px-4 py-2">
              {projects.filter(p => p.category === "research").length} Research Projects
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              {projects.filter(p => p.category === "application").length} Applications
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg ${project.category === "research" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(project.status)} border`}
                    >
                      {project.status.replace("_", " ")}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                    <Button variant="default" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </Link>
                  {project.links?.paper && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Paper
                      </a>
                    </Button>
                  )}
                  {project.links?.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Research Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Cutting-edge research in AI and ML, contributing to academic knowledge and 
                advancing the state-of-the-art in computer vision and machine learning.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Object detection in adverse weather conditions</li>
                <li>• Benchmarking AI systems for real-world applications</li>
                <li>• Novel algorithms for image processing and analysis</li>
                <li>• Multimodal learning and data fusion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-accent" />
                Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Practical applications that demonstrate the real-world impact of AI and ML 
                technologies in education, automation, and decision-making systems.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Educational tools for automated assessment</li>
                <li>• Interactive classification systems</li>
                <li>• Web-based AI applications</li>
                <li>• User-friendly ML interfaces</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Research Impact */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Research Impact & Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Research Papers Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">7</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Domains Explored</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}