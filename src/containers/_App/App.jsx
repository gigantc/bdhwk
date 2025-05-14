import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LocationContext } from '../../context/LocationContext.jsx';
import { useEffect, useRef, useState } from 'react';

import Cursor from '../../components/Cursor/Cursor.jsx';

import Home from '../../containers/Home/Home.jsx';
import AzureAI from '../../cases/AzureAI/AzureAI.jsx';
import BBJ from '../../cases/BBJ/BBJ.jsx';
import NickHelps from '../../cases/NickHelps/NickHelps.jsx';
import SafetyExperience from '../../cases/SafetyExperience/SafetyExperience.jsx';
import SeaChange from '../../cases/SeaChange/SeaChange.jsx';
import Snap from '../../cases/Snap/Snap.jsx';
import Unfiltered from '../../cases/Unfiltered/Unfiltered.jsx';


import PasswordGate from '../PasswordGate/PasswordGate.jsx';
import './App.scss';


//setting up all the routes
const AppRoutes = ({ setPreviousLocation, setCurrentLocation }) => {
  const location = useLocation();
  const previousRef = useRef(null);

  useEffect(() => {
    setPreviousLocation(previousRef.current);
    setCurrentLocation(location);
    previousRef.current = location;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="azure-ai" element={<AzureAI />} />
      <Route path="boeing-business-jets" element={<BBJ />} />
      <Route path="nick-helps" element={<NickHelps />} />
      <Route path="safety-experience" element={<SafetyExperience />} />
      <Route path="operation-sea-change" element={<SeaChange />} />
      <Route path="snap-coca-cola" element={<Snap />} />
      <Route path="unfiltered" element={<Unfiltered />} />
    </Routes>
  );
};


// bringing routes and using context to make sure we have the previous location. This is used for back button animations
const App = () => {
  const [previousLocation, setPreviousLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const [showCursor, setShowCursor] = useState(false);

  //fake password check
  const [passwordInput, setPasswordInput] = useState('');
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem('authenticated') === 'true';
  });

    const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'friend') {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    } else {
      alert('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };


  // mouse detection for the special cursor
  // Detect if the device has a mouse or is a touch screen
  useEffect(() => {
    const hasMouse = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    setShowCursor(hasMouse);
  }, []);


  if (!authenticated) {
    return (
      <>
        <PasswordGate onAuth={() => setAuthenticated(true)} />
        {/* Only include Cursor if device has a mouse */}
        {showCursor && <Cursor />}
      </>
    );
  }
  
  return (
    <>
      <Router>
        <LocationContext.Provider value={{ previousLocation, currentLocation }}>
          <AppRoutes 
            setPreviousLocation={setPreviousLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </LocationContext.Provider>
        {/* Only include Cursor if device has a mouse */}
        {showCursor && <Cursor />}
      </Router>
    </>
  );
};

export default App;