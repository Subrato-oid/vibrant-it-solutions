import { type GatsbyNode, type CreatePagesArgs } from "gatsby"

const _ = require("lodash")
const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

type MarkdownRemarkNode = {
  id: string
  frontmatter: {
    title: string
  }
}
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}: CreatePagesArgs) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "service-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors !== undefined && result.errors !== null) {
    result.errors.forEach((e: Error) => {
      console.error(e.toString())
    })
    await Promise.reject(result.errors); return
  }

  // const services = result.data?.services?.edges || []
  const services = result.data?.allMarkdownRemark?.edges

  services.forEach((edge: { node: MarkdownRemarkNode }) => {
    const id = edge.node.id
    createPage({
      path: `services/${_.kebabCase(edge.node.frontmatter.title)}`,
      component: path.resolve("src/templates/service.tsx"),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
