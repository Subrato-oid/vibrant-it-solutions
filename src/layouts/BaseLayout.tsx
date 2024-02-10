import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}
const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<boolean>(false)

  return (
    <div
      id="main"
      className={pageName}
      style={mobileMenuActive ? { position: "fixed", inset: "0px" } : {}}
    >
      <Navbar setMobileMenuActive={setMobileMenuActive} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
