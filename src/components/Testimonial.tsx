import * as React from "react"

const Testimonial = (props: Queries.CommonJsonTestimonialsTestimonial): React.ReactElement => (
  <div className="testimonial">
    <div className="testimonial-text">
      <img src="/images/Isolation_Mode.svg" alt="" />
      <h2 id="testi">{props?.testimony}</h2>
    </div>
    <div className="testimonial-name">
      <h3 id="TN">
        {props?.name}
        <p>{props?.bio}</p>
      </h3>
      <div id="Vline"></div>
      <img src={props?.image!} alt="" />
    </div>
    <div className="testimonial-button">
      <div className="arrow">
        <img src="/images/leftArrow.svg" alt="" />
        <img src="/images/rightArrow.svg" alt="" />
      </div>
    </div>
  </div>
)

export default Testimonial
