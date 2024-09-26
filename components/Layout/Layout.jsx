import React, { useState, Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs"
const Layout = (props) => {
  const [displayHeight, setDisplayHeight] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updateDisplayHeight = () => {
      setDisplayHeight(window.innerHeight);
    };
    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
    };
    updateScrollPosition();
    updateDisplayHeight();
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', updateDisplayHeight);
    return () => {
      window.removeEventListener('resize', updateDisplayHeight);
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return (
    <Fragment>
      <Header />
      {displayHeight && ((scrollY) > (displayHeight * (3 / 4))) &&
        // <a href="#" className="fixed right-4 bottom-4 cursor-pointer text-white scale-150">
        //   <BsFillArrowUpCircleFill />
        // </a>}
        <a href="#" className="z-10 text-white fixed right-4 bottom-4 p-2 text-xl border border-white rounded-full bg-white/20  scale-110 hover:scale-125 duration-300 hover:right-5 hover:bottom-5 cursor-pointer">
          <BsFillArrowUpCircleFill />
        </a>}
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
