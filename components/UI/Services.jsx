import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import Link from "next/link";

const Services = ({ youtubeStats, youtubeVideos }) => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section id="youtube-stats">
      <Container>
        <Row>
          <Col lg="3" md="12" sm="12">
            <Slider
              {...settings}
              // style={{ cursor: "pointer", marginBottom: "10px" }}
              className=" cursor-pointer mb-10 md:mb:0"
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
              Whether you're a beginner looking to learn the basics
              or an experienced developer looking to expand your skills, I've
              got something for you. Subscribe to my channel to join me on my
              journey as I explore the exciting world of technology and coding!
            </p>
            <p className="mb-3">Thanks in advance!</p>

            <div className="mt-3 flex flex-col items-start justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#37b4ee] via-[#98398f] to-[#f42d2d] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  href="https://www.youtube.com/@piyushgargdev?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-9 py-3  font-bold text-white transition-all duration-200 bg-danger font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span className="block">Subscribe</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
