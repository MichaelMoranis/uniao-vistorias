import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "UniãoVistorias",
  description: "Site União Vistorias",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '600']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <main className={`pt-12 w-screen ${roboto.className}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
