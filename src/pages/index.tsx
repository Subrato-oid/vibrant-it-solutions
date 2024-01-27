import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import Hero from "../components/Hero"
import Clients from "../components/Clients"
import About from "../components/About"
import Success from "../components/Success"
import Service from "../components/Services"
import Process from "../components/Process"
import "../styles/index.css"
import CommonLayout from "../components/CommonLayout"

export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

export type IndexPageFrontmatterType = NonNullable<
Queries.IndexPageQuery["markdownRemark"]
>["frontmatter"]

// Step 2: Define your component
const IndexPage = ({
  data,
}: PageProps<Queries.IndexPageQuery>): React.ReactElement => {
  return <IndexPageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}

export const IndexPageTemplate = ({
  frontmatter,
}: {
  frontmatter: IndexPageFrontmatterType
}): React.ReactElement => {
  console.log("data", frontmatter)

  const {
    hero,
    client,
    about,
    success,
    services,
    process,
  } = frontmatter
  return (
    <CommonLayout>
      <Hero {...hero} />
      <Clients {...client} />
      <About {...about} />
      <Success {...success} />
      <Service {...services} />
      <Process {...process} />
    </CommonLayout>
  )
}

export { Head } from "../components/Head"

export default IndexPage

export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        hero {
          titleUp
          titleHighlight
          titleDown
          image
          description
          button {
            buttonText
            icon
          }
        }
        client {
          title
          logos {
            logo
          }
        }
        about {
          titleUp
          titleHighlight
          titleDown
          image
          description
          button {
            buttonText
            icon
          }
        }
        success {
          titleUp
          titleHighlight
          boxes {
            title
            description
          }
        }
        process {
          title
          titleHighlight
          description
          button {
            buttonText
            icon
          }
          phases {
            title
            description
          }
        }
        services {
          title
          titleHighlight
          service {
            icon
            description
            title
          }
        }
      }
    }
  }
`
