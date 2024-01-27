import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

type LayoutProp = {
  children: React.ReactNode
}
const BaseLayout = ({ children }: LayoutProp): React.ReactElement => {
  return (
    <div id="main">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
