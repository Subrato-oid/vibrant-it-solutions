import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"
import Headroom from "react-headroom"
// import { Scrollbar } from "smooth-scrollbar-react"
import { useLocation } from "@reach/router"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}

const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<
  boolean | null
  >(null)

  const pathname = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname.pathname])
  return (
    <div
      id="main"
      className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"}`}
      style={mobileMenuActive ? {} : {}}
    >
      <Headroom style={{ zIndex: "3" }}>
        <Navbar
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
        />
      </Headroom>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
