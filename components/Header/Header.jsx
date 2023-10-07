import React, { useRef, useEffect, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaWhmcs } from "react-icons/fa";
import { Container } from "reactstrap";
import { useSession, signOut, signIn } from "next-auth/react";
import classes from "./header.module.css";
import Link from "next/link";
import NewTwitterLogo from "../UI/NewTwitterlogo";
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
    openInNewPage:false,
  },
  {
    path: "/#courses",
    display: "Courses",
    openInNewPage:false,
  },
  {
    path: "/gears",
    display: "My Gears",
    openInNewPage:false,
  },
  {
    path: "https://blog.piyushgarg.dev",
    display: "Blogs",
    openInNewPage:true,
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
                  <Link aria-label={item.display} href={item.path} target={`${item.openInNewPage?'_blank':'_self'}`}>
                    <p className={`${classes.mobile__menu}`}>{icons[index]}</p>
                  </Link>

                  <Link aria-label={item.display} href={item.path} target={`${item.openInNewPage?'_blank':'_self'}`}>
                    <span className=" text-[#808dad] hover:text-green-400">
                      {item.display}
                    </span>
                  </Link>
                </div>
              ))}

              {data && data.user ? (
                <div
                  onClick={signOut}
                  className={`${classes.mobile__menuDiv} cursor-pointer`}
                >
                  <Link href={"#"}>
                    <p className={`${classes.mobile__menu}`}>{icons[4]}</p>
                  </Link>

                  <Link href={"/#"}>
                    <span className=" text-[#808dad] hover:text-green-400">
                      Sign Out
                    </span>
                  </Link>
                </div>
              ) : (
                <div
                  onClick={signIn}
                  className={`${classes.mobile__menuDiv} cursor-pointer`}
                >
                  <Link href={"#"}>
                    <p className={`${classes.mobile__menu}`}>{icons[4]}</p>
                  </Link>

                  <Link href={"#"}>
                    <span className=" text-[#808dad] hover:text-green-400">
                      Login
                    </span>
                  </Link>
                </div>
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
                    className={`cursor-pointer  text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiYoutubeFill />
                  </Link>

                  <Link
                    href="https://github.com/piyushgarg-dev/"
                    target="_blank"
                    title="Github Account"
                    id="github-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiGithubFill />
                  </Link>

                  <Link
                    href="https://twitter.com/piyushgarg_dev"
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <NewTwitterLogo/>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/piyushgarg195/"
                    target="_blank"
                    title="LinkedIn Account"
                    id="linkedin-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
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
