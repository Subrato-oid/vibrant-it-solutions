import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type SolutionProps = NonNullable<Queries.CommonJsonSolution>

const Solution = (props: SolutionProps): React.ReactElement => (
  <div className="solution">
    <div className="sleft">
      <img src={props?.image!} alt="" />
    </div>
    <div className="sright">
      <h2>
        <span className="head1">{props?.title}</span>&nbsp;
        <span className="head2">{props?.titleHighlight}</span>
      </h2>
      <p>{props?.description}</p>
      <a href="#" className="Cbutton">
        {props?.button?.buttonText} <img src={props?.button?.icon!} alt="" />
      </a>
    </div>
  </div>
)

export default Solution
