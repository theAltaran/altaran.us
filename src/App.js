import Navbar from "./components/navbar/navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Alt from "./components/alt/alt"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import ReactGA from 'react-ga';
const TRACKING_ID = "G-K0MCHBR04W"; // OUR_TRACKING_ID
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
        </Routes>
      </div>
      
      </div>
      <Footer />
    </>
  )
}

export default App 
