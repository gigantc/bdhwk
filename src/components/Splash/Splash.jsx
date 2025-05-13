import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './Splash.scss';



const Splash = ({ onComplete, title }) => {

  //////////////////////////////////////
  // REFS & STATE
  const splashRef = useRef(null);
  const titleRef = useRef(null);

  

  //////////////////////////////////////
  // ANIMATIONS
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
          if (onComplete) onComplete();
      }
    });

    //animate in
    tl.fromTo(splashRef.current,
      { 
        width: '100vw', 
        height: '100vh' 
      },
      { 
        width: 'calc(100vw - 50px)', 
        height: 'calc(100vh - 50px)', 
        duration: 0.5,
        ease: 'power2.out'
      }
    )
    .fromTo(titleRef.current,
      { 
        y: 80, 
      },
      { 
        y: 0, 
        duration: 0.5,
        ease: 'power2.out',
      }, "<+=0.2"
    )

     // wait 2 seconds
    .to({}, { duration: 2 })

    //animate out
    .to(titleRef.current,
      { 
        y: -80, 
        duration: 0.5,
        ease: 'power2.out'
      }
    )
    .to(splashRef.current,
      { 
        width: '100vw', 
        height: '100vh', 
        duration: 0.5,
        ease: 'power2.out',
      }, "<+=0.1"
    );


  }, [])



  //////////////////////////////////////
  // RENDER
  return (
    <div className="splash-screen" ref={splashRef}>
      <div className="intro-text">
        <span>
          <h1 ref={titleRef}>{title}</h1>
        </span>
      </div>
    </div>
  );
};

export default Splash;
