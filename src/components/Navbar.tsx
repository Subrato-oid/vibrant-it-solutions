import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import MobMenu from "./MobMenu"
import DeskMenu from "./DeskMenu"
import { Popover } from "@headlessui/react"
import _, { debounce } from "lodash"

export type LayoutBounds = {
  height?: number
  width?: number
  margin?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
  padding?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

export const calcauteLayoutBounds = (
  el: HTMLElement
): LayoutBounds | undefined => {
  const styles = window.getComputedStyle(el)
  return {
    height: Number.parseInt(styles.height.replace("px", "")),
    width: Number.parseInt(styles.width.replace("px", "")),
    margin: {
      left: Number.parseInt(styles.marginLeft.replace("px", "")),
      right: Number.parseInt(styles.marginRight.replace("px", "")),
      top: Number.parseInt(styles.marginTop.replace("px", "")),
      bottom: Number.parseInt(styles.marginBottom.replace("px", "")),
    },
    padding: {
      left: Number.parseInt(styles.paddingLeft.replace("px", "")),
      right: Number.parseInt(styles.paddingRight.replace("px", "")),
      top: Number.parseInt(styles.paddingTop.replace("px", "")),
      bottom: Number.parseInt(styles.paddingBottom.replace("px", "")),
    },
  }
}

const Navbar = ({
  setMobileMenuActive,
}: {
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement => {
  const { header, services } = useCommon()
  const breakpoint = useBreakpoint()
  const debouncedMouseLeave = debounce(() => {
    setServiceMenuOpen(false)
  }, 500)
  const headerRef = React.useRef<HTMLElement>(null)
  const [headerBounds, setHeaderBounds] = React.useState<LayoutBounds>({})

  const calculateBounds = (): void => {
    if (headerRef.current) {
      const bounds = calcauteLayoutBounds(headerRef.current)
      if (bounds) setHeaderBounds(bounds)
    }
  }

  React.useLayoutEffect(() => {
    calculateBounds()
  }, [])

  React.useEffect(() => {
    window.addEventListener("resize", calculateBounds)
    return () => {
      window.removeEventListener("resize", calculateBounds)
    }
  }, [])

  const [serviceMenuOpen, setServiceMenuOpen] = React.useState<boolean | null>(
    null
  )
  return (
    <Popover>
      {({ open }) => {
        React.useEffect(() => {
          setMobileMenuActive(open)
        }, [open])
        return (
          <div className={breakpoint.sm && open ? "mob-menu" : ""}>
            <header ref={headerRef}>
              <Link to="/">
                <img
                  src={
                    open && breakpoint.sm ? header.Moblogo! : header.Weblogo!
                  }
                  alt="Logo"
                />
              </Link>

              {!breakpoint.sm && (
                <DeskMenu
                  serviceMenuOpen={serviceMenuOpen}
                  setServiceMenuOpen={setServiceMenuOpen}
                />
              )}

              <Popover.Button as="div" className="ham">
                <img
                  className={"menu"}
                  style={{ width: "fit-content" }}
                  src={open ? "/images/x-white.svg" : "/images/menu.svg"}
                  alt=""
                />
              </Popover.Button>
            </header>

            {!breakpoint.sm && (
              <menu
                onMouseLeave={() => debouncedMouseLeave()}
                className={`dropdown-menu service-${serviceMenuOpen ?? "none"}`}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    paddingTop: `${
                      (headerBounds.height ?? 40) +
                      2 * (headerBounds.margin?.top ?? 28)
                    }px`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundImage: "url('/images/Homepage/dropdown1.png')",
                      flexGrow: "1",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "55%",
                    }}
                  >
                    {services.map((item, index) => (
                      <Link
                        to={`/services/${_.kebabCase(item)}`}
                        className="dropdown-item"
                        style={{ width: "100%", display: "inline-block" }}
                        key={index}
                      >
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>{item}</span>

                          <img
                            className="dropdown-arrow"
                            src="/images/down-right 1.svg"
                            alt="down-arrow"
                          />
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </menu>
            )}

            {breakpoint.sm && (
              <Popover.Panel
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  marginBottom: "5rem",
                }}
              >
                <MobMenu open={open} />
              </Popover.Panel>
            )}
          </div>
        )
      }}
    </Popover>
  )
}
export default Navbar
