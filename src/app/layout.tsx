import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "E11VN \u2014 Beyond Ordinary",
  description:
    "Coffee, Matcha, Sandos & Music. Because normal is boring. A boutique cafe experience where music meets specialty coffee.",
  keywords: "E11VN,Eleven,specialty coffee,matcha,sandos,live music,cafe",
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
