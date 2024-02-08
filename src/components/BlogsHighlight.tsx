import * as React from "react"
import { type BlogListType } from "../templates/blog"
import { Link } from "gatsby"
import _ from "lodash"
import { format, parseISO } from "date-fns"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"

type BlogsHighlightProps = BlogListType

const BlogsHighlight = ({
  data,
}: {
  data: BlogsHighlightProps
}): React.ReactElement => {
  const breakpoint = useBreakpoint()

  return (
    <>
      <div className="highlighted">
        <h4>Highlighted Stories</h4>
      </div>

      {breakpoint.sm ? (
        <div className="H-story-slide" id="H-slide">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            spaceBetween={32}
            autoplay={{ delay: 100000000 }}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
          >
            {data.slice(0, 5).map((item, i) => (
              <SwiperSlide key={`Blog-${i}`} className="H-story">
                <Link
                  key={i}
                  to={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}
                >
                  <img src={item.node.frontmatter?.thumbnail!} alt="" />
                  <h4>{item.node.frontmatter?.title}</h4>
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="H-story-slide" id="H-slide">
          {data.slice(0, 5).map((item, i) => (
            <Link
              key={i}
              to={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}
            >
              <div key={i} className="H-story">
                <img src={item.node.frontmatter?.thumbnail!} alt="" />
                <h4>{item.node.frontmatter?.title}</h4>
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
                  {/* <div id="ellipse"></div>
          {item.node.frontmatter?.overview?.details?.topic} */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default BlogsHighlight
