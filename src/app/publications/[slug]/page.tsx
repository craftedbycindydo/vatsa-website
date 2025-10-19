"use client";

import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, BookOpen, Target, Award, ArrowLeft, Lightbulb, Database, BarChart3, TrendingUp, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { use } from "react";

interface PublicationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PublicationPage({ params }: PublicationPageProps) {
  const { slug } = use(params);
  
  // Find the publication by slug
  const publication = portfolioData.publications.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );

  if (!publication) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/publications" className="hover:text-foreground transition-colors">Research & Publications</Link>
            <span>/</span>
            <span className="text-foreground truncate">{publication.title}</span>
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
            <Link href="/publications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              List of Research Work
            </Link>
          </Button>
        </div>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto mb-6">
            {publication.type !== 'research' && publication.type !== 'project' && (
              <Badge 
                className={`text-xs font-medium px-3 py-1 ${
                  publication.type === 'journal' 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-accent/20 text-accent border border-accent/30'
                }`}
              >
                {publication.type === 'journal' ? 'Journal' : 'Conference'}
              </Badge>
            )}
            <Badge className={`text-xs font-medium px-3 py-1 ${
              publication.type === 'research'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
                : publication.type === 'project'
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-700'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
            }`}>
              {publication.type === 'research' ? 'Research' : publication.type === 'project' ? 'Project' : 'Published'}
            </Badge>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-8">
            {publication.title}
          </h1>

          {/* Tags/Keywords */}
          {publication.keywords && (
            <div className="max-w-4xl mx-auto mt-6">
              <div className="bg-muted/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap pt-1">Keywords:</span>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="text-xs px-3 py-1 rounded-full font-normal bg-muted/50 whitespace-nowrap"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Problem & Motivation */}
            {(publication.problem || publication.motivation) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Problem & Motivation — The Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {publication.problem && (
                    <p className="text-muted-foreground leading-relaxed">
                      {publication.problem}
                    </p>
                  )}
                  {publication.motivation && (
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-md">
                      <p className="text-foreground font-medium italic">
                        {publication.motivation}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Generic Figure Display - Problem Section */}
            {publication.figures && publication.figures.filter(fig => fig.section === 'problem').map((figure, index) => (
              <div key={`problem-fig-${index}`} className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src={figure.src} 
                    alt={figure.caption}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  {figure.caption}
                </p>
              </div>
            ))}

            {/* Figure 1 - Problem Visualization (Safer Roads) */}
            {slug === 'towards-safer-roads-benchmarking-object-detection-models-in-complex-weather-scenarios' && (
              <div className="my-8">
                <div className="relative w-full h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/fig1.png" 
                    alt="DETR misclassifying vehicles under adverse weather conditions"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  <strong>When AI vision fails:</strong> DETR misclassifies vehicles under rain and sun-flare conditions — mistaking a car for a bus and missing objects entirely at night.
                  This highlights the urgent need for weather-resilient perception models in autonomous driving.
                </p>
              </div>
            )}

            {/* Figure 1 - Problem Visualization (Helmet Detection) */}
            {slug === 'motorcycle-helmet-detection-benchmarking' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/helmet-fig1.png" 
                    alt="Real-world variability in helmet detection"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Real-world variability: single/dual riders, challenging viewpoints, low light, and blur that defeat naive detectors.
                </p>
              </div>
            )}

            {/* Figure 1 - Problem Visualization (De-Photobombing) */}
            {slug === 'image-de-photobombing-benchmark' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/dephotobomb-fig1.png" 
                    alt="Example of de-photobombing process"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Example of de-photobombing: original photobombed image, annotated mask of the unwanted region, and AI-generated clean result.
                </p>
              </div>
            )}

            {/* Figure 1 - Problem Visualization (Comprehensive Analysis) */}
            {slug === 'a-comprehensive-analysis-of-object-detectors-in-adverse-weather-conditions' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/comprehensive-fig1.png" 
                    alt="YOLOv5n misclassifying under adverse weather"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  An example of YOLOv5n misclassifying vehicles and buildings under dense fog—showing how visibility loss impacts real-world object detection.
                </p>
              </div>
            )}

            {/* Figure 1 - Problem Visualization (Urban Traffic Planning) */}
            {slug === 'urban-traffic-planning-simulation-with-time-and-weather-dynamics' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/urban-traffic-fig1.png" 
                    alt="Dynamic lighting visualization in urban simulation"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Dynamic lighting visualization in the urban simulation: daytime (top) and nighttime (bottom) environments enhance planning realism.
                </p>
              </div>
            )}

            {/* Proposed Method */}
            {publication.method && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-500" />
                    Proposed Method — {publication.method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.method.description}
                  </p>
                  
                  {publication.method.scenarios && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Key Components
                      </h4>
                      <ul className="space-y-2">
                        {publication.method.scenarios.map((scenario, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{scenario}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {publication.method.techniques && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Key Techniques
                      </h4>
                      <ul className="space-y-2">
                        {publication.method.techniques.map((technique, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Generic Figure Display - Method Section */}
            {publication.figures && publication.figures.filter(fig => fig.section === 'method').map((figure, index) => (
              <div key={`method-fig-${index}`} className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src={figure.src} 
                    alt={figure.caption}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  {figure.caption}
                </p>
              </div>
            ))}

            {/* Figure 2 - ADCD Dataset */}
            {slug === 'towards-safer-roads-benchmarking-object-detection-models-in-complex-weather-scenarios' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/fig2.png" 
                    alt="ADCD Dataset weather scenarios visualization"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  <strong>Introducing ADCD:</strong> The Adverse Driving Conditions Dataset simulates 12 real-world weather scenarios — including haze, rain, snow, sunset, night, cracked windshields, sun flares, and their complex combinations.
                </p>
              </div>
            )}

            {/* Figure 2 - Method Pipeline (Helmet Detection) */}
            {slug === 'motorcycle-helmet-detection-benchmarking' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/helmet-fig2.png" 
                    alt="End-to-end helmet detection pipeline"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  End-to-end pipeline: traffic video → frame preprocessing → annotation → weather augmentation → detector training & benchmarking.
                </p>
              </div>
            )}

            {/* Figure 2 - Method Pipeline (De-Photobombing) */}
            {slug === 'image-de-photobombing-benchmark' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/dephotobomb-fig2.png" 
                    alt="Benchmarking pipeline for image inpainting"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Benchmarking pipeline: photobombed image + mask processed through multiple inpainting methods to produce clean outputs for comparison.
                </p>
              </div>
            )}

            {/* Figure 2 - Method Pipeline (Comprehensive Analysis) */}
            {slug === 'a-comprehensive-analysis-of-object-detectors-in-adverse-weather-conditions' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/comprehensive-fig2.png" 
                    alt="UWDD dataset samples with weather effects"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Samples from the Urban Weather Diversity Dataset (UWDD) showing base image and synthetic weather conditions—rain, fog, snow, sun flare, and mixed effects.
                </p>
              </div>
            )}

            {/* Figure 2 - Method Pipeline (Urban Traffic Planning) */}
            {slug === 'urban-traffic-planning-simulation-with-time-and-weather-dynamics' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/urban-traffic-fig2.png" 
                    alt="Weather rendering examples in the simulator"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Weather rendering examples in the simulator showing rainy (left) and cloudy (right) conditions.
                </p>
              </div>
            )}

            {/* Evaluation */}
            {publication.evaluation && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                    Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {publication.evaluation.models && (
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Models: </span>
                      {publication.evaluation.models}
                    </p>
                  )}
                  {publication.evaluation.metrics && (
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: publication.evaluation.metrics }}>
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Generic Figure Display - Evaluation Section */}
            {publication.figures && publication.figures.filter(fig => fig.section === 'evaluation').map((figure, index) => (
              <div key={`evaluation-fig-${index}`} className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src={figure.src} 
                    alt={figure.caption}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  {figure.caption}
                </p>
              </div>
            ))}

            {/* Figure 3 - Evaluation Results (Safer Roads) */}
            {slug === 'towards-safer-roads-benchmarking-object-detection-models-in-complex-weather-scenarios' && (
              <div className="my-8">
                <div className="relative w-full h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/fig3.png" 
                    alt="Overall mAP scores for six classes under all weather conditions"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Overall mAP scores (for six classes) under all weather conditions
                </p>
              </div>
            )}

            {/* Figure 3 - Evaluation Results (Helmet Detection) */}
            {slug === 'motorcycle-helmet-detection-benchmarking' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/helmet-fig3.png" 
                    alt="Stress tests under adverse visual conditions"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Stress tests under adverse visual conditions: rain, fog, snow, day/night.
                </p>
              </div>
            )}

            {/* Figure 3 - Evaluation Results (De-Photobombing) */}
            {slug === 'image-de-photobombing-benchmark' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/dephotobomb-fig3.png" 
                    alt="Evaluation process measuring FID, SSIM, and PSNR"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Evaluation process measuring FID, SSIM, and PSNR between algorithm outputs and ground-truth restorations.
                </p>
              </div>
            )}

            {/* Figure 3 - Results (Comprehensive Analysis) */}
            {slug === 'a-comprehensive-analysis-of-object-detectors-in-adverse-weather-conditions' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/comprehensive-fig3.png" 
                    alt="IoU comparison of YOLO variants across weather effects"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Quantitative IoU comparison of eight YOLO variants across individual and combined weather effects. YOLOv5x remains the most stable performer.
                </p>
              </div>
            )}

            {/* Figure 3 - Results (Urban Traffic Planning) */}
            {slug === 'urban-traffic-planning-simulation-with-time-and-weather-dynamics' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/urban-traffic-fig3.png" 
                    alt="User evaluation results comparing conventional and dynamic modes"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  User evaluation results comparing conventional and dynamic modes—our system outperformed in realism, engagement, and functionality.
                </p>
              </div>
            )}

            {/* Results */}
            {publication.results && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {publication.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Generic Figure Display - Results Section */}
            {publication.figures && publication.figures.filter(fig => fig.section === 'results').map((figure, index) => (
              <div key={`results-fig-${index}`} className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-3xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src={figure.src} 
                    alt={figure.caption}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  {figure.caption}
                </p>
              </div>
            ))}

            {/* Figure 4 - Restoration Analysis (Safer Roads) */}
            {slug === 'towards-safer-roads-benchmarking-object-detection-models-in-complex-weather-scenarios' && (
              <div className="my-8">
                <div className="relative w-full h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/fig4.png" 
                    alt="Dehazing models effectiveness on detection accuracy"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  <strong>Restoration helps—but not enough:</strong>
                  Dehazing models (SFNet, CORUN) improve visibility but still fall short of base-level detection accuracy, underscoring the need for training data diversity rather than post-processing fixes.
                </p>
              </div>
            )}

            {/* Figure 4 - Results (Helmet Detection) */}
            {slug === 'motorcycle-helmet-detection-benchmarking' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/helmet-fig4.png" 
                    alt="Detection snapshots across models and conditions"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Detection snapshots across models and conditions—YOLOv7 and Faster R-CNN retain clean boxes under weather noise.
                </p>
              </div>
            )}

            {/* Figure 4 - Results (De-Photobombing) */}
            {slug === 'image-de-photobombing-benchmark' && (
              <div className="my-8 flex flex-col items-center">
                <div className="relative w-full max-w-2xl h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/dephotobomb-fig4.png" 
                    alt="Quantitative comparison of inpainting methods"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center italic px-4">
                  Quantitative comparison of inpainting methods across FID, SSIM, and PSNR metrics — TFill Refined achieves best overall balance.
                </p>
              </div>
            )}

            {/* Key Contributions */}
            {publication.contributions && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    Key Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {publication.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Citation */}
            {publication.citation && publication.type !== 'research' && publication.type !== 'project' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Citation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm bg-muted p-3 rounded-md font-mono leading-relaxed">
                    {publication.citation}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publication Info */}
            {publication.type !== 'research' && publication.type !== 'project' && (
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-center">Publication Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {/* Conference/Journal and Year */}
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        {publication.type === 'journal' ? 'Journal' : 'Conference'}
                      </h4>
                      <p className="text-sm font-medium text-foreground leading-snug">{publication.journal}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Year</h4>
                      <p className="text-sm font-bold text-foreground text-lg">{publication.year}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-3">
                    {publication.doi && (
                      <Button asChild variant="default" size="sm" className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Publication
                        </a>
                      </Button>
                    )}
                    {publication.citation && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          navigator.clipboard.writeText(publication.citation || '');
                          alert('Citation copied to clipboard!');
                        }}
                      >
                        <Quote className="h-4 w-4 mr-2" />
                        Cite
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Technologies Used */}
            {publication.technologies && (
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-center">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Frameworks */}
                  {publication.technologies.frameworks && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Frameworks</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.frameworks.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Generation */}
                  {publication.technologies.generation && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Generation</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.generation.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools */}
                  {publication.technologies.tools && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Tools</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.tools.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Datasets */}
                  {publication.technologies.datasets && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Datasets</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.datasets.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 break-words whitespace-normal max-w-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vision/Text Features */}
                  {publication.technologies.visionText && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Vision/Text Features</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.visionText.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Segmentation */}
                  {publication.technologies.segmentation && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Segmentation</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.segmentation.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Classification */}
                  {publication.technologies.classification && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Classification</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.classification.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Neural Networks */}
                  {publication.technologies.neuralNetworks && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Neural Networks</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.neuralNetworks.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Generators */}
                  {publication.technologies.generators && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Generators Evaluated</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.generators.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800 break-words whitespace-normal max-w-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Classical Methods */}
                  {publication.technologies.classical && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Classical Methods</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.classical.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deep Learning Methods */}
                  {publication.technologies.deep && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Deep Learning Methods</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.deep.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Evaluation Metrics */}
                  {publication.technologies.metrics && (
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Evaluation Metrics</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {publication.technologies.metrics.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-0.5 rounded font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Acknowledgement */}
            {publication.acknowledgement && (
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-center">Acknowledgement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {publication.acknowledgement.text && (
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {publication.acknowledgement.text}
                    </p>
                  )}
                  {publication.acknowledgement.logos && (
                    <div className="flex flex-wrap justify-center items-start gap-6 max-w-full">
                      {publication.acknowledgement.logos.map((logo, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 w-[160px]">
                          <div className="flex items-center justify-center h-[100px] w-full">
                            <Image 
                              src={logo.src} 
                              alt={logo.alt}
                              width={100}
                              height={100}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                          {logo.label && (
                            <p className="text-xs text-muted-foreground text-center leading-relaxed w-full break-words">
                              {logo.label}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Previous/Next Publication Navigation */}
        {(() => {
          const currentIndex = portfolioData.publications.findIndex(
            (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
          );
          const previousPublication = currentIndex > 0 ? portfolioData.publications[currentIndex - 1] : null;
          const nextPublication = portfolioData.publications[currentIndex + 1];
          
          return (previousPublication || nextPublication) ? (
            <div className="mt-16 pt-8 border-t">
              <div className="flex items-center justify-between gap-4">
                {/* Previous Button */}
                {previousPublication ? (
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                  >
                    <Link href={`/publications/${previousPublication.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Previous
                    </Link>
                  </Button>
                ) : (
                  <div className="w-[140px]"></div>
                )}

                {/* Center Text */}
                <div className="flex-1 text-center">
                  {nextPublication && (
                    <>
                      <p className="text-sm text-muted-foreground mb-2">Next Research Work</p>
                      <h3 className="text-xl font-semibold text-foreground">{nextPublication.title}</h3>
                    </>
                  )}
                  {!nextPublication && previousPublication && (
                    <>
                      <p className="text-sm text-muted-foreground mb-2">Previous Research Work</p>
                      <h3 className="text-xl font-semibold text-foreground">{previousPublication.title}</h3>
                    </>
                  )}
                </div>

                {/* Next Button */}
                {nextPublication ? (
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                  >
                    <Link href={`/publications/${nextPublication.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                      Next
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : (
                  <div className="w-[140px]"></div>
                )}
              </div>
            </div>
          ) : null;
        })()}
      </div>
    </div>
  );
}
