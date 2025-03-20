import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "UniãoVistorias",
  description: "Site União Vistorias",
};

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
        <main className="pt-14 w-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
