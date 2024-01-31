import * as React from "react"
import { type BlogListType } from "../templates/blog"

type BlogCarouselProps = NonNullable<BlogListType>

const BlogCarousel = ({
  data,
}: {
  data: BlogCarouselProps
}): React.ReactElement => (
  <div className="staging-future">
    <img src="/images/blog-listing/image 2139.svg" alt="" />
    <h2>
      <span className="head1">
        Staging the future; our path to secure and efficient deployments
      </span>
    </h2>
    <p>
      We're more than an IT Solutions Company; we infuse every project with
      passion and purpose.
    </p>
  </div>
)

export default BlogCarousel
