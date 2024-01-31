import * as React from "react"
import "../styles/terms-and-conditions.css"
import TandC from "../components/TandC"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types
export type TermsConditionsPageFrontmatterType = NonNullable<
Queries.TermsConditionsPageQuery["markdownRemark"]
>["frontmatter"]

// Step 2: Define your Page
const TermsConditionsPage = ({
  data,
}: PageProps<Queries.TermsConditionsPageQuery>): React.ReactElement => {
  return (
    <TermsConditionsPageTemplate
      frontmatter={data.markdownRemark?.frontmatter!}
    />
  )
}
export default TermsConditionsPage

// Step 3: Define your Page Template
export const TermsConditionsPageTemplate = ({
  frontmatter,
}: {
  frontmatter: TermsConditionsPageFrontmatterType
}): React.ReactElement => {
  const { terms_Conditions } = frontmatter
  return (
    <BaseLayout>
      <TandC {...terms_Conditions} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query TermsConditionsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "tandc-page" } }) {
      id
      frontmatter {
        title
        terms_Conditions {
          kicker
          title
          titleHighlight
          lastUpdate
          content
        }
      }
    }
  }
`
