import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";
import SectionSubtitle from "./SectionSubtitle";

const Testimonial = ({ feedbacks = [] }) => {
  // We add a state to track whether the box is open or closed
  const [isOpen, setIsOpen] = useState(false);

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
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="mb-16 relative">
      <Container>
        <SectionSubtitle subtitle="Testimonials <Feedback from students>" />
        {/* Interactive Wrapper */}
        <div className="relative min-h-[400px] flex items-center justify-center mt-10">
          
          {/* THE BOX (Overlay) */}
          <div
            className={`absolute z-50 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
              isOpen ? "opacity-0 pointer-events-none scale-110" : "opacity-100 cursor-pointer scale-100 hover:scale-105"
            }`}
            onClick={() => setIsOpen(true)}
            title="Click to open!"
          >
            {/* Box Lid */}
            <div className={`w-72 h-32 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-t-xl border-b-4 border-cyan-400 shadow-2xl flex items-end justify-center pb-4 transition-transform duration-1000 ease-in-out ${
              isOpen ? "-translate-y-32" : "translate-y-0"
            }`}>
              <span className="text-white font-bold tracking-widest text-lg animate-pulse">CLICK TO OPEN</span>
            </div>
            
            {/* Box Base */}
            <div className={`w-64 h-32 bg-gradient-to-tr from-cyan-800 to-blue-900 rounded-b-xl shadow-2xl transition-transform duration-1000 ease-in-out ${
              isOpen ? "translate-y-32" : "translate-y-0"
            }`}>
              {/* Decorative ribbon/pattern */}
              <div className="w-10 h-full bg-cyan-500/20 mx-auto"></div>
            </div>
          </div>

          {/* THE TESTIMONIALS (Revealed) */}
          <div className={`w-full transition-all duration-1000 delay-300 ease-in-out ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none absolute"
          }`}>
            <div className="relative bg-gradient-to-br from-[#111827] to-[#0b0f19] border border-[#1f2937] border-t-2 border-t-cyan-500 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>

              <Row className="sm:p-2 p-4 relative z-10">
                <Slider {...settings}>
                  {feedbacks.map((feedBack) => (
                    <Col key={feedBack.name} lg="4" md="4" sm="12">
                      <TestimonialItem feedBack={feedBack} />
                    </Col>
                  ))}
                </Slider>
              </Row>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Testimonial;