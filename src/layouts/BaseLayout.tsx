import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"
import Headroom from "react-headroom"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import type LocomotiveScroll from "locomotive-scroll"
import { useLocation } from "@reach/router"

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
  const containerRef = React.useRef(null)
  const headroomRef = React.useRef<Headroom>(null)
  const scrollRef = React.useRef<LocomotiveScroll>(null)
  const pageLocation = useLocation()

  // const { scroll } = useLocomotiveScroll()

  const [isPinned, setIsPinned] = React.useState(true) // Initially pinned

  const handleTogglePin = (): void => {
    setIsPinned(!isPinned)
    headroomRef.current?.setState({
      state: "pinned",
      className: "headroom headroom--pinned",
      translateY: 100, // Toggle the pinned state
    })
  }

  React.useEffect(() => {
    if (headroomRef.current) {
      // Access scroll position
      console.log(headroomRef.current.state)
    }
  }, [headroomRef.current?.state])

  return breakpoint.sm ? (
    <LocomotiveScrollProvider
      watch={[pageLocation]}
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
      scrollRef={scrollRef}
    >
      <main
        id="main"
        data-scroll-container
        ref={containerRef}
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
    </LocomotiveScrollProvider>
  ) : (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[pageLocation]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Headroom
          style={{ zIndex: "3" }}
          ref={headroomRef}
          downTolerance={isPinned ? 100 : 0}
        >
          <Navbar
            mobileMenuActive={mobileMenuActive}
            setMobileMenuActive={setMobileMenuActive}
            serviceMenuOpen={serviceMenuOpen}
            setServiceMenuOpen={setServiceMenuOpen}
          />
        </Headroom>

        <main
          id="main"
          data-scroll
          className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"} ${
            serviceMenuOpen && "blur-root"
          }`}
        >
          <div>{children}</div>
        </main>
        <button onClick={handleTogglePin}>Toggle Pin</button>

        <Footer className={`${serviceMenuOpen && "blur-root"}`} />
      </div>
    </LocomotiveScrollProvider>
  )
}

export default BaseLayout
