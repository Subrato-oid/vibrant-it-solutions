import * as React from "react"
import { type BlogListType } from "../templates/blog"

type BlogsHighlightProps = NonNullable<BlogListType>

const BlogsHighlight = ({
  data,
}: {
  data: BlogsHighlightProps
}): React.ReactElement => (
  <>
    <div className="highlighted">
      <h4>Highlighted Stories</h4>
    </div>
    <div className="H-story-slide" id="H-slide">
      {data.slice(0, 5).map((item, i) => (
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
            {item.node.frontmatter?.overview?.details?.publishDate}
            {/* <div id="ellipse"></div>
            {item.node.frontmatter?.overview?.details?.topic} */}
          </div>
        </div>
      ))}
    </div>
  </>
)

export default BlogsHighlight
