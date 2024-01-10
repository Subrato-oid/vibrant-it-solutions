import * as React from "react"

// type TestimonialProps = { unknown }

const Testimonial = (): React.ReactElement => (
  <div className="testimonial">
    <div className="testimonial-text">
      <img src="images/Isolation_Mode.svg" alt="" />
      <h2 id="testi">
        As a Co-founder, I’m impressed by the infinite potential of the Vibrant
        Team. It’s not just about tech, it’s about helping businesses and making
        them stand out from their competitors. That’s our goal.
      </h2>
    </div>
    <div className="testimonial-name">
      <h3 id="TN">
        Aayush Agrawal
        <p>CTO, Parle Inc.</p>
      </h3>
      <div id="Vline"></div>
      <img src="images/Parle-Logo-500x281 1.svg" alt="" />
    </div>
    <div className="testimonial-button">
      <div className="arrow">
        <img src="images/leftArrow.svg" alt="" />
        <img src="images/rightArrow.svg" alt="" />
      </div>
    </div>
  </div>
)

export default Testimonial
