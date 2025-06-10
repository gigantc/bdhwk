import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './SafetyExperience.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/gallery_wide_2.jpg'
import Gallery2 from './assets/gallery_sq.jpg'
import Gallery3 from './assets/gallery_sq_2.jpg'
import Gallery4 from './assets/gallery_wide.jpg'



const SafetyExperience = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Delve into Aerospace History.";

  const paragraphs = [
    <>
      <strong>The Initiative.</strong>
    </>,
    <>
      The Boeing Safety Experience was part of a multi-million dollar commitment to reframe how Boeing spoke internally about safety. My team was responsible for two core components:
    </>,
    <>
      1. A digital space where employees could engage in real conversations about safety, access videos, resources, and connect across roles and departments from the factory floor to the executive suite.
    </>,
    <>
      2. An interactive timeline that traced key moments in aviation history and showed how those events shaped Boeing's safety protocols today.
    </>,
    <>
      <strong>My Role.</strong>
    </>,
    <>
      I was part of the project's leadership team from the start, sitting on the Boeing Safety Committee and helping guide strategic direction, scope, and planning. We ran the effort using Agile and Scrum methodologies, beginning with deep user story work to understand the full spectrum of employees who would use the system.
    </>,
    <>
      From there, I helped lead the end-to-end delivery pipeline: wireframes, sprint planning, stakeholder check-ins, and vendor evaluations. One of my key responsibilities was helping select the right data visualization partners for the timeline component. We vetted experts from around the globe to make sure the timeline wasn't just informative but emotionally resonant, fun to play with, and kept people coming back.
    </>,
    <>
      <strong>Cross-Functional Leadership.</strong>
    </>,
    <>
      This was a highly visible initiative inside Boeing, with direct involvement from leadership at all levels including executive sponsors and members of the C-Suite. I played a key role in bridging communication between my team at R&R Partners and Boeing's internal stakeholders, ensuring alignment across technical, creative, and leadership groups. That cross-functional collaboration was critical to keeping the project on track, on message, and ready for launch against some very real executive expectations.
    </>,
    <>
      <strong>The Build.</strong>
    </>,
    <>
      This wasn't a linear build. It was iterative, feedback-driven, and people-first. We launched internally and continued to evolve the platform for over 12 months before we pushed the timeline public. They other parts of the platform are a huge success, but are still internal only.
    </>,
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="The Safety Experience" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Boeing Safety Experience"
          subtitle="An interactive data visualization timeline"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2024",
            client: "Boeing",
            Scope: "Internal Platform + Aerospace Safety Timeline",
            Budget: "Part of a 7-figure enterprise initiative",
            Role: "Leadership, Strategy, Project Management",
            design: "Ryan Lord, Maribel Barba",
            timeline: "1 year",
          }}
          url="https://www.boeing.com/safety/safetyexperience"
          gallery={[Gallery1, Gallery2, Gallery3, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default SafetyExperience;

