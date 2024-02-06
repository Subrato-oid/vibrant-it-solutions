import * as React from "react"
import { type BlogListType } from "../templates/blog"
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import BlogNavButton from "./BlogNavButton"
import { Link } from "gatsby"
import _ from "lodash"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { format, parseISO } from "date-fns"

type MoreBlogProps = NonNullable<BlogListType>

const MoreBlog = ({ data }: { data: MoreBlogProps }): React.ReactElement => {
  const sliderRef = React.useRef<SwiperRef>(null)
  const breakpoint = useBreakpoint()

  const clickPrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const clickNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="blog-post-filter">
      <BlogNavButton clickPrev={clickPrev} clickNext={clickNext} />
      <div className="blog-post-story-slide">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, Navigation]}
          navigation
          slidesPerView={breakpoint.sm ? 1.2 : 3}
          spaceBetween={"50rem"}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}>
                <div className="blog-post-story">
                  <img src={item.node.frontmatter?.thumbnail!} alt="" />
                  <h4>{item.node.frontmatter?.title}</h4>
                  <p id="author">
                    <img
                      src={item.node.frontmatter?.overview?.details?.profile!}
                      alt=""
                    />
                    {item.node.frontmatter?.overview?.details?.author}
                    <img src="media/blog/Ellipse 14.svg" alt="" />
                    {format(
                      parseISO(
                        item.node.frontmatter?.overview?.details?.publishDate!
                      ),
                      "dd MMM, yyyy"
                    )}

                    {/* <img src="media/blog/Ellipse 14.svg" alt="" />
                  {item.node.frontmatter?.overview?.details?.topic} */}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MoreBlog
