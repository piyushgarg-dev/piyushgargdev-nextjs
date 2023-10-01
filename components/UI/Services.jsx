import React, { useRef } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = ({ youtubeStats, youtubeVideos }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div className="custom-dots-container">
        <ul style={{ margin: "-5px" }}> {dots} </ul>
      </div>
    ),
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section id="youtube-stats">
      <Container>
        <Row>
          <Col lg="3" md="12" sm="12" className="relative">
            <Slider
              {...settings}
              ref={sliderRef}
              className="cursor-pointer mb-10 md:mb:0"
            >
              {youtubeVideos
                ?.filter((video) => video.id.videoId)
                ?.map((video) => (
                  <div
                    onClick={() =>
                      window.open(
                        `https://youtube.com/watch?v=${video.id.videoId}`,
                        "_blank"
                      )
                    }
                    style={{ padding: "10px" }}
                    key={video.id.videoId}
                  >
                    <Image
                      src={video.snippet.thumbnails.medium.url}
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{
                        borderRadius: "20px",
                        marginBottom: "10px",
                        width: "100%",
                        height: "auto",
                      }}
                      alt={video.snippet.title}
                    />
                    <p>{video.snippet.title}</p>
                    <p className="p-2.5 bg-[#171f38] w-fit text-xs text-white mt-2 rounded-md">
                      {new Date(video.snippet.publishTime).toDateString()}
                    </p>
                  </div>
                ))}
            </Slider>

            <div className="w-[100%] flex  mt-[-1px]  mb-[30px] h-[25px]">
              <button
                onClick={handlePrev}
                className={` text-red-500  mx-auto  text-xl		 `}
              >
                <i class="ri-arrow-left-circle-fill"></i>
              </button>

              <button
                onClick={handleNext}
                className={` text-blue-500  text-xl	mx-auto	`}
              >
                <i class="ri-arrow-right-circle-fill"></i>
              </button>
            </div>
          </Col>
          <Col lg="3" md="6">
            <ServicesItem
              title={`${(
                Number(youtubeStats?.statistics?.subscriberCount) / 1000
              ).toPrecision(3)}K Subscribers`}
              icon="ri-user-add-line"
            />
            <ServicesItem
              title={`${youtubeStats?.statistics?.videoCount} Videos Uploaded`}
              icon="ri-film-line"
            />
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Youtube" />
            <h3 className="mb-0 mt-4">Popular</h3>
            <h3 className="mb-2">Uploads from My Youtube Channel</h3>
            <p>
              I would really appreciate it if you could check it out and maybe
              even hit the subscribe button if you enjoy the content.
            </p>
            <p className="mb-3">Thanks in advance!</p>
            <a
              href="https://www.youtube.com/@piyushgargdev?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="danger">Subscribe</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Services;
