import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import NavButtons from "./NavButtons"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

type ProcessProps = NonNullable<IndexPageFrontmatterType>["process"]

const Process = (props: NonNullable<ProcessProps>): React.ReactElement => {
  const processes = props.phases!
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
      <div className="process-container">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={2.3}
          spaceBetween={"50rem"}
          pagination={{ type: "progressbar" }}
        >
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
          <NavButtons />
        </Swiper>
      </div>
    </section>
  )
}

export default Process
