import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header theme={props.theme} setTheme={props.setTheme} />

      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
