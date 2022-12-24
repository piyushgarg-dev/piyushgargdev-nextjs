import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/PiyushGarg.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Piyush Garg</h2>
              <h5 className="mb-4">Fullstack Developer & Instructor</h5>
              <p>
                Hi there! My name is Piyush Garg and I&rsquo;m a software
                engineer with over 5 years of experience in the industry. I love
                all things tech and coding, and on my channel, I share my
                knowledge and experience with others. Whether you&rsquo;re a
                beginner looking to learn the basics or an experienced developer
                looking to expand your skills, I&rsquo;ve got something for you.
              </p>

              {/* <Row className="mt-5">
                <Col lg="4" md="4" sm="12">
                  <button className="pushable">
                    <span className="front">Youtube</span>
                  </button>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <button
                    style={{ marginLeft: "12px", background: "#2484bf" }}
                    className="pushable"
                  >
                    <span style={{ background: "#1DA1F2" }} className="front">
                      Twitter
                    </span>
                  </button>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <button
                    style={{ marginLeft: "12px", background: "#01507b" }}
                    className="pushable"
                  >
                    <span style={{ background: "#0077b5" }} className="front">
                      LinkedIn
                    </span>
                  </button>
                </Col>
              </Row> */}
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="450" height="450" />

              {/* <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div> */}

              {/* <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
