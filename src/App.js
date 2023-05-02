import Navbar from "./components/navbar/navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Alt from "./components/alt/alt"
// import ALTai from "./components/altAI/altAI"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import Space from "./components/space/space"

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-PTVWK7LM8N"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <div className="everything">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/AloeCam" element={<AloeCam />} />
          <Route path="/" element={<Home />} />
          <Route path="/Alt" element={<Alt />} />
          {/* <Route path="/altAI" element={<ALTai />} /> */}
          <Route path="/space" element={<Space />} />
        </Routes>
      </div>
      
      </div>
      <Footer />
    </>
  )
}

export default App 
