import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"

type ApplyProps = NonNullable<CareerPageFrontmatterType>["applyNow"]

const Apply = (props: ApplyProps): React.ReactElement => (
  <div className={"apply-now"}>
    <h2>
      <span className={"head1"}>{props?.titleUp}</span>
      <br />
      <span className={"head1"}>{props?.titleDown}</span>&nbsp;
      <span className={"head2"}>{props?.titleHighlight}</span>
    </h2>
    <div className={"line"}></div>
    <div className={"apply"}>
      <h3>{props?.heading}</h3>
      <p>{props?.description}</p>
      <a href="mailto: abc@example.com" className={"button"}>
        {props?.button?.buttonText}
        <img src={props?.button?.icon!} alt="" />
      </a>
    </div>
  </div>
)

export default Apply
