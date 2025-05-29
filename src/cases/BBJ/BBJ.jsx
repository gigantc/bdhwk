import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './BBJ.scss';


import Hero from './assets/hero.jpg'
import FullConfigure from './assets/full_configure.jpg'
import FullPage from './assets/full_pagehero.jpg'
import SquareComfort from './assets/square-comfort.jpg'
import SquareMap from './assets/square-map.jpg'
import SquareSelect from './assets/square-select.jpg'
import SquareSupport from './assets/square-support.jpg'



const BBJ = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "A Custom Theme for Custom Planes.";

  const paragraphs = [
    <>
      <strong>The Build.</strong>
    </>,
    <>
      The Boeing Business Jets site is built on top of my custom <a href="https://github.com/gigantc/dfree-wp-boilerplate" target="_blank">WordPress boilerplate</a>, a stripped-down, cleanly architected starter framework designed with custom developers in mind. The backend features a completely custom Gutenberg experience, giving the client a modular, drag-and-drop editing workflow that actually makes sense. Creating pages, reordering content, and tweaking layouts is all easy, fast, foolproof and comfortable.
    </>,
    <>
      I brought the static design to life with subtle, high-end animation touches that elevate the visual language without getting in the way. It's the kind of experience you have to scroll to really feel.
    </>,
    <>
      <strong>Custom Features.</strong>
    </>,
    <>
      Key components include a fully WP-admin-editable aircraft range map, and an interactive interior configurator that allows users to build their own custom layout and export it as a PDF for sales conversations. These aren't plugins — they're hand-built components designed specifically for Boeing's needs.
    </>,
    <>
      <strong>My Philosophy.</strong>
    </>,
    <>
      WordPress gets a bad rap in this industry and yeah, most of that is well deserved. Bloated themes, janky plugins, and spaghetti code are everywhere. But in the right hands, WordPress is still one of the most client-friendly platforms out there. It's familiar. It's flexible. And when you build everything custom without plugins (except ACF!), you stay in control. The client gets a backend they are comfortable in. And you don't wake up in a cold sweat because someone installed a mega-slider plugin that's going to ruin everything!
    </>
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Business Jets" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Business Jets"
          subtitle="A Custom Theme"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2024",
            client: "Boeing",
            design: "Ryan Lord",
            timeline: "3 Weeks",
            Platform: "WordPress (Custom Theme)",
            stack: "PHP, Sass, GSAP, Javascript",
            plugin: "Advanced Custom Fields"
          }}
          url="https://businessjets.boeing.com/"
          gallery={[FullPage, SquareMap, SquareSelect, FullConfigure, SquareSupport, SquareComfort]}
        />
        
      )}
    </section>
  );
};

export default BBJ;
