import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './Snap.scss';

import Hero from './assets/hero.jpg'
import Video from './assets/snap_trimmed.mp4'
// import Gallery2 from './assets/gallery-frame.jpg'
// import Gallery3 from './assets/gallery-frame-2.jpg'
// import Gallery4 from './assets/gallery-timeline.jpg'
// import Gallery5 from './assets/gallery-ai.jpg'
// import Gallery6 from './assets/gallery-chair.jpg'
// import Gallery7 from './assets/gallery-exhibit.jpg'



const Snap = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "'We need you to build something that doesn't exist.'";

  const paragraphs = [
    <>
      <strong>The Ask.</strong>
    </>,
    <>
      Snap came to us with an project that had never been done before: build a Snapchat lens that lives outside their app and on the web.
    </>,
    <>
      Coca-Cola wanted a custom lens that could drive new account creation on their site. But Snapchat's platform didn't allow for user authentication to a site outside the app. So naturally, Snap asked us if we could figure it out.
    </>,
    <>
      <strong>The Constraints.</strong>
    </>,
    <>
      We had two weeks. No dev docs. No APIs. No roadmap. And zero time to follow the traditional linear process of UX -&gt; Wireframes -&gt; Design -&gt; Dev.
    </>,
    <>
      We kicked everything off in parallel. Concept and design started immediately. At the same time, development got underway. We didn't wait for approvals or formal wireframes. There wasn't time. Everything was moving forward, all at once, to hit the 2 week deadline.
    </>,
    <>
      <strong>The Build.</strong>
    </>,
    <>
      To fit into Coca-Cola's existing ecosystem we were told we had to build the app using Vanilla JavaScript. Good times.
    </>,
    <>
      We worked directly with Snap's engineers to define brand-new API routes in real time. Every time we needed to pull data, pass tokens, or validate input, their team spun up fresh endpoints for us. This wasn't just integration. It was invention.
    </>,
    <>
      <strong>The Outcome.</strong>
    </>,
    <>
      In the end, we delivered the first-ever web-based Snapchat filter, fully embedded into Coca-Cola's site. It was fast, frictionless, beautifully on-brand and it opened the door for future Snap lenses to break free of the app and live wherever the audience is.
    </>,
    <>
      This project wasn't just about speed. It was about rewriting the rules in real time, under pressure, with no fallback plan. And my team delivered.
    </>,
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Coca-Cola & Snap" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Coca-Cola & Snap"
          subtitle="The first ever web-based Snapchat filter."
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2025",
            client: "Coca-Cola via Snap",
            design: "Justin Allen",
            timeline: "2 weeks",
            stack: "Vite, Vanilla Javascript, Lens Studio",
          }}
          url="https://www.coca-cola.com/us/en/offerings/tastebud-map"
          // gallery={[Gallery1, Gallery2, Gallery3, Gallery7, Gallery5, Gallery6, Gallery4]}
          video={[Video]}
        />
        
      )}
    </section>
  );
};

export default Snap;
