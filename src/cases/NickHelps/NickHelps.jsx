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
  const heading = "Think Big. Speak Out. Jump in. Move Forward.";

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
          subtitle="Wordpress Theme"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            years: "2023-2025",
            client: "Nickelodeon",
            design: "Dan Freeman, Ryan Lord",
            "Dev Phases": "8",
            stack: "PHP, Sass, Wordpress, Javascript",
          }}
          url="https://nickhelps.com/"
          gallery={[Gallery1, Gallery2, Gallery3, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default NickHelps;
