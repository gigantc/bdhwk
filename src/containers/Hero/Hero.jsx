import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.scss';

const Hero = () => {
  
  const rotateRef = useRef(null);

  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  // HERO SAYINGS
  const words = [
    { up: "I lead digital teams that build great things."},
    { up: "I write code that future me can read."},
    { up: "I launch fast, then iterate faster."},
    { up: "I think good leaders write code too."},
    { up: "I automate the boring stuff."},
    { up: "I build the teams you want in your repo."},
    { up: "I don't fear the merge conflict."},
    { up: "I make room for better ideas."},
    { up: "I ship products and grow people."},
    { up: "I turn chaos into commits."},
    { up: "I turn wireframes into wow."},
    { up: "I scale teams like I scale code."},
    { up: "I believe sites should be elegant in inspector."},
    { up: "I build for the users."},
    { up: "I build for the people who maintain it."},
    { up: "I bring calm to the war room."},
    { up: "I commit code that ships and scales."},
    { up: "I build for startups and scale for enterprises."},
    { up: "I protect devs from chaos and bad meetings."},
    { up: "I lead engineers, not engineering theater."},
    // { up: "I turn complexity into clarity."},
    // { up: "I protect devs from chaos and bad meetings."},
    // { up: "I mentor like someone once did for me."},
    // { up: "I lead with curiosity, ship with precision."},
    // { up: "I lead teams that don’t fear production."},
    // { up: "I foster clarity, curiosity, and clean commits."},
    // { up: "I lead with curiosity, ship with precision."},
    { up: ":)"}
  ];


  useEffect(() => {
    const totalItems = words.length;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    //forward motion
    for (let i = 1; i < totalItems; i++) {
      tl.to(rotateRef.current, {
        y: -60 * i,
        duration: 0.4,
        ease: 'power2.inOut',
      }, `+=3`);
    }

    // Backward motion
    for (let i = totalItems - 2; i >= 0; i--) {
      tl.to(rotateRef.current, {
        y: -60 * i,
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
