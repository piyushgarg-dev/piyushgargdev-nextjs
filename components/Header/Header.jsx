import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import { useSession, signOut, signIn } from "next-auth/react";
import classes from "./header.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/#youtube-stats",
    display: "Work",
  },
  {
    path: "/#courses",
    display: "Courses",
  },
  {
    path: "/#terminal-1",
    display: (
      <span style={{ color: "#38CC77", cursor: "pointer" }}>
        {"$ Terminal"}
      </span>
    ),
  },
  {
    path: "/gears",
    display: "My Gears",
  },
  {
    path: "https://blog.piyushgarg.dev",
    display: "Blogs",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const { data } = useSession();

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
          <div style={{ cursor: "pointer" }} className={`${classes.logo}`}>
            <Link href="/">
              <h1>
                <span>P</span>iyush <span>G</span>arg
              </h1>
            </Link>
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

              {data && data.user ? (
                <a onClick={signOut} href="#">
                  Sign Out
                </a>
              ) : (
                <a onClick={signIn} href="#">
                  Login
                </a>
              )}

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
