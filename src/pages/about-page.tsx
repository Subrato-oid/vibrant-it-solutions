import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Testimonial from "../components/Testimonial"
import Solution from "../components/Solution"
import "../styles/global.css"
import AboutUs from "../components/AboutUs"
import AboutImage from "../components/AboutImage"
import Mission from "../components/Mission"
import Milestones from "../components/Milestones"

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
const AboutPage = ({
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
    <AboutPageTemplate
      // serviceNode={service}
      frontmatter={data.common?.frontmatter!}
    />
  )
}

export const AboutPageTemplate = ({
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
      <AboutUs />
      <AboutImage />
      <Mission />
      <Milestones />
      <Testimonial {...testimonial} />
      <Solution {...solution} />
    </Layout>
  )
}

export default AboutPage

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
