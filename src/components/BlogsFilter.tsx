import * as React from "react"
import { type BlogListType } from "../pages/blogs"
import _ from "lodash"
import { format, parseISO } from "date-fns"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import { Link } from "gatsby"

type BlogsFilterProps = NonNullable<BlogListType>

const BlogsFilter = ({
  data,
}: {
  data: BlogsFilterProps
}): React.ReactElement => {
  const [tag, setTag] = React.useState<string>("All")

  const tags = ["All"].concat(
    _.uniq(data.map((item) => item.node.frontmatter?.tag!)) ?? []
  )

  const [slides, setSlides] = React.useState<BlogsFilterProps>([])

  const breakpoints = useBreakpoint()

  React.useEffect(() => {
    if (tag === "All") {
      setSlides(data)
    } else {
      setSlides(data.filter((item) => item.node.frontmatter?.tag === tag))
    }
    console.log(slides)
    console.log(tag)
  }, [tag])

  return (
    <div className="filter">
      <h4>Filter by</h4>
      <div className="filter-by">
        {tags.map((item) => (
          <button
            key={`button-${item}`}
            className={tag === item ? "active" : ""}
            onClick={() => {
              setTag(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {breakpoints.sm ? (
        <div style={{ width: "100vw" }}>
          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            spaceBetween={"16px"}
            autoplay={{ delay: 100000000 }}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={item.node.frontmatter?.title}>
                {/* <div className="story-slide"> */}
                <img
                  src={item.node.frontmatter?.thumbnail!}
                  alt=""
                  width={"100%"}
                />
                <h4>{item.node.frontmatter?.title!}</h4>
                {/* <p>{item.node.frontmatter?.overview?.description}</p> */}
                <div id="author">
                  <img
                    src={item.node.frontmatter?.overview?.details?.profile!}
                    alt=""
                  />
                  {item.node.frontmatter?.overview?.details?.author}
                  <div id="ellipse"></div>
                  {format(
                    parseISO(
                      item.node.frontmatter?.overview?.details?.publishDate!
                    ),
                    "dd MMM, yyyy"
                  )}
                </div>
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="story-slide">
          {slides.map((item, index) => (
            <Link
              key={index}
              to={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}
            >
              <div className="story">
                <img src={item.node.frontmatter?.thumbnail!} alt="" />
                <h4>{item.node.frontmatter?.title!}</h4>
                <p>{item.node.frontmatter?.overview?.description}</p>
                <div id="author">
                  <img
                    src={item.node.frontmatter?.overview?.details?.profile!}
                    alt=""
                  />
                  {item.node.frontmatter?.overview?.details?.author}
                  <div id="ellipse"></div>
                  {format(
                    parseISO(
                      item.node.frontmatter?.overview?.details?.publishDate!
                    ),
                    "dd MMM, yyyy"
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogsFilter
