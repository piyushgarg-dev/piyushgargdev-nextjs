
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
    <div className={classes.portfolio__item}>
      <a
        target="_blank"
        rel="noreferrer"
        href={liveUrl}
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {ribbonText && (
          <div
            style={{ zIndex: 99 }}
            className="ribbon ribbon-top-left"
          >
            <span>{ribbonText}</span>
          </div>
        )}

        <div className={classes.portfolio__img}>
          <Image
            alt={title}
            src={img}
            width={380}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>

        <h3 style={{ background: 'transparent', marginTop: '12px' }}>
          {title}
        </h3>

        <p
          style={{
            background: 'transparent',
            marginTop: '6px',
            marginBottom: '12px',
            lineHeight: '1.5',
            overflowWrap: 'anywhere',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '8px',
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
      </a>
    </div>
  );
};

export default PortfolioItem;
