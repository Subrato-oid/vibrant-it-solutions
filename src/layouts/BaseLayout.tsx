import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}
const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<
  boolean | null
  >(null)

  return (
    <div
      id="main"
      className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"}`}
      style={mobileMenuActive ? {} : {}}
    >
      <Navbar
        mobileMenuActive={mobileMenuActive}
        setMobileMenuActive={setMobileMenuActive}
      />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
