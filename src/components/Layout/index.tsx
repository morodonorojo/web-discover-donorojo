import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutTypes } from "./types";

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
