import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  // Find the project by slug
  const project = portfolioData.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={project.category === "research" ? "default" : "secondary"}>
              {project.category}
            </Badge>
            <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
              {project.status}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            {project.period && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.period}</span>
              </div>
            )}
            {project.affiliation && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.affiliation}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.links?.paper && (
              <Button asChild>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Paper
                </a>
              </Button>
            )}
            {project.links?.demo && (
              <Button variant="outline" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links?.github && (
              <Button variant="ghost" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Technologies & Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Project Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground capitalize">
                {project.category} Project
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground capitalize">{project.status}</span>
              </div>
            </CardContent>
          </Card>

          {project.period && (
            <Card>
              <CardHeader>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.period}</p>
              </CardContent>
            </Card>
          )}

          {project.affiliation && (
            <Card>
              <CardHeader>
                <CardTitle>Affiliation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.affiliation}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Related Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Other Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.projects
                .filter((p) => p.title !== project.title)
                .slice(0, 4)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.title}
                    href={`/projects/${relatedProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  >
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                        {relatedProject.title}
                      </h4>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {relatedProject.category}
                        </Badge>
                        {relatedProject.period && (
                          <Badge variant="secondary" className="text-xs">
                            {relatedProject.period.split(' - ')[0]}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Dr. Vatsa Patel`,
    description: project.description.slice(0, 160) + '...',
    openGraph: {
      title: project.title,
      description: project.description.slice(0, 160) + '...',
      type: 'article',
    },
  };
}
