import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import NavButtons from "./NavButtons"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

type ProcessProps = NonNullable<IndexPageFrontmatterType>["process"]

const Process = (props: NonNullable<ProcessProps>): React.ReactElement => {
  const processes = props.phases!
  const sliderRef = React.useRef<SwiperRef>(null)

  const clickPrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const clickNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <section>
      <div className="process">
        <h2>
          <span className="head1">{props.title}</span>&nbsp;
          <span className="head2">{props.titleHighlight}</span>
        </h2>
        <p>{props.description}</p>
        <a href="#" className="button">
          {props.button?.buttonText}{" "}
        </a>
      </div>

      <Swiper
        ref={sliderRef}
        modules={[Pagination, Navigation]}
        slidesPerView={2.1}
        spaceBetween={50}
        pagination={{ type: "progressbar" }}
      >
        <div className="process-container">
          {processes?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-container">
                <div className="p-left">
                  {`0${index + 1}`}
                  <h2>{item?.title}</h2>
                </div>
                <p>{item?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <NavButtons clickPrev={clickPrev} clickNext={clickNext} />
    </section>
  )
}

export default Process
