import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import Layout from "../components/Layout"
import Testimonial from "../components/Testimonial"
import Solution from "../components/Solution"
import "../styles/global.css"
import SoftwareSolution from "../components/SoftwareSolution"
import Project from "../components/Projects"
import Expertise from "../components/Expertise"

// export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

export type IndexPageFrontmatterType = NonNullable<
Queries.IndexPageQuery["markdownRemark"]
>["frontmatter"]

// Step 2: Define your component
const ServicePage = ({
  data,
}: PageProps<Queries.IndexPageQuery>): React.ReactElement => {
  return <ServicePageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}

export const ServicePageTemplate = ({
  frontmatter,
}: {
  frontmatter: ServicePageFrontmatterType
}): React.ReactElement => {
  console.log("data", frontmatter)

  const { testimonial, solution } = frontmatter

  return (
    <Layout>
      <SoftwareSolution />
      <Expertise />
      <Project />
      <Testimonial {...testimonial} />
      <Solution {...solution} />
    </Layout>
  )
}

export { Head } from "../components/Head"

export default ServicePage

export const query = graphql`
  query ServicePage {
    services: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "service-page" } } }
    ) {
      edges {
        service: node {
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
