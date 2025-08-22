"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ExperienceSection() {
  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });

  const sortedExperience = [...portfolioData.experience].sort((a, b) => {
    // Sort by start year (most recent first)
    const aYear = parseInt(a.period.split(' - ')[0].split(' ').pop() || '0');
    const bYear = parseInt(b.period.split(' - ')[0].split(' ').pop() || '0');
    return bYear - aYear;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-primary/10 text-primary';
      case 'research':
        return 'bg-accent/10 text-accent';
      case 'entrepreneurial':
        return 'bg-secondary/20 text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic and research journey spanning multiple institutions and roles
          </p>
        </div>

        <div className="space-y-8">
          {sortedExperience.map((experience, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg scroll-hidden" data-animate="card-entrance" data-delay={index * 150}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Building2 className="h-5 w-5 text-primary" />
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${getTypeColor(experience.type)}`}
                    >
                      {experience.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                {/* Add key highlights for current/recent positions */}
                {index < 2 && (
                  <div className="mt-4 pt-4">
                    <h4 className="font-medium text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {experience.type === 'academic' && (
                        <>
                          <li>• Conducting cutting-edge research in AI and computer vision</li>
                          <li>• Teaching undergraduate and graduate courses</li>
                          <li>• Mentoring students in research projects</li>
                          <li>• Publishing research findings in top-tier conferences</li>
                        </>
                      )}
                      {experience.type === 'research' && (
                        <>
                          <li>• Developing novel algorithms and methodologies</li>
                          <li>• Collaborating with interdisciplinary research teams</li>
                          <li>• Writing grant proposals and research papers</li>
                          <li>• Presenting findings at international conferences</li>
                        </>
                      )}
                      {experience.type === 'entrepreneurial' && (
                        <>
                          <li>• Leading product development and innovation</li>
                          <li>• Translating research into practical applications</li>
                          <li>• Building partnerships with industry stakeholders</li>
                          <li>• Securing funding and resources for projects</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: `${portfolioData.publications.length}+`, label: "Publications" },
            { number: `${portfolioData.projects.length}+`, label: "Research Projects" },
            { number: "5+", label: "Years Experience" },
            { number: "3+", label: "Institutions" }
          ].map((stat, index) => (
            <div key={index} className="text-center group scroll-hidden-scale" data-animate="scale-fade-gentle" data-delay={index * 100}>
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
