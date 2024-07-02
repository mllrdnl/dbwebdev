import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-[#191d24] to-[#001229] text-white font-pro">
          <div className="h-24 text-white">
            {/* <Navbar /> */}
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] overflow-auto">
            {/* h-[calc(100vh-6rem)] */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
