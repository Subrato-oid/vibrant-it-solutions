import { defaultTo } from "lodash";
import React from "react";

type HeroProps = {};

const Hero = ({}: HeroProps) => (
  <div className="container">
    <div className="content">
      <h1 id="wH1">
        <span className="line1">Techify Your</span>
        <br />
        <span className="line2">Business</span>
        <span className="line1">With Us</span>
      </h1>
      <h1 id="mH1">
        <span className="line1">Techify Your</span>
        <span className="line2">Business</span>
        <br />
        <span className="line1">With Us</span>
      </h1>
      <p>
        Vibrant IT Solutions guides its clients in identifying each client's
        mistakes in their IT plans. We build actionable plans for advancement
        and optimize ITSM processes and infrastructures for the ultimate
        efficiency of your business.
      </p>
      <a href="#" className="button">
        Get Solution Now <img src="images/Button Icon.svg" alt="" />
      </a>
    </div>
    <div className="image">
      <img src="images/Homepage/HeroImg.svg" alt="Description of your image" />
    </div>
  </div>
);

export default Hero;