import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";
import SectionSubtitle from "./SectionSubtitle";

// Custom arrow components for better UI and clickability
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1e293b] hover:bg-[#334155] rounded-full flex items-center justify-center text-white shadow-lg transition-colors focus:outline-none"
    aria-label="Next"
  >
    &#10095;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-10px] md:left-[-30px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1e293b] hover:bg-[#334155] rounded-full flex items-center justify-center text-white shadow-lg transition-colors focus:outline-none"
    aria-label="Previous"
  >
    &#10094;
  </button>
);

const Testimonial = ({ feedbacks = [] }) => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000, // Changed from 100 for proper tablet responsiveness
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

        {/* Added 'relative' to this wrapper so absolute arrows position correctly */}
        <Row className="sm:p-2 p-10 relative">
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