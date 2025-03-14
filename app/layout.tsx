import Background from "@/components/layouts/background";
import Header from "@/components/layouts/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "TinyURL Clone",
  description: "This is for practicing NextJS"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Background />

        <Header />
        {children}
      </body>
    </html>
  );
}
