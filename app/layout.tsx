import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dbwebdev",
  description: "dbwebdev.io portfolio",
};

const mendlSansDawn = localFont({
  src: [
    {
      path: "../styles/MendlSans-DawnLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DawnRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DawnMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DawnSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DawnBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mendlSansDawn",
});

const mendlSansDusk = localFont({
  src: [
    {
      path: "../styles/MendlSans-DuskLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DuskRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DuskMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DuskSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/MendlSans-DuskBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mendlSansDusk",
});

const rollerScript = localFont({
  src: [
    {
      path: "../styles/Rollerscript-Smooth.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-rollerScript",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mendlSansDusk.variable} ${rollerScript.variable} ${mendlSansDawn.variable}`}
      >
        <div className="w-screen h-screen bg-brick-pattern bg-contain bg-center text-white font-mendlSansDusk">
          {/* <div className="h-24 text-white">
            
            <Navbar />
          </div> */}
          <div className="h-[calc(100vh-6rem)] overflow-auto">
            {/* h-[calc(100vh-6rem)] */}
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}

// bg-gradient-to-b from-[#191d24] to-[#001229]
