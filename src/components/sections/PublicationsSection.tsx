"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PublicationsSection() {
  // Router for navigation
  const router = useRouter();
  
  // State for filtering and carousel
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Process publications data
  const combinedItems = useMemo(() => {
    const publications = portfolioData.publications.map(pub => ({
      ...pub,
      itemType: 'publication' as const,
      category: pub.type === 'journal' ? 'Publications' : 'Research',
      shortDescription: pub.abstract.substring(0, 150) + '...',
      tags: pub.keywords || pub.abstract.split(' ').filter(word => word.length > 4).slice(0, 3) // Use keywords if available
    }));
    
    return publications.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));
  }, []);

  // Filter categories - Domain/Application-Based
  const categories = [
    { id: 'all', label: 'All', count: combinedItems.length },
    { 
      id: 'autonomous-driving', 
      label: 'Autonomous Driving', 
      count: combinedItems.filter(item => 
        item.tags.some(tag => ['Autonomous Driving', 'Traffic Surveillance', 'Road Surface Material', 'Helmet Detection', 'Traffic Systems', 'Intelligent Transportation', 'Weather Augmentation', 'AI for Safety', 'Object Detection'].includes(tag))
      ).length 
    },
    { 
      id: 'image-processing', 
      label: 'Computer Vision', 
      count: combinedItems.filter(item => 
        item.tags.some(tag => ['Image Inpainting', 'Photobomb Removal', 'Image Restoration', 'Computer Vision', 'Image Processing', 'Face Recognition', 'Motion Illusion', 'Optical Illusion', 'Multi-task Learning', 'Masked Face', 'Age Prediction', 'Gender Classification', 'Emotion Recognition'].includes(tag))
      ).length 
    },
    { 
      id: 'generative-ai', 
      label: 'Generative AI', 
      count: combinedItems.filter(item => 
        item.tags.some(tag => ['Generative AI', 'Text-to-Image', 'Benchmark', 'Benchmarking', 'Dataset Creation', 'Human Evaluation', 'Visual Quality', 'Realism', 'Aesthetics', 'Synthetic Dataset'].includes(tag))
      ).length 
    },
    { 
      id: 'quantum-signal', 
      label: 'Quantum Computing', 
      count: combinedItems.filter(item => 
        item.tags.some(tag => ['Quantum Machine Learning', 'RF Signal Extraction', 'Quantum Signal Processing', 'Quantum Sensing', 'Radio Frequency Interference', 'Quantum Computing'].includes(tag))
      ).length 
    },
    { 
      id: 'real-estate-urban', 
      label: 'Urban Planning', 
      count: combinedItems.filter(item => 
        item.tags.some(tag => ['House Price Prediction', 'Real Estate AI', 'Urban Traffic Simulation', 'Smart City Planning', 'Urban Planning', 'Smart Cities', 'Data-Driven Simulation', 'Virtual Reality', 'Environmental Modeling'].includes(tag))
      ).length 
    }
  ];

  // Filter items for carousel
  const filteredItems = useMemo(() => {
    let filtered = combinedItems;
    
    if (activeFilter !== 'all') {
      if (activeFilter === 'autonomous-driving') {
        filtered = combinedItems.filter(item => 
          item.tags.some(tag => ['Autonomous Driving', 'Traffic Surveillance', 'Road Surface Material', 'Helmet Detection', 'Traffic Systems', 'Intelligent Transportation', 'Weather Augmentation', 'AI for Safety', 'Object Detection'].includes(tag))
        );
      } else if (activeFilter === 'image-processing') {
        filtered = combinedItems.filter(item => 
          item.tags.some(tag => ['Image Inpainting', 'Photobomb Removal', 'Image Restoration', 'Computer Vision', 'Image Processing', 'Face Recognition', 'Motion Illusion', 'Optical Illusion', 'Multi-task Learning', 'Masked Face', 'Age Prediction', 'Gender Classification', 'Emotion Recognition'].includes(tag))
        );
      } else if (activeFilter === 'generative-ai') {
        filtered = combinedItems.filter(item => 
          item.tags.some(tag => ['Generative AI', 'Text-to-Image', 'Benchmark', 'Benchmarking', 'Dataset Creation', 'Human Evaluation', 'Visual Quality', 'Realism', 'Aesthetics', 'Synthetic Dataset'].includes(tag))
        );
      } else if (activeFilter === 'quantum-signal') {
        filtered = combinedItems.filter(item => 
          item.tags.some(tag => ['Quantum Machine Learning', 'RF Signal Extraction', 'Quantum Signal Processing', 'Quantum Sensing', 'Radio Frequency Interference', 'Quantum Computing'].includes(tag))
        );
      } else if (activeFilter === 'real-estate-urban') {
        filtered = combinedItems.filter(item => 
          item.tags.some(tag => ['House Price Prediction', 'Real Estate AI', 'Urban Traffic Simulation', 'Smart City Planning', 'Urban Planning', 'Smart Cities', 'Data-Driven Simulation', 'Virtual Reality', 'Environmental Modeling'].includes(tag))
        );
      }
    }
    
    return filtered;
  }, [combinedItems, activeFilter]);

  // Animation refs
  const headerRef = useScrollAnimation<HTMLHeadingElement>('fade-up-soft', { delay: 100 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>('fade-up-soft', { delay: 200 });
  const filterRef = useScrollAnimation<HTMLDivElement>('fade-up-soft', { delay: 300 });
  const cardsRef = useScrollAnimation<HTMLDivElement>('fade-up-soft', { delay: 400 });
  const viewAllRef = useScrollAnimation<HTMLDivElement>('scale-fade-gentle', { delay: 500 });

  // Scroll functions for carousel
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to specific page
  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollPosition = pageIndex * scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
    scrollContainerRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiply by 1.5 for faster scrolling
    
    // If moved more than 5px, consider it a drag
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
      scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
    }
    // Reset hasDragged after a short delay to allow click handlers to check it
    setTimeout(() => setHasDragged(false), 100);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
        scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
      }
      setTimeout(() => setHasDragged(false), 100);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.scrollSnapType = 'none';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    
    // If moved more than 5px, consider it a drag
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
    }
    setTimeout(() => setHasDragged(false), 100);
  };

  // Calculate total pages and track current page
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const calculatePages = () => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollAmount = clientWidth * 0.8;
      
      // Calculate how many clicks needed to reach the end
      const pages = Math.ceil((scrollWidth - clientWidth) / scrollAmount) + 1;
      setTotalPages(pages);
    };

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollAmount = container.clientWidth * 0.8;
      const currentPage = Math.round(scrollLeft / scrollAmount);
      setActivePageIndex(currentPage);
    };

    // Calculate pages on mount and when content changes
    calculatePages();
    
    // Also recalculate on window resize
    window.addEventListener('resize', calculatePages);
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', calculatePages);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [filteredItems.length]);

  // Reset active page when filter changes
  useEffect(() => {
    setActivePageIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  return (
    <section id="research" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headerRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Research & Publications
          </h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Published research and projects contributing to the advancement of AI and computer vision
          </p>
        </div>

        {/* Category Filter Bar */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-2 mb-8">
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
                  : "border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs bg-muted/50 dark:bg-muted/30 border-gray-200 dark:border-gray-700">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Horizontal Scroll Carousel */}
        <div ref={cardsRef} className="relative mb-8">
          {/* Navigation Buttons - Left and Right */}
          <Button
            variant="ghost"
            onClick={scrollLeft}
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:bg-background hover:border-gray-300 dark:hover:border-gray-600 hover:!-translate-y-1/2 h-10 w-10 rounded-full p-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <Button
            variant="ghost"
            onClick={scrollRight}
            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:bg-background hover:border-gray-300 dark:hover:border-gray-600 hover:!-translate-y-1/2 h-10 w-10 rounded-full p-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Button>


          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 md:px-2 cursor-grab active:cursor-grabbing"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {filteredItems.map((item, index) => (
            <Card 
              key={`${item.itemType}-${index}`} 
              className="carousel-card group cursor-pointer flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-80 lg:w-80 border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ scrollSnapAlign: 'center' }}
              onClick={(e) => {
                // Prevent navigation if user was dragging
                if (hasDragged) {
                  e.preventDefault();
                  return;
                }
                const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                router.push(`/publications/${slug}`);
              }}
            >
              <div className="h-52 bg-gradient-to-br from-primary/5 to-accent/5 rounded-t-lg relative overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover relative z-0 pointer-events-none select-none"
                    style={{ objectPosition: 'center 60%' }}
                    draggable={false}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
                    <Code2 className="h-12 w-12 text-primary/60 relative z-10" />
                  </>
                )}
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="outline" className="text-xs border-primary/50 dark:border-primary/60 text-primary border-gray-300 dark:border-gray-600 bg-background/80 dark:bg-background/90 backdrop-blur-sm">
                    {item.type === 'research' ? 'Research' : item.type === 'project' ? 'Project' : 'Published'}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600 bg-background/80 dark:bg-background/90 backdrop-blur-sm">
                    {item.year}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight line-clamp-2 font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3 text-muted-foreground leading-relaxed">
                  {item.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-background">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2.5 py-0.5 rounded-full font-medium">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Action Button */}
                <Button 
                  size="sm" 
                  variant="default"
                  className="cursor-pointer w-full transition-all duration-200 bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 text-primary-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Prevent navigation if user was dragging
                    if (hasDragged) {
                      e.preventDefault();
                      return;
                    }
                    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    router.push(`/publications/${slug}`);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    index === activePageIndex
                      ? 'w-8 h-2 bg-primary'
                      : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Research Work Button */}
        <div ref={viewAllRef} className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="cursor-pointer border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            onClick={() => {
              // Navigate to all publications page
              router.push('/publications');
            }}
          >
            View All Research Work
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>


      </div>
    </section>
  );
}
