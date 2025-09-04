import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROOF Insights - Market Research & Advanced Analytics",
  description: "Transform data into strategic advantage through evidence-based market research, brand strategy, and advanced analytics. Trusted by 200+ leading brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
    </html>
  );
}