import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";
import SectionSubtitle from "./SectionSubtitle";

const Testimonial = ({ feedbacks = [] }) => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", scale: "1.5" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", scale: "1.5" }}
        onClick={onClick}
      />
    );
  }
  return (
    <section>
      <Container>
        <SectionSubtitle subtitle="Testimonials" />
        <h4 className="mt-4 mb-5 text-2xl">Feedback from students</h4>
        <Row className="sm:p-2 p-10">
          <Slider {...settings}>
            {feedbacks.map((feedBack) => (
              <Col key={feedBack.name} lg="4" md="4" sm="12">
                <TestimonialItem feedBack={feedBack} />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
