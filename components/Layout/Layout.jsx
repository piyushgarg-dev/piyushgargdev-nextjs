import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackToTop from "../UI/BackToTop";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export default Layout;
