import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { catherova, lucid, montserrat, poppins } from "@/lib/customFonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "George's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.className} ${catherova.variable} ${montserrat.variable} ${poppins.variable} ${lucid.variable}`
        )}
      >
        {children}
      </body>
    </html>
  );
}
