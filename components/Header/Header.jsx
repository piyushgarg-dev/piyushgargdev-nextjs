import React, { useRef, useEffect, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaWhmcs } from "react-icons/fa";
import { Container } from "reactstrap";
import { useSession, signOut, signIn } from "next-auth/react";
import classes from "./header.module.css";
import Link from "next/link";

import {
  RiCloseLine,
  RiYoutubeFill,
  RiGithubFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

import {
  AiFillHome,
  AiFillShopping,
  AiFillExclamationCircle,
  AiFillEdit,
} from "react-icons/ai";

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
  <AiFillHome key="home" />,
  <AiFillShopping key="shopping" />,
  <FaWhmcs key="whmcs" />,
  <AiFillEdit key="edit" />,
  <BiLogInCircle key="login" />,
];

const Header = () => {
  const [crossMenu, setCrossMenu] = useState(false);
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
              {crossMenu && (
                <div className="border text-white text-3xl absolute top-10 right-10 font-extrabold">
                  <RiCloseLine />
                </div>
              )}
              {NAV__LINK.map((item, index) => (
                <div
                  key={index}
                  className={`${classes.mobile__menuDiv} cursor-pointer`}
                >
                  <Link aria-label={item.display} href={item.path}>
                    <p className={`${classes.mobile__menu}`}>{icons[index]}</p>
                  </Link>

                  <Link aria-label={item.display} href={item.path}>
                    <span className=" text-[#808dad] hover:text-green-400">
                      {item.display}
                    </span>
                  </Link>
                </div>
              ))}

              {data && data.user ? (
                <a
                  className="text-[#808dad] hover:text-[#01d293]"
                  onClick={signOut}
                  href="#"
                >
                  Sign Out
                </a>
              ) : (
                <div className={`${classes.mobile__menuDiv}`}>
                  <Link href="#">
                    <p className={`${classes.mobile__menu}`}>{icons[4]}</p>
                  </Link>
                  <span className=" text-[#808dad]">Login</span>
                </div>
                // <a onClick={signIn} href="#">
                //   Login
                // </a>
              )}

              <div className={`${classes.nav__right}`}>
                <div
                  className={`flex flex-row items-center gap-3 border-l-2 pl-4 border-l-slate-500 `}
                >
                  <Link
                    aria-label="Youtube Channel"
                    href="https://youtube.com/@piyushgargdev"
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={`cursor-pointer text-white`}
                    rel="noreferrer"
                  >
                    <RiYoutubeFill />
                  </Link>

                  <Link
                    href="https://github.com/piyushgarg-dev/"
                    target="_blank"
                    title="github Account"
                    id="github-account"
                    className={`cursor-pointer text-white`}
                    rel="noreferrer"
                  >
                    <RiGithubFill />
                  </Link>

                  <Link
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`cursor-pointer text-white`}
                    rel="noreferrer"
                  >
                    <RiTwitterFill />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="linkedin Account"
                    id="linkedin-account"
                    className={`cursor-pointer text-white`}
                    rel="noreferrer"
                  >
                    <RiLinkedinFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <span
            onClick={() => setCrossMenu(!crossMenu)}
            className={`${classes.mobile__menu}`}
          >
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
