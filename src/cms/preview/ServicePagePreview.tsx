import * as React from "react"
import {
  type ServicePageNodeType,
  ServicePageTemplate
  // type ServicePageFrontmatterType
} from "../../templates/service"

type Prop = {
  entry: {
    getIn: (arg: string[]) => any
  }
}
const ServicePagePreview = ({ entry }: Prop): React.ReactElement => {
  const serviceData = entry.getIn(["data"]).toJS()
  // const IndexData = entry.getIn(["data"]).toJS() as ServicePageFrontmatterType

  console.log(serviceData)
  console.log(IndexData)

  if (serviceData === null) return <div>Loading...</div>
  return (
    <ServicePageTemplate serviceNode={serviceData} frontmatter={IndexData} />
  )
}

export default ServicePagePreview
