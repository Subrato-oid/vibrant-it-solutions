import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"
import Headroom from "react-headroom"
// import { Scrollbar } from "smooth-scrollbar-react"
// import { useLocation } from "@reach/router"
// import Scroll from "../components/locomotiveScroll"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}

const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<
  boolean | null
  >(null)

  // const location = useLocation()

  // const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      {/* <Scroll callbacks={location}/> */}
      <Headroom style={{ zIndex: "3" }}>
        <Navbar
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
        />
      </Headroom>
      <main
        id="main"
        className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"}`}
        style={mobileMenuActive ? {} : {}}
      >
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
