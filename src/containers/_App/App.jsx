
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../../containers/Home/Home.jsx';
import AzureAI from '../../cases/AzureAI/AzureAI.jsx';
import BBJ from '../../cases/BBJ/BBJ.jsx';
import NickHelps from '../../cases/NickHelps/NickHelps.jsx';
import SafetyExperience from '../../cases/SafetyExperience/SafetyExperience.jsx';
import SeaChange from '../../cases/SeaChange/SeaChange.jsx';
import Snap from '../../cases/Snap/Snap.jsx';
import Unfiltered from '../../cases/Unfiltered/Unfiltered.jsx';

import './App.scss';


const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;


