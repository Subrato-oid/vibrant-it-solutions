import React from "react"
import { type ServicePageFrontmatterType } from "../templates/service"

type ProjectProp = NonNullable<ServicePageFrontmatterType>["project"]

const Project = (props: NonNullable<ProjectProp>): React.ReactElement => (
  <div className={"RPsection"}>
    <h2>
      {props.titleBefore}{" "}
      <span className={"line2"}>{props.titleHighlight}</span> {props.titleAfter}
    </h2>
    <div className={"RSlide"}>
      {props.projects?.map((item, index) => (
        <div key={index} className={"Rleft-section"}>
          <div>
            <h3 className={"subheading"}>{item?.title}</h3>
            <p className={"paragraph"}>{item?.description}</p>
            <span className={"view-project"}>
              View Project <img src="/images/arrow-right.svg" alt="" />
            </span>
          </div>
          <img src={item?.image!} alt="Image 1" className={"project-image"} />
        </div>
      ))}
    </div>
  </div>
)

export default Project
