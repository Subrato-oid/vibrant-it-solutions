import React from "react"
import {
  softwareSolution,
  line1,
  line2,
  button,
  softwareDev
} from "./SoftwareSolution.module.css"
import { type ServicePageNodeType } from "../template/service"

type SoftwareSolutionProps = NonNullable<
NonNullable<ServicePageNodeType>["frontmatter"]
>["hero"]

const SoftwareSolution = (props: SoftwareSolutionProps): React.ReactElement => (
  <div className={softwareSolution}>
    <h1>
      <span className={line1}>{props?.titleBefore}</span>&nbsp;
      <span className={line2}>{props?.titleHighlight}</span>&nbsp;
      <span className={line1}>{props?.titleAfter}</span>
    </h1>
    <p>{props?.description}</p>
    <a href="#" className={button}>
      {props?.button?.buttonText} <img src={props?.button?.icon!} alt="" />{" "}
    </a>
    <img src={props?.image!} alt="" id={softwareDev} />
  </div>
)

export default SoftwareSolution
