import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollUp from "../Features/ScrollUp/ScrollUp";
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
      <ScrollUp />
    </Fragment>
  );
};

export default Layout;
