import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import MobMenu from "./MobMenu"
import DeskMenu from "./DeskMenu"
import { Popover } from "@headlessui/react"

const Navbar = (): React.ReactElement => {
  const { header } = useCommon()

  const breakpoint = useBreakpoint()

  return (
    <Popover>
      {({ open }) => (
        <div
          style={
            breakpoint.sm && open
              ? {
                  height: "100vh",
                  background:
                    "linear-gradient(157deg, #080F1F 22%, #093B9E 159.75%)",
                  overflow: "hidden",
                }
              : {}
          }
        >
          <header>
            {breakpoint.sm ? (
              <Link to="/">
                <img
                  src={open ? header.Moblogo! : header.Weblogo!}
                  alt="Logo"
                />
              </Link>
            ) : (
              <Link to="/">
                <img src={header.Weblogo!} alt="Logo" />
              </Link>
            )}

            {!breakpoint.sm && <DeskMenu />}

            <div className="ham">
              <Popover.Button style={{ border: "none", background: "unset" }}>
                {!open ? (
                  <div className="menu">
                    <img src="/images/menu.svg" alt="" />
                  </div>
                ) : (
                  <div className="close">
                    <img src="/images/x-white.svg" alt="" />
                  </div>
                )}
              </Popover.Button>
            </div>
          </header>

          {breakpoint.sm && (
            <Popover.Panel
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <MobMenu open={open} />
            </Popover.Panel>
          )}
        </div>
      )}
    </Popover>
  )
}
export default Navbar
