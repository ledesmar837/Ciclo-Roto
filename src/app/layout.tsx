import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://elcicloroto.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "El Ciclo Roto — Bienestar y Salud Mental Basada en Evidencia",
    template: "%s | El Ciclo Roto",
  },
  description:
    "Información responsable sobre salud mental respaldada por ciencia. Artículos sobre ansiedad, depresión, estrés y bienestar emocional con fuentes verificadas.",
  keywords: [
    "salud mental",
    "bienestar emocional",
    "ansiedad",
    "depresión",
    "estrés",
    "terapia",
    "mindfulness",
    "psicología",
    "autoestima",
  ],
  authors: [{ name: "El Ciclo Roto" }],
  creator: "El Ciclo Roto",
  publisher: "El Ciclo Roto",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "El Ciclo Roto",
    title: "El Ciclo Roto — Bienestar y Salud Mental Basada en Evidencia",
    description:
      "Información responsable sobre salud mental respaldada por ciencia. Artículos, recursos y herramientas para tu bienestar emocional.",
    images: [
      {
        url: `${siteUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "El Ciclo Roto — Salud Mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Ciclo Roto — Bienestar y Salud Mental Basada en Evidencia",
    description:
      "Información responsable sobre salud mental respaldada por ciencia.",
    images: [`${siteUrl}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "verification-token", // Replace with real token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="El Ciclo Roto — RSS Feed"
          href="/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "El Ciclo Roto",
              url: siteUrl,
              description:
                "Información responsable sobre salud mental basada en evidencia científica.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/buscar?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-[var(--text-primary)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[var(--color-primary-500)] focus:border focus:border-[var(--color-primary-500)] focus:rounded-xl focus:text-sm focus:font-medium"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
