import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ToggleContextProvider from "../../context/ToggleContextProvider";

const Layout = (props) => {
  return (
    <ToggleContextProvider>
      <Fragment>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Fragment>
    </ToggleContextProvider>
  );
};

export default Layout;
