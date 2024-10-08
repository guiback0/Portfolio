import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
   subsets: ["latin"],
   variable: "--font-caption",
});

export const metadata: Metadata = {
   title: "Guillaume Zimmer - Développeur Full Stack",
   description:
      "Découvrez le portfolio de Guillaume, développeur full stack spécialisé en HTML, CSS, JavaScript, TypeScript, React, Node.js, Next.js et Java. Explorez mes projets et compétences pour des solutions web innovantes et performantes.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="h-full">
         <body
            className={cn(
               GeistSans.variable,
               GeistMono.variable,
               AnekTelugu.variable,
               "font-sans h-full bg-backround text-foreground"
            )}>
            {children}
         </body>
      </html>
   );
}
