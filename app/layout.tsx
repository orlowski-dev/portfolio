import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const inter = Inter({ subsets: ["latin-ext"], variable: "--inter" });

export const metadata: Metadata = {
  title: "Portfolio Patryk Orłowski",
  description: "Portfolio Patryk Orłowski",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.variable}>
        <>
          <AppHeader />
          {children}
          <AppFooter />
        </>
      </body>
    </html>
  );
}
