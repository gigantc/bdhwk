import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './WorkGallery.scss';



const WorkGallery = () => {


  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [renderedImages, setRenderedImages] = useState([]);
  const zCounter = useRef(1);
  const prevIndex = useRef(null);
  const refMap = useRef({});

  

  const cards = [
    { 
      title: "Boeing", 
      description: "AI Powered Search Engine",
      image: "https://placehold.co/1600x1400/orange/white"
    },
    { 
      title: "Unfiltered", 
      description: "Scrollytelling Experience",
      image: "https://placehold.co/1600x1400/red/white"
    },
    { 
      title: "Coca-Cola", 
      description: "The First Ever Web-Based Snap Filter",
      image: "https://placehold.co/1600x1400/blue/white" 
    },
    { 
      title: "Business Jets", 
      description: "Custom Wordpress Site",
       image: "https://placehold.co/1600x1400/green/white"
    },
    { 
      title: "Paramount", 
      description: "SpongeBob Operation Seachange",
      image: "https://placehold.co/1600x1400/yellow/white" 
    },
    { 
      title: "Nickelodeon", 
      description: "Custom Wordpress Site",
      image: "https://placehold.co/1600x1400/purple/white" 
    },
    { 
      title: "Boeing", 
      description: "The Safety Experience",
      image: "https://placehold.co/1600x1400/pink/white" 
    }
  ];



  useEffect(() => {
    if (hoveredIndex !== null) {
      const newKey = `${hoveredIndex}-${Date.now()}`;
      setRenderedImages(prev => {
        const next = [...prev, { index: hoveredIndex, key: newKey }];
        return next.length > 4 ? next.slice(next.length - 4) : next;
      });

      requestAnimationFrame(() => {
        gsap.fromTo(
          refMap.current[newKey],
          { scale: 0 },
          { scale: 1, duration: 0.4, ease: 'power2.out' }
        );
      });
    }
  }, [hoveredIndex]);




  return (
    <>
      <section className="workGallery">

          <div className="cards">
            {cards.map((card, index) => (
              <div
                className="card"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span><h2>{card.title}</h2></span>
                <span><p>{card.description}</p></span>
              </div>
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
