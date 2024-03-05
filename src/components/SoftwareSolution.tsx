import React from "react"
import { type ServicePageFrontmatterType } from "../templates/service"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type SoftwareSolutionProps = NonNullable<ServicePageFrontmatterType>["hero"]

const SoftwareSolution = (
  props: NonNullable<SoftwareSolutionProps>
): React.ReactElement => (
  <div className={"software-solution"}>
    <h1>
      <span className={"line1"}>{props.titleBefore}</span>&nbsp;
      <span className={"line2"}>{props.titleHighlight}</span>&nbsp;
      <span className={"line1"}>{props.titleAfter}</span>
    </h1>
    <p>{props.description}</p>
    <a href="/contact" className={"button"}>
      {props.button?.buttonText} <img src={props.button?.icon!} alt="" />{" "}
    </a>
    <LazyLoadImage
      placeholderSrc={props.image!}
      effect="blur"
      src={props.image!}
      alt=""
      id={"softwareDev"}
    />
  </div>
)

export default SoftwareSolution
