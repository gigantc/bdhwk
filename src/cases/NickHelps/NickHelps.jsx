import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './NickHelps.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/gallery-wide.jpg'
import Gallery2 from './assets/gallery-square.jpg'
import Gallery3 from './assets/gallery-square-2.jpg'
import Gallery4 from './assets/gallery-wide-2.jpg'



const NickHelps = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Think Big.";

  const paragraphs = [
    <>
      <strong>The Challenge.</strong>
    </>,
    <>
      Nickelodeon came to us with an ambitious ask: create a digital platform that could engage everyone, from toddlers to parents to educators, all under the same brand roof. The site, Nick Helps, needed to be fun, accessible, and completely flexible. And it had to scale.
    </>,
    <>
      At launch, we were looking at around 100 pages. Within the first year, that number would need to triple.
    </>,
    <>
      But it wasn't just scale. The interface had to be visual enough for preschoolers who couldn't read, but not so “kiddie” that it would turn off teens or adults. It had to look like Nickelodeon while still carrying the weight of the content.
    </>,
    <>
      And it had to be built on WordPress because that's what the marketing team was trained on.
    </>,
    <>
      <strong>The Build.</strong>
    </>,
    <>
      I took this one end to end: development, architecture, client communication, sprint planning, and timeline management. I was the sole developer and project manager, working directly with Nickelodeon's producers to scope features and lock delivery timelines.
    </>,
    <>
      To support scale and flexibility, I designed a modular system from the ground up. Every module on the site could live independently with its own URL or be dropped into any other page. Each one pulled from a single source of content in the backend, avoiding duplication and minimizing admin complexity. Modules could also carry unique themes depending on the section they appeared in. I can safely say  <b>there has never been a Wordpress backend built like this</b>. It's completely unique. I'm so proud of it and would love to show it to you.
    </>,
    <>
      The module types were broad and dynamic. I built support for embedded games, downloadable activity packs, streaming video, interactive callouts, and more.
    </>,
    <>
      Video support came with its own challenge. All content had to use Paramount's new in-house video system, Avia, which had never been used in production. I worked closely with their tech team to integrate and beta test the player. My work helped prepare it for use on <b>Paramount+</b>. 
    </>,
     <>
      <strong>The Deadline.</strong>
    </>,
    <>
      There were no extensions. The site was tied to broadcast deadlines, including Nick News segments and national TV spots with locked air dates. Launch delays were not an option.
    </>,
    <>
      So we moved fast. Designed for scale. Built clean. Delivered on time. They were so happy with the site that they hired us for 7 more development phases over the next 3 years. 
    </>
  ]


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study nick-helps">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Nick Helps" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Nick Helps"
          subtitle="Custom Wordpress Theme And Backend"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            years: "2023-2025",
            client: "Nickelodeon",
            design: "Dan Freeman, Ryan Lord",
            Platform: "WordPress (Custom Theme)",
            "Dev Phases": "8",
            stack: "PHP, Sass, Wordpress, Javascript",
            Role: "Solo Dev + Project Manager"
          }}
          url="https://nickhelps.com/"
          gallery={[Gallery1, Gallery2, Gallery3, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default NickHelps;
