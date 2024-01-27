import * as React from "react"
import {
  ServicePageTemplate
} from "../../templates/service"

type Prop = {
  entry: {
    getIn: (arg: string[]) => any
  }
}
const ServicePagePreview = ({ entry }: Prop): React.ReactElement => {
  const serviceData = entry.getIn(["data"]).toJS()
  console.log(serviceData)
  if (serviceData === null) return <div>Loading...</div>
  return (
    <ServicePageTemplate serviceNode={serviceData} />
  )
}

export default ServicePagePreview
