import React, { useRef, useEffect, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaWhmcs } from "react-icons/fa";
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
  AiFillEdit,
} from "react-icons/ai";

const NAV__LINK = [
  { path: "/", display: "Home", openInNewPage: false },
  { path: "/#courses", display: "Courses", openInNewPage: false },
  { path: "/gears", display: "My Gears", openInNewPage: false },
  { path: "https://blog.piyushgarg.dev", display: "Blogs", openInNewPage: true },
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
    if (window.scrollY > 80) {
      headerRef.current.classList.add(classes.header__shrink);
    } else {
      headerRef.current.classList.remove(classes.header__shrink);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    setCrossMenu(false);
    menuRef.current.classList.toggle(classes.menu__active);
  };

  return (
    <header className={classes.header} ref={headerRef}>
      {/* FULL WIDTH WRAPPER */}
      <div className={classes.nav__wrapper}>
        {/* LOGO */}
        <div className={classes.logo}>
          <Link aria-label="Home Page" href="/">
            <h1>
              <span>P</span>iyush <span>G</span>arg
            </h1>
          </Link>
        </div>

        {/* NAVIGATION */}
        <div
          className={classes.navigation}
          ref={menuRef}
          onClick={toggleMenu}
        >
          <div className={classes.nav__menu}>
            {crossMenu && (
              <div className="absolute top-10 right-10 text-3xl text-white">
                <RiCloseLine />
              </div>
            )}

            {NAV__LINK.map((item, index) => (
              <div key={index} className={classes.mobile__menuDiv}>
                <Link
                  href={item.path}
                  target={item.openInNewPage ? "_blank" : "_self"}
                >
                  <p className={classes.mobile__menu}>{icons[index]}</p>
                </Link>

                <Link
                  href={item.path}
                  target={item.openInNewPage ? "_blank" : "_self"}
                >
                  <span className="text-[#808dad] hover:text-green-400">
                    {item.display}
                  </span>
                </Link>
              </div>
            ))}

            {data?.user ? (
              <div onClick={signOut} className={classes.mobile__menuDiv}>
                <p className={classes.mobile__menu}>{icons[4]}</p>
                <span className="text-[#808dad] hover:text-green-400">
                  Sign Out
                </span>
              </div>
            ) : (
              <div onClick={signIn} className={classes.mobile__menuDiv}>
                <p className={classes.mobile__menu}>{icons[4]}</p>
                <span className="text-[#808dad] hover:text-green-400">
                  Login
                </span>
              </div>
            )}

            {/* SOCIAL ICONS */}
            <div className={classes.nav__right}>
              <div className="flex gap-3 border-l-2 pl-4 border-slate-500">
                <Link href="https://youtube.com/@piyushgargdev" target="_blank">
                  <RiYoutubeFill />
                </Link>
                <Link href="https://github.com/piyushgarg-dev/" target="_blank">
                  <RiGithubFill />
                </Link>
                <Link href="https://twitter.com/piyushgarg_dev" target="_blank">
                  <NewTwitterLogo />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/piyushgarg195/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <span
          onClick={() => setCrossMenu(!crossMenu)}
          className={classes.mobile__menu}
        >
          <i className="ri-menu-line" onClick={toggleMenu}></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
