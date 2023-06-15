import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ThemeLayout from "./ThemeLayout";

const Layout = (props) => {
  return (
    <Fragment>
      <ThemeLayout>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </ThemeLayout>
    </Fragment>
  );
};

export default Layout;
