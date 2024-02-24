import * as React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/styles.scss"
import Headroom from "react-headroom"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
// import { type Scrollbar } from "smooth-scrollbar-react"
// import SmoothScrollbar from "smooth-scrollbar"

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

  // const scrollbarRef = React.useRef<typeof Scrollbar>(null)
  const headroomRef = React.useRef<Headroom>(null)

  // React.useEffect(() => {
  //     const scrollbar = scrollbarRef?.current;
  //     const headroom = headroomRef.current as Headroom;

  //     console.log(scrollbar);

  //     console.log(headroom);
  //     const handleScroll = () => {
  //         // Get the scroll position from Smooth Scrollbar
  //         const scrollY = scrollbar.tack.yAxis;

  //         // Manually trigger Headroom's pin/unpin based on scroll position
  //         if (scrollY > 100) {
  //             headroom.unpin();
  //         } else {
  //             headroom.pin();
  //         }
  //     };

  //     scrollbar?.addListener(handleScroll);

  //     return () => {
  //         scrollbar.removeListener(handleScroll);
  //     };
  // }, []);

  // const path = useLocation()

  // const containerRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [path.pathname])

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
    // <Scrollbar
    //   ref={scrollbarRef}
    //   damping={0.06}
    //   alwaysShowTracks
    //   style={{ height: "100vh" }}
    // >
    <>
      <Headroom style={{ zIndex: "3" }} ref={headroomRef}>
        <Navbar
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
          serviceMenuOpen={serviceMenuOpen}
          setServiceMenuOpen={setServiceMenuOpen}
        />
      </Headroom>
      <main
        id="main"
        className={`${pageName} mobile-menu-${mobileMenuActive ?? "none"} ${
          serviceMenuOpen && "blur-root"
        }`}
      >
        <div>{children}</div>
      </main>

      <Footer className={`${serviceMenuOpen && "blur-root"}`} />
      {/* </Scrollbar> */}
    </>
  )
}

export default BaseLayout
