import React from "react";
import { Route, Routes } from "react-router-dom";
import AloeCam from "./components/aloecam/aloecam";
import Home from "./components/home/home";
import Alt from "./components/alt/alt";
import ALTai from "./components/altAI/altAI";
import Space from "./components/space/space";
import SpaceXNews from "./components/space/spaceXNews";

import Navbar2 from "./components/navbar2/navbar2";
import SpawnCalculator from "./components/spawnCalc/calc";

function App() {
  return (
    <div className="everything">
      <Navbar2 /> {/* Use the Navbar2 component */}
      <div className="container">
        <Routes>
          <Route path="/AloeCam" element={<AloeCam />} />
          <Route path="/" element={<Home />} />
          <Route path="/Alt" element={<Alt />} />
          <Route path="/altAI" element={<ALTai />} />
          <Route path="/space" element={<Space />} />
          <Route path="/spaceXNews" element={<SpaceXNews />} /> 
          <Route path="/spawnCalc" element={<SpawnCalculator />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
