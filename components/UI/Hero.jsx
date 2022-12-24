import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import heroImg from "../../public/images/PiyushGarg.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container id="hero-section">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Piyush Garg</h2>
              <h5 className="mb-4">Fullstack Developer & Instructor</h5>
              <p id="about-me">
                Hi there! My name is Piyush Garg and I&rsquo;m a software
                engineer with over 5 years of experience in the industry. I love
                all things tech and coding, and on my channel, I share my
                knowledge and experience with others. Whether you&rsquo;re a
                beginner looking to learn the basics or an experienced developer
                looking to expand your skills, I&rsquo;ve got something for you.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="Piyush Garg" src={heroImg} width="450" height="450" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
