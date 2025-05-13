import React, { useState, useEffect, useRef } from 'react';
import Splash from '../../components/Splash/Splash.jsx';
import { gsap } from 'gsap';

import './AzureAI.scss';



const AzureAI = () => {

 //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);
  const AzureAIdRef = useRef(null);




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
        <div className="azure-ai" ref={AzureAIdRef}>
          <div className="wrap">

            <div className="title">
              <h1>Azure AI Search</h1>
              <h3>An AI based search Engine</h3>
            </div>

            {/* <div className="image">
              <img src={Hero} alt="Unfiltered Hero Screenshot" />
            </div> */}
            

            {/* <div className="body">
              
              <div className="writeup">
                <h2>Dismantling a system purposefully built on smoke and mirrors.</h2>

                <p>The State of Utah tasked R&R Partners with creating a temporary art installation to expose Big Tobacco's legacy of manipulative, targeted advertising. The result was a visceral, immersive exhibit called “Unfiltered." It was a huge success. It confronted visitors with walls of original ads, old magazine spreads, and TV commercials that showcased the industry's aggressive tactics in communities of color.</p>

                <p><strong>But once the installation came down, we didn't want the message to disappear with it.</strong></p>

                <p>With no budget and a tight window, we set out to reimagine the installation digitally. The concept was simple, recreate the sensory overload of the original installation through a "scrollytelling" experience. Users are pulled through a hijacked scroll narrative that mimics the exhibit's multi-room experience.</p>

                <p>The build was quick. <strong>Just eight days of development.</strong> I had to prioritize ruthlessly, move fast, and manage a ton of stress. There were many compromises, but the end result still punches above its weight as a standalone digital experience.</p>

                <p>Unfiltered now lives on as a digital story that doesn't just preserve the exhibit, it reframes it. Even with zero budget the site captures the spirit of the original and extends its reach far beyond gallery walls.</p>

                <p>This one was so much fun to build, and I'm proud of what came together in such a short time.</p>

              </div>

              <div className="info">
                <div className="box">
                  <p><span>Year:</span> 2025</p>
                  <p><span>Client:</span>The State of Utah</p>
                  <p><span>Design:</span>Destin Cox, Ryan Lord</p>
                  <p><span>Timeline:</span>less than 2 weeks (8 dev days)</p>
                  <p><span>Budget:</span>$0.00</p>
                  <p><span>Stack:</span>Vite/React, GSAP, Sass, Three.js</p>
                </div>

                <a href="https://theunfilteredstory.org" target="_blank"><LinkIcon /> View Live Site</a>
              </div>

            </div>



            <div className="gallery">
              <div className="card">
                <img src={Gallery1} alt="" />
              </div>
              <div className="card">
                <img src={Gallery2} alt="" />
              </div>
              <div className="card">
                <img src={Gallery3} alt="" />
              </div>
              <div className="card">
                <img src={Gallery7} alt="" />
              </div>
               <div className="card">
                <img src={Gallery5} alt="" />
              </div>
               <div className="card">
                <img src={Gallery6} alt="" />
              </div>
               <div className="card">
                <img src={Gallery4} alt="" />
              </div>
            </div>
            
            
              */}
            
          </div>
        </div>
      )}
    </section>
  );
};

export default AzureAI;
