import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Loft Insulation Services | Professional Insulation Installation UK",
  description: "Professional loft insulation services across the UK. Save up to 25% on energy bills with certified installers. Free quotes and expert advice.",
  keywords: "loft insulation, insulation installation, energy saving, home insulation, UK, professional installers",
  authors: [{ name: "Loft Insulation Services" }],
  openGraph: {
    title: "Loft Insulation Services | Professional Insulation Installation UK",
    description: "Professional loft insulation services across the UK. Save up to 25% on energy bills with certified installers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loft Insulation Services | Professional Insulation Installation UK",
    description: "Professional loft insulation services across the UK. Save up to 25% on energy bills with certified installers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
