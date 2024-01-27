import * as React from "react"
import "../styles/tandc.css"
import TandC from "../components/TnadC"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types

// Step 2: Define your Page
const TandCPage = (): React.ReactElement => {
  return <TandCPageTemplate />
}
export default TandCPage

// Step 3: Define your Page Template
export const TandCPageTemplate = (): React.ReactElement => {
  return (
    <BaseLayout>
      <TandC />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
/* export const pageQuery = graphql`
  query TandCPage {
  }
` */
