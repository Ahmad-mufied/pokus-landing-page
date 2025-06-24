import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Pokus - Stop Procrastinating, Start Focusing",
  description: "Pokus is a powerful Chrome extension that helps you stay on track, block distractions, and get more done with the Pomodoro Technique. Transform your productivity today.",
  keywords: ["productivity", "focus", "pomodoro", "chrome extension", "distraction blocker", "time management"],
  authors: [{ name: "Pokus Team" }],
  creator: "Pokus Team",
  publisher: "Pokus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pokus-landing-page.vercel.app",
    siteName: "Pokus",
    title: "Pokus - Stop Procrastinating, Start Focusing",
    description: "Transform your productivity with Pokus - the Chrome extension that blocks distractions and helps you focus with the Pomodoro Technique. Get more done, stay on track.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Pokus - Productivity Chrome Extension",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Pokus - Stop Procrastinating, Start Focusing",
    description: "Transform your productivity with Pokus - the Chrome extension that blocks distractions and helps you focus with the Pomodoro Technique.",
    images: ["/og"],
    creator: "@pokus_team",
    site: "@pokus_team",
  },
  
  // Additional meta tags for better social media sharing
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Pokus",
    "application-name": "Pokus",
    "msapplication-config": "/browserconfig.xml",
    
    // WhatsApp specific
    "whatsapp-meta": "true",
    
    // Discord specific
    "discord-meta": "true",
    
    // Telegram specific
    "telegram-meta": "true",
  },
  
  // Robots
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
  
  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-pokus-light.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-pokus-light.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-pokus-light.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo-pokus-light.png",
    },
  },
  
  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better social media sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:secure_url" content="https://pokus-landing-page.vercel.app/og" />
        
        {/* Discord specific meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Telegram specific meta tags */}
        <meta property="og:site_name" content="Pokus" />
        <meta property="og:locale" content="en_US" />
        
        {/* Additional social media meta tags */}
        <meta name="twitter:image:alt" content="Pokus - Productivity Chrome Extension" />
        <meta name="twitter:site" content="@pokus_team" />
        <meta name="twitter:creator" content="@pokus_team" />
        
        {/* LinkedIn specific */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pokus-landing-page.vercel.app" />
        
        {/* Pinterest specific */}
        <meta name="pinterest-rich-pin" content="true" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Pokus",
              "description": "Transform your productivity with Pokus - the Chrome extension that blocks distractions and helps you focus with the Pomodoro Technique.",
              "url": "https://pokus-landing-page.vercel.app",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Chrome",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Pokus Team"
              },
              "screenshot": "https://pokus-landing-page.vercel.app/og",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              }
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 