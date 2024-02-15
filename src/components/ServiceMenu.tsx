import React, { type ReactElement } from "react"
import { Link } from "gatsby"
import _, { debounce } from "lodash"
import { type MenuProps } from "./Navbar"
import useCommon from "../hooks/useCommon"

export const ServiceMenu = ({
  menuOpen,
  setMenuOpen,
  headerBounds,
}: MenuProps): ReactElement => {
  const debouncedMouseLeave = debounce(() => {
    setMenuOpen(false)
  }, 500)
  const { services } = useCommon()
  return (
    <menu
      onMouseLeave={() => debouncedMouseLeave()}
      className={`dropdown-menu service-${menuOpen ?? "none"}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingTop: `${
            (headerBounds.height ?? 40) + 2 * (headerBounds.margin?.top ?? 28)
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
  )
}
