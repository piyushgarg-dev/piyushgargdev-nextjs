import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const {
    title,
    img,
    liveUrl,
    keyword = [],
    subtitle,
    ribbonText = null,
  } = props.item;
  return (
    <div
      className={`${classes.portfolio__item}`}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <a
        target="_blank"
        style={{ textDecoration: "none", flex: "1" }}
        href={liveUrl}
        rel="noreferrer"
      >
        <>
          {ribbonText && (
            <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
              <span>{ribbonText}</span>
            </div>
          )}

          <div
            className="bg-transparent"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div className={`${classes.portfolio__img}`} style={{ flex: "1" }}>
              <Image
                alt={title}
                src={img}
                width={380}
                height={250}
                style={{
                  maxHeight: "380px",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ background: "transparent", margin: "10px 0" }}>
                  {title}
                </h3>
                <p style={{ background: "transparent", margin: "10px 0" }}>
                  {subtitle}
                </p>
              </div>

              <div
                style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}
              >
                {keyword.map((item, index) => (
                  <span
                    className={`${classes.portfolio__keyword} my-1`}
                    key={index}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      padding: "5px 10px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      </a>
    </div>
  );
};

export default PortfolioItem;
