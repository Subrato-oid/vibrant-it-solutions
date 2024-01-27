import * as React from "react"
import "../styles/about.css"
import AboutUs from "../components/AboutUs"
import AboutImage from "../components/AboutImage"
import Mission from "../components/Mission"
import Milestones from "../components/Milestones"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types

// Step 2: Define your Page
const AboutPage = (): React.ReactElement => {
  return (
    <AboutPageTemplate/>
  )
}
export default AboutPage

// Step 3: Define your Page Template
export const AboutPageTemplate = (): React.ReactElement => {
  return (
    <CommonLayout>
      <AboutUs />
      <AboutImage />
      <Mission />
      <Milestones />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
/* export const pageQuery = graphql`
  query AboutPage {
  }
`
 */
