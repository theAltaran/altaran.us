import Navbar from "./components/navbar/navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Projects from "./components/projects/projects"
import { Route, Routes } from "react-router-dom"
// import Footer from "./components/footer/footer"
import SmApp from "./components/smApp/smApp"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/AloeCam" element={<AloeCam />} />
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/smApp" element={<SmApp />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
