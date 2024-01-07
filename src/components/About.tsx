import * as React from "react";

type AboutProps = {};

const About = ({}: AboutProps) => (
  <div className="about">
    <div className="left">
      <img src="images/about.webp" alt="" />
    </div>
    <div className="right">
      <div className="a-content">
        <h2>
          <span className="head1">About US:</span>
          <span className="head2">Innovate</span>
          <br />
          <span className="head1">with Impact</span>
        </h2>
        <p>
          Dive into our world, where innovation isn't just a buzzword; it's a
          way of life. As an IT Solution Company, we go beyond conventional
          approaches, redefining what's possible in the digital realm. <br />
          <br />
          We're more than an IT Solutions Company; we infuse every project with
          passion and purpose. Join us in creating a future where technology
          harmonizes with humanity.
        </p>
        <a href="#" className="button">
          Learn More <img src="images/Button Icon.svg" />
        </a>
      </div>
    </div>
  </div>
);

export default About;
