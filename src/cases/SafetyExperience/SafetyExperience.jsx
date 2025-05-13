import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './SafetyExperience.scss';


// import Hero from './assets/hero.jpg'
// import Gallery1 from './assets/gallery-table.jpg'
// import Gallery2 from './assets/gallery-frame.jpg'
// import Gallery3 from './assets/gallery-frame-2.jpg'
// import Gallery4 from './assets/gallery-timeline.jpg'
// import Gallery5 from './assets/gallery-ai.jpg'
// import Gallery6 from './assets/gallery-chair.jpg'
// import Gallery7 from './assets/gallery-exhibit.jpg'



const SafetyExperience = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Experiencing Saefty One Safety at a time.";

  const paragraphs = [
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </>,
    <>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </>
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Azure AI Search" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Boeing Safety Experience"
          subtitle="Project"
          // hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2024",
            client: "Boeing",
            design: "Ryan Lord, Maribel Barba",
            timeline: "8 months",
            stack: "Node.js, Vite/React, Azure AI, SQL, Britecove",
          }}
          // url="https://theunfilteredstory.org"
          // gallery={[Gallery1, Gallery2, Gallery3, Gallery7, Gallery5, Gallery6, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default SafetyExperience;

