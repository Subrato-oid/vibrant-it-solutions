import * as React from "react"
import { type BlogListType } from "../pages/blogs"
import _ from "lodash"
import { format, parseISO } from "date-fns"

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
      {
        <div className="story-slide">
          {slides.map((item, index) => (
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
                {format(
                  parseISO(
                    item.node.frontmatter?.overview?.details?.publishDate!
                  ),
                  "dd MMM, yyyy"
                )}
              </div>
            </div>
          ))}
        </div>
      }
      {/* <div className="story-slide" id="slide2">
        {slide2
          .slice(3, 6)
          .map((item, index) => (
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
      </div> */}
    </div>
  )
}

export default BlogsFilter
