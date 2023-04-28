import React from "react";
import "./cards.css";
import CardItem from "./Carditem";
import About from "./About";
import Footer from "./footer";
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import 'react-awesome-slider/dist/styles.css';
function Cards() {
  return (
    <div className="cards">
      <About />
      <div id="services" className="ourservices">
        <h1
          style={{
            fontSize: "40px",
            fontFamily: "Cinzel Decorative, sans-serif",
            color: "black",
          }}
        >
          Our Services
        </h1>
        <div className="cards__coasdntainer">
          {/* <AwesomeSlider> */}
          <div className="cards">
            <CardItem
              src={require("../assets/prediction.jpg")}
              text="On the basis of region we predict factors for better agrarian practices"
              label="PREDICTION"
              path="#"
            />
            <CardItem
              src={require("../assets/recommendation2.jpg")}
              text="Based on prediction we suggest the best crops that should be planted"
              label="RECOMMENDATION"
              path="#"
            />
            <CardItem
              src={require("../assets/information.jpg")}
              text="Information on various crops that could be cultivated commercially"
              label="INFORMATION"
              path="#"
            />
          </div>
          {/* </AwesomeSlider> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
