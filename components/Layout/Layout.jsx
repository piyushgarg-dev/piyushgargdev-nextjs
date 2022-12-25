import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
