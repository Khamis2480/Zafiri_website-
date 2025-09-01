import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ✅ Import pages
import Home from "./pages/Home";  
// import IframeLayout from "./Components/Iframe/Iframe";     
import Partners from "./pages/Department_lab/Department_lab";
import Header from "./Components/header"; 
import Research from "./pages/Department_res/Department_res";
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

        </Routes>
      {/* </IframeLayout> */}
    </Router>
  );
}

export default App;
