import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Richmind Logistics | Reliable Freight & Supply Chain Solutions",
    template: "%s | Richmind Logistics",
  },
  description:
    "Richmind Logistics delivers reliable, efficient, and secure logistics solutions tailored to meet modern business needs.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Richmind Logistics",
    description:
      "Reliable, efficient, and secure logistics solutions you can trust.",
    url: "https://richmindlogistics.com",
    siteName: "Richmind Logistics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richmind Logistics",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Richmind Logistics",
    description:
      "Reliable, efficient, and secure logistics solutions you can trust.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />

        <main className="flex-grow pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
