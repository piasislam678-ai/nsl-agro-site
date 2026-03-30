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
  title: "NSL Agro Firm",
  description: "Premium dairy & Bengali sweets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Premium dairy & Bengali sweets" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="dXTsdRdrEMV96uBSdLQ2MtmXAL4_rv6ltYrWrK3wMIQ"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}