import React, { useContext } from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
import ToggleContext from "../../context/ToggleContext";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { darkMode } = useContext(ToggleContext);

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
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
