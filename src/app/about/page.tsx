import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award, Target, Users, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Dr. Vatsa S. Patel
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn more about my academic journey, research interests, and professional experience
          </p>
        </div>

        {/* Education */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground">Ph.D. in Computer Science</h3>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>University of Dayton</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Specialized in artificial intelligence, machine learning, and computer vision. 
                  Research focused on anomaly detection, autonomous systems, signal processing, 
                  generative AI, and multimodal learning.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Signal Processing</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Position */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Current Position
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground">Assistant Professor of Computer Science</h3>
              <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Penn State Harrisburg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - Present</span>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">
                Teaching and conducting research in artificial intelligence, machine learning, and computer vision. 
                Mentoring undergraduate and graduate students in cutting-edge AI research projects.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Interests */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Research Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Primary Areas</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Artificial Intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Computer Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Anomaly Detection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Specialized Topics</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Autonomous Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Signal Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Generative AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Multimodal Learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Expertise */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Technical Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">MATLAB</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">C++</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                  <Badge variant="outline">Keras</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Research Methods</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Neural Networks</Badge>
                  <Badge variant="outline">Statistical Analysis</Badge>
                  <Badge variant="outline">Data Mining</Badge>
                  <Badge variant="outline">Image Processing</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Teaching & Mentoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Teaching & Mentoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Passionate about educating the next generation of computer scientists and AI researchers. 
              I believe in hands-on learning and encourage students to work on real-world problems 
              that can make a positive impact on society.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Undergraduate Courses</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Introduction to Artificial Intelligence</li>
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Computer Vision</li>
                  <li>• Data Structures & Algorithms</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Graduate Mentoring</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced AI Research Projects</li>
                  <li>• Thesis Supervision</li>
                  <li>• Research Publication Guidance</li>
                  <li>• Conference Presentation Training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}