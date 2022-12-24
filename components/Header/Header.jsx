import React, { useRef, useEffect } from "react";

import { Container, Tooltip } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Courses",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>P</span>iyush <span>G</span>arg
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className={`d-flex align-items-center gap-3 mb-0`}>
                  <a
                    href="https://youtube.com/@piyushgargdev"
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={`ri-youtube-fill cursor-pointer text-white`}
                    rel="noreferrer"
                  ></a>
                  <a
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`ri-twitter-fill cursor-pointer text-white`}
                    rel="noreferrer"
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="linedin Account"
                    id="linedin-account"
                    className={`ri-linkedin-fill cursor-pointer text-white`}
                    rel="noreferrer"
                  ></a>
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
