import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // THIS LINE IS THE KEY TO BLENDING EVERYTHING

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMV Vault Pro - Abantü Recordings",
  description: "Luxury Music Distribution Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0908] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
