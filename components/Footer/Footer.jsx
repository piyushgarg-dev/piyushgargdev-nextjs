import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const handleBackToTopButtonClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        <button title="Back To Top" onClick={handleBackToTopButtonClick}>
          <FaArrowCircleUp className={classes.backToTop__button} />
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
