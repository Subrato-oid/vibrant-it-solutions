import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

type LayoutProp = {
  children: React.ReactNode
}
const BaseLayout = ({ children }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<boolean>(false)

  return (
    <div
      id="main"
      style={mobileMenuActive ? { position: "fixed", inset: "0px" } : {}}
    >
      <Navbar setMobileMenuActive={setMobileMenuActive} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
