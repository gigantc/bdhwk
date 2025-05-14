import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Footer.scss';

const Footer = () => {
  
  
  const footerRef = useRef(null);
  
   //fade in animation
  useEffect(() => {
        const tl = gsap.timeline();
          tl.fromTo(
            footerRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            },
            ">0.8"
          );

    }, [])


  return (
    <>
      <footer className="theEnd" ref={footerRef}>
        <ul>
          <li>
            <h2>Say hello.</h2>
          </li>
          <li className="cursorHover">
            <a href="mailto:dan@badhawkworkshop.com">Email</a>
          </li>
          <li className="cursorHover">
            <a href="https://www.linkedin.com/in/dfree/">LinkedIn</a>
          </li>
          <li className="cursorHover">
            <a href="https://github.com/gigantc">GitHub</a>
          </li>
          <li className="cursorHover">
            <a href="tel:4808615448">Phone</a>
          </li>
        </ul>

        </footer>
    </>
  );
};

export default Footer;
