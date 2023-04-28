import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import HeroSection from './components/herosection';
import Cards from './components/cards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <Cards />
        <Routes>
          <Route path="./" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
