import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useNavigationType, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import './Unfiltered.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/gallery-table.jpg'
import Gallery2 from './assets/gallery-frame.jpg'
import Gallery3 from './assets/gallery-frame-2.jpg'
import Gallery4 from './assets/gallery-timeline.jpg'
import Gallery5 from './assets/gallery-ai.jpg'
import Gallery6 from './assets/gallery-chair.jpg'
import Gallery7 from './assets/gallery-exhibit.jpg'

import LinkIcon from '../../assets/link-arrow-up.svg?react';

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

            <div className="title">
              <h1>Unfiltered</h1>
              <h3>A Scrollytelling, Digital Art Installation</h3>
            </div>

            <div className="image">
              <img src={Hero}npm  alt="Unfiltered Hero Screenshot" />
            </div>
            

            <div className="body">
              
              <div className="writeup">
                <h2>Dismantling a system purposefully built on smoke and mirrors.</h2>

                <p>The State of Utah tasked R&R Partners with creating a temporary art installation to expose Big Tobacco's legacy of manipulative, targeted advertising. The result was a visceral, immersive exhibit called “Unfiltered." It was a huge success. It confronted visitors with walls of original ads, old magazine spreads, and TV commercials that showcased the industry's aggressive tactics in communities of color.</p>

                <p><strong>But once the installation came down, we didn't want the message to disappear with it.</strong></p>

                <p>With no budget and a tight window, we set out to reimagine the installation digitally. The concept was simple, recreate the sensory overload of the original installation through a "scrollytelling" experience. Users are pulled through a hijacked scroll narrative that mimics the exhibit's multi-room experience.</p>

                <p>The build was quick. <strong>Just eight days of development.</strong> I had to prioritize ruthlessly, move fast, and manage a ton of stress. There were many compromises, but the end result still punches above its weight as a standalone digital experience.</p>

                <p>Unfiltered now lives on as a digital story that doesn't just preserve the exhibit, it reframes it. Even with zero budget the site captures the spirit of the original and extends its reach far beyond gallery walls.</p>

                <p>This one was so much fun to build, and I'm proud of what came together in such a short time.</p>

              </div>

              <div className="info">
                <div className="box">
                  <p><span>Year:</span> 2025</p>
                  <p><span>Client:</span>The State of Utah</p>
                  <p><span>Design:</span>Destin Cox, Ryan Lord</p>
                  <p><span>Timeline:</span>less than 2 weeks (8 dev days)</p>
                  <p><span>Budget:</span>$0.00</p>
                  <p><span>Stack:</span>Vite/React, GSAP, Sass, Three.js</p>
                </div>

                <a href="https://theunfilteredstory.org" target="_blank"><LinkIcon /> View Live Site</a>
              </div>

            </div>




            <div className="gallery">
              <div className="card">
                <img src={Gallery1} alt="" />
              </div>
              <div className="card">
                <img src={Gallery2} alt="" />
              </div>
              <div className="card">
                <img src={Gallery3} alt="" />
              </div>
              <div className="card">
                <img src={Gallery7} alt="" />
              </div>
               <div className="card">
                <img src={Gallery5} alt="" />
              </div>
               <div className="card">
                <img src={Gallery6} alt="" />
              </div>
               <div className="card">
                <img src={Gallery4} alt="" />
              </div>
            </div>
            
            

            
            
          </div>
        </section>
      )}
    </section>
  );
};

export default Unfiltered;
