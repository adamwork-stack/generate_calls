import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Service Solutions | Expert Local Services",
  description:
    "Professional local services with premium quality. Get expert help for HVAC, plumbing, roofing, and cleaning services. Call now for a free quote!",
  keywords: "local services, HVAC, plumbing, roofing, cleaning, professional services",
  authors: [{ name: "Premium Service Solutions" }],
  openGraph: {
    title: "Premium Service Solutions | Expert Local Services",
    description:
      "Professional local services with premium quality. Get expert help today!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Service Solutions | Expert Local Services",
    description: "Professional local services with premium quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
