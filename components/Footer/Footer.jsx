import React,{useContext} from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";

import Link from "next/link";

// LightMode
import { LightModeContext } from "../UI/LightMode";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  // LightMode
  const { lightMode, toggleLightNormal } = useContext(LightModeContext);
  

  return (
    <footer className={lightMode ?  `${classes.lightModefooter}` : `${classes.footer}`}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={lightMode ? `${classes.lightModefooter__copyright}` : `${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Piyush Garg. All right
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
