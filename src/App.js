import Navbar from "./Navbar"
import AloeCam from "./pages/AloeCam"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Route, Routes } from "react-router-dom"

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
    </>
  )
}

export default App
