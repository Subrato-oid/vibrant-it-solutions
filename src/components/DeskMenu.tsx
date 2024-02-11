/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
const DeskMenu = ({
  serviceMenuOpen,
  setServiceMenuOpen,
}: {
  serviceMenuOpen: boolean | null
  setServiceMenuOpen: React.Dispatch<React.SetStateAction<boolean | null>>
}): React.ReactElement => {
  const { header } = useCommon()

  return (
    <>
      <nav>
        <ul>
          {header.navItems!.map((el) => (
            <li
              key={`navitem-${el!.item}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              {el?.item === "Services" ? (
                <button
                  className="dropdown-button"
                  onMouseEnter={(e) => {
                    e.preventDefault()
                    if (!serviceMenuOpen) setServiceMenuOpen(true)
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    setServiceMenuOpen(!serviceMenuOpen)
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Services
                  <ChevronDownIcon
                    className={serviceMenuOpen! ? "rotate-down" : ""}
                    style={{ height: "18px", width: "18px" }}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <Link to={el?.link!}>{el?.item}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default DeskMenu
