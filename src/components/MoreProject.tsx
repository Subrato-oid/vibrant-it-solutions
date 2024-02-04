import * as React from "react"
import { type WorkListType } from "../templates/work"
import { Link } from "gatsby"

type MoreProjectProps = NonNullable<WorkListType>

const MoreProject = ({
  data,
}: {
  data: NonNullable<MoreProjectProps>
}): React.ReactElement => {
  return (
    <div className="more-projects">
      <h2>
        <span className="head2">More</span>
        <span className="head1">Projects</span>
      </h2>
      <div className="project">
        {data?.slice(0, 3).map((item, i) => (
          <Link
            key={`wrok-${i}`}
            to={`/works/${item.node.frontmatter?.title!.toLowerCase()}`}
          >
            <div className="recent-projects">
              <img src={item.node.frontmatter?.thumbnail!} alt="" />
              <h3>
                {item.node.frontmatter?.title}
                <img src="/images/work/arrow-right.svg" alt="" />
              </h3>
              <p>{item.node.frontmatter?.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MoreProject

// {<div className="recent-projects">
// <img src="/images/work/image 10.svg" alt="" />
// <h3>Wonder<img src="/images/work/arrow-right.svg" alt="" /></h3>
// <p>We're more than an IT Solutions Company; we infuse every project with passion and purpose.</p>
// </div>
// <div className="recent-projects">
// <div className="recent-projects">
//   <img src="/images/work/image 11.svg" alt="" />
//   <h3>Termgrid <img src="/images/work/arrow-right.svg" alt="" /></h3>
//   <p>We're more than an IT Solutions Company; we infuse every project with passion and purpose.</p>
// </div>
// </div>
// <div className="recent-projects">
// <div className="recent-projects">
//   <img src="/images/work/image 12.svg" alt="" />
//   <h3>Descates <img src="/images/work/arrow-right.svg" alt="" /></h3>
//   <p>We're more than an IT Solutions Company; we infuse every project with passion and purpose.</p>
// </div>
// </div>}
