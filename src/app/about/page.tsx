import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Calendar, Mail, FileText, Linkedin } from "lucide-react";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <FloatingNav />
      <div className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Bio Section */}
          <div className="mb-20">
            <div className="flex justify-center mb-8">
              <Image
                src="/mine2.png"
                alt="Dr. Vatsa Patel"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 border-b border-border/40 pb-4">
              Exploring Intelligence Through Technology and Imagination
            </h1>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Hi there! I'm Dr. Vatsa Patel, an Assistant Professor of Computer Science at Penn State Harrisburg, where I explore how artificial intelligence, machine learning, and computer vision can shape smarter, safer, and more connected systems. I earned my Ph.D. in Computer Science from the University of Dayton, and my passion lies in turning cutting-edge AI research into practical solutions that make an impact.
              </p>
              <p>
                My work focuses on developing intelligent systems that can see, reason, and adapt — spanning traffic analytics, autonomous systems, generative AI, signal processing, and multimodal learning. I love bridging research and design to create technologies that solve real-world challenges across urban safety, biomedical analysis, real estate forecasting, and quantum-enhanced learning.
              </p>
              <p>
                When I'm not immersed in research or mentoring students, you'll probably find me on a field or court. I'm an avid sports enthusiast who enjoys playing cricket, volleyball, soccer, pickleball, badminton, and just about any game that brings people together. For me, both research and sports are about teamwork, curiosity, and creativity — the same spirit that drives innovation.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 border-b border-border/40 pb-4">
              Education
            </h2>
          </div>

          <div className="space-y-5 mb-12">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg mt-1">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="outline" className={index === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}>
                        {edu.degree.includes("Ph.D") ? "Doctoral" : "Master's"}
                      </Badge>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-1">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${index === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 pt-10 border-t border-border/40">
            <p className="text-xl sm:text-2xl font-medium tracking-tight mb-8 text-foreground">
              Let's connect and build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={`mailto:${portfolioData.personal.email}`}>
                  <Mail className="h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={portfolioData.personal.cv} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5" />
                  Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}