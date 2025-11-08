
import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';
import Link from 'next/link';


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
    className={`${classes.portfolio__item} bg-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between min-h-[420px] relative`}
    style={{ transition: "transform 0.2s ease-in-out" }}
  >
    <a
      target="_blank"
      href={liveUrl}
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Optional Ribbon */}
      {ribbonText && (
        <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
          <span>{ribbonText}</span>
        </div>
      )}

      {/* Image */}
      <div className={`${classes.portfolio__img}`}>
        <Image
          alt={title}
          src={img}
          width={380}
          height={220}
          className="object-cover w-full"
          style={{ maxHeight: "220px", borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-1">{subtitle}</p>
      </div>

      {/* Keywords */}
      <div
        className="flex flex-wrap gap-2 p-3 border-t mt-auto"
        style={{ background: "transparent" }}
      >
        {keyword.map((item, index) => (
          <span
            key={index}
            className={`${classes.portfolio__keyword} bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm`}
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  </div>
);
};

export default PortfolioItem;