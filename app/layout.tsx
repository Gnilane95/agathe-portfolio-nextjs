import Head from 'next/head'
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});
type CustomMetadata = {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: { url: string; width: number; height: number }[];
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  jsonLd: {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    image: string;
    sameAs: string[];
  };
};
export const metadata: CustomMetadata = {
  title: "Agathe DIOUF . Dévelopeuse d'applications web",
  description: "Sites vitrines, sites de réservation, sites e-commerce,..., refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant.",
  keywords: "Agathe Diouf, freelance développeur web, développeur wordpress, développeur wix, NextJs",
  robots: "index, follow",

  openGraph: {
    title: "Agathe DIOUF . Dévelopeuse d'applications web",
    description: "Refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant.",
    url: "https://ton-site.com",  // Remplace avec l'URL réelle de ton site
    siteName: "Agathe DIOUF",
    images: [
      {
        url: "/img/mon-profil.jpg",  // Image à utiliser pour le partage sur les réseaux sociaux
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",  // Choix du type de carte Twitter
    title: "Agathe DIOUF - Développeuse d'applications web",
    description: "Refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant.",
    images: ["/img/mon-profil.jpg"],  // Image associée à la carte Twitter
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agathe Diouf",
    url: "https://ton-site.com",
    image: "/img/mon-profil.jpg",
    sameAs: [
      "https://www.linkedin.com/in/agathe-diouf/",
      "https://github.com/Gnilane95",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full"> 
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.openGraph.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:type" content={metadata.openGraph.type} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify(metadata.jsonLd)}</script>
      </Head>
      <body className={cn(
        GeistSans.variable, 
        GeistMono.variable, 
        AnekTelugu.variable, 
        "font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}