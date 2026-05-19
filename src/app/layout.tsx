import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimmTech — Mobile Apps & Web Platforms",
  description:
    "TimmTech builds polished mobile applications and scalable web platforms. From concept to App Store, we ship products people love.",
  keywords: [
    "mobile app development",
    "web development",
    "React Native",
    "Next.js",
    "iOS",
    "Android",
    "TimmTech",
  ],
  authors: [{ name: "TimmTech LLC" }],
  openGraph: {
    title: "TimmTech — Mobile Apps & Web Platforms",
    description:
      "We build polished mobile applications and scalable web platforms. From concept to App Store, we ship products people love.",
    url: "https://timmtech.co",
    siteName: "TimmTech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimmTech — Mobile Apps & Web Platforms",
    description:
      "We build polished mobile applications and scalable web platforms.",
  },
  metadataBase: new URL("https://timmtech.co"),
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
