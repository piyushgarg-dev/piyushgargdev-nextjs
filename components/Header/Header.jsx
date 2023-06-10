import React, { useRef, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

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

const Header = () => {
  const [crossMenu, setCrossMenu] = useState(false)
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
    setCrossMenu(false)
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  }

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div style={{ cursor: "pointer" }} className={`${classes.logo}`}>
            <Link aria-label="Home Page" href="/">
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
              {crossMenu && <div className="border text-white text-3xl  absolute top-10 right-10 font-extrabold
              ">
                <RiCloseLine />
              </div>}
              {NAV__LINK.map((item, index) => (
                <Link className="text-[#808dad] hover:text-[#01d293]" aria-label={item.display} href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              {data && data.user ? (
                <a className="text-[#808dad] hover:text-[#01d293]" onClick={signOut} href="#">
                  Sign Out
                </a>
              ) : (
                <a className="text-[#808dad] hover:text-[#01d293]" onClick={signIn} href="#">
                  Login
                </a>
              )}

              <div className={`${classes.nav__right}`}>
                <p className={`d-flex align-items-center gap-3 mb-0`}>
                  <Link
                    aria-label=" Channel"
                    href="https://youtube.com/@piyushgargdev"
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={`ri-youtube-fill cursor-pointer  text-[#ffffff] hover:text-[#01d293]`}
                    rel="noreferrer"
                  ></Link>
                  <Link
                    href="https://github.com/piyushgarg-dev/"
                    target="_blank"
                    title="github Account"
                    id="github-account"
                    className={`ri-github-line  text-[#ffffff] hover:text-[#01d293]`}
                    rel="noreferrer"
                  ></Link>
                  <Link
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`ri-twitter-fill  text-[#ffffff] hover:text-[#01d293]`}
                    rel="noreferrer"
                  ></Link>
                  <Link
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="linkedin Account"
                    id="linkedin-account"
                    className={`ri-linkedin-fill  text-[#ffffff] hover:text-[#01d293]`}
                    rel="noreferrer"
                  ></Link>
                </p>
              </div>
            </div>
          </div>

          <span onClick={() => setCrossMenu(!crossMenu)} className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
