import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Restaurant Websites for European Restaurants",
  description:
    "A boutique website service helping European restaurants, cafes, and bistros launch elegant mobile-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
