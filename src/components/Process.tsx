import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type ProcessProps = NonNullable<IndexPageFrontmatterType>["process"]

const Process = (props: NonNullable<ProcessProps>): React.ReactElement => (
  <section>
    <div className="process">
      <h2>
        <span className="head1">{props.title}</span>&nbsp;
        <span className="head2">{props.titleHighlight}</span>
      </h2>
      <p>{props.description}</p>
      <a href="#" className="button">
        {props.button?.buttonText}{" "}
      </a>
    </div>
    <div className="process-container">
      {props.phases?.map((item, index) => (
        <div key={index} className="p-container">
          <div className="p-left">
            {`0${index + 1}`}
            <h2>{item?.title}</h2>
          </div>
          <p>{item?.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Process
