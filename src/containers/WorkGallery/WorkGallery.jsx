import React, { useState, useEffect, useRef } from 'react';
import { useLocationContext } from '../../context/LocationContext.jsx';
import { Link } from 'react-router-dom';

import { gsap } from 'gsap';

import Unfiltered from "../../assets/work-unfiltered.jpg"
import SeaChange from "../../assets/work-sea-change.jpg"
import NickHelps from "../../assets/work-nick-helps.jpg"
import BBJ from "../../assets/work-bbj.jpg"
import Snap from "../../assets/work-snap.jpg"
import Azure from "../../assets/work-azure-search.jpg"
import SExp from "../../assets/work-safety-experience.jpg"

import './WorkGallery.scss';



const WorkGallery = () => {

  //////////////////////////////////////
  // REFS & STATE
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [renderedImages, setRenderedImages] = useState([])
  const refMap = useRef({})

  
  //////////////////////////////////////
  // CARD DATA OBJECT
  const cards = [
    { 
      title: "Azure AI", 
      description: "AI Powered Search Engine",
      image: Azure,
      route: "azure-ai"
    },
    { 
      title: "Unfiltered", 
      description: "Scrollytelling Experience",
      image: Unfiltered,
      route: "unfiltered"
    },
    { 
      title: "Coca-Cola", 
      description: "The First Ever Web-Based Snap Filter",
      image: Snap,
      route: "snap-coca-cola"
    },
    { 
      title: "Business Jets", 
      description: "Custom Wordpress Site",
       image: BBJ,
      route: "boeing-business-jets"
    },
    { 
      title: "Paramount", 
      description: "SpongeBob Operation Seachange",
      image: SeaChange,
      route: "operation-sea-change"
    },
    { 
      title: "Nickelodeon", 
      description: "Custom Wordpress Site",
      image: NickHelps,
      route: "nick-helps"
    },
    { 
      title: "Boeing", 
      description: "The Safety Experience",
      image: SExp,
      route: "safety-experience"
    }
  ];


  //////////////////////////////////////
  // SCROLL TO WORK
  const { previousLocation } = useLocationContext();
  // if this isn't home (so it's coming from a case study) then let's go directly to the WorkGallery
  useEffect(() => {
  if (previousLocation?.pathname && previousLocation.pathname !== '/') {
    const element = document.getElementById('workGallery');
    if (element) {
      setTimeout(() => {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'auto' });
        // give the page 100ms to finish layout
      }, 100); 
    }
  }
}, [previousLocation]);



  //////////////////////////////////////
  // ANIMATIONS
  useEffect(() => {
    if (hoveredIndex !== null) {
      const newKey = `${hoveredIndex}-${Date.now()}`
      setRenderedImages(prev => {
        const next = [...prev, { index: hoveredIndex, key: newKey }]
        return next.length > 4 ? next.slice(next.length - 4) : next;
      });

      requestAnimationFrame(() => {
        const tl = gsap.timeline()
      
        tl.fromTo(
          refMap.current[newKey],
          { scale: 0 },
          { scale: 1, duration: 0.4, ease: 'power2.out' },
          0
        )
      
        tl.fromTo(
          refMap.current[newKey],
          { filter: 'blur(10px)' },
          { filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
          0
        )
      })
    }
  }, [hoveredIndex])




  //////////////////////////////////////
  // RENDER
  return (
    <>
      <section className="workGallery" id="workGallery">
         
          <div className="cards">
            {cards.map((card, index) => (
              
              <Link 
              to={card.route}
              key={index}
              state={{ from: '/#workGallery' }}
              >
              <div
                className="card cursorHover"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span><h2>{card.title}</h2></span>
                <span><p>{card.description}</p></span>
              </div>
              </Link>
            ))}
          </div>

          <div className="images">
          {renderedImages.map(({ index, key }, i) => (
              <img
                key={key}
                src={cards[index].image}
                ref={el => (refMap.current[key] = el)}
                style={{ zIndex: i + 1 }}
              />
            ))}
          </div>

        </section>
    </>
  );
};

export default WorkGallery;
