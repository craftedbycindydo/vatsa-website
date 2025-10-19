import type { Metadata } from "next";
import { Bangers, Comfortaa, PT_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ScrollAnimationScript } from "@/components/ScrollAnimationScript";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vatsa Patel, Ph.D.",
  description: "Assistant Professor of Computer Science at Penn State Harrisburg. PhD in Computer Science specializing in AI, ML, and Computer Vision.",
  keywords: ["Vatsa Patel", "Computer Science", "AI", "Machine Learning", "Computer Vision", "Penn State"],
  authors: [{ name: "Dr. Vatsa S. Patel" }],
  icons: {
    icon: [
      { url: "/vp.png", sizes: "32x32", type: "image/png" },
      { url: "/vp.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/vp.png",
    apple: "/vp.png",
  },
  openGraph: {
    title: "Vatsa Patel, Ph.D.",
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
        className={`${bangers.variable} ${comfortaa.variable} ${ptSerif.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <ScrollAnimationScript />
        </ThemeProvider>
      </body>
    </html>
  );
}