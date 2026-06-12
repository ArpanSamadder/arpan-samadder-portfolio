import type { Metadata } from "next";
import "./globals.css";
import "./mobile-fix.css";
import "./highlights-redesign.css";
import "./highlight-icon-images.css";
import "./experience-logo-images.css";

export const metadata: Metadata = {
  title: "Arpan Samadder | Portfolio",
  description: "Personal portfolio of Arpan Samadder, focused on brand communication, campus leadership, marketing, and execution.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
