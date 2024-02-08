import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import MobMenu from "./MobMenu"
import DeskMenu from "./DeskMenu"
import { Popover } from "@headlessui/react"

const Navbar = ({
  setMobileMenuActive,
}: {
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement => {
  const { header } = useCommon()
  const breakpoint = useBreakpoint()

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

              {!breakpoint.sm && <DeskMenu />}

              <Popover.Button as="div" className="ham">
                <img
                  className={"menu"}
                  style={{ width: "fit-content" }}
                  src={open ? "/images/x-white.svg" : "/images/menu.svg"}
                  alt=""
                />
              </Popover.Button>
            </header>

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
