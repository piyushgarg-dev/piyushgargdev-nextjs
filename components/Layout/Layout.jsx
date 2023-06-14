import React, { Fragment } from "react";
import { LightModeProvider } from "../UI/LightMode";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <LightModeProvider>
      <Fragment>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Fragment>
    </LightModeProvider>
  );
};

export default Layout;
