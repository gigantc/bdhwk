import { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {


  

  //////////////////////////////////////
  //////////////////////////////////////
  //////////////////////////////////////
  // GREETING
  const who = localStorage.getItem('authLabel');





  return (
    <>
      <header className="header">
        <div className="wrap">
          <div className="title">BDHWK</div>
          <div className="welcome">Welcome {who}.</div>
        </div>
      </header>
    </>
  );
};

export default Header;

