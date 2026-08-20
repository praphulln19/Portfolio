import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Praphull Kumar — AI/ML Developer",
  description:
    "AI/ML developer and full-stack builder based in Kolkata, India. B.Tech CSE (AI & ML) student shipping deep learning models and full-stack products.",
  // Set this to the real deployment URL once the site has one — it's used to
  // resolve absolute Open Graph / canonical URLs.
  // metadataBase: new URL("https://your-domain-here.com"),
  openGraph: {
    title: "Praphull Kumar — AI/ML Developer",
    description:
      "AI/ML developer and full-stack builder based in Kolkata, India. B.Tech CSE (AI & ML) student shipping deep learning models and full-stack products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
