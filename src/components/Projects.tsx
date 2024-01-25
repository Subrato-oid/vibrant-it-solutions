import React from "react"
import {
  RPsection,
  line2,
  RSlide,
  RleftSection,
  subheading,
  paragraph,
  viewProject,
  projectImage
} from "./Projects.module.css"
import { type ServicePageNodeType } from "../template/service"

type ProjectProp = NonNullable<
NonNullable<ServicePageNodeType>["frontmatter"]
>["project"]

const Project = (props: ProjectProp): React.ReactElement => (
  <div className={RPsection}>
    <h2>
      {props?.titleBefore}{" "}
      <span className={line2}>{props?.titleHighlight}</span> {props?.titleAfter}
    </h2>
    <div className={RSlide}>
      {props?.projects?.map((item, index) => (
        <div key={index} className={RleftSection}>
          <div>
            <h3 className={subheading}>{item?.title}</h3>
            <p className={paragraph}>{item?.description}</p>
            <span className={viewProject}>
              View Project <img src="/images/arrow-right.svg" alt="" />
            </span>
          </div>
          <img src={item?.image!} alt="Image 1" className={projectImage} />
        </div>
      ))}
    </div>
  </div>
)

export default Project
