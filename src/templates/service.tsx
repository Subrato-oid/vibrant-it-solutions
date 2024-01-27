import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import "../styles/services.css"
import SoftwareSolution from "../components/SoftwareSolution"
import Project from "../components/Projects"
import Expertise from "../components/Expertise"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types
type ServicePageType =
  NonNullable<Queries.ServicePageByIdQuery>["service"]

export type ServicePageFrontmatterType = NonNullable<ServicePageType>["frontmatter"]

// Step 2: Define your Page
const ServicePage = ({
  data,
}: PageProps<Queries.ServicePageByIdQuery>): React.ReactElement => {
  console.log("service", data.service)
  return <ServicePageTemplate service={data.service} />
}
export default ServicePage

// Step 3: Define your Page Template
export const ServicePageTemplate = ({
  service,
}: {
  service: ServicePageType
}): React.ReactElement => {
  const { hero, expertise, project } = service?.frontmatter!
  return (
    <CommonLayout>
      <SoftwareSolution {...hero!} />
      <Expertise {...expertise!} />
      <Project {...project!} />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query ServicePageById($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        hero {
          titleHighlight
          titleBefore
          titleAfter
          image
          description
          button {
            buttonText
            icon
          }
        }
        expertise {
          titleBefore
          titleHighlight
          titleAfter
          expertises {
            title
            description
          }
        }
        project {
          titleBefore
          titleHighlight
          titleAfter
          projects {
            title
            description
            image
          }
        }
      }
    }
  }
`
