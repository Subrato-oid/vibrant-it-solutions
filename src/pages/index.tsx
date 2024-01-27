import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Clients from "../components/Clients"
import About from "../components/About"
import Success from "../components/Success"
import Service from "../components/Services"
import Process from "../components/Process"
import Testimonial from "../components/Testimonial"
import Solution from "../components/Solution"
import "../styles/index.css"

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
    testimonial,
    solution,
  } = frontmatter!
  return (
    <Layout>
      <Hero {...hero!} />
      <Clients {...client!} />
      <About {...about!} />
      <Success {...success!} />
      <Service {...services!} />
      <Process {...process!} />
      <Testimonial {...testimonial!} />
      <Solution {...solution!} />
    </Layout>
  )
}

export { Head } from "../components/Head"

export default IndexPage

export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        header {
          logo
          navItems {
            item
          }
        }
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
