
import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';

const PortfolioItem = ({ item }) => {
  const {
    title,
    img,
    liveUrl,
    keyword = [],
    subtitle,
    ribbonText = null,
  } = item;

  return (
    <div
      className={classes.portfolio__item}
      style={{
        height: '100%',
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          textDecoration: 'none',
          padding: '14px',
        }}
      >
        {ribbonText && (
          <div
            className="ribbon ribbon-top-left"
            style={{ zIndex: 2 }}
          >
            <span>{ribbonText}</span>
          </div>
        )}

        <div
          className={classes.portfolio__img}
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
        >
          <Image
            alt={title || 'Course thumbnail'}
            src={img}
            width={380}
            height={220}
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            style={{
              display: 'block',
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>

        <h3
          style={{
            background: 'transparent',
            marginTop: '16px',
            marginBottom: '8px',
            fontSize: '1.2rem',
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            background: 'transparent',
            margin: 0,
            marginBottom: '16px',
            lineHeight: 1.6,
            overflowWrap: 'anywhere',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '12px',
          }}
        >
          {keyword.map((tag, index) => (
            <span
              className={classes.portfolio__keyword}
              key={`${tag}-${index}`}
              style={{
                display: 'inline-block',
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                maxWidth: '100%',
                overflowWrap: 'anywhere',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
