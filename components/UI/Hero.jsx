import React, { Suspense } from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
import heroImg from "../../public/images/PiyushGarg.png";
import classes from "../../styles/hero.module.css";
import classNames from "../../styles/subtitle.module.css";
import { 
  RiHomeFill, 
  RiUser3Fill, 
  RiCodeFill, 
  RiBriefcaseFill, 
  RiMailFill,
  RiGithubFill,
  RiTwitterFill,
  RiLinkedinFill
} from "react-icons/ri";

const Hero = () => {
  const navigationCards = [
    { icon: <RiHomeFill />, label: "Home", href: "/", active: true },
    { icon: <RiCodeFill />, label: "Courses", href: "/#courses" },
    { icon: <RiBriefcaseFill />, label: "My Gears", href: "/gears" },
    { icon: <RiUser3Fill />, label: "Blogs", href: "https://blog.piyushgarg.dev" },
  ];

  const socialLinks = [
    { icon: <RiGithubFill />, label: "GitHub", href: "https://github.com/piyushgarg-dev" },
    { icon: <RiTwitterFill />, label: "X", href: "https://twitter.com/Piyush_Garg_" },
    { icon: <RiMailFill />, label: "Email", href: "mailto:piyushgargdev@gmail.com" },
    { icon: <RiLinkedinFill />, label: "LinkedIn", href: "https://linkedin.com/in/piyushgarg-dev" },
  ];

  return (
    <section className={`${classes.hero}`}>
      {/* Desktop / Large Screen View */}
      <Container id="hero-section" className="md:flex hidden">
        <Row className="align-items-start min-h-screen pt-2">
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <div className={classes.heroTop}>
                <SectionSubtitle subtitle="Hello" />
                <h2 className="mt-2 mb-2">I&apos;m Piyush Garg</h2>
                <h5 className="mb-3">Fullstack Developer & Instructor</h5>
                <p id="about-me" className="mb-4">
                  Hi there! My name is Piyush Garg and I&rsquo;m a software
                  engineer with over 5 years of experience in the industry. I love
                  all things tech and coding, and on my channel, I share my
                  knowledge and experience with others.
                </p>
              </div>

              {/* Navigation & Social Boxes Container */}
              <div className={classes.boxesContainer}>
                {/* Navigation Box */}
                <div className={classes.navigationBox}>
                  <div className={classes.boxHeader}>
                    <h6 className={classes.sectionTitle}>NAVIGATION</h6>
                  </div>
                  <div className={classes.navigationGrid}>
                    {navigationCards.map((card, index) => (
                      <Link key={index} href={card.href} className={`${classes.navCard} ${card.active ? classes.active : ''}`}>
                        <div className={classes.navIcon}>{card.icon}</div>
                        <span className={classes.navLabel}>{card.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links Box */}
                <div className={classes.socialBox}>
                  <div className={classes.boxHeader}>
                    <h6 className={classes.sectionTitle}>SOCIAL LINKS</h6>
                  </div>
                  <div className={classes.socialGrid}>
                    {socialLinks.map((link, index) => (
                      <Link key={index} href={link.href} target="_blank" className={classes.socialCard}>
                        <div className={classes.socialIcon}>{link.icon}</div>
                        <span className={classes.socialLabel}>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Discord Button */}
              <div className="mt-4">
                <div className="relative inline-flex group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <Link
                    target="_blank"
                    href="https://discord.gg/kRSRxBQ6xf"
                    className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      className="block"
                    >
                      Join Discord Server <BsDiscord />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__img} ${classes.profileSection}`}>
              <div className={classes.profileFrame}>
                <div className={classes.profileImageWrapper}>
                  <Image alt="Piyush Garg" src={heroImg} width="380" height="380" className={classes.profileImage} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mobile / Small Screen View */}
      <Container id="hero-section-mobile" className="md:hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <div className="flex flex-col items-center justify-center">
                {/* Profile Image for Mobile */}
                <Col lg="6" md="6">
                  <div className={`${classes.hero__img} text-center mb-6`}>
                    <div className={classes.profileFrameMobile}>
                      <div className={classes.profileImageWrapper}>
                        <Image
                          alt="Piyush Garg"
                          src={heroImg}
                          width="300"
                          height="300"
                          className={classes.profileImage}
                        />
                      </div>
                    </div>
                  </div>
                </Col>

                <h2 className="mt-3 mb-3 text-center">
                  <span className={`${classNames.section__subtitle}`}>
                    Hello !{" "}
                  </span>
                  I&apos;m Piyush Garg
                </h2>
                <h5 className="mb-4 text-center">Fullstack Developer & Instructor</h5>
                <p id="about-me" className="text-center mb-8">
                  Hi there! My name is Piyush Garg and I&rsquo;m a software
                  engineer with over 5 years of experience in the industry. I
                  love all things tech and coding, and on my channel, I share my
                  knowledge and experience with others.
                </p>

                {/* Navigation Cards Mobile */}
                <div className={classes.navigationSectionMobile}>
                  <h6 className={classes.sectionTitleMobile}>NAVIGATION</h6>
                  <div className={classes.navigationGridMobile}>
                    {navigationCards.map((card, index) => (
                      <Link key={index} href={card.href} className={`${classes.navCardMobile} ${card.active ? classes.activeMobile : ''}`}>
                        <div className={classes.navIconMobile}>{card.icon}</div>
                        <span className={classes.navLabelMobile}>{card.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links Mobile */}
                <div className={classes.socialSectionMobile}>
                  <h6 className={classes.sectionTitleMobile}>SOCIAL LINKS</h6>
                  <div className={classes.socialGridMobile}>
                    {socialLinks.map((link, index) => (
                      <Link key={index} href={link.href} target="_blank" className={classes.socialCardMobile}>
                        <div className={classes.socialIconMobile}>{link.icon}</div>
                        <span className={classes.socialLabelMobile}>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Discord Button Mobile */}
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://discord.gg/kRSRxBQ6xf"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
