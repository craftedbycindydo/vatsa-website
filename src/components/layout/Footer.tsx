import { Mail, Linkedin, ExternalLink, MapPin, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-nav border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Dr. Vatsa S. Patel
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Assistant Professor of Computer Science at Penn State Harrisburg. 
                Specializing in AI, Machine Learning, and Computer Vision research.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p>Penn State Harrisburg</p>
                  <p>Middletown, PA</p>
                </div>
              </div>
            </div>
            
            {/* Research Areas */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Research Focus</h4>
              <div className="flex flex-wrap gap-2">
                {["AI", "Machine Learning", "Computer Vision", "Anomaly Detection"].map((area) => (
                  <span 
                    key={area} 
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect & Collaborate</h4>
            <div className="space-y-3">
              <a
                href="mailto:vsp5275@psu.edu"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-200 group"
              >
                <Mail className="h-4 w-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vatsa-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-200 group"
              >
                <Linkedin className="h-4 w-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://harrisburg.psu.edu/faculty-and-staff/vatsa-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-200 group"
              >
                <ExternalLink className="h-4 w-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span>Penn State Profile</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
              <h5 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Quick Stats</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Papers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-accent">5+</div>
                  <div className="text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Dr. Vatsa S. Patel. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Built with modern web technologies</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
              <span>Designed for accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}