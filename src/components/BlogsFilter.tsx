import * as React from "react"
import { type BlogListType } from "../pages/blogs"

type BlogsFilterProps = NonNullable<BlogListType>

const BlogsFilter = ({
  data,
}: {
  data: BlogsFilterProps
}): React.ReactElement => {
  // const [tag, setTag] = React.useState("all")

  return (
    <div className="filter">
      <h4>Filter by</h4>
      <div className="filter-by">
        <h6>All</h6>
        <h6>Dev</h6>
        <h6>Design</h6>
        <h6>Research</h6>
        <h6>People</h6>
        <h6>Company</h6>
        <h6>Branding</h6>
      </div>
      <div className="story-slide">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className="story">
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
              {item.node.frontmatter?.overview?.details?.publishDate}
              <div id="ellipse"></div>
              {item.node.frontmatter?.overview?.details?.topic}
            </div>
          </div>
        ))}
      </div>
      <div className="story-slide" id="slide2">
        {data.slice(3, 6).map((item, index) => (
          <div key={index} className="story">
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
              {item.node.frontmatter?.overview?.details?.publishDate}
              <div id="ellipse"></div>
              {item.node.frontmatter?.overview?.details?.topic}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogsFilter
