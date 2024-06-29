import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "../sidebar.css";
import "./page.css";
import "../searchbar.css";
import "../trending-card.css";
import "../media-card.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media App",
  description: "Watch your favorite videos or TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
