import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import LinkIcon from '../../assets/link-arrow-up.svg?react';
import './CaseStudy.scss';



const CaseStudy = ({title, subtitle, hero, heading, writeup, info, url, gallery}) => {

  //////////////////////////////////////
  // REFS & STATE
 const titleRef = useRef(null);
 const heroRef = useRef(null);
 const bodyRef = useRef(null);
 const galleryRef = useRef(null);

  

  //////////////////////////////////////
  // ANIMATIONS
 useEffect(() => {
    gsap.fromTo(titleRef.current,
      { 
        y: -180, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )

    gsap.fromTo(heroRef.current,
      { 
        y: 80, 
        height:'0px',
        opacity: 0 
      },
      { 
        y: 0, 
        height:'587px',
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )

     gsap.fromTo(bodyRef.current,
      { 
        y: 80, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )

    gsap.fromTo(galleryRef.current,
      { 
        y: 80, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )


  }, [])


  //////////////////////////////////////
  // RENDER
  return (
    <div className="unfiltered">
      <div className="wrap">


        <div className="title" ref={titleRef}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>


        {hero && (
        <div className="image" ref={heroRef}>
          <img src={hero} alt="" />
        </div>
        )}


        
        <div className="body" ref={bodyRef}>

          <div className="writeup">
            <h2>{heading}</h2>
            {writeup.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="info">
            <div className="box">
              {Object.entries(info).map(([key, value]) => (
                <p key={key}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                </p>
              ))}
            </div>

            {url && (
              <a href={url} target="_blank"><LinkIcon /> View Live Site</a>
            )}
          </div>

        </div>


        {gallery && (
        <div className="gallery" ref={galleryRef}>
          {gallery.map((image, i) => (
            <div className="card" key={i}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        )}
        
      </div>
    </div>
  );
};

export default CaseStudy;
