import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cursor.scss';

const Cursor = () => {

  
  //////////////////////////////////////
  // STATE
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

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
      // Check if hovered element has cursorHover class
      if (e.target.closest('.cursorHover')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      // Reset hover state
      if (e.target.closest('.cursorHover')) {
        setIsHovering(false);
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
  }, [location]);

  //////////////////////////////////////
  // RENDER
  return (
    <div className={`custom-cursor ${isHovering ? 'hovering' : ''}`} />
  );
};

export default Cursor;
