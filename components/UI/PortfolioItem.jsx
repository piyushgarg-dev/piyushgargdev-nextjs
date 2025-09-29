
import Image from 'next/image';
import React from 'react';
import classes from '../../styles/portfolio-item.module.css';

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
      <a target="_blank" style={{ textDecoration: 'none' }} href={liveUrl} rel="noreferrer">
        {ribbonText && (
          <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
            <span>{ribbonText}</span>
          </div>
        )}

        <div className="bg-transparent">
          <div className={`${classes.portfolio__img}`}>
            <Image alt={title} src={img} fill style={{ objectFit: 'cover', borderRadius: '10px' }} sizes="(max-width: 768px) 100vw, 380px" />
          </div>

          <h3 style={{ background: 'transparent' }}>{title}</h3>

          <p className={classes.portfolio__subtitle}>{subtitle}</p>

          <div className={classes.portfolio__meta}>
            {keyword.map((item, index) => (
              <span className={`${classes.portfolio__keyword} my-1`} key={index}>
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