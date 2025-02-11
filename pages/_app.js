import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import { Navbar, Footer } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/c8f74919dc.js"
        crossorigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
}
