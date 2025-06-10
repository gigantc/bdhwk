import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './Unfiltered.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/gallery-table.jpg'
import Gallery2 from './assets/gallery-frame.jpg'
import Gallery3 from './assets/gallery-frame-2.jpg'
import Gallery4 from './assets/gallery-timeline.jpg'
import Gallery5 from './assets/gallery-ai.jpg'
import Gallery6 from './assets/gallery-chair.jpg'
import Gallery7 from './assets/gallery-exhibit.jpg'



const Unfiltered = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Dismantling a system purposefully built on smoke and mirrors.";

  const paragraphs = [
    <>
      The State of Utah tasked R&R Partners with creating a temporary art installation to expose Big Tobacco's legacy of manipulative, targeted advertising. The result was a visceral, immersive exhibit called “Unfiltered." It was a huge success. It confronted visitors with walls of original ads, old magazine spreads, and TV commercials that showcased the industry's aggressive tactics in communities of color.
    </>,
    <>
      <b>But once the installation came down, we didn't want the message to disappear.</b>
    </>,
    <>
      With no budget and a tight window, we set out to reimagine the installation digitally. The concept was simple, recreate the sensory overload of the original installation through a "scrollytelling" experience. Users are pulled through a hijacked scroll narrative that mimics the exhibit's multi-room experience.
    </>,
    <>
      The build was quick. <b>Just eight days marked for development.</b> I had to prioritize ruthlessly, move fast, and manage a ton of stress. There were many compromises, but the end result still punches above its weight as a standalone digital experience.
    </>,
    <>
      Unfiltered now lives on as a digital story that doesn't just preserve the exhibit, it reframes it. Even with zero budget the site captures the spirit of the original and extends its reach far beyond gallery walls.
    </>,
    <>
      This one was so much fun to build, and I'm proud of what came together in such a short time.
    </>
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Unfiltered" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Unfiltered"
          subtitle="A Scrollytelling, Digital Art Installation"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2025",
            client: "The State of Utah",
            design: "Destin Cox, Ryan Lord",
            timeline: "less than 2 weeks (8 dev days)",
            stack: "Vite/React, GSAP, Sass, Three.js",
            budget: "$0.00",
          }}
          url="https://theunfilteredstory.org"
          gallery={[Gallery1, Gallery2, Gallery3, Gallery7, Gallery5, Gallery6, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default Unfiltered;
