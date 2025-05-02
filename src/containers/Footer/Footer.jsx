import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Footer.scss';

const Footer = () => {
  
  



  return (
    <>
      <footer className="theEnd">
        <ul>
          <li><h2>Say hello.</h2></li>
          <li><a href="mailto:dan@badhawkworkshop.com">Email</a></li>
          <li><a href="https://www.linkedin.com/in/dfree/">LinkedIn</a></li>
          <li><a href="https://github.com/gigantc">GitHub</a></li>
         
          <li><a href="tel:4808615448">Phone</a></li>
        </ul>

        </footer>
    </>
  );
};

export default Footer;
