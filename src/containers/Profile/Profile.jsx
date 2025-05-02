import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import './Profile.scss';


const Profile = () => {

  //////////////////////////////////////
  // REFS
  const textBlock = useRef(null);


  
  //////////////////////////////////////
  // TEXT LOCKING AND ANIMATIONS
  useEffect(() => {

    const ctx = gsap.context(() => {
      const textArea = textBlock.current;
      const h3 = textArea.querySelector('h3');


      // Get the height of the h2 element
      const h3Height = h3.offsetHeight;
      const h3Offset = -(h3Height)/2;
      // Set initial translateY in the style of h3
      // doing this to make sure the text block is centered
      //gsap.set(h3, { y: -(h3Height - 30)/2 });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: textArea,
          start: 'top center',
          end: '+=100%',
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      timeline
        .fromTo(
          h3,
          { opacity: 0, filter: 'blur(10px)', y: h3Offset + 50},
          { opacity: 1, filter: 'blur(0px)', y: (h3Offset), duration: 15 }
        )
          // Pause time - 1 second-sih
        .to({}, { duration: 5 })
        .to(
          h3,
          { 
            opacity: 0, 
            filter: 'blur(3px)', 
            duration: 15 
          },
          '+=1'
        );
    }, textBlock);

    return () => ctx.revert();
  }, []);

  
  //////////////////////////////////////
  // RENDER
  return (
    <>
      <section className="profile" ref={textBlock}>
          <h3 >Driven by a passion for clean code and seamless digital experiences, I've spent the past 15+ years building fast, scalable websites, custom CMS themes, and ecommerce sites that don't just function—they resonate.    
          From Fortune 100 giants to scrappy startups, I've helped teams bring ambitious ideas to life through smart architecture, modern JavaScript frameworks, and UX-led design systems. 
          <br /><br />
          Now, I'm focused on what's next—collaborating, experimenting, and pushing the boundaries of what the web can do.</h3>
      </section>
    </>
  );
};

export default Profile;
