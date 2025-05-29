import React, { useEffect, useState } from 'react';
import './Cursor.scss';

const Cursor = () => {

  
  //////////////////////////////////////
  // STATE
  const [isHovering, setIsHovering] = useState(false);
  const [isInput, setIsInput] = useState(false);

  //////////////////////////////////////
  // RUN-TIME
  useEffect(() => {
    let animationFrameId;

    const updateMousePosition = (e) => {
      // Passing CSS variables for smoother updates
      // better than inline styles
      animationFrameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursorHover')) {
        setIsHovering(true);
      }

      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      ) {
        setIsInput(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('.cursorHover')) {
        setIsHovering(false);
      }

      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      ) {
        setIsInput(false);
      }
    };

    // EVENT LISTENERS
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  //resets the hover state when navigating
  useEffect(() => {
    setIsHovering(false);
  }, []);

  //////////////////////////////////////
  // RENDER
  return (
    <div className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isInput ? 'input' : ''}`} />
  );
};

export default Cursor;
