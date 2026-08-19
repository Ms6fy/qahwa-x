import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: " Qahwa X",
 description:
  "A premium specialty coffee destination offering expertly crafted beverages, carefully selected beans, signature desserts, and an exceptional café experience.",

keywords:
  "Qahwa X, premium coffee, specialty coffee, espresso bar, V60, cold brew, artisan coffee, café, desserts, pastries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lacquer&family=Inter+Tight:ital,wght@0,300..800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
