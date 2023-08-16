import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoaxHalt",
  description:
    "Unmask deception and foster critical thinking with HoaxHalt – your guide to discerning fact from fiction. Explore evidence-backed insights that debunk pseudoscience and myths, empowering you with knowledge in the pursuit of truth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
