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
  icons :string;
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
  title: "Agathe DIOUF . Développeuse d'applications web",
  description: "Sites vitrines, sites de réservation, sites e-commerce,..., refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant.",
  icons:"/favicon.ico",
  keywords: "Agathe Diouf, Développeur web freelance Angers, Développeur Wordpress Angers, Développeur Wix Angers, Développeur NextJs Angers",
  robots: "index, follow",

  openGraph: {
    title: "Agathe DIOUF . Freelance Développeuse web Angers",
    description: "Refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant. Je suis Agathe DIOUF, Freelance Développeuse web à Angers",
    url: "https://agathe-portfolio-h9cryey64-gnilane95s-projects.vercel.app/",
    siteName: "Agathe DIOUF",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agathe DIOUF - Développeuse d'applications web",
    description: "Refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant.",
    images: ["/favicon.ico"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agathe Diouf",
    url: "https://agathe-portfolio-h9cryey64-gnilane95s-projects.vercel.app/",
    image: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
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