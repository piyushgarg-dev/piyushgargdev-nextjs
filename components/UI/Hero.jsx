import React, { Suspense } from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
import heroImg from "../../public/images/PiyushGarg.png";
import classes from "../../styles/hero.module.css";
import classNames from "../../styles/subtitle.module.css";
import NewTwitterLogo from "./NewTwitterlogo";
import classes1 from "../Header/header.module.css"

import {
  RiCloseLine,
  RiYoutubeFill,
  RiGithubFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className={` ${classes.hero} `}>
      {/* desktop / large screen view */}
      <Container id="hero-section " className="md:flex hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Piyush Garg</h2>
              <h5 className="mb-4">Fullstack Developer & Instructor</h5>
              <p id="about-me">
                Hi there! My name is Piyush Garg and I&rsquo;m a software
                engineer with over 5 years of experience in the industry. I love
                all things tech and coding, and on my channel, I share my
                knowledge and experience with others.
              </p>
            </div>
            <div className="mt-5 flex place-content-center md:block">
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://discord.gg/kRSRxBQ6xf"
                  className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                    Join Discord Server <BsDiscord />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Row style={{display:"flex",flexDirection:"column",gap:"4rem"}}>
              <div className={`${classes1.hero__img} text-end`}>
                <Image
                  alt="Piyush Garg"
                  src={heroImg}
                  width="450"
                  height="450"
                />
              </div>
              <div className={`${classes1.nav__right}`}>
              
                <div
                  className={`flex flex-row items-center  gap-20 border-l-2 pl-4 border-l-slate-500 `}
                >
                  <span style={{fontSize:"20px",color:"white",fontWeight:"bold"}}>📢 Follow me</span>

                  <Link
                    aria-label="Youtube Channel"
                    href="https://youtube.com/@piyushgargdev"
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={`cursor-pointer  text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiYoutubeFill size={40} />
                  </Link>

                  <Link
                    href="https://github.com/piyushgarg-dev/"
                    target="_blank"
                    title="Github Account"
                    id="github-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiGithubFill size={40} />
                  </Link>

                  <Link
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <NewTwitterLogo />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="LinkedIn Account"
                    id="linkedin-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiLinkedinFill size={40} />
                  </Link>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* mobile / small screen view */}

      <Container id="hero-section" className="md:hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <div className="flex flex-col items-center justify-center">
                <Col lg="6" md="6">
                  <div className={`${classes.hero__img} text-end`}>
                    <Image
                      alt="Piyush Garg"
                      src={heroImg}
                      width="450"
                      height="450"
                    />
                  </div>
                </Col>
                <h2 className="mt-3 mb-3">
                  <span className={`${classNames.section__subtitle}`}>
                    Hello !{" "}
                  </span>
                  I&apos;m Piyush Garg
                </h2>
                <h5 className="mb-4">Fullstack Developer & Instructor</h5>
                <p id="about-me" className="text-center">
                  Hi there! My name is Piyush Garg and I&rsquo;m a software
                  engineer with over 5 years of experience in the industry. I
                  love all things tech and coding, and on my channel, I share my
                  knowledge and experience with others.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://discord.gg/kRSRxBQ6xf"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                    Join Discord Server <BsDiscord />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
