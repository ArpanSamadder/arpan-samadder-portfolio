import type { Metadata } from "next";
import "./globals.css";
import "./mobile-fix.css";

export const metadata: Metadata = {
  title: "Arpan Samadder | Portfolio",
  description: "Personal portfolio of Arpan Samadder, focused on brand communication, campus leadership, marketing, and execution.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <details className="global-mobile-menu">
          <summary aria-label="Open mobile menu">☰</summary>
          <nav className="global-menu-panel" aria-label="Mobile navigation">
            <a href="/" className="active">Home</a>
            <a href="/profile">Profile</a>
            <a href="/experience">Experience</a>
            <a href="/projects">Projects</a>
            <a href="/hire-me" className="hire-mobile">Hire Me</a>
          </nav>
        </details>
        {children}
      </body>
    </html>
  );
}
