import * as React from "react"
import "../styles/contact.css"
import ContactForm from "../components/ContactForm"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types

// Step 2: Define your Page
const ContactPage = (): React.ReactElement => {
  return <ContactPageTemplate />
}
export default ContactPage

// Step 3: Define your Page Template
export const ContactPageTemplate = (): React.ReactElement => {
  return (
    <BaseLayout>
      <ContactForm />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
/* export const pageQuery = graphql`
  query ContactPage {
  }
` */
