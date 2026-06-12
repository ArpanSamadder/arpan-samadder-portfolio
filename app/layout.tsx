import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpan Samadder | Portfolio",
  description: "Personal portfolio of Arpan Samadder — strategy, storytelling, creative technology, and growth-focused work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
