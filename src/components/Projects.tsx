import React from "react"
import { type ServiceWorkEdgeType } from "../templates/service"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"

// type ProjectProp = NonNullable<ServicePageFrontmatterType>["project"]

type ProjectProps = {
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  workList: NonNullable<ServiceWorkEdgeType>
}

const Project = ({
  titleBefore,
  titleHighlight,
  titleAfter,
  workList,
}: ProjectProps): React.ReactElement => {
  const breakpoint = useBreakpoint()

  return (
    <div className={"RPsection"}>
      <h2>
        {titleBefore} <span className={"line2"}>{titleHighlight}</span>{" "}
        {titleAfter}
      </h2>

      {breakpoint.sm ? (
        <div className="R-slide">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            spaceBetween={16}
            autoplay={{ delay: 100000000 }}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
          >
            {workList?.slice(0, 3).map((item, index) => (
              <SwiperSlide key={index} className={"Rleft-section"}>
                <>
                  <div>
                    <h3 className={"subheading"}>
                      {item.node.frontmatter?.title}
                    </h3>
                    <p className={"paragraph"}>
                      {item.node.frontmatter?.description}
                    </p>
                    <span className={"view-project"}>
                      <Link
                        to={`/works/${item.node.frontmatter?.title?.toLowerCase()}`}
                      >
                        View Project{" "}
                        <img src="/images/arrow-right.svg" alt="" />
                      </Link>
                    </span>
                  </div>
                  <img
                    className={"project-image"}
                    src={item.node.frontmatter?.thumbnail!}
                    alt={`Image ${index + 1}`}
                  />
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={"R-slide"}>
          {workList?.slice(0, 3).map((item, index) => (
            <div key={index} className={"Rleft-section"}>
              <div>
                <h3 className={"subheading"}>{item.node.frontmatter?.title}</h3>
                <p className={"paragraph"}>
                  {item.node.frontmatter?.description}
                </p>
                <span className={"view-project"}>
                  <Link
                    to={`/works/${item.node.frontmatter?.title?.toLowerCase()}`}
                  >
                    View Project <img src="/images/arrow-right.svg" alt="" />
                  </Link>
                </span>
              </div>
              <img
                className={"project-image"}
                src={item.node.frontmatter?.thumbnail!}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Project
