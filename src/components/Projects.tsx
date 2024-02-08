import React from "react"
import { type ServiceWorkEdgeType } from "../templates/service"
import { Link } from "gatsby"

// type ProjectProp = NonNullable<ServicePageFrontmatterType>["project"]

type ProjectProps = {
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  workList: NonNullable<ServiceWorkEdgeType>
}

const Project = ({
  titleBefore,
  titleHighlight,
  titleAfter,
  workList,
}: ProjectProps): React.ReactElement => (
  <div className={"RPsection"}>
    <h2>
      {titleBefore} <span className={"line2"}>{titleHighlight}</span>{" "}
      {titleAfter}
    </h2>
    <div className={"R-slide"}>
      {workList?.slice(0, 3).map((item, index) => (
        <div key={index} className={"Rleft-section"}>
          <div>
            <h3 className={"subheading"}>{item.node.frontmatter?.title}</h3>
            <p className={"paragraph"}>{item.node.frontmatter?.description}</p>
            <span className={"view-project"}>
              <Link
                to={`/works/${item.node.frontmatter?.title?.toLowerCase()}`}
              >
                View Project <img src="/images/arrow-right.svg" alt="" />
              </Link>
            </span>
          </div>
          <img
            className={"project-image"}
            src={item.node.frontmatter?.thumbnail!}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
)

export default Project
