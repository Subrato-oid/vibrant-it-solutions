import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type SuccessProps = NonNullable<IndexPageFrontmatterType>["success"]

const Success = (props: NonNullable<SuccessProps>): React.ReactElement => (
  <div className="container2">
    <div className="success">
      <h2>
        <span className="head1">{props.titleUp}</span>
        <br />
        <span className="head2">{props.titleHighlight}</span>
      </h2>
      <div className="boxes">
        {props.boxes?.map((item, index) => (
          <div key={index} className="sbox">
            <h1>{item?.title}</h1>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Success
