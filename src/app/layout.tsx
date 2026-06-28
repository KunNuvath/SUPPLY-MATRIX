import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suppy Matrix | Cambodian Suppliers",
  description: "Discover verified farms, importers, and specialty food suppliers across Cambodia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
