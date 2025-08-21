import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favad Rahman — Portfolio",
  description: "Portfolio of Favad Rahman — Lighting Designer & Estimation Engineer based in Dubai.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Favad Rahman — Portfolio",
    description: "Portfolio of Favad Rahman — Lighting Designer & Estimation Engineer based in Dubai.",
    url: "https://example.com",
    siteName: "Favad Rahman",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
