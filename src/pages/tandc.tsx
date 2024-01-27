import * as React from "react"
import { graphql } from "gatsby"
import "../styles/tandc.css"
import TandC from "../components/TnadC"
import BaseLayout from "../components/BaseLayout"

export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

const TandCPage = (): React.ReactElement => {
  return <TandCPageTemplate />
}

export const TandCPageTemplate = (): React.ReactElement => {
  return (
    <BaseLayout>
      <TandC />
    </BaseLayout>
  )
}

export default TandCPage

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
