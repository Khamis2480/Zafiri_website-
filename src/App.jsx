import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ✅ Import pages
import Home from "./pages/Home";  
// import IframeLayout from "./Components/Iframe/Iframe";     
import Partners from "./pages/Department_lab/Department_lab";
import Header from "./Components/header"; 
import Research from "./pages/Department_res/Department_res";
import ContactPage from "./pages/Contact/Contact";
import PhotoGallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import Events from "./pages/Events/Event";
import History from "./pages/History/History";
import DirectorMessage from "./pages/Message/Message";
import Mission from "./pages/Mission/Mission"

function App() {
  return (
    
    <Router>
      {/* ✅ Reusable Header */}
      <Header />

      {/* ✅ Page Routes */}
      {/* <IframeLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department-lab" element={<Partners />} />
          <Route path="/department-res" element={<Research />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History/>} />
          <Route path="/message" element={<DirectorMessage/>} />
          <Route path="/mission" element={<Mission/>} />


        </Routes>
      {/* </IframeLayout> */}
    </Router>
  );
}

export default App;
