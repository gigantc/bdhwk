import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useNavigationType, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import './Unfiltered.scss';



const Unfiltered = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);
  const SplashRef = useRef(null);
  const TitleRef = useRef(null);
  const UnfilteredRef = useRef(null);


  //////////////////////////////////////
  // ANIMATIONS
  useEffect(() => {

    const splash = SplashRef.current;
    const title = TitleRef.current;

    const tl = gsap.timeline({ onComplete: () => setShowSplash(false) });

    if (splash) {

        //border animation
        tl.fromTo(splash, {
          width: '100vw',
          height: '100vh',
        }, {
          width: 'calc(100vw - 50px)',
          height: 'calc(100vh - 50px)',
          duration: 0.5,
          ease: 'power2.out',
        });

        //text animation
        tl.fromTo(title, {
          transform: 'translateY(80px)'
        }, {
          transform: 'translateY(0px)',
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        }, "<");

        //pause
        tl.to({}, { duration: 2 });
        
        //animate out
        tl.to(title, {
          transform: 'translateY(-80px)',
          duration: 0.5,
          ease: 'power2.out',
        });

        tl.to(splash, {
          width: '100vw',
          height: '100vh',
          duration: 1,
          delay: 0.2,
          ease: 'power2.out'
        }, "<");

        tl.to(splash, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });

    }

  }, [])




  // Animate .unfiltered when splash is gone
  useEffect(() => {
    if (!showSplash && UnfilteredRef.current) {
      gsap.fromTo(
        UnfilteredRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        }
      );
    }
  }, [showSplash]);

  



  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">
      
      {showSplash && (
        <div className="splash-screen" ref={SplashRef}>
          <div className="intro-text">
            <span>
              <h1 ref={TitleRef}>Unfiltered</h1>
            </span>
          </div>
        </div>
      )}

      {!showSplash && (
        <section className="unfiltered" ref={UnfilteredRef}>
          <div className="wrap">
            <h1>Unfiltered</h1>
            <p>Big Tobacco's Exploitation of Black America</p>

            <p>year 2025</p>
            <p>client The State of Utah</p>
            <p>design Destin Lastname, Ryan Lord</p>
            <p>stack Vite/React, GSAP, Sass, Three.js</p>
            <p>View Live Site</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      )}
    </section>
  );
};

export default Unfiltered;
