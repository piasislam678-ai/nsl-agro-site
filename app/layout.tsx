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

export const metadata = {
  metadataBase: new URL("https://nsl-agro-site.vercel.app"),

  title: "NSL AGRO | Premium Dairy & Sweets in Khulna",
  description:
  "NSL AGRO is a dairy and sweets shop in Khulna. Buy fresh milk, ghee, paneer and sweets online in Bangladesh.",

  openGraph: {
    title: "NSL AGRO",
    description: "Premium Dairy & Sweets in Khulna",
    url: "https://nsl-agro-site.vercel.app",
    siteName: "NSL AGRO",
    images: [
      {
        url: "https://nsl-agro-site.vercel.app/banner-desktop.jpg", // ✅ USE THIS
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NSL AGRO",
    description: "Fresh Dairy & Sweets in Khulna",
    images: ["https://nsl-agro-site.vercel.app/banner-desktop.jpg"], // ✅ SAME HERE
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Premium dairy & Bengali sweets" />

        <meta
          name="google-site-verification"
          content="dXTsdRdrEMV96uBSdLQ2MtmXAL4_rv6ltYrWrK3wMIQ"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}