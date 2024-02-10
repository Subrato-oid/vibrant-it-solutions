import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useLocation } from "@reach/router"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}
const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<boolean>(false)
  const location = useLocation()
  console.log(location)

  return (
    <div
      id="main"
      className={pageName}
      style={mobileMenuActive ? { position: "fixed", inset: "0px" } : {}}
    >
      {location.pathname.includes("/services/") ? (
        <div id="blue-bg">
          <img src="/images/blue-tint/backdrop.png" alt="" />
        </div>
      ) : location.pathname.includes("/works/") ? (
        <div id="blue-bg">
          <img src="/images/blue-tint/Ellipse 11.svg" alt="" />
        </div>
      ) : (
        <>
          <div id="blue-bg">
            <img src="/images/blue-tint/Ellipse 11.svg" alt="" />
          </div>
          <div id="blue-bgM">
            <img src="/images/blue-tint/R-backdropM.png" alt="" />
          </div>
        </>
      )}

      <Navbar setMobileMenuActive={setMobileMenuActive} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
