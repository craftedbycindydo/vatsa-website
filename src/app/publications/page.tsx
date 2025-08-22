import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Publications() {
  const { publications } = portfolioData;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Research Publications
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Peer-reviewed publications in artificial intelligence, machine learning, and computer vision
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-base px-4 py-2">
              {publications.length} Publications
            </Badge>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight mb-2">
                      {publication.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{publication.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={publication.type === "conference" ? "default" : "secondary"}>
                        {publication.type === "conference" ? "Conference" : "Journal"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{publication.venue}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Paper
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {publication.abstract}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Impact */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">{publications.length}+</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto text-accent mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Research Collaborations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Research</div>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Key Research Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Object Detection",
                "Weather Analysis", 
                "Traffic Systems",
                "Image Processing",
                "Face Recognition",
                "Real Estate AI",
                "Benchmarking",
                "Deep Learning",
                "Quantum Computing",
                "RF Signal Processing",
                "Autonomous Vehicles",
                "Computer Vision",
                "Image Inpainting",
                "Motion Analysis",
                "Multi-task Learning",
                "Road Surface Analysis"
              ].map((area) => (
                <div key={area} className="text-center p-3 bg-muted/30 rounded-lg border border-border/50">
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
