import React, { ReactNode } from "react";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Head>
    <title>FP Solutions - Usługi Inżynierii Bezpieczeństwa Pożarowego</title>
  </Head>
    <div
      className={`   ${sora.variable} font-sora`}
    >
      <div className="flex items-center justify-between relative z-20 pt-6 px-4 sm:px-20">
      <Header />
        <Nav />

      </div>
      <div className="sm:px-20 px-4 sm:py-20 py-8">{children}</div>
      <Footer/>
    </div>
    </>
  );
};

export default Layout;
