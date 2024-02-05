import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { Link } from "gatsby"
import _ from "lodash"

type ServiceProps = NonNullable<IndexPageFrontmatterType>["services"]

const Service = (props: NonNullable<ServiceProps>): React.ReactElement => {
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <div className="services">
      <h2>
        <span className="head1">{props.title}</span>&nbsp;
        <span className="head2">{props.titleHighlight}</span>
      </h2>
      <div className="Scontainer">
        {props?.service?.map((item, index) => (
          <Link key={index} to={`/services/${_.kebabCase(item?.title!)}`}>
            <div
              className="box"
              onMouseOver={() => {
                setHovered(index)
              }}
              onMouseOut={() => {
                setHovered(null)
              }}
            >
              <img className="slogo" src={item?.icon!} alt="Logo 1" />
              <h2>
                {item?.title}{" "}
                <img
                  src={
                    hovered === index
                      ? "/images/down-right-1.svg"
                      : "/images/down-right 1.svg"
                  }
                  alt=""
                />
              </h2>
              <p>{item?.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Service
