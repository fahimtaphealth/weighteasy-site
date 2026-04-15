import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeightEasy — Your GLP-1 Companion",
  description:
    "An AI coach, cycle-aware nutrition plans, dose and symptom tracking designed for people on Ozempic, Wegovy, Mounjaro, Zepbound and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-sans antialiased">{children}</body>
    </html>
  );
}
