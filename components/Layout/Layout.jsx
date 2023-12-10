import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div 
      className="flex flex-col grow min-h-screen"
    >
      <Header />
      <div 
        className="flex flex-col flex-grow" /* This will make this div grow to fill up space if content length is less than height of screen */
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
