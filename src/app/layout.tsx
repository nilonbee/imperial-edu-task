import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PromotionRow } from "@/components/atoms";
import {Footer, Header} from "@/components/moliculors";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalEdulink",
  description: "Upskill from Anywhere with Industry-Recognized Learning",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#055da8" />
        <link rel="icon" href="./favicon.ico" />
        <title>GlobalEdulink</title>
      </Head>
      <body className={`${outfit.className} ${jakartaSans.className}`}>
        <PromotionRow />
        <Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
