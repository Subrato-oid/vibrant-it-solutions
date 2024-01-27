import * as React from "react"
import "../styles/career.css"
import JobOpening from "../components/JobOpening"
import JoinSection from "../components/JoinSection"
import Career from "../components/Career"
import CareerImage from "../components/CareerImage"
import Apply from "../components/Apply"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types

// Step 2: Define your Page
const CareerPage = (): React.ReactElement => {
  return (
    <CareerPageTemplate />
  )
}
export default CareerPage

// Step 3: Define your Page Template
export const CareerPageTemplate = (): React.ReactElement => {
  return (
    <CommonLayout>
      <Career />
      <CareerImage />
      <JobOpening />
      <JoinSection />
      <Apply />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
/* export const pageQuery = graphql`
  query CareerPage {
  }
` */
