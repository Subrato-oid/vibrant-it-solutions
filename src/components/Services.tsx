import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type ServiceProps = NonNullable<IndexPageFrontmatterType>["services"]

const Service = (props: NonNullable<ServiceProps>): React.ReactElement => (
  <div className="services">
    <h2>
      <span className="head1">{props.title}</span>
      <span className="head2">{props.titleHighlight}</span>
    </h2>
    <div className="Scontainer">
      {props?.service?.map((item, index) => (
        <div key={index} className="box">
          <img className="slogo" src={item?.icon!} alt="Logo 1" />
          <h2>
            {item?.title} <img src="/images/down-right 1.svg" alt="" />
          </h2>
          <p>{item?.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Service
