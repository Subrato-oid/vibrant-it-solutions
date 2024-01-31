import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import "../styles/blog.css"
import BlogOverview from "../components/BlogOverview"
import BlogContent from "../components/BlogContent"
import MoreBlog from "../components/MoreBlog"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types
type BlogPageType = NonNullable<Queries.BlogPageByIdQuery>["blog"]

export type BlogListType = NonNullable<
NonNullable<Queries.BlogPageByIdQuery>["blogs"]
>["edges"]

export type BlogPageFrontmatterType = NonNullable<BlogPageType>["frontmatter"]

// Step 2: Define your Page
const BlogPage = ({
  data,
}: PageProps<Queries.BlogPageByIdQuery>): React.ReactElement => {
  console.log("work", data.blog)
  return <BlogPageTemplate blog={data.blog} list={data.blogs.edges} />
}
export default BlogPage

// Step 3: Define your Page Template
export const BlogPageTemplate = ({
  blog,
  list,
}: {
  blog: BlogPageType
  list: BlogListType
}): React.ReactElement => {
  const { overview, content } = blog?.frontmatter!
  return (
    <BaseLayout>
      <BlogOverview {...overview!} />
      <BlogContent {...content!} />
      <MoreBlog data={list} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query BlogPageById($id: String!) {
    blogs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            featured
            tag
            thumbnail
            overview {
              kicker
              titleTop
              titleDown
              titleHighlight
              description
              image
              details {
                publishDate
                author
                topic
                profile
              }
            }
          }
        }
      }
    }

    blog: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        templateKey
        featured
        tag
        thumbnail
        overview {
          kicker
          titleTop
          titleDown
          titleHighlight
          description
          image
          details {
            publishDate
            author
            topic
            profile
          }
        }
        content {
          blog
        }
      }
    }
  }
`
