import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = ({ youtubeStats, youtubeVideos }) => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const formatSubscribers = (count) => {
    if (!count) return "0 Subscribers";
    const num = Number(count);
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M Subscribers`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K Subscribers`;
    return `${num} Subscribers`;
  };

  return (
    <section id="youtube-stats" className="py-10 bg-gray-900 text-white">
      <Container>
        <Row className="gap-6 flex-wrap">
          {/* YouTube Slider */}
          <Col lg="4" md="12" sm="12">
            <Slider {...settings} className="cursor-pointer">
              {youtubeVideos
                ?.filter((video) => video.id.videoId)
                ?.map((video) => (
                  <div
                    key={video.id.videoId}
                    onClick={() =>
                      window.open(
                        `https://youtube.com/watch?v=${video.id.videoId}`,
                        "_blank",
                        "noreferrer"
                      )
                    }
                    className="p-2"
                  >
                    <div className="relative w-full h-56 md:h-64 lg:h-60">
                      <Image
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                        priority={false}
                      />
                    </div>
                    <p className="font-medium mt-2">{video.snippet.title}</p>
                    <p className="p-2 bg-[#171f38] w-fit text-xs rounded-md mt-2">
                      {new Date(video.snippet.publishTime).toDateString()}
                    </p>
                  </div>
                ))}
            </Slider>
          </Col>

          {/* YouTube Stats */}
          <Col lg="3" md="6" sm="12" className="space-y-4">
            <ServicesItem
              title={formatSubscribers(youtubeStats?.statistics?.subscriberCount)}
              icon="ri-user-add-line"
            />
            <ServicesItem
              title={`${youtubeStats?.statistics?.videoCount || 0} Videos Uploaded`}
              icon="ri-film-line"
            />
          </Col>

          {/* Text Section */}
          <Col lg="5" md="6" sm="12" className={`${classes.service__title} space-y-3`}>
            <SectionSubtitle subtitle="YouTube" />
            <h3 className="mt-4">Popular Uploads from My YouTube Channel</h3>
            <p>
              I would really appreciate it if you could check it out and maybe
              even hit the subscribe button if you enjoy the content.
            </p>
            <p>Thanks in advance!</p>
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
