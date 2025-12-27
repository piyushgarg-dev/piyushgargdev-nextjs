import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';

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
    <div className={`${classes.portfolio__item} d-flex flex-column`}>
      <a
        target="_blank"
        style={{ textDecoration: 'none' }}
        href={liveUrl}
        rel="noreferrer"
        className="h-100"
      >
        {ribbonText && (
          <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
            <span>{ribbonText}</span>
          </div>
        )}

        <div className="bg-transparent d-flex flex-column h-100">
          <div className={classes.portfolio__img}>
            <Image
              alt={title}
              src={img}
              width={380}
              height={1}
              style={{ maxHeight: '380px' }}
            />
          </div>

          <h3>{title}</h3>
          <p>{subtitle}</p>

          {/* Keywords – pushed to bottom safely */}
          <div className="mt-auto d-flex flex-wrap gap-2">
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
