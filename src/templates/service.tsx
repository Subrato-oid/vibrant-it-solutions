import * as React from "react"
import { graphql } from "gatsby"
import "../styles/services.css"
import SoftwareSolution from "../components/SoftwareSolution"
import Project from "../components/Projects"
import Expertise from "../components/Expertise"
import CommonLayout from "../components/CommonLayout"

// export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

export type ServicePageFrontmatterType = NonNullable<
  Queries.ServicePageQuery["common"]
>["frontmatter"]

export type ServicePageType = NonNullable<Queries.ServicePageQuery["services"]>

export type ServicePageEdgeType = NonNullable<
  NonNullable<Queries.ServicePageQuery["services"]>["edges"]
>

export type ServicePageNodeType = NonNullable<
  NonNullable<Queries.ServicePageQuery["services"]>["edges"]
>[0]["service"]

// Step 2: Define your component
const ServicePage = ({
  data,
  pageContext,
}: {
  data: Queries.ServicePageQuery
  pageContext: { id: string }
}): React.ReactElement => {
  const service = data.services.edges.filter(
    (edge) => edge.service.id === pageContext.id
  )[0]

  console.log("service", service)
  console.log("pageContext", pageContext)
  return <ServicePageTemplate serviceNode={service} />
}

export const ServicePageTemplate = ({
  serviceNode,
}: {
  serviceNode: ServicePageNodeType
}): React.ReactElement => {
  console.log("services", serviceNode)

  const { hero, expertise, project } = serviceNode.service.frontmatter!

  return (
    <CommonLayout>
      <SoftwareSolution {...hero} />
      <Expertise {...expertise} />
      <Project {...project} />
    </CommonLayout>
  )
}

export default ServicePage

export const query = graphql`
  query ServicePage {
    services: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "service-page" } } }
    ) {
      edges {
        service: node {
          id
          fileAbsolutePath
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
    }
    common: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        testimonial {
          testimony
          name
          bio
          image
        }
        solution {
          title
          titleHighlight
          image
          description
          button {
            buttonText
            icon
          }
        }
      }
    }
  }
`
