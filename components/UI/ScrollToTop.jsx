import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 || window.scroll > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <button
        type="button"
        className={`btn btn-primary rounded d-flex justify-content-center align-items-center ${
          showTopBtn ? "d-inline-block animated fadeIn" : "d-none"
        }`}
        onClick={goToTop}
        style={{ width: "50px", height: "50px" }}
      >
        <FaAngleUp width="28" height="28" />
      </button>
    </div>
  );
};

export default ScrollToTop;
