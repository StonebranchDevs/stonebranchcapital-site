// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import RevealInit from "@/components/RevealInit";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Stonebranch Capital LLC",
  description:
    "Stonebranch Capital LLC — parent company & ventures. Systems, operations, and automation for service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Cloudflare Turnstile (needed for Contact page spam check) */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />

        {/* Scroll-reveal initializer */}
        <RevealInit />

        {children}

        <Analytics />
      </body>
    </html>
  );
}
