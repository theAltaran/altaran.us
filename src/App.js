import Navbar from "./Navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Projects from "./components/projects/projects"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/AloeCam" element={<AloeCam />} />
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
