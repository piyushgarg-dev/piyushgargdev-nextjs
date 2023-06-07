import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-1 mb-4">Contact with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>piyushgarg.dev@gmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link
                legacyBehavior
                aria-label="Youtube Channel"
                href="https://youtube.com/@piyushgargdev"
              >
                <a target="_blank">
                  <i className="ri-youtube-line"></i>
                </a>
              </Link>
              <Link
                legacyBehavior
                aria-label="Github Profile"
                href="https://github.com/piyushgarg-dev"
              >
                <a target="_blank">
                  <i className="ri-github-line"></i>
                </a>
              </Link>
              <Link
                legacyBehavior
                aria-label="Twitter Account"
                href="https://twitter.com/piyushgarg_dev"
              >
                <a target="_blank">
                  <i className="ri-twitter-line"></i>
                </a>
              </Link>
              <Link
                legacyBehavior
                aria-label="LinedIn Account"
                href="https://www.linkedin.com/in/piyushgarg195/"
              >
                <a target="_blank">
                  <i className="ri-linkedin-line"></i>
                </a>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
