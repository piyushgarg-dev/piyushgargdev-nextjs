
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
    <div className={`${classes.portfolio__item}`}>
      <a
        target='_blank'
        style={{ textDecoration: 'none' }}
        href={liveUrl}
        rel='noreferrer'
      >
        <>
          {ribbonText && (
            <div style={{ zIndex: 99 }} className='ribbon ribbon-top-left'>
              <span>{ribbonText}</span>
            </div>
          )}

          <div className='bg-transparent'>
            <div className={`${classes.portfolio__img}`}>
              <Image alt={title} src={img} width={380} height={1} style={{maxHeight: "380px", overflow:"auto"}}/>

            </div>

            <h3 className='pb-3 sm:pb-0' style={{ background: "transparent" }}>{title}</h3>
            <p className='hidden sm:block' style={{ background: "transparent", }}>{subtitle}</p>
            
            <div className="hidden  w-[100%] mt-5 lg:mt-0"> </div>
            <div
              className='hidden min-[332px]:flex'
              style={{
                


                
                background: "transparent",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop:"auto",
              }}>

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