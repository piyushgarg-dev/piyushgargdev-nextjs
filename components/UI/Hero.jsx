import React from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
import heroImg from "/images/PiyushGarg.png"; // Use path from public folder
import classNames from "../../styles/subtitle.module.css";

const Hero = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white">
      {/* Desktop / large screen */}
      <Container id="hero-section" className="hidden md:flex">
        <Row className="items-center">
          {/* Left Content */}
          <Col lg="6" md="6">
            <div className="space-y-4">
              <SectionSubtitle subtitle="Hello" />
              <h2 className="text-4xl font-bold">I&apos;m Piyush Garg</h2>
              <h5 className="text-xl">Fullstack Developer & Instructor</h5>
              <p className="text-gray-300">
                Hi there! My name is Piyush Garg and I&rsquo;m a software engineer
                with over 5 years of experience in the industry. I love all
                things tech and coding, and on my channel, I share my knowledge
                and experience with others.
              </p>

              <div className="mt-5">
                <Link
                  href="https://discord.gg/kRSRxBQ6xf"
                  target="_blank"
                  className="relative inline-flex items-center px-8 py-4 font-bold text-white bg-gray-800 rounded-xl group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    Join Discord Server <BsDiscord />
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col lg="6" md="6" className="flex justify-end">
            <div className="relative w-72 md:w-96">
              <Image
                src={heroImg}
                alt="Piyush Garg"
                width={450}
                height={450}
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mobile / small screen */}
      <Container id="hero-section" className="md:hidden text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-64 h-64 relative">
            <Image
              src={heroImg}
              alt="Piyush Garg"
              width={450}
              height={450}
              className="object-cover rounded-full w-full h-full"
              priority
            />
          </div>

          <h2 className="text-3xl font-bold">
            <span className={classNames.section__subtitle}>Hello! </span>
            I&apos;m Piyush Garg
          </h2>
          <h5 className="text-lg">Fullstack Developer & Instructor</h5>
          <p className="text-gray-300 px-4">
            Hi there! My name is Piyush Garg and I&rsquo;m a software engineer
            with over 5 years of experience in the industry. I love all things
            tech and coding, and on my channel, I share my knowledge and
            experience with others.
          </p>

          <div className="mt-5">
            <Link
              href="https://discord.gg/kRSRxBQ6xf"
              target="_blank"
              className="relative inline-flex items-center px-8 py-4 font-bold text-white bg-gray-800 rounded-xl group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-2">
                Join Discord Server <BsDiscord />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
