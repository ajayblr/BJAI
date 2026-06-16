import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BJAI | Bihar Jharkhand Association of Ireland",
    template: "%s | BJAI",
  },
  description:
    "BJAI - Bihar Jharkhand Association of Ireland. Aapka Apna Parivar. A vibrant community platform celebrating Bihar and Jharkhand culture, supporting charity, youth, and community life across Ireland.",
  keywords: [
    "BJAI",
    "Bihar Jharkhand Association of Ireland",
    "Indian community Ireland",
    "Bihar community",
    "Jharkhand community",
    "Indian culture Ireland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
