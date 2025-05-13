import React, { useEffect, useRef } from 'react';

import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Profile from '../Profile/Profile.jsx';
import WorkGallery from '../WorkGallery/WorkGallery.jsx';
import Footer from '../Footer/Footer.jsx';

import { gsap } from 'gsap';
import './Home.scss';



const Home = () => {
 const containerRef = useRef(null);
 


 //fade in animation
 useEffect(() => {
       
  const tl = gsap.timeline();
        tl.fromTo(
          containerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          }
        )

  }, [])



  return (
    <>
      <Header />

      <div className="homeContainer" ref={containerRef}>
        
        <Hero />
        <Profile />
        <WorkGallery />

      </div>

      <Footer />
    </>
  );
};

export default Home;

