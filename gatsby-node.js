const _ = require("lodash")
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query serviceList {
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
    result.errors.forEach((e) => {
      console.error(e.toString())
    })
    await Promise.reject(result.errors)
    return
  }

  const services = result.data?.allMarkdownRemark?.edges || []

  services.forEach((edge) => {
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