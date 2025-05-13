import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import LinkIcon from '../../assets/link-arrow-up.svg?react';
import './CaseStudy.scss';



const CaseStudy = ({title, subtitle, hero, heading, writeup, info, url, gallery}) => {

  //////////////////////////////////////
  // REFS & STATE
 

  





  //////////////////////////////////////
  // RENDER
  return (
    <div className="unfiltered">
      <div className="wrap">


        <div className="title">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>



        <div className="image">
          <img src={hero} alt="" />
        </div>


        
        <div className="body">
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


        
        <div className="gallery">
          {gallery.map((image, i) => (
            <div className="card" key={i}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CaseStudy;
