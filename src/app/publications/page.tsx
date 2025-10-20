"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { publications } = portfolioData;

  // Process publications data for filtering
  const processedPublications = useMemo(() => {
    return publications.map(pub => ({
      ...pub,
      category: pub.type === 'journal' ? 'Publications' : 'Research',
      tags: pub.keywords || pub.abstract.split(' ').filter(word => word.length > 4).slice(0, 3)
    }));
  }, [publications]);

  // Filter categories - Domain/Application-Based
  const categories = [
    { id: 'all', label: 'All', count: processedPublications.length },
    { 
      id: 'autonomous-driving', 
      label: 'Autonomous Driving', 
      count: processedPublications.filter(item => 
        item.tags.some(tag => ['Autonomous Driving', 'Traffic Surveillance', 'Road Surface Material', 'Helmet Detection', 'Traffic Systems', 'Intelligent Transportation', 'Weather Augmentation', 'AI for Safety', 'Object Detection'].includes(tag))
      ).length 
    },
    { 
      id: 'image-processing', 
      label: 'Computer Vision', 
      count: processedPublications.filter(item => 
        item.tags.some(tag => ['Image Inpainting', 'Photobomb Removal', 'Image Restoration', 'Computer Vision', 'Image Processing', 'Face Recognition', 'Motion Illusion', 'Optical Illusion', 'Multi-task Learning', 'Masked Face', 'Age Prediction', 'Gender Classification', 'Emotion Recognition'].includes(tag))
      ).length 
    },
    { 
      id: 'generative-ai', 
      label: 'Generative AI', 
      count: processedPublications.filter(item => 
        item.tags.some(tag => ['Generative AI', 'Text-to-Image', 'Benchmark', 'Benchmarking', 'Dataset Creation', 'Human Evaluation', 'Visual Quality', 'Realism', 'Aesthetics', 'Synthetic Dataset'].includes(tag))
      ).length 
    },
    { 
      id: 'quantum-signal', 
      label: 'Quantum Computing', 
      count: processedPublications.filter(item => 
        item.tags.some(tag => ['Quantum Machine Learning', 'RF Signal Extraction', 'Quantum Signal Processing', 'Quantum Sensing', 'Radio Frequency Interference', 'Quantum Computing'].includes(tag))
      ).length 
    },
    { 
      id: 'real-estate-urban', 
      label: 'Urban Planning', 
      count: processedPublications.filter(item => 
        item.tags.some(tag => ['House Price Prediction', 'Real Estate AI', 'Urban Traffic Simulation', 'Smart City Planning', 'Urban Planning', 'Smart Cities', 'Data-Driven Simulation', 'Virtual Reality', 'Environmental Modeling'].includes(tag))
      ).length 
    }
  ];

  // Filter publications
  const filteredPublications = useMemo(() => {
    let filtered = processedPublications;
    
    if (activeFilter !== 'all') {
      if (activeFilter === 'autonomous-driving') {
        filtered = processedPublications.filter(item => 
          item.tags.some(tag => ['Autonomous Driving', 'Traffic Surveillance', 'Road Surface Material', 'Helmet Detection', 'Traffic Systems', 'Intelligent Transportation', 'Weather Augmentation', 'AI for Safety', 'Object Detection'].includes(tag))
        );
      } else if (activeFilter === 'image-processing') {
        filtered = processedPublications.filter(item => 
          item.tags.some(tag => ['Image Inpainting', 'Photobomb Removal', 'Image Restoration', 'Computer Vision', 'Image Processing', 'Face Recognition', 'Motion Illusion', 'Optical Illusion', 'Multi-task Learning', 'Masked Face', 'Age Prediction', 'Gender Classification', 'Emotion Recognition'].includes(tag))
        );
      } else if (activeFilter === 'generative-ai') {
        filtered = processedPublications.filter(item => 
          item.tags.some(tag => ['Generative AI', 'Text-to-Image', 'Benchmark', 'Benchmarking', 'Dataset Creation', 'Human Evaluation', 'Visual Quality', 'Realism', 'Aesthetics', 'Synthetic Dataset'].includes(tag))
        );
      } else if (activeFilter === 'quantum-signal') {
        filtered = processedPublications.filter(item => 
          item.tags.some(tag => ['Quantum Machine Learning', 'RF Signal Extraction', 'Quantum Signal Processing', 'Quantum Sensing', 'Radio Frequency Interference', 'Quantum Computing'].includes(tag))
        );
      } else if (activeFilter === 'real-estate-urban') {
        filtered = processedPublications.filter(item => 
          item.tags.some(tag => ['House Price Prediction', 'Real Estate AI', 'Urban Traffic Simulation', 'Smart City Planning', 'Urban Planning', 'Smart Cities', 'Data-Driven Simulation', 'Virtual Reality', 'Environmental Modeling'].includes(tag))
        );
      }
    }
    
    return filtered;
  }, [processedPublications, activeFilter]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="cursor-pointer hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Research & Publications</span>
          </div>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm"
            asChild
            className="border-gray-300 dark:border-gray-700 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Research Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Peer-reviewed publications in artificial intelligence, machine learning, and computer vision
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-base px-4 py-2">
              {publications.length} Research Works
            </Badge>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveFilter(category.id);
              }}
              className={`cursor-pointer transition-all duration-200 ${
                activeFilter === category.id 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm border-primary" 
                  : "border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs bg-muted/50 dark:bg-muted/30 border-gray-200 dark:border-gray-700">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((publication, index) => {
            const slug = publication.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Card 
                key={index} 
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => {
                  window.location.href = `/publications/${slug}`;
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight mb-2">
                        <Link 
                          href={`/publications/${slug}`}
                          className="cursor-pointer hover:text-primary transition-colors hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {publication.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                        <span>
                          {publication.type === "research" ? "Research" : 
                           publication.type === "project" ? "Project" : 
                           "Published"}
                        </span>
                        <span>|</span>
                        <span>
                          {publication.type === "conference" ? "Conference" : 
                           publication.type === "research" ? "Research Project" : 
                           publication.type === "project" ? "Web Application" : 
                           "Journal"}
                        </span>
                        <span>|</span>
                        <span>{publication.year}</span>
                      </div>
                      {/* Keywords */}
                      {publication.keywords && (
                        <div className="flex flex-wrap gap-1.5">
                          {publication.keywords.map((keyword, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-[11px] px-2 py-0.5 rounded-full font-normal bg-muted/50"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link href={`/publications/${slug}`} className="cursor-pointer bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-200">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.abstract}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Research Impact */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">{publications.length}</div>
              <div className="text-sm text-muted-foreground">Research Works</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 mx-auto text-accent mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Research Areas</div>
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
                "Road Surface Analysis",
                "Process Automation",
                "Semiconductor Manufacturing"
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
