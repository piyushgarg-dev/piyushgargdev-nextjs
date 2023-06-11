import React, { useRef, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import { ImYoutube } from "react-icons/im";
import {
  AiFillHome,
  AiFillShopping,
  AiFillExclamationCircle,
  AiFillEdit,
} from "react-icons/ai";

import { BiLogInCircle } from "react-icons/bi";

import { FaWhmcs } from "react-icons/fa";

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
    path: "/#courses",
    display: "Courses",
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

const icons = [
  <AiFillHome />,
  <AiFillShopping />,
  <FaWhmcs />,
  <AiFillEdit />,
  <BiLogInCircle />,
];

const Header = () => {
  const [crossMenu, setCrossMenu] = useState(false);

  const [dark, setDark] = useState(false);

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

  const toggleMenu = () => {
    setCrossMenu(false);
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  };

  return (
    <header
      className={!dark ? `${classes.header}` : `${classes.header_light}`}
      ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div style={{ cursor: "pointer" }} className={`${classes.logo}`}>
            <Link aria-label="Home Page" href="/">
              <h1
                className={
                  dark ? `${classes.heading_light}` : `${classes.heading}`
                }>
                <span
                  className={
                    dark ? `${classes.span_light}` : `${classes.span}`
                  }>
                  P
                </span>
                iyush
                <span
                  className={
                    dark ? `${classes.span_light}` : `${classes.span}`
                  }>
                  G
                </span>
                arg
              </h1>
            </Link>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}>
            <div
              className={
                !dark ? `${classes.nav__menu}` : `${classes.nav__menu_light}`
              }>
              {crossMenu && (
                <div
                  className="border  text-3xl  absolute top-10 right-10 font-extrabold
              ">
                  <RiCloseLine />
                </div>
              )}
              {dark ? (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setDark(!dark)}>
                  <MdDarkMode />
                </div>
              ) : (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setDark(!dark)}>
                  <CiLight />
                </div>
              )}
              {NAV__LINK.map((item, index) => (
                <div key={index} className={`${classes.mobile__menuDiv}`}>
                  <Link aria-label={item.display} href={item.path}>
                    <p className={`${classes.mobile__menu}`}>{icons[index]}</p>
                  </Link>
                  <span>{item.display}</span>
                </div>
              ))}

              {data && data.user ? (
                <a onClick={signOut} href="#">
                  Sign Out
                </a>
              ) : (
                <div className={`${classes.mobile__menuDiv}`}>
                  <Link href="#">
                    <p className={`${classes.mobile__menu}`}>{icons[4]}</p>
                  </Link>
                  <span>Login</span>
                </div>
                // <a onClick={signIn} href="#">
                //   Login
                // </a>
              )}

              <div className={`${classes.nav__right}`}>
                <p className={`d-flex align-items-center gap-3 mb-0`}>
                  <Link
                    aria-label="Youtube Channel"
                    href="https://youtube.com/@piyushgargdev"
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={
                      !dark ? "ri-youtube-fill cursor-pointer text-white" : ""
                    }
                    rel="noreferrer">
                    {dark ? <AiFillYoutube /> : ""}
                  </Link>
                  <Link
                    href="https://github.com/piyushgarg-dev/"
                    target="_blank"
                    title="github Account"
                    id="github-account"
                    className={
                      !dark ? "ri-github-line cursor-pointer text-white" : ""
                    }
                    rel="noreferrer">
                    {dark ? <AiFillGithub /> : ""}
                  </Link>
                  <Link
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={
                      !dark ? "ri-twitter-fill cursor-pointer text-white" : ""
                    }
                    rel="noreferrer">
                    {dark ? <AiFillTwitterSquare /> : ""}
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="linkedin Account"
                    id="linkedin-account"
                    className={
                      !dark ? "ri-linkedin-fill cursor-pointer text-white" : ""
                    }
                    rel="noreferrer">
                    {dark ? <AiFillLinkedin /> : ""}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <span
            onClick={() => setCrossMenu(!crossMenu)}
            className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
