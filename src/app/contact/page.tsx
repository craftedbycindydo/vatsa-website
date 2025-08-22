"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I&apos;m always interested in discussing research collaborations, academic opportunities, 
            or potential projects in AI and ML.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a 
                      href="mailto:vsp5275@psu.edu" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      vsp5275@psu.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office Location</div>
                    <div className="text-muted-foreground">
                      Penn State Harrisburg<br />
                      Computer Science Department<br />
                      Pennsylvania, USA
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/vatsa-patel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      Connect with me
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Penn State Profile</div>
                    <a 
                      href="https://harrisburg.psu.edu/faculty-and-staff/vatsa-patel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      View Faculty Page
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Wednesday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday</span>
                    <span className="text-muted-foreground">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Please email in advance to schedule a meeting or to confirm availability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your research interests, collaboration ideas, or questions..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Research Collaboration */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Research Collaboration Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Graduate Students</h3>
                <p className="text-sm text-muted-foreground">
                  Interested in thesis supervision or research mentorship in AI/ML
                </p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Academic Partners</h3>
                <p className="text-sm text-muted-foreground">
                  Joint research projects, paper collaborations, and grant applications
                </p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Industry Connections</h3>
                <p className="text-sm text-muted-foreground">
                  Technology transfer, consulting, and applied research partnerships
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
