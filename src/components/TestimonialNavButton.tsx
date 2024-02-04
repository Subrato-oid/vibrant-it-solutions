import * as React from "react"
import { useSwiper } from "swiper/react"

// type TestimonialNavButtonsProps = {}

const TestimonialNavButtons: React.FC = () => {
  const swiper = useSwiper()
  return (
    <div className="testimonial-button">
      <div className="arrow" style={{ display: "flex" }}>
        <img
          onClick={() => {
            swiper.slidePrev()
          }}
          src="/images/leftArrow.svg"
          alt=""
        />
        <img
          onClick={() => {
            swiper.slideNext()
          }}
          src="/images/rightArrow.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default TestimonialNavButtons
