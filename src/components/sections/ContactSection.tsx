"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactSection() {
  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });
  const contactCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 300 });
  const collaborationCardRef = useScrollAnimation<HTMLDivElement>('card-entrance', { delay: 400 });

  return (
    <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card ref={contactCardRef}>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out for research collaborations or academic inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">{portfolioData.personal.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">
                    {portfolioData.personal.institution}, {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button 
                  className="cursor-pointer w-full justify-start" 
                  variant="outline"
                  onClick={() => window.open(`mailto:${portfolioData.personal.email}`, '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                
                <Button 
                  className="cursor-pointer w-full justify-start" 
                  variant="outline"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </Button>
                
                <Button 
                  className="cursor-pointer w-full justify-start" 
                  variant="outline"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card ref={collaborationCardRef}>
            <CardHeader>
              <CardTitle>Research Collaboration</CardTitle>
              <CardDescription>
                Areas where I&apos;m actively seeking collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Current Research Focus</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {portfolioData.research.interests.slice(0, 4).map((interest, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-primary rounded-full"></span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Collaboration Opportunities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Joint research projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Graduate student mentoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Conference presentations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Industry partnerships</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button 
                    className="cursor-pointer w-full"
                    onClick={() => window.open(`mailto:${portfolioData.personal.email}?subject=Research Collaboration Inquiry`, '_blank')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Discuss Collaboration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
