"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Code2, 
  Brain, 
  Globe,
  Database, 
  Mail,
  MapPin,
  Download,
  Github,
  Linkedin,
  GraduationCap
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: portfolioData.skills.programming
  },
  {
    category: "Frameworks & Libraries",
    icon: Brain,
    items: portfolioData.skills.frameworks
  },
  {
    category: "Tools & Platforms",
    icon: Globe,
    items: portfolioData.skills.tools
  },
  {
    category: "Domain Expertise",
    icon: Database,
    items: portfolioData.skills.domains
  }
];

export function AboutSection() {
  // Animation refs for different elements
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });
  const bioCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 300 });
  const educationCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 400 });
  const contactCardRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 350 });
  const statusCardRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 450 });
  const skillsHeaderRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 200 });

  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.personal.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card ref={bioCardRef}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Background</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {portfolioData.personal.bio}
                </div>
              </CardContent>
            </Card>


            {/* Education */}
            <Card ref={educationCardRef}>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Academic background and qualifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                        {edu.gpa && (
                          <p className="text-sm text-muted-foreground mt-1">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact & Quick Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card ref={contactCardRef}>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{portfolioData.personal.location}</span>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button 
                    className="cursor-pointer w-full justify-start border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(portfolioData.personal.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </Button>
                  <Button 
                    className="cursor-pointer w-full justify-start border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(portfolioData.personal.linkedin, "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </Button>
                  <Button 
                    className="cursor-pointer w-full justify-start border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(portfolioData.personal.googleScholar, "_blank")}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Google Scholar
                  </Button>
                  <Button 
                    className="cursor-pointer w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground" 
                    variant="default" 
                    size="sm"
                    onClick={() => window.open(portfolioData.personal.cv, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card ref={statusCardRef}>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Position</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {portfolioData.personal.title}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Research</span>
                    <Badge variant="outline">Ongoing</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Multiple active research projects
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Collaboration</span>
                    <Badge variant="secondary">Open</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Available for research partnerships
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 ref={skillsHeaderRef} className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillCategories.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg scroll-hidden-scale" data-animate="scale-fade-gentle" data-delay={index * 100}>
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span>{skillGroup.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m always interested in discussing new research opportunities, 
                collaborations, and innovative projects in AI and computer vision.
              </p>
              <Button 
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open(`mailto:${portfolioData.personal.email}?subject=Collaboration Inquiry&body=Hi Dr. Patel,%0D%0A%0D%0AI would like to discuss...`, '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
