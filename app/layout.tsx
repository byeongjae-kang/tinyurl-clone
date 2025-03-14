import Background from "@/components/layouts/background";
import Header from "@/components/layouts/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "TinyURL Clone",
  description: "This is for practicing NextJS"
};

type Props = Readonly<{
  children: ReactNode;
  myURLs: ReactNode;
}>;

export default function RootLayout({ children, myURLs }: Props) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Background />
        <Header />
        {myURLs}
        {children}
      </body>
    </html>
  );
}
