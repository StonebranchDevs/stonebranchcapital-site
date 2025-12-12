// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
