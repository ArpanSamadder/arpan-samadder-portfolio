import type { Metadata } from "next";
import "./globals.css";
import "./mobile-fix.css";
import "./highlights-redesign.css";
import "./highlight-icon-images.css";
import "./experience-logo-images.css";
import "./projects-preview-redesign.css";
import "./card-interactions-and-images.css";
import "./numbers-skills-polish.css";
import "./final-cta-compact.css";
import "./desktop-heading-cta-polish.css";
import CardInteractions from "./CardInteractions";

export const metadata: Metadata = {
  title: "Arpan Samadder | Portfolio",
  description: "Personal portfolio of Arpan Samadder, focused on brand communication, campus leadership, marketing, and execution.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CardInteractions />
        {children}
      </body>
    </html>
  );
}
