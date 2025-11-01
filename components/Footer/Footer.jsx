import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiYoutubeLine,
  RiGithubFill,
  RiGithubLine,
  RiLinkedinFill,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";
import NewTwitterLogo from "../UI/NewTwitterlogo";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12">
            <div className={`${classes.footer__social_wrap}`}>
              <div className={`${classes.footer__social} ${classes.social__links}`}>
                <Link
                  aria-label="Youtube Channel"
                  href="https://youtube.com/@piyushgargdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.social__item}
                >
                  <span className={classes.icon_outline}>
                    <RiYoutubeLine />
                  </span>
                  <span className={classes.icon_fill}>
                    <RiYoutubeFill />
                  </span>
                </Link>

                <Link
                  aria-label="Github Profile"
                  href="https://github.com/piyushgarg-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.social__item}
                >
                  <span className={classes.icon_outline}>
                    <RiGithubLine />
                  </span>
                  <span className={classes.icon_fill}>
                    <RiGithubFill />
                  </span>
                </Link>

                <Link
                  aria-label="Twitter Account"
                  href="https://twitter.com/piyushgarg_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.social__item}
                >
                  <span className={classes.icon_outline}>
                    <RiTwitterLine />
                  </span>
                  <span className={classes.icon_fill}>
                    <NewTwitterLogo />
                  </span>
                </Link>

                <Link
                  aria-label="LinkedIn Profile"
                  href="https://www.linkedin.com/in/piyushgarg195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.social__item}
                >
                  <span className={classes.icon_outline}>
                    <RiLinkedinLine />
                  </span>
                  <span className={classes.icon_fill}>
                    <RiLinkedinFill />
                  </span>
                </Link>
              </div>

              <div className={`${classes.footer__copyright}`}>
                <p>
                  &copy; Copyright {year} - Developed by Piyush Garg. All right
                  reserved.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
