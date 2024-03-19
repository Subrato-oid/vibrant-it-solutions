import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"
import Headroom from "react-headroom"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Scroll from "../components/LocomotiveScroll"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}

const BaseLayout = ({ children, pageName }: LayoutProp): React.ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState<
  boolean | null
  >(null)
  const [serviceMenuOpen, setServiceMenuOpen] = React.useState<boolean | null>(
    null
  )

  const breakpoint = useBreakpoint()
  const headroomRef = React.useRef(null)

  return breakpoint.sm ? (
    <main
      id="main"
      className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"}`}
      style={mobileMenuActive ? {} : {}}
    >
      <Headroom style={{ zIndex: "3" }}>
        <Navbar
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
          serviceMenuOpen={serviceMenuOpen}
          setServiceMenuOpen={setServiceMenuOpen}
        />
      </Headroom>
      <div>{children}</div>
      <Footer />
    </main>
  ) : (
    <>
      {typeof window !== "undefined" && <Scroll callbacks={location} />}

      <div data-scroll-section id="blue-tint"></div>
      <Headroom style={{ zIndex: "3" }} ref={headroomRef} disableInlineStyles>
        <Navbar
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
          serviceMenuOpen={serviceMenuOpen}
          setServiceMenuOpen={setServiceMenuOpen}
        />
      </Headroom>
      <main
        id="main"
        data-scroll-section
        className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"} ${
          serviceMenuOpen && "blur-root"
        }`}
      >
        <div>{children}</div>
      </main>

      <Footer className={`${serviceMenuOpen && "blur-root"}`} />
    </>
  )
}

export default BaseLayout
