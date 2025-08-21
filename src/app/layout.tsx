import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Lighting designer & estimation engineer portfolio.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Portfolio",
    description: "Lighting designer & estimation engineer portfolio.",
    url: "https://example.com",
    siteName: "Your Name",
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
