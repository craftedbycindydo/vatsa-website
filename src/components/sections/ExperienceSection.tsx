"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export function ExperienceSection() {
  // State for showing all experiences
  const [showAll, setShowAll] = useState(false);

  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });

  const sortedExperience = [...portfolioData.experience].sort((a, b) => {
    // Sort by start year (most recent first)
    const aYear = parseInt(a.period.split(' - ')[0].split(' ').pop() || '0');
    const bYear = parseInt(b.period.split(' - ')[0].split(' ').pop() || '0');
    return bYear - aYear;
  });

  // Show top 2 experiences initially, or all if showAll is true
  const displayedExperiences = showAll ? sortedExperience : sortedExperience.slice(0, 2);

  // Force scroll animation to re-observe elements when showAll changes
  useEffect(() => {
    if (showAll) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const elements = document.querySelectorAll('[data-animate="card-entrance"]');
        elements.forEach((element, index) => {
          if (index >= 2) {
            // Remove hidden classes and trigger animation for additional elements
            element.classList.remove('scroll-hidden', 'scroll-hidden-scale');
            element.classList.add('animate-card-entrance');
          }
        });
      }, 100);
    }
  }, [showAll]);

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
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic and research journey spanning multiple institutions and roles
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {displayedExperiences.map((experience, index) => (
            <Card 
              key={`${experience.title}-${index}`}
              className="transition-all duration-500 hover:shadow-lg scroll-hidden"
              data-animate="card-entrance" 
              data-delay={index * 150}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {experience.logo && (
                      <div className="flex-shrink-0">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-lg object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg mt-1">
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${getTypeColor(experience.type)}`}
                    >
                      {experience.type}
                    </Badge>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
                {/* Display responsibilities if available */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                  <div className="mt-4 pt-4">
                    <h4 className="font-medium text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>• {responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button - Only show if there are more than 2 experiences */}
        {sortedExperience.length > 2 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  View All ({sortedExperience.length - 2} more)
                </>
              )}
            </Button>
          </div>
        )}

        {/* Statistics Grid */}
        <div className="mt-10 sm:mt-16">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {[
              { number: "13+", label: "Publications" },
              { number: "5+", label: "Years Experience" },
              { number: "3+", label: "Institutions" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 bg-card p-2 sm:p-4 lg:p-6 scroll-hidden-scale" 
                data-animate="scale-fade-gentle" 
                data-delay={index * 100}
              >
                {/* Content */}
                <div className="text-center">
                  {/* Number */}
                  <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs sm:text-sm lg:text-base font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
