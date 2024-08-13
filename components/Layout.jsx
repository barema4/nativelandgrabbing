import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Native LandGrab</title>
      </Head>
      <header
        style={{
          height: "6rem",
          padding: "0 1.25rem",
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
