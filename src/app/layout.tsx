import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Free Loft Insulation UK | Loft Insulation Leads - Verified Homeowners",
  description: "Claim free loft insulation in the UK & Cut energy bills, stay warmer. Get fresh, verified loft insulation leads in the UK. Connect with eligible homeowners",
  keywords: "Insulation companies near me, Insulation contractors near me, Insulation installers near me, Insulation contractors, Insulation companies, Loft insulation leads UK, Free loft insulation UK, Loft insulation grants UK, ECO4 loft insulation UK, Great British Insulation Scheme loft, Loft insulation cost UK, Attic insulation UK",
  authors: [{ name: "LIS UK" }],
  creator: "LIS UK",
  publisher: "Loft Insulation Services UK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.loft-insulation-services-uk.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-GB': '/',
      'en': '/',
    },
  },
  openGraph: {
    title: "Free Loft Insulation Grants UK, Buy Quality Loft Insulation Leads",
    description: "Access government-backed grants for free loft insulation in the UK. Exclusive loft insulation leads in the UK",
    url: 'https://www.loft-insulation-services-uk.com/',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://www.loft-insulation-services-uk.com/image.png',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Services UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get fresh, verified loft insulation leads in the UK.',
    description: 'Apply for free loft insulation in the UK. Check your eligibility under the 2025 energy-saving scheme.',
    images: ['https://www.loft-insulation-services-uk.com/image.png'],
    creator: '@l4rgindia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://d3euc6irt3la1j.cloudfront.net/favicon-16x16.webp', sizes: '16x16', type: 'image/webp' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/favicon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/favicon-96x96.webp', sizes: '96x96', type: 'image/webp' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/android-icon-192x192.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-57x57.webp', sizes: '57x57' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-60x60.webp', sizes: '60x60' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-72x72.webp', sizes: '72x72' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-76x76.webp', sizes: '76x76' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-114x114.webp', sizes: '114x114' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-120x120.webp', sizes: '120x120' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-144x144.webp', sizes: '144x144' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-152x152.webp', sizes: '152x152' },
      { url: 'https://d3euc6irt3la1j.cloudfront.net/apple-icon-180x180.webp', sizes: '180x180' },
    ],
    other: [
      { rel: 'manifest', url: 'https://www.loft-insulation-services-uk.com/manifest.json' },
    ],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': 'https://d3euc6irt3la1j.cloudfront.net/ms-icon-144x144.webp',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
