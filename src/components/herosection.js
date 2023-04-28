import React from "react";
import "../App.css";
import "./herosection.css";
import { Button } from "./button";

function HeroSection() {
  return (
    <div className='heroThop' >
    <div className="hero-container">
      <div className="content">
        <h1 className="slide1name">ADORN YOUR HOME TODAY</h1>
        <p className="slide1">Grow naturally & Live Naturally</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            START YOUR JOURNEY NOW
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
