import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import './Profile.scss';


const Profile = () => {

  const profileRef = useRef(null);
  const textRef = useRef(null);
  
  
  useEffect(() => {
    // const timeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: profileRef.current,
    //     start: 'top center',
    //     end: 'bottom center',
    //     scrub: false,
    //     pin: true,
    //     pinSpacing: true,
    //     markers: true,
    //   }
    // });
  
    // timeline.fromTo(textRef.current,
    //   { autoAlpha: 0, y: 40 },
    //   { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }
    // );
  }, []);


  return (
    <>
      <section className="profile" ref={profileRef}>
        <div className="wrap">
          <h3 ref={textRef}>Driven by a passion for clean code and seamless digital experiences, I've spent the past 15+ years building fast, scalable websites, custom CMS themes, and ecommerce sites that don't just function—they resonate.    
          From Fortune 100 giants to scrappy startups, I've helped teams bring ambitious ideas to life through smart architecture, modern JavaScript frameworks, and UX-led design systems. 
          <br /><br />
          Now, I'm focused on what's next—collaborating, experimenting, and pushing the boundaries of what the web can do.</h3>
        </div>
      </section>
    </>
  );
};

export default Profile;
