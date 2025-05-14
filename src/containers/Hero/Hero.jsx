import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.scss';

const Hero = () => {

  //////////////////////////////////////
  // REFS & STATE
  const rotateRef = useRef(null);

  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  // HERO SAYINGS
  const words = [
    { up: "I lead digital teams that build great things."},
    // { up: "I write code that future me can read."},
    // { up: "I think good leaders write code too."},
    // { up: "I launch fast, then iterate faster."},
    // { up: "I automate the boring stuff."},
    // { up: "I build the teams you want in your repo."},
    // { up: "I make room for better ideas."},
    // { up: "I don't fear the merge conflict."},
    // { up: "I launch sites and grow people."},
    // { up: "I turn chaos into commits."},
    // { up: "I turn wireframes into wow."},
    // { up: "I scale teams like I scale code."},
    { up: "I believe sites should be elegant in inspector."},
    // { up: "I build for the users."},
    // { up: "I build for the people who maintain it."},
    // { up: "I mentor like someone once did for me."},
    // { up: "I bring calm to the war room."},
    // { up: "I protect devs from bad meetings."},
    { up: "I build for startups and scale for enterprises."},
    // { up: "I lead teams that don't fear production."},



    //{ up: "I commit code that ships and scales."},
    //{ up: "I lead engineers, not engineering theater."},
    // { up: "I turn complexity into clarity."},
    
    // { up: "I foster clarity, curiosity, and clean commits."},
    // { up: "I lead with curiosity, ship with precision."},
    { up: ":)"}
  ];


  useEffect(() => {
    const totalItems = words.length;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    //let's set our breakpoints
    const getLineHeight = () => {
      const width = window.innerWidth;
      if (width < 720) {
        return 40;
      } else if (width < 1200) {
        return 50;
      } else {
        return 60;
      }
    };
    const ysize = getLineHeight();

    //forward motion
    for (let i = 1; i < totalItems; i++) {
    
      //first item gets a little extra time
      const delay = i === 1 ? 4 : 3;
      
      tl.to(rotateRef.current, {
        y: -ysize * i,
        duration: 0.4,
        ease: 'power2.inOut',
           }, `+=${delay}`);
    }

    // Backward motion
    for (let i = totalItems - 2; i >= 0; i--) {
      tl.to(rotateRef.current, {
        y: -ysize * i,
        duration: 0.4,
        ease: 'power2.inOut',
      }, `+=3`);
    }
  }, []);



  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Hello. I'm Dan Freeman.</h1>
          <div className="sayings">
            <div className="words" ref={rotateRef}>
              {words.map((word, index) => (
                <span
                key={index}
                className="word"
                >
                {word.up}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
