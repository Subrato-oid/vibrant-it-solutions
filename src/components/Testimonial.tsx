import * as React from "react"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import TestimonialNavButtons from "./TestimonialNavButton"

type TestimonialProps = NonNullable<Queries.CommonJsonTestimonialsTestimonial[]>

const Testimonial = ({
  data,
}: {
  data: TestimonialProps
}): React.ReactElement => (
  <div className="testimonial">
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={"50rem"}
    >
      {data.map((item, i) => (
        <SwiperSlide key={`Testimonial-${i}`}>
          <>
            <div className="testimonial-text">
              <img src="/images/Isolation_Mode.svg" alt="" />
              <h2 id="testi">{item.testimony}</h2>
            </div>
            <div className="testimonial-name">
              <h3 id="TN">
                {item.name}
                <p>{item?.bio}</p>
              </h3>
              <div id="Vline"></div>
              <img src={item.image!} alt="" />
            </div>
          </>
        </SwiperSlide>
      ))}
      <TestimonialNavButtons />
    </Swiper>
  </div>
)

export default Testimonial
