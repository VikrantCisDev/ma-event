import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BottomBar active="categories" />
    </>
  );
};

export default Layout;
