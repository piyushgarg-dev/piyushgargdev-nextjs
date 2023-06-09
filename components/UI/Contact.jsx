import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <a href="mailto:piyushgarg.dev@gmail.com">
                    <i className="ri-mail-line"></i>
                  </a>
                </span>
                <p>
                  <a href="mailto:piyushgarg.dev@gmail.com">piyushgarg.dev@gmail.com</a>
                </p>
              </li>
            </ul>
            <div className="flex justify-between">

              <div className={`${classes.social__links}`}>
                <Link
                  aria-label="Youtube Channel"
                  href="https://youtube.com/@piyushgargdev"
                  target="_blank"
                >
                  <i className="ri-youtube-line"></i>
                </Link>
                <Link
                  aria-label="Github Profile"
                  href="https://github.com/piyushgarg-dev"
                  target="_blank"
                >
                  <i className="ri-github-line"></i>
                </Link>
                <Link
                  aria-label="Twitter Account"
                  href="https://twitter.com/piyushgarg_dev"
                  target="_blank"
                >
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link
                  aria-label="LinedIn Account"
                  href="https://www.linkedin.com/in/piyushgarg195/"
                  target="_blank"
                >
                  <i className="ri-linkedin-line"></i>
                </Link>
              </div>
              <button onClick={handleScrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#01d293" width="54px" height="54px"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="m7.293 15.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L12 10.586l-4.707 4.707z" /><path d="m7.293 11.293 1.414 1.414L12 9.414l3.293 3.293 1.414-1.414L12 6.586l-4.707 4.707z" /></svg>
              </button>
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
