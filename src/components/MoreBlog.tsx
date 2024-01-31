import * as React from "react"
import { type BlogListType } from "../templates/blog"

type MoreBlogProps = NonNullable<BlogListType>

const MoreBlog = ({ data }: { data: MoreBlogProps }): React.ReactElement => (
  <div className="filter">
    <div className="reads">
      <h2>
        <span className="head1">More</span>
        <span className="head2">Reads</span>
      </h2>
      <div className="icons">
        <img src="/images/blog/Vector (2).svg" alt="" />
        <img src="/images/blog/Vector (3).svg" alt="" />
      </div>
    </div>
    <div className="story-slide">
      {data.map((item, index) => (
        <div key={index} className="story">
          <img src={item.node.frontmatter?.thumbnail!} alt="" />
          <h4>{item.node.frontmatter?.title}</h4>
          <p id="author">
            <img
              src={item.node.frontmatter?.overview?.details?.profile!}
              alt=""
            />
            {item.node.frontmatter?.overview?.details?.author}
            <img src="media/blog/Ellipse 14.svg" alt="" />
            {item.node.frontmatter?.overview?.details?.publishDate}
            <img src="media/blog/Ellipse 14.svg" alt="" />
            {item.node.frontmatter?.overview?.details?.topic}
          </p>
        </div>
      ))}

      <div className="story">
        <img src="media/blog-detail/image 31.svg" alt="" />
        <h4>Supercharge your development workflow with Raycast</h4>
        <p id="author">
          <img src="media/blog/Ellipse 13.svg" alt="" />
          Reema Sharma
          <img src="media/blog/Ellipse 14.svg" alt="" /> 24 Dec, 2023
          <img src="media/blog/Ellipse 14.svg" alt="" />
          Dev
        </p>
      </div>

      <div className="story">
        <img src="media/blog-detail/image 32.svg" alt="" />
        <h4>
          Staging the future; our path to secure and efficient deployments
        </h4>
        <p id="author">
          <img src="media/blog/Ellipse 13.svg" alt="" />
          Reema Sharma
          <img src="media/blog/Ellipse 14.svg" alt="" /> 24 Dec, 2023
          <img src="media/blog/Ellipse 14.svg" alt="" />
          Dev
        </p>
      </div>

      <div className="story">
        <img src="media/blog-detail/image 33.svg" alt="" />
        <h4>
          Staging the future; our path to secure and efficient deployments
        </h4>
        <p id="author">
          <img src="media/blog/Ellipse 13.svg" alt="" />
          Reema Sharma
          <img src="media/blog/Ellipse 14.svg" alt="" /> 24 Dec, 2023
          <img src="media/blog/Ellipse 14.svg" alt="" />
          Dev
        </p>
      </div>
    </div>
  </div>
)

export default MoreBlog
