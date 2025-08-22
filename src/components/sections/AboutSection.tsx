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
  const researchCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 400 });
  const educationCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 500 });
  const contactCardRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 350 });
  const statusCardRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 450 });
  const skillsHeaderRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 200 });

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {portfolioData.personal.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card ref={bioCardRef}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Background</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently serving as {portfolioData.personal.title} at {portfolioData.personal.institution}, 
                  I am dedicated to advancing the field of artificial intelligence through innovative research 
                  and practical applications that address real-world challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My research spans multiple domains including computer vision, machine learning, and AI systems, 
                  with a particular focus on developing robust solutions for complex environments and scenarios.
                </p>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card ref={researchCardRef}>
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
                <CardDescription>
                  Core areas of research and academic exploration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {portfolioData.research.interests.map((interest, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium">{interest}</h4>
                      <div className="flex flex-wrap gap-1">
                        {portfolioData.research.keywords
                          .filter(keyword => 
                            keyword.toLowerCase().includes(interest.toLowerCase().split(' ')[0]) ||
                            interest.toLowerCase().includes(keyword.toLowerCase())
                          )
                          .slice(0, 3)
                          .map((keyword, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))
                        }
                      </div>
                    </div>
                  ))}
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
                        {edu.specialization && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Specialization: {edu.specialization}
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
          <div className="space-y-6">
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
                    className="w-full justify-start" 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("https://github.com", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(portfolioData.personal.linkedin, "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Google Scholar
                  </Button>
                  <Button className="w-full justify-start" variant="default" size="sm">
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
          <h3 ref={skillsHeaderRef} className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg scroll-hidden-scale" data-animate="scale-fade-gentle" data-delay={index * 100}>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Icon className="h-5 w-5 text-primary" />
                      <span>{skillGroup.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
