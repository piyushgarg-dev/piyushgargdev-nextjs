import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const handleClick =()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p onClick={handleClick} className="cursor-pointer">
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
