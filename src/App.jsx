import React from "react";
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <>
   
    
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>
        <Footer />
       </Router>
       
    </>
  )
}

export default App;
