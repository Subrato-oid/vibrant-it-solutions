import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import MobMenu from "./MobMenu"
import DeskMenu from "./DeskMenu"
import { Popover } from "@headlessui/react"
import _, { debounce } from "lodash"

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
          <div
            style={
              breakpoint.sm && open
                ? {
                    height: "100vh",
                    background:
                      "linear-gradient(157deg, #080F1F 22%, #093B9E 159.75%)",
                    overflow: "scroll",
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    inset: "0px",
                    zIndex: "1000",
                  }
                : {}
            }
          >
            <header>
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
                    paddingTop: "100px",
                  }}
                >
                  <img
                    src="/images/Homepage/dropdown1.png"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "45%",
                    }}
                  ></img>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: "1",
                      flexShrink: "0",
                      flexBasis: "1",
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
