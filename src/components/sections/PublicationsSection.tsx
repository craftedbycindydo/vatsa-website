"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PublicationsSection() {
  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });
  const viewAllRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 300 });
  const keywordsHeaderRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 200 });
  
  const recentPublications = portfolioData.publications.slice(0, 6); // Show most recent 6

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-primary/10 text-primary';
      case 'conference':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="research" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Research & Publications
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Published research contributing to the advancement of AI and computer vision
          </p>
        </div>

        <div className="space-y-6">
          {recentPublications.map((publication, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg group scroll-hidden" data-animate="card-entrance" data-delay={index * 100}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className={`capitalize ${getTypeColor(publication.type)}`}
                      >
                        {publication.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {publication.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{publication.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{publication.venue}</span>
                      </div>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(publication.link, '_blank')}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {publication.abstract}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show more publications button */}
        <div ref={viewAllRef} className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              // Navigate to publications page
              window.location.href = '/publications';
            }}
          >
            View All Publications
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Research impact stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { 
              number: `${portfolioData.publications.length}`, 
              label: "Publications",
              description: "Peer-reviewed papers"
            },
            { 
              number: `${portfolioData.publications.filter(p => p.type === 'journal').length}`, 
              label: "Journal Articles",
              description: "High-impact journals"
            },
            { 
              number: `${portfolioData.publications.filter(p => p.type === 'conference').length}`, 
              label: "Conference Papers",
              description: "International conferences"
            },
            { 
              number: `${Math.max(...portfolioData.publications.map(p => parseInt(p.year)))}`, 
              label: "Latest Publication",
              description: "Most recent work"
            }
          ].map((stat, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-md scroll-hidden-scale" data-animate="scale-fade-gentle" data-delay={index * 100}>
              <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground leading-tight">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research interests keywords */}
        <div className="mt-12 sm:mt-16">
          <h3 ref={keywordsHeaderRef} className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Research Keywords</h3>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto px-2">
            {portfolioData.research.keywords.map((keyword, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-2 py-1 sm:px-3 sm:py-1 text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
