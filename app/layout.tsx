import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const varela = Varela({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

export const metadata: Metadata = {
  title: "GAIA Ventures",
  description: "Mainstreaming Sustainability through Innovative Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${varela.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
