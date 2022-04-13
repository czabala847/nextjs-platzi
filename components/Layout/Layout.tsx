import React from "react";
import { Navbar } from "components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </>
  );
};

export default Layout;
