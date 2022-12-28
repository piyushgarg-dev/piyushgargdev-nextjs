import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import Link from "next/link";

const Testimonial = ({ feedbacks = [] }) => {
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
        <SectionSubtitle subtitle="Testimonials" />
        <h4 className="mt-4 mb-5">Feebacks from students</h4>
        <Row>
          <Slider {...settings}>
            {feedbacks.map((feedBack) => (
              <Col key={feedBack.name} lg="4" md="4" sm="12">
                <div className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <Image
                      alt={feedBack.name}
                      src={
                        feedBack.userImage ??
                        "https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Favatar.png&w=80&fit=cover&h=80&q=70&output=webp"
                      }
                      width="50"
                      height="50"
                      className=" rounded-2"
                    />

                    <div>
                      <h6>{feedBack.name}</h6>

                      <h6>
                        <Link
                          aria-label={feedBack.courseName}
                          target="_blank"
                          href={feedBack.navigateToUrl}
                        >
                          {feedBack.courseName}
                        </Link>
                      </h6>
                    </div>
                  </div>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <i
                        key={index}
                        style={{ color: "#FFD700" }}
                        className="ri-star-fill"
                      />
                    ))}
                  <p style={{ fontSize: "20px" }}>{feedBack.content}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
