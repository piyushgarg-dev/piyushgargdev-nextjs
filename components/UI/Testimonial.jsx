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
        <div className="flex items-center gap-3 mt-4 mb-5">
  <img 
    src="https://cdn-icons-png.flaticon.com/128/11778/11778933.png" 
    loading="lazy"  
    alt="Customers review" 
    data-id="4739579" 
    data-src="?term=feedback&page=1&position=7&origin=tag"
    className="w-8 h-8 object-contain"
  />
  <h4 className="text-2xl m-0">Feedbacks from Students</h4>
</div>
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
