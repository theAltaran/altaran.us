import Navbar from "./components/navbar/navbar"
import AloeCam from "./components/aloecam/aloecam"
import Home from "./components/home/home"
import Projects from "./components/projects/projects"
import { Route, Routes } from "react-router-dom"
// import Footer from "./components/footer/footer"

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dbAdmin:<password>@cluster0.gpjjcfh.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

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
      {/* <Footer /> */}
    </>
  )
}

export default App
