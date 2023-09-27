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
    <div className={`${classes.portfolio__item}`}>
      <a
        target="_blank"
        style={{ textDecoration: "none" }}
        href={liveUrl}
        rel="noreferrer"
      >
        <>
          {ribbonText && (
            <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
              <span>{ribbonText}</span>
            </div>
          )}

          <div className="bg-transparent">
            <div className="relative w-full">
              <Image
                alt={title}
                src={img}
                width={380}
                height={1}
                loading="lazy"
                className="rounded-xl object-cover w-auto h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="my-2">{title}</h3>
            <p className="md:line-clamp-4 lg:line-clamp-none">{subtitle}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "8px",
              }}
            >
              {keyword.map((item, index) => (
                <span
                  className={`${classes.portfolio__keyword} my-1`}
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </>
      </a>
    </div>
  );
};

export default PortfolioItem;
