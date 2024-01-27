import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/BaseLayout"
import Testimonial from "../components/Testimonial"
import Solution from "../components/Solution"
import "../styles/career.css"
import JobOpening from "../components/JobOpening"
import JoinSection from "../components/JoinSection"
import Career from "../components/Career"
import CareerImage from "../components/CareerImage"
import Apply from "../components/Apply"

export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

export type ServicePageFrontmatterType = NonNullable<
Queries.ServicePageQuery["common"]
>["frontmatter"]

// export type ServicePageType = NonNullable<Queries.ServicePageQuery["services"]>

// export type ServicePageEdgeType = NonNullable<
// NonNullable<Queries.ServicePageQuery["services"]>["edges"]
// >

// export type ServicePageNodeType = NonNullable<
// NonNullable<Queries.ServicePageQuery["services"]>["edges"]
// >[0]["service"]

// Step 2: Define your component
const CareerPage = ({
  data,
  pageContext,
}: {
  data: Queries.ServicePageQuery
  pageContext: { id: string }
}): React.ReactElement => {
  console.log(data)
  // const service = data.services.edges.filter(
  //   (edge) => edge.service.id === pageContext.id
  // )[0]

  // console.log("service", service)
  console.log("pageContext", pageContext)
  return (
    <CareerPageTemplate
      // serviceNode={service}
      frontmatter={data.common?.frontmatter!}
    />
  )
}

export const CareerPageTemplate = ({
  // serviceNode,
  frontmatter,
}: {
  // serviceNode: ServicePageNodeType
  frontmatter: ServicePageFrontmatterType
}): React.ReactElement => {
  console.log("data", frontmatter)
  // console.log("services", serviceNode)

  const { testimonial, solution } = frontmatter
  // const { hero, expertise, project } = serviceNode.service.frontmatter!

  return (
    <Layout>
      <Career />
      <CareerImage />
      <JobOpening />
      <JoinSection />
      <Apply />
      <Testimonial {...testimonial} />
      <Solution {...solution} />
    </Layout>
  )
}

export default CareerPage

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
        header {
          logo
          navItems {
            item
          }
        }
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
        footer {
          column {
            heading
            elemnets {
              text
            }
          }
        }
      }
    }
  }
`
