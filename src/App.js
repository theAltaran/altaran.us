import Navbar from "./components/navbar/navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Alt from "./components/alt/alt"
import ALTai from "./components/altAI/altAI"
import { Route, Routes } from "react-router-dom"
// import Footer from "./components/footer/footer"
import Space from "./components/space/space"
import SpaceXNews from "./components/space/spaceXNews"


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
          <Route path="/altAI" element={<ALTai />} />
          <Route path="/space" element={<Space />} />
          <Route path="/spaceXNews" element={<SpaceXNews />} /> 
        </Routes>
      </div>
      
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App 
