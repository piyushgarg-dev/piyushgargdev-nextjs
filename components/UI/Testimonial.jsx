import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import feedbacks from "../data/testimonial";
import Link from "next/link";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">Feebacks from students</h4>

            <Slider {...settings}>
              {feedbacks
                .sort(() => Math.random() - 0.5)
                .map((feedBack) => (
                  <Col key={feedBack.name} lg="4" md="4" sm="12">
                    <div className={`${classes.testimonial__item}`}>
                      <div className={`${classes.testimonial__client}`}>
                        <Image
                          alt="client-img"
                          src={feedBack.userImage}
                          width="50"
                          height="50"
                          className=" rounded-2"
                        />

                        <div>
                          <h6>{feedBack.name}</h6>
                          <h6>
                            <Link
                              style={{ color: "#fff" }}
                              target="_blank"
                              href={feedBack.navigateToUrl}
                            >
                              {feedBack.courseName}
                            </Link>
                          </h6>
                        </div>
                      </div>

                      <p>{feedBack.content}</p>
                    </div>
                  </Col>
                ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
