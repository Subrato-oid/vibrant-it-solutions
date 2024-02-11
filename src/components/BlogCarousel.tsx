import * as React from "react"
import { type BlogListType } from "../templates/blog"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import { Link } from "gatsby"
import _ from "lodash"

type BlogCarouselProps = BlogListType

const BlogCarousel = ({
  data,
}: {
  data: BlogCarouselProps
}): React.ReactElement => (
  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
  >
    {data.slice(0, 3).map((item, index) => (
      <SwiperSlide key={index}>
        <Link to={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}>
          <div className="staging-future">
            <img src={item.node.frontmatter?.thumbnail!} alt="" />
            <h2>
              <span className="head1">{item.node.frontmatter?.title}</span>
            </h2>
            <p>
              {(item.node.frontmatter?.overview?.description + " ").padEnd(
                60,
                "\u00a0 "
              )}
            </p>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
)

export default BlogCarousel
