import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './SEARHC.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/gallery-wide.jpg'
import Gallery2 from './assets/gallery-square.jpg'
import Gallery3 from './assets/gallery-square-2.jpg'
import Gallery4 from './assets/gallery-wide-2.jpg'



const SEARHC = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Optimized for the Edge of the Map.";

  const paragraphs = [
    <>
      <strong>The Insight.</strong>
    </>,
    <>
      The SEARHC website is critical healthcare infrastructure for a lot of very different Alaskan communities. But the old platform wasn't holding up its end. Patients had to fight the site to reach care tools. Prospective employees hit friction the moment they tried to apply. And internal teams couldn't update their own content without opening a ticket.
    </>,
    <>
      <strong>The Approach.</strong>
    </>,
    <>
      We started with a deep discovery phase. Stakeholder workshops, user personas, and a full UX audit. The goal wasn't a facelift, it was a complete digital transformation, mapped out before a single line of code got written.
    </>,
    <>
      From there, we built a responsive, <b>WCAG 2.2-compliant</b> WordPress platform with a clean visual identity pulled directly from the Southeast Alaskan environment. The architecture simplifies patient pathways and puts direct access to portals like <b>MySEARHC</b> and <b>Workday</b> right where users expect them.
    </>,
    <>
      <strong>The Framework.</strong>
    </>,
    <>
      The backend was designed around a content governance model, not just a CMS. Internal staff can maintain their own resources without breaking the system or waiting on a developer. Roles, permissions, and editing patterns are all shaped so the people closest to the content own it.
    </>,
    <>
      <strong>The Optimization.</strong>
    </>,
    <>
      A lot of SEARHC's patients live in remote parts of Southeast Alaska on satellite connections and metered data plans. A "modern" website that ships 1MB of fonts, scripts, and imagery isn't accessible, no matter how compliant the markup is. So I built a <b>Low Data Mode</b> into the theme.
    </>,
    <>
      Toggle it on and the page drops from <b>~1.1MB to ~54KB</b>. That's a <b>95% reduction</b>, and it's not a CSS trick. The savings happen server-side, before a byte of HTML leaves the origin. Images never render. Fonts are stripped. Non-essential scripts are never enqueued. Gravity Forms bails early so it can't drag in its ~100KB of assets. Animations are killed. Carousels quietly degrade to native CSS scroll-snap so they still work without shipping a carousel library.
    </>,
    <>
      That mindset carried through the rest of the build. Self-hosted fonts. Responsive images through a single helper. Block JS only loads for blocks actually on the page. And proximity sorting for nearby facilities runs <b>server-side</b>, so users never see a location prompt.
    </>,
    <>
      <strong>The Outcome.</strong>
    </>,
    <>
      A modern, accessible platform that finally matches the weight of the work SEARHC does. Patients find care faster. Recruits move through hiring without hitting walls. And the internal teams have a backend they can actually run.
    </>
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash
        onComplete={() => setShowSplash(false)}
        title="SEARHC"
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="SEARHC"
          subtitle="Southeast Alaska Regional Health Consortium"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2026",
            client: "SEARHC",
            design: "Ryan Lord",
            timeline: "6 months",
            stack: "PHP, Sass, Wordpress, Javascript",
            search: "AI Based Search Engine",
            role: "UX + Solo Dev"
          }}
          url="https://searhc.org/"
          gallery={[Gallery1, Gallery2, Gallery3, Gallery4]}
        />

      )}
    </section>
  );
};


export default SEARHC;
