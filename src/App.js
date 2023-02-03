import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Quienes from "./components/pages/Quienes";
import Proximas from "./components/pages/Proximas";
import Galeria from "./components/pages/Galeria";
import Historias from "./components/pages/Historias";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
        <Route path="/" exact element ={<Home />} />
        <Route path="/Quienes" element ={<Quienes />} />
        <Route path="/Proximas" element ={<Proximas />} />
        <Route path="/Galeria" element ={<Galeria />} />
        <Route path="/Historias" element ={<Historias />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
