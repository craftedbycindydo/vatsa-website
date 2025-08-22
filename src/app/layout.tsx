import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ScrollAnimationScript } from "@/components/ScrollAnimationScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Vatsa S. Patel - AI & ML Researcher",
  description: "Assistant Professor of Computer Science at Penn State Harrisburg. PhD in Computer Science specializing in AI, ML, and Computer Vision.",
  keywords: ["Vatsa Patel", "Computer Science", "AI", "Machine Learning", "Computer Vision", "Penn State"],
  authors: [{ name: "Dr. Vatsa S. Patel" }],
  openGraph: {
    title: "Dr. Vatsa S. Patel - AI & ML Researcher",
    description: "Assistant Professor of Computer Science at Penn State Harrisburg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <ScrollAnimationScript />
        </ThemeProvider>
      </body>
    </html>
  );
}