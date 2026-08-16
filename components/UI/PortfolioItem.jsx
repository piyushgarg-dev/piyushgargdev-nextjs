import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";

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
    <div className={classes.portfolio__item}>
      <a
        target="_blank"
        style={{ textDecoration: "none" }}
        href={liveUrl}
        rel="noreferrer"
        className="flex h-full flex-col"
      >
        {ribbonText && (
          <div
            style={{ zIndex: 99 }}
            className="ribbon ribbon-top-left"
          >
            <span>{ribbonText}</span>
          </div>
        )}

        <div className="bg-transparent flex flex-col h-full">
          <div className={classes.portfolio__img}>
            <Image
              alt={title}
              src={img}
              width={380}
              height={220}
              sizes="(max-width: 576px) 100vw, (max-width: 940px) 50vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "380px",
                objectFit: "cover",
              }}
            />
          </div>

          <h3 style={{ background: "transparent" }}>
            {title}
          </h3>

          <p style={{ background: "transparent" }}>
            {subtitle}
          </p>

          <div className="w-full mt-5 lg:mt-0"></div>

          <div
            className="lg:mt-auto lg:pt-5"
            style={{
              background: "transparent",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {keyword.map((item, index) => (
              <span
                className={classes.portfolio__keyword}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;