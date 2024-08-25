import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PromotionRow } from "@/components/atoms";
import { Header } from "@/components/moliculors";

const outfit = Outfit({ subsets: ["latin"] });
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalEdulink",
  description: "Upskill from Anywhere with Industry-Recognized Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${jakartaSans.className}`}>
        <PromotionRow />
        <Header />
        {children}
      </body>
    </html>
  );
}

